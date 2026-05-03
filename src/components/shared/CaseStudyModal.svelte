<script>
  import { onMount } from 'svelte';
  import { healthbridgeCase } from '$lib/data/portfolio.js';

  let { open = $bindable(false), theme = 'default' } = $props();

  let activeTab = $state('overview');
  const tabs = ['overview', 'architecture', 'api', 'decisions', 'stack'];

  function close() { open = false; }

  function onKeydown(e) {
    if (e.key === 'Escape') close();
  }

  function methodColor(method) {
    if (method === 'POST') return '#2563eb';
    if (method === 'GET') return '#059669';
    if (method === 'PUT') return '#d97706';
    if (method === 'DELETE') return '#dc2626';
    return '#64748b';
  }

  function statusColor(status) {
    if (status === 'Live') return '#059669';
    if (status === 'In Progress') return '#d97706';
    return '#64748b';
  }

  const d = healthbridgeCase;
</script>

<svelte:window onkeydown={onKeydown} />

{#if open}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="overlay" onclick={(e) => e.target === e.currentTarget && close()}>
    <div class="modal" class:theme-editorial={theme === 'editorial'} class:theme-enterprise={theme === 'enterprise'}>
      <!-- Header -->
      <div class="modal-header">
        <div class="header-left">
          <span class="badge">Case Study</span>
          <h2 class="modal-title">HealthBridge</h2>
          <p class="modal-sub">Multi-Tenant Healthcare Platform for Nigeria</p>
        </div>
        <button class="close-btn" onclick={close} aria-label="Close modal">✕</button>
      </div>

      <!-- Tabs -->
      <div class="tab-bar">
        {#each tabs as tab}
          <button
            class="tab-btn"
            class:tab-active={activeTab === tab}
            onclick={() => (activeTab = tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        {/each}
      </div>

      <!-- Body -->
      <div class="modal-body">
        {#if activeTab === 'overview'}
          <div class="section-grid">
            <div>
              <p class="prose">{d.overview.description}</p>
              <p class="prose mt-3">{d.overview.connects}</p>
              <div class="metrics-row mt-6">
                {#each d.overview.metrics as m}
                  <div class="metric-box">
                    <div class="metric-val">{m.value}</div>
                    <div class="metric-label">{m.label}</div>
                  </div>
                {/each}
              </div>
            </div>
            <div>
              <h4 class="section-heading">Key Features</h4>
              <ul class="feature-list">
                {#each d.overview.features as f}
                  <li>
                    <span class="feature-name">{f.name}</span>
                    <span class="feature-desc">{f.desc}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>

        {:else if activeTab === 'architecture'}
          <p class="prose mb-6">{d.architecture.description}</p>
          <h4 class="section-heading">MediatR Pipeline</h4>
          <div class="pipeline-row mb-8">
            {#each d.architecture.pipeline as step, i}
              <span class="pipe-step">{step}</span>
              {#if i < d.architecture.pipeline.length - 1}
                <span class="pipe-arrow">→</span>
              {/if}
            {/each}
          </div>
          <h4 class="section-heading">Services</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Service</th><th>Responsibility</th><th>Port</th><th>Status</th></tr></thead>
              <tbody>
                {#each d.architecture.services as s}
                  <tr>
                    <td class="font-mono font-semibold">{s.name}</td>
                    <td>{s.responsibility}</td>
                    <td class="font-mono text-sm">{s.port}</td>
                    <td><span class="status-badge" style="background: {statusColor(s.status)}22; color: {statusColor(s.status)}">{s.status}</span></td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
          <h4 class="section-heading mt-8">Domain Events</h4>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Event</th><th>Publisher</th><th>Consumers</th></tr></thead>
              <tbody>
                {#each d.architecture.domainEvents as ev}
                  <tr>
                    <td class="font-mono">{ev.event}</td>
                    <td>{ev.publisher}</td>
                    <td class="dim">{ev.consumers}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>

        {:else if activeTab === 'api'}
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Method</th><th>Endpoint</th><th>Description</th><th>Code</th></tr></thead>
              <tbody>
                {#each d.api as ep}
                  <tr>
                    <td>
                      <span class="method-badge" style="background: {methodColor(ep.method)}22; color: {methodColor(ep.method)}">
                        {ep.method}
                      </span>
                    </td>
                    <td class="font-mono text-sm">{ep.path}</td>
                    <td class="dim">{ep.desc}</td>
                    <td class="font-mono text-sm">{ep.code}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>

        {:else if activeTab === 'decisions'}
          <div class="decisions-list">
            {#each d.decisions as dec, i}
              <div class="decision-card">
                <div class="decision-num">0{i + 1}</div>
                <div>
                  <h4 class="decision-title">{dec.title}</h4>
                  <p class="prose mt-2">{dec.summary}</p>
                  <div class="why-block mt-3">
                    <span class="why-label">Why:</span> {dec.why}
                  </div>
                </div>
              </div>
            {/each}
          </div>

        {:else if activeTab === 'stack'}
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>Concern</th><th>Technology</th></tr></thead>
              <tbody>
                {#each d.stack as s}
                  <tr>
                    <td class="dim">{s.concern}</td>
                    <td class="font-mono font-medium">{s.tech}</td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    z-index: 9000;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0;
  }

  @media (min-width: 640px) {
    .overlay { align-items: center; padding: 1.5rem; }
  }

  .modal {
    --m-bg: var(--panel, #1a1f2e);
    --m-bg-deep: var(--bg-deep, #0d1117);
    --m-ink: var(--ink, #e8eaf0);
    --m-text: var(--text, #a8b3cc);
    --m-dim: var(--dim, #6b7a99);
    --m-rule: var(--rule, rgba(255,255,255,0.08));
    --m-accent: var(--accent, #c0c1ff);
    --m-green: var(--green, #4edea3);
    background: var(--m-bg);
    color: var(--m-text);
    width: 100%;
    max-width: 900px;
    max-height: 90vh;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 -8px 48px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: 640px) {
    .modal { border-radius: 1rem; }
  }

  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.5rem 1.75rem 1rem;
    border-bottom: 1px solid var(--m-rule);
    flex-shrink: 0;
  }

  .badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 999px;
    background: rgba(192, 193, 255, 0.12);
    color: var(--m-accent);
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  .modal-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--m-ink);
    line-height: 1.2;
    margin: 0;
  }

  .modal-sub {
    font-size: 0.8rem;
    color: var(--m-dim);
    margin: 0.2rem 0 0;
  }

  .close-btn {
    background: none;
    border: none;
    color: var(--m-dim);
    font-size: 1rem;
    cursor: pointer;
    padding: 0.25rem;
    line-height: 1;
    transition: color 0.15s;
    flex-shrink: 0;
  }
  .close-btn:hover { color: var(--m-ink); }

  .tab-bar {
    display: flex;
    gap: 0;
    padding: 0 1.75rem;
    border-bottom: 1px solid var(--m-rule);
    flex-shrink: 0;
    overflow-x: auto;
  }

  .tab-btn {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--m-dim);
    font-size: 0.8rem;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.04em;
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: color 0.15s, border-color 0.15s;
    white-space: nowrap;
    margin-bottom: -1px;
  }

  .tab-btn:hover { color: var(--m-ink); }

  .tab-active {
    color: var(--m-accent) !important;
    border-bottom-color: var(--m-accent) !important;
  }

  .modal-body {
    flex: 1;
    overflow-y: auto;
    padding: 1.75rem;
  }

  .section-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (min-width: 640px) {
    .section-grid { grid-template-columns: 1fr 1fr; }
  }

  .prose {
    font-size: 0.88rem;
    line-height: 1.7;
    color: var(--m-text);
    margin: 0;
  }

  .metrics-row {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .metric-box {
    background: var(--m-bg-deep);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    text-align: center;
    min-width: 70px;
  }

  .metric-val {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--m-accent);
  }

  .metric-label {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--m-dim);
    margin-top: 0.2rem;
  }

  .section-heading {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--m-dim);
    margin: 0 0 0.75rem;
    font-weight: 600;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .feature-list li {
    display: flex;
    flex-direction: column;
    padding: 0.6rem 0.8rem;
    background: var(--m-bg-deep);
    border-radius: 0.375rem;
    border-left: 2px solid var(--m-accent);
  }

  .feature-name {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--m-ink);
    margin-bottom: 0.1rem;
  }

  .feature-desc {
    font-size: 0.75rem;
    color: var(--m-dim);
  }

  .pipeline-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: var(--m-bg-deep);
    border-radius: 0.5rem;
  }

  .pipe-step {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: var(--m-ink);
    background: rgba(192, 193, 255, 0.1);
    padding: 0.25rem 0.6rem;
    border-radius: 0.25rem;
  }

  .pipe-arrow {
    color: var(--m-dim);
    font-size: 0.75rem;
  }

  .table-wrap {
    overflow-x: auto;
    border-radius: 0.5rem;
    border: 1px solid var(--m-rule);
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82rem;
  }

  .data-table th {
    text-align: left;
    padding: 0.6rem 1rem;
    background: var(--m-bg-deep);
    color: var(--m-dim);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 500;
  }

  .data-table td {
    padding: 0.65rem 1rem;
    border-top: 1px solid var(--m-rule);
    color: var(--m-text);
    vertical-align: top;
  }

  .data-table tr:hover td {
    background: rgba(255, 255, 255, 0.025);
  }

  .font-mono { font-family: 'JetBrains Mono', monospace; }
  .font-semibold { font-weight: 600; }
  .font-medium { font-weight: 500; }
  .text-sm { font-size: 0.8rem; }
  .dim { color: var(--m-dim); }

  .method-badge, .status-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.04em;
  }

  .decisions-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .decision-card {
    display: flex;
    gap: 1rem;
    padding: 1.25rem;
    background: var(--m-bg-deep);
    border-radius: 0.5rem;
    border: 1px solid var(--m-rule);
  }

  .decision-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--m-accent);
    opacity: 0.6;
    flex-shrink: 0;
    width: 2rem;
  }

  .decision-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--m-ink);
    margin: 0;
  }

  .why-block {
    font-size: 0.82rem;
    line-height: 1.6;
    color: var(--m-dim);
    padding: 0.5rem 0.75rem;
    border-left: 2px solid var(--m-accent);
    background: rgba(255, 255, 255, 0.03);
    border-radius: 0 0.25rem 0.25rem 0;
  }

  .why-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--m-accent);
    margin-right: 0.4rem;
  }

  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 0.75rem; }
  .mt-6 { margin-top: 1.5rem; }
  .mt-8 { margin-top: 2rem; }
  .mb-6 { margin-bottom: 1.5rem; }
  .mb-8 { margin-bottom: 2rem; }

  /* Editorial theme overrides */
  .theme-editorial {
    --m-bg: #ffffff;
    --m-bg-deep: #faf8f4;
    --m-ink: #1a1a1a;
    --m-text: #2a2a2a;
    --m-dim: #6b675f;
    --m-rule: #d8d2c4;
    --m-accent: #7a3b2e;
    --m-green: #3f6b4a;
    font-family: 'Inter', sans-serif;
    color: #2a2a2a;
  }

  .theme-editorial .modal-title {
    font-family: 'Source Serif 4', serif;
  }

  /* Enterprise theme overrides */
  .theme-enterprise {
    --m-bg: #ffffff;
    --m-bg-deep: #f7f9fc;
    --m-ink: #0f172a;
    --m-text: #334155;
    --m-dim: #64748b;
    --m-rule: #e2e8f0;
    --m-accent: #2563eb;
    --m-green: #059669;
    font-family: 'Inter', sans-serif;
    color: #334155;
  }
</style>
