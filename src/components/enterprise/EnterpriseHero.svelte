<script>
  import { onMount } from "svelte";
  import { stats } from "$lib/data/portfolio.js";

  let { dark = false, onCaseStudy = () => {} } = $props();

  const streamEndpoints = [
    { method: "POST", path: "/api/appointments", code: 201 },
    { method: "GET", path: "/api/patients/384", code: 200 },
    { method: "POST", path: "/api/auth/login", code: 200 },
    { method: "GET", path: "/api/records", code: 200 },
    { method: "POST", path: "/api/prescriptions", code: 201 },
    { method: "GET", path: "/api/patients/512", code: 200 },
    { method: "POST", path: "/api/hmo/authorisations", code: 201 },
  ];

  let requests = $state([]);
  let idCounter = 0;

  function newRequest() {
    const ep =
      streamEndpoints[Math.floor(Math.random() * streamEndpoints.length)];
    const ms = Math.floor(Math.random() * 180 + 40);
    return { ...ep, ms, id: ++idCounter };
  }

  onMount(() => {
    // Seed with a few initial rows
    requests = Array.from({ length: 4 }, () => newRequest());

    const timer = setInterval(() => {
      requests = [newRequest(), ...requests].slice(0, 12);
    }, 700);

    return () => clearInterval(timer);
  });

  function methodColor(m) {
    return m === "POST" ? "var(--accent)" : "var(--green)";
  }

  function codeColor(c) {
    return c >= 200 && c < 300 ? "var(--green)" : "var(--accent)";
  }

  const heroStats = [
    { value: stats.apis, label: "APIs shipped" },
    { value: stats.years, label: "Years exp" },
    { value: stats.stack, label: "Primary stack" },
    { value: "Remote", label: "Available" },
  ];
</script>

<section class="ent-hero" class:dark>
  <div class="ent-hero-inner">
    <!-- Left -->
    <div class="ent-hero-left">
      <div class="ent-avail-pill">
        <span class="ent-avail-dot"></span>
        Available for new opportunities
      </div>

      <h1 class="ent-headline">
        Backend systems<br />
        <em>built to scale.</em>
      </h1>

      <p class="ent-desc">
        I'm a .NET / C# engineer based in Lagos. I build cloud-native,
        event-driven backends — microservices that are easy to extend, APIs that
        are a pleasure to consume, and systems that hold up under load.
      </p>

      <div class="ent-ctas">
        <button class="ent-cta-primary" onclick={onCaseStudy}>
          Read HealthBridge case study →
        </button>
        <a href="/Lucky_Samuel_Resume.pdf" download class="ent-cta-secondary">
          Download CV
        </a>
      </div>

      <div class="ent-stat-row">
        {#each heroStats as s}
          <div class="ent-stat-pill">
            <span class="ent-stat-val">{s.value}</span>
            <span class="ent-stat-label">{s.label}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Right — live stream -->
    <div class="ent-hero-right">
      <div class="ent-stream-card">
        <div class="ent-stream-header">
          <span class="ent-stream-title">Live Request Stream</span>
          <span class="ent-stream-live">
            <span class="ent-stream-dot"></span> LIVE
          </span>
        </div>
        <div class="ent-stream-body">
          {#each requests as req (req.id)}
            <div class="ent-stream-row">
              <span
                class="ent-req-method"
                style="color: {methodColor(req.method)}"
              >
                {req.method}
              </span>
              <span class="ent-req-path">{req.path}</span>
              <span class="ent-req-code" style="color: {codeColor(req.code)}"
                >{req.code}</span
              >
              <span class="ent-req-ms">{req.ms}ms</span>
            </div>
          {/each}
        </div>
        <div class="ent-stream-footer">
          HealthBridge · {requests.length} requests
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .ent-hero {
    padding: 4rem 2rem 3rem;
    background: var(--hero-grad);
  }

  .ent-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
  }

  @media (min-width: 960px) {
    .ent-hero-inner {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  .ent-avail-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: "Inter", sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--green);
    background: var(--green-soft);
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid var(--green);
    margin-bottom: 1.5rem;
    opacity: 0.9;
  }

  .ent-avail-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--green);
    animation: pulse-dot 1.8s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.4);
    }
  }

  .ent-headline {
    font-family: "Inter", sans-serif;
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    font-weight: 800;
    line-height: 1.1;
    color: var(--ink);
    margin: 0 0 1.25rem;
    letter-spacing: -0.02em;
  }

  .ent-headline em {
    font-style: italic;
    color: var(--accent);
  }

  .ent-desc {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text);
    max-width: 44ch;
    margin: 0 0 2rem;
  }

  .ent-ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  .ent-cta-primary {
    font-family: "Inter", sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    background: var(--accent);
    color: #fff;
    padding: 0.7rem 1.4rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition:
      opacity 0.18s,
      transform 0.12s;
    box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
  }

  .ent-cta-primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  .ent-cta-secondary {
    font-family: "Inter", sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    padding: 0.7rem 1.4rem;
    border: 1.5px solid var(--rule);
    border-radius: 8px;
    color: var(--text);
    text-decoration: none;
    transition:
      border-color 0.18s,
      color 0.18s;
    display: inline-block;
  }

  .ent-cta-secondary:hover {
    border-color: var(--ink);
    color: var(--ink);
  }

  .ent-stat-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .ent-stat-pill {
    display: flex;
    flex-direction: column;
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 10px;
    padding: 0.5rem 0.9rem;
    min-width: 70px;
  }

  .ent-stat-val {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: var(--ink);
    line-height: 1.2;
  }

  .ent-stat-label {
    font-family: "Inter", sans-serif;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--dim);
    margin-top: 1px;
  }

  /* Stream card */
  .ent-stream-card {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  }

  .ent-stream-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.85rem 1.25rem;
    border-bottom: 1px solid var(--rule);
    background: var(--bg);
  }

  .ent-stream-title {
    font-family: "Inter", sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--ink);
  }

  .ent-stream-live {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--green);
    letter-spacing: 0.1em;
  }

  .ent-stream-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    animation: pulse-dot 1.2s ease-in-out infinite;
  }

  .ent-stream-body {
    padding: 0.5rem 0;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    max-height: 260px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .ent-stream-row {
    display: grid;
    grid-template-columns: 46px 1fr 42px 48px;
    gap: 0.5rem;
    align-items: center;
    padding: 0.35rem 1.25rem;
    border-bottom: 1px solid var(--rule);
    transition: background 0.15s;
    animation: row-in 0.25s ease;
  }

  @keyframes row-in {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ent-stream-row:last-child {
    border-bottom: none;
  }
  .ent-stream-row:hover {
    background: var(--bg);
  }

  .ent-req-method {
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  .ent-req-path {
    color: var(--text);
    font-size: 0.72rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ent-req-code {
    font-size: 0.72rem;
    font-weight: 600;
    text-align: right;
  }

  .ent-req-ms {
    color: var(--dim);
    font-size: 0.68rem;
    text-align: right;
  }

  .ent-stream-footer {
    padding: 0.6rem 1.25rem;
    font-family: "Inter", sans-serif;
    font-size: 0.68rem;
    color: var(--dim);
    background: var(--bg);
    border-top: 1px solid var(--rule);
  }
</style>
