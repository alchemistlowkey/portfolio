<script>
  import { onMount } from "svelte";

  let { dark = false, onCaseStudy = () => {} } = $props();

  const reqPhases = [
    { label: "QUEUED", sub: "POST /api/appointments", color: "var(--dim)" },
    {
      label: "CONNECTING…",
      sub: "Resolving tenant + auth",
      color: "var(--accent)",
      pulse: true,
    },
    {
      label: "201 CREATED",
      sub: '{ id, status: "Booked" }',
      color: "var(--green)",
    },
    { label: "LOGGED", sub: "AppointmentBooked → Bus", color: "var(--accent)" },
  ];

  let phase = $state(0);

  onMount(() => {
    const timer = setInterval(() => {
      phase = (phase + 1) % reqPhases.length;
    }, 1600);
    return () => clearInterval(timer);
  });

  let current = $derived(reqPhases[phase]);
</script>

<section class="ed-hero" class:dark>
  <div class="ed-hero-inner">
    <!-- Left column -->
    <div class="ed-hero-left">
      <p class="ed-kicker">Issue Nº 26 · Backend Engineer · Lagos</p>
      <h1 class="ed-headline">
        Quiet,<br />
        <em>well‑built</em><br />
        backends.
      </h1>
      <p class="ed-blurb">
        Lucky Samuel builds .NET backends with intention — clean architecture,
        vertical slices, and APIs that teams actually enjoy consuming. Available
        for new engagements.
      </p>
      <div class="ed-ctas">
        <button class="ed-cta-primary" onclick={onCaseStudy}>
          Read HealthBridge case study →
        </button>
        <a
          href="/static/Lucky_Samuel_Resume.pdf"
          download
          class="ed-cta-secondary"
        >
          Download CV
        </a>
      </div>
    </div>

    <!-- Right column — request preview -->
    <div class="ed-hero-right">
      <div class="req-panel">
        <div class="req-panel-header">
          <span class="req-method">POST</span>
          <span class="req-path">/api/appointments</span>
          <span class="req-dot" class:pulse={current.pulse}></span>
        </div>
        <div class="req-phase" style="color: {current.color};">
          {current.label}
        </div>
        <div class="req-sub">{current.sub}</div>
        <div class="req-bars">
          {#each reqPhases as p, i}
            <div class="req-bar" class:req-bar-active={i === phase}></div>
          {/each}
        </div>
        <div class="req-footer">
          <span>HealthBridge · Appointment Service · Port 5007</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .ed-hero {
    padding: 5rem 2rem 4rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .ed-hero-inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 900px) {
    .ed-hero-inner {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  .ed-kicker {
    font-family: "Inter", sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    margin: 0 0 1.25rem;
  }

  .ed-headline {
    font-family: "Source Serif 4", serif;
    font-size: clamp(3rem, 7vw, 5.5rem);
    font-weight: 400;
    line-height: 1.08;
    letter-spacing: -0.025em;
    color: var(--ink);
    margin: 0 0 1.5rem;
  }

  .ed-headline em {
    font-style: italic;
    color: var(--accent);
  }

  .ed-blurb {
    font-family: "Source Serif 4", serif;
    font-size: 1.1rem;
    line-height: 1.75;
    color: var(--text);
    max-width: 42ch;
    margin: 0 0 2rem;
  }

  .ed-ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .ed-cta-primary {
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    background: var(--accent);
    color: #fff;
    padding: 0.65rem 1.25rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: opacity 0.18s;
    text-decoration: none;
    display: inline-block;
  }

  .ed-cta-primary:hover {
    opacity: 0.85;
  }

  .ed-cta-secondary {
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    padding: 0.65rem 1.25rem;
    border: 1px solid var(--rule);
    border-radius: 2px;
    color: var(--text);
    text-decoration: none;
    transition:
      border-color 0.18s,
      color 0.18s;
    display: inline-block;
  }

  .ed-cta-secondary:hover {
    border-color: var(--ink);
    color: var(--ink);
  }

  /* Request preview panel */
  .req-panel {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 4px;
    overflow: hidden;
    font-family: "JetBrains Mono", monospace;
  }

  .req-panel-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: var(--bg-deep);
    border-bottom: 1px solid var(--rule);
  }

  .req-method {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: var(--accent);
    background: var(--accent-soft);
    padding: 2px 8px;
    border-radius: 2px;
  }

  .req-path {
    font-size: 0.78rem;
    color: var(--ink);
    flex: 1;
  }

  .req-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--dim);
    transition: background 0.3s;
    flex-shrink: 0;
  }

  .req-dot.pulse {
    background: var(--green);
    animation: req-pulse 0.8s ease-in-out infinite;
  }

  @keyframes req-pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.5);
    }
  }

  .req-phase {
    padding: 1.25rem 1rem 0.25rem;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    transition: color 0.4s;
  }

  .req-sub {
    padding: 0 1rem 1.25rem;
    font-size: 0.75rem;
    color: var(--dim);
  }

  .req-bars {
    display: flex;
    gap: 4px;
    padding: 0 1rem 1rem;
  }

  .req-bar {
    flex: 1;
    height: 3px;
    background: var(--rule);
    border-radius: 2px;
    transition: background 0.4s;
  }

  .req-bar-active {
    background: var(--accent);
  }

  .req-footer {
    padding: 0.6rem 1rem;
    font-size: 0.68rem;
    color: var(--dim);
    border-top: 1px solid var(--rule);
    background: var(--bg-deep);
  }
</style>
