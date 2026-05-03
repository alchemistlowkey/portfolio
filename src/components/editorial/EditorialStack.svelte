<script>
  import { stackCategories } from '$lib/data/portfolio.js';
</script>

<section class="ed-stack">
  <div class="ed-stack-inner">
    <div class="ed-section-kicker">§ 07 — Stack</div>

    <div class="ed-stack-grid">
      {#each Object.entries(stackCategories) as [category, items]}
        <div class="ed-stack-group">
          <h4 class="ed-stack-cat">{category}</h4>
          <div class="ed-stack-items">
            {#each items as item}
              <span class="ed-stack-chip">{item}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .ed-stack {
    padding: 4rem 2rem;
    border-top: 1px solid var(--rule);
    background: var(--bg-deep);
  }

  .ed-stack-inner {
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

  .ed-stack-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .ed-stack-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (min-width: 1024px) {
    .ed-stack-grid { grid-template-columns: repeat(4, 1fr); }
  }

  .ed-stack-group { }

  .ed-stack-cat {
    font-family: 'Inter', sans-serif;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent);
    margin: 0 0 0.75rem;
  }

  .ed-stack-items {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .ed-stack-chip {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--text);
    padding: 0.3rem 0;
    border-bottom: 1px solid var(--rule);
    display: block;
    transition: color 0.15s;
  }

  .ed-stack-chip:hover { color: var(--ink); }
</style>
