<script>
  import { onMount } from "svelte";

  let { dark = false } = $props();
  let activeEdge = $state(0);
  const edgeCount = 7;

  onMount(() => {
    const timer = setInterval(() => {
      activeEdge = (activeEdge + 1) % edgeCount;
    }, 1100);
    return () => clearInterval(timer);
  });

  const nodes = [
    {
      label: "API Gateway",
      sub: "YARP",
      x: 250,
      y: 22,
      w: 200,
      h: 44,
      type: "gateway",
    },
    {
      label: "Hospital Service",
      sub: "Port 5002",
      x: 20,
      y: 152,
      w: 155,
      h: 44,
      type: "service",
    },
    {
      label: "Patient Service",
      sub: "Port 5004",
      x: 270,
      y: 152,
      w: 160,
      h: 44,
      type: "service",
    },
    {
      label: "HMO Service",
      sub: "Port 5006",
      x: 525,
      y: 152,
      w: 155,
      h: 44,
      type: "service",
    },
    {
      label: "Message Bus",
      sub: "RabbitMQ + MassTransit",
      x: 200,
      y: 282,
      w: 300,
      h: 44,
      type: "bus",
    },
    {
      label: "Notification Service",
      sub: "Email · SMS · Push",
      x: 200,
      y: 380,
      w: 300,
      h: 44,
      type: "notif",
    },
  ];

  const edges = [
    { x1: 350, y1: 66, x2: 97, y2: 152 },
    { x1: 350, y1: 66, x2: 350, y2: 152 },
    { x1: 350, y1: 66, x2: 602, y2: 152 },
    { x1: 97, y1: 196, x2: 280, y2: 282 },
    { x1: 350, y1: 196, x2: 350, y2: 282 },
    { x1: 602, y1: 196, x2: 420, y2: 282 },
    { x1: 350, y1: 326, x2: 350, y2: 380 },
  ];
</script>

<section class="ent-arch" class:dark id="about">
  <div class="ent-arch-inner">
    <div class="ent-section-header">
      <span class="ent-section-kicker">Architecture</span>
      <h2 class="ent-section-title">Event-driven microservices</h2>
      <p class="ent-section-desc">
        HealthBridge uses a microservices topology with Vertical Slice
        Architecture and CQRS + MediatR inside each service. Inter-service
        communication is asynchronous via RabbitMQ and MassTransit.
      </p>
    </div>

    <div class="ent-arch-diagram">
      <svg
        viewBox="0 0 700 440"
        xmlns="http://www.w3.org/2000/svg"
        class="ent-arch-svg"
        aria-label="Event-driven architecture diagram"
      >
        {#each edges as edge, i}
          {@const isActive = i === activeEdge}
          <line
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke={isActive ? "var(--accent)" : "rgba(148,163,184,0.3)"}
            stroke-width={isActive ? "2" : "1"}
            stroke-dasharray={isActive ? "6 3" : "4 4"}
            style="transition: stroke 0.4s, stroke-width 0.3s;"
          />
          {#if isActive}
            <circle r="5" fill="var(--accent)" opacity="0.9">
              <animateMotion dur="1.1s" repeatCount="indefinite">
                <mpath href="#ent-edge-{i}" />
              </animateMotion>
            </circle>
            <path
              id="ent-edge-{i}"
              d="M {edge.x1} {edge.y1} L {edge.x2} {edge.y2}"
              fill="none"
              stroke="none"
            />
          {/if}
        {/each}

        {#each nodes as node}
          <g>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx="8"
              fill={node.type === "bus"
                ? "rgba(37,99,235,0.12)"
                : "rgba(255,255,255,0.07)"}
              stroke={node.type === "bus"
                ? "var(--accent)"
                : "rgba(148,163,184,0.3)"}
              stroke-width={node.type === "bus" ? "1.5" : "1"}
            />
            <text
              x={node.x + node.w / 2}
              y={node.y + 17}
              text-anchor="middle"
              font-family="Inter, sans-serif"
              font-size="11"
              font-weight="700"
              fill="var(--ink)">{node.label}</text
            >
            <text
              x={node.x + node.w / 2}
              y={node.y + 33}
              text-anchor="middle"
              font-family="JetBrains Mono, monospace"
              font-size="9"
              fill="var(--dim)">{node.sub}</text
            >
          </g>
        {/each}
      </svg>
    </div>
  </div>
</section>

<style>
  .ent-arch {
    padding: 5rem 2rem;
    background: var(--bg-deep);
    border-top: 1px solid var(--rule);
  }

  .ent-arch-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .ent-section-header {
    margin-bottom: 2.5rem;
  }

  .ent-section-kicker {
    display: inline-block;
    font-family: "Inter", sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--accent);
    background: var(--accent-soft);
    padding: 3px 10px;
    border-radius: 999px;
    margin-bottom: 0.75rem;
  }

  .ent-section-title {
    font-family: "Inter", sans-serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800;
    color: var(--ink);
    margin: 0 0 0.5rem;
    letter-spacing: -0.02em;
  }

  .ent-section-desc {
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--dim);
    max-width: 60ch;
    margin: 0;
  }

  .ent-arch-diagram {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .dark .ent-arch-diagram {
    background: rgba(255, 255, 255, 0.03);
  }

  .ent-arch-svg {
    width: 100%;
    height: auto;
    display: block;
  }
</style>
