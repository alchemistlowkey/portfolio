<script>
  import { stats } from '$lib/data/portfolio.js';
</script>

<section class="ed-stats">
  <div class="ed-stats-inner">
    {#each [
      { value: stats.apis, label: 'APIs in production', mono: true },
      { value: stats.years, label: 'Years engineering', mono: true },
      { value: stats.stack, label: 'Primary stack', mono: false },
      { value: stats.location, label: 'Base / available remote', mono: false },
    ] as item, i}
      <div class="ed-stat" class:ed-stat-last={i === 3}>
        <div class="ed-stat-val" class:font-mono={item.mono}>{item.value}</div>
        <div class="ed-stat-label">{item.label}</div>
      </div>
    {/each}
  </div>
</section>

<style>
  .ed-stats {
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
  }

  .ed-stats-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  @media (min-width: 640px) {
    .ed-stats-inner { grid-template-columns: repeat(4, 1fr); }
  }

  .ed-stat {
    padding: 1.75rem 2rem;
    border-right: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
  }

  @media (min-width: 640px) {
    .ed-stat { border-bottom: none; }
    .ed-stat-last { border-right: none; }
  }

  .ed-stat-val {
    font-family: 'Source Serif 4', serif;
    font-size: 2rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.1;
    margin-bottom: 0.35rem;
  }

  .font-mono {
    font-family: 'JetBrains Mono', monospace !important;
  }

  .ed-stat-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--dim);
    font-weight: 500;
  }
</style>
