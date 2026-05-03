<script>
  import { endpoints } from '$lib/data/portfolio.js';

  function methodColor(m) {
    if (m === 'POST') return 'var(--accent)';
    if (m === 'GET') return 'var(--green)';
    return 'var(--dim)';
  }
</script>

<section class="ed-endpoints">
  <div class="ed-endpoints-inner">
    <div class="ed-section-kicker">§ 04 — Surface</div>

    <div class="ed-table-wrap">
      <table class="ed-table">
        <thead>
          <tr>
            <th>Method</th>
            <th>Endpoint · Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {#each endpoints as ep}
            <tr>
              <td>
                <span class="ep-method" style="color: {methodColor(ep.method)}; border-color: {methodColor(ep.method)};">
                  {ep.method}
                </span>
              </td>
              <td>
                <span class="ep-path">{ep.path}</span>
                <span class="ep-desc">{ep.desc}</span>
              </td>
              <td>
                <span class="ep-status">{ep.status}</span>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<style>
  .ed-endpoints {
    padding: 4rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ed-endpoints-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .ed-section-kicker {
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: 2rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--rule);
  }

  .ed-table-wrap {
    overflow-x: auto;
  }

  .ed-table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
  }

  .ed-table th {
    text-align: left;
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--dim);
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-bottom: 2px solid var(--rule);
  }

  .ed-table td {
    padding: 1rem 1rem;
    border-bottom: 1px solid var(--rule);
    vertical-align: middle;
  }

  .ed-table tr:hover td { background: var(--bg-deep); }

  .ep-method {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    border: 1px solid currentColor;
    padding: 2px 8px;
    border-radius: 2px;
    display: inline-block;
  }

  .ep-path {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.82rem;
    color: var(--ink);
    display: block;
    margin-bottom: 0.15rem;
  }

  .ep-desc {
    font-family: 'Source Serif 4', serif;
    font-size: 0.82rem;
    color: var(--dim);
    display: block;
    font-style: italic;
  }

  .ep-status {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: var(--green);
  }
</style>
