<script>
  import { stackCategories } from '$lib/data/portfolio.js';
</script>

<section class="ent-skills" id="skills">
  <div class="ent-skills-inner">
    <div class="ent-section-header">
      <span class="ent-section-kicker">Technical Skills</span>
      <h2 class="ent-section-title">Engineering stack</h2>
    </div>

    <div class="ent-skills-grid">
      {#each Object.entries(stackCategories) as [category, items]}
        <div class="ent-skill-group">
          <h4 class="ent-skill-cat">{category}</h4>
          <div class="ent-skill-chips">
            {#each items as item}
              <span class="ent-skill-chip">{item}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .ent-skills {
    padding: 5rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ent-skills-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .ent-section-header { margin-bottom: 2.5rem; }

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

  .ent-skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .ent-skills-grid { grid-template-columns: repeat(3, 1fr); }
  }

  @media (min-width: 1024px) {
    .ent-skills-grid { grid-template-columns: repeat(4, 1fr); }
  }

  .ent-skill-group {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 12px;
    padding: 1.25rem;
    transition: box-shadow 0.2s;
  }

  .ent-skill-group:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  }

  .ent-skill-cat {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    margin: 0 0 0.75rem;
  }

  .ent-skill-chips {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .ent-skill-chip {
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--text);
    padding: 0.3rem 0;
    border-bottom: 1px solid var(--rule);
    display: block;
    transition: color 0.15s;
  }

  .ent-skill-chip:hover { color: var(--ink); }
  .ent-skill-chip:last-child { border-bottom: none; }
</style>
