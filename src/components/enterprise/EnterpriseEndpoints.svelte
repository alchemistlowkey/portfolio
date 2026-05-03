<script>
  import { endpoints } from '$lib/data/portfolio.js';

  function methodBg(m) {
    if (m === 'POST') return 'rgba(37,99,235,0.1)';
    if (m === 'GET') return 'rgba(5,150,105,0.1)';
    return 'rgba(100,116,139,0.1)';
  }

  function methodColor(m) {
    if (m === 'POST') return 'var(--accent)';
    if (m === 'GET') return 'var(--green)';
    return 'var(--dim)';
  }
</script>

<section class="ent-endpoints">
  <div class="ent-endpoints-inner">
    <div class="ent-section-header">
      <span class="ent-section-kicker">API Surface</span>
      <h2 class="ent-section-title">Key endpoints</h2>
    </div>

    <div class="ent-endpoints-card">
      <div class="ent-ep-header-row">
        <span>Method</span>
        <span>Endpoint · Description</span>
        <span>Response</span>
      </div>
      {#each endpoints as ep}
        <div class="ent-ep-row">
          <span
            class="ent-method-badge"
            style="background: {methodBg(ep.method)}; color: {methodColor(ep.method)};"
          >{ep.method}</span>
          <div class="ent-ep-path-wrap">
            <span class="ent-ep-path">{ep.path}</span>
            <span class="ent-ep-desc">{ep.desc}</span>
          </div>
          <span class="ent-ep-status">{ep.status}</span>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .ent-endpoints {
    padding: 5rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ent-endpoints-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .ent-section-header { margin-bottom: 2rem; }

  .ent-section-kicker {
    display: inline-block;
    font-family: 'Inter', sans-serif;
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
    font-family: 'Inter', sans-serif;
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800;
    color: var(--ink);
    margin: 0;
    letter-spacing: -0.02em;
  }

  .ent-endpoints-card {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 16px;
    overflow: hidden;
  }

  .ent-ep-header-row {
    display: grid;
    grid-template-columns: 80px 1fr 130px;
    gap: 1rem;
    padding: 0.65rem 1.25rem;
    background: var(--bg);
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--dim);
    border-bottom: 1px solid var(--rule);
  }

  .ent-ep-row {
    display: grid;
    grid-template-columns: 80px 1fr 130px;
    gap: 1rem;
    align-items: center;
    padding: 0.9rem 1.25rem;
    border-bottom: 1px solid var(--rule);
    transition: background 0.15s;
  }

  .ent-ep-row:last-child { border-bottom: none; }
  .ent-ep-row:hover { background: var(--bg); }

  .ent-method-badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 3px 10px;
    border-radius: 6px;
    display: inline-block;
    text-align: center;
  }

  .ent-ep-path-wrap {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .ent-ep-path {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.8rem;
    color: var(--ink);
  }

  .ent-ep-desc {
    font-family: 'Inter', sans-serif;
    font-size: 0.78rem;
    color: var(--dim);
  }

  .ent-ep-status {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: var(--green);
    font-weight: 600;
  }

  @media (max-width: 640px) {
    .ent-ep-header-row,
    .ent-ep-row {
      grid-template-columns: 60px 1fr;
    }
    .ent-ep-row > :last-child,
    .ent-ep-header-row > :last-child {
      display: none;
    }
  }
</style>
