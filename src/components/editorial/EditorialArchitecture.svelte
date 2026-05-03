<script>
  import { onMount } from "svelte";

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
      id: "gateway",
      label: "API Gateway",
      sub: "YARP",
      x: 250,
      y: 22,
      w: 200,
      h: 44,
      type: "gateway",
    },
    {
      id: "hospital",
      label: "Hospital Service",
      sub: "Port 5002",
      x: 20,
      y: 152,
      w: 155,
      h: 44,
      type: "service",
    },
    {
      id: "patient",
      label: "Patient Service",
      sub: "Port 5004",
      x: 270,
      y: 152,
      w: 160,
      h: 44,
      type: "service",
    },
    {
      id: "hmo",
      label: "HMO Service",
      sub: "Port 5006",
      x: 525,
      y: 152,
      w: 155,
      h: 44,
      type: "service",
    },
    {
      id: "bus",
      label: "Message Bus",
      sub: "RabbitMQ + MassTransit",
      x: 200,
      y: 282,
      w: 300,
      h: 44,
      type: "bus",
    },
    {
      id: "notif",
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
    { x1: 350, y1: 66, x2: 97, y2: 152 }, // gateway → hospital
    { x1: 350, y1: 66, x2: 350, y2: 152 }, // gateway → patient
    { x1: 350, y1: 66, x2: 602, y2: 152 }, // gateway → hmo
    { x1: 97, y1: 196, x2: 280, y2: 282 }, // hospital → bus
    { x1: 350, y1: 196, x2: 350, y2: 282 }, // patient → bus
    { x1: 602, y1: 196, x2: 420, y2: 282 }, // hmo → bus
    { x1: 350, y1: 326, x2: 350, y2: 380 }, // bus → notif
  ];
</script>

<section class="ed-arch">
  <div class="ed-arch-inner">
    <div class="ed-section-kicker">§ 03 — System Design</div>

    <div class="ed-arch-wrap">
      <svg
        viewBox="0 0 700 440"
        xmlns="http://www.w3.org/2000/svg"
        class="ed-arch-svg"
        aria-label="Event-driven architecture diagram"
      >
        <!-- Edges -->
        {#each edges as edge, i}
          <line
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke={i === activeEdge ? "var(--accent)" : "var(--rule)"}
            stroke-width={i === activeEdge ? "1.5" : "1"}
            stroke-dasharray="5 4"
            class="arch-edge"
            style="transition: stroke 0.4s, stroke-width 0.4s;"
          />
          {#if i === activeEdge}
            <circle r="4" fill="var(--accent)" opacity="0.9">
              <animateMotion dur="1.1s" repeatCount="indefinite">
                <mpath href="#edge-path-{i}" />
              </animateMotion>
            </circle>
            <path
              id="edge-path-{i}"
              d="M {edge.x1} {edge.y1} L {edge.x2} {edge.y2}"
              fill="none"
              stroke="none"
            />
          {/if}
        {/each}

        <!-- Nodes -->
        {#each nodes as node}
          <g>
            <rect
              x={node.x}
              y={node.y}
              width={node.w}
              height={node.h}
              rx="3"
              fill="var(--panel)"
              stroke={node.type === "bus" ? "var(--accent)" : "var(--rule)"}
              stroke-width={node.type === "bus" ? "1.5" : "1"}
            />
            <text
              x={node.x + node.w / 2}
              y={node.y + 17}
              text-anchor="middle"
              font-family="Inter, sans-serif"
              font-size="11"
              font-weight="600"
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

      <p class="ed-arch-caption">
        Figure 01 — Event-driven architecture · HealthBridge microservices
      </p>
    </div>
  </div>
</section>

<style>
  .ed-arch {
    padding: 4rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ed-arch-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .ed-section-kicker {
    font-family: "Inter", sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: 2rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--rule);
  }

  .ed-arch-wrap {
    max-width: 720px;
    margin: 0 auto;
  }

  .ed-arch-svg {
    width: 100%;
    height: auto;
    display: block;
  }

  .ed-arch-caption {
    font-family: "Source Serif 4", serif;
    font-size: 0.78rem;
    font-style: italic;
    color: var(--dim);
    text-align: center;
    margin-top: 1rem;
  }
</style>
