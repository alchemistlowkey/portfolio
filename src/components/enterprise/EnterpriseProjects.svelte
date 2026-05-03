<script>
  import { projects } from '$lib/data/portfolio.js';

  let { onCaseStudy = () => {} } = $props();
</script>

<section class="ent-projects" id="work">
  <div class="ent-projects-inner">
    <div class="ent-section-header">
      <span class="ent-section-kicker">Selected Work</span>
      <h2 class="ent-section-title">Projects shipped in production</h2>
    </div>

    <div class="ent-projects-grid">
      {#each projects as project}
        <article class="ent-card" class:ent-featured={project.featured}>
          {#if project.featured}
            <div class="ent-featured-bar"></div>
          {/if}
          <div class="ent-card-body">
            <div class="ent-card-tags">
              {#each project.tags as tag}
                <span class="ent-tag">{tag}</span>
              {/each}
            </div>
            <h3 class="ent-card-title">{project.title}</h3>
            {#if project.tagline}<p class="ent-card-tagline">{project.tagline}</p>{/if}
            <p class="ent-card-desc">{project.description}</p>

            {#if project.metrics.length > 0}
              <div class="ent-card-metrics">
                {#each project.metrics as m}
                  <div class="ent-metric">
                    <span class="ent-metric-val">{m.value}</span>
                    <span class="ent-metric-label">{m.label}</span>
                  </div>
                {/each}
              </div>
            {/if}

            <div class="ent-stack-chips">
              {#each project.stack.slice(0, 6) as s}
                <span class="ent-chip">{s}</span>
              {/each}
            </div>

            <div class="ent-card-actions">
              {#if project.featured}
                <button class="ent-btn-primary" onclick={onCaseStudy}>
                  View case study →
                </button>
              {/if}
              {#if project.liveUrl}
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="ent-btn-outline">
                  Live demo ↗
                </a>
              {/if}
              {#if project.repoUrl}
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" class="ent-btn-outline">
                  View repo ↗
                </a>
              {/if}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .ent-projects {
    padding: 5rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ent-projects-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .ent-section-header {
    margin-bottom: 2.5rem;
  }

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

  .ent-projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 640px) {
    .ent-projects-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .ent-projects-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .ent-card {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 16px;
    overflow: hidden;
    transition: box-shadow 0.2s, transform 0.2s;
    position: relative;
  }

  .ent-card:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    transform: translateY(-2px);
  }

  .ent-featured {
    grid-column: 1 / -1;
  }

  .ent-featured-bar {
    height: 4px;
    background: linear-gradient(90deg, var(--accent), var(--green));
  }

  .ent-card-body {
    padding: 1.5rem;
  }

  .ent-featured .ent-card-body {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: 768px) {
    .ent-featured .ent-card-body {
      grid-template-columns: 1.5fr 1fr;
      gap: 2rem;
    }
    .ent-featured .ent-card-actions { grid-column: 1; }
    .ent-featured .ent-card-metrics { grid-column: 2; grid-row: 1 / span 4; align-self: start; padding: 1rem; background: var(--bg); border-radius: 12px; border: 1px solid var(--rule); }
  }

  .ent-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 0.75rem;
  }

  .ent-tag {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--accent);
    background: var(--accent-soft);
    padding: 2px 8px;
    border-radius: 999px;
  }

  .ent-card-title {
    font-family: 'Inter', sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--ink);
    margin: 0 0 0.25rem;
    letter-spacing: -0.01em;
  }

  .ent-featured .ent-card-title { font-size: 1.5rem; }

  .ent-card-tagline {
    font-family: 'Inter', sans-serif;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--accent);
    margin: 0 0 0.75rem;
  }

  .ent-card-desc {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    line-height: 1.65;
    color: var(--text);
    margin: 0 0 1.25rem;
  }

  .ent-card-metrics {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
    flex-wrap: wrap;
  }

  .ent-metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .ent-metric-val {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--accent);
    line-height: 1.1;
  }

  .ent-metric-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--dim);
  }

  .ent-stack-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }

  .ent-chip {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    font-weight: 500;
    color: var(--text);
    background: var(--bg);
    border: 1px solid var(--rule);
    padding: 2px 10px;
    border-radius: 6px;
  }

  .ent-card-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .ent-btn-primary {
    font-family: 'Inter', sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    background: var(--accent);
    color: #fff;
    padding: 0.55rem 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: opacity 0.18s;
  }

  .ent-btn-primary:hover { opacity: 0.88; }

  .ent-btn-outline {
    font-family: 'Inter', sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    background: transparent;
    border: 1.5px solid var(--rule);
    color: var(--text);
    padding: 0.55rem 1.1rem;
    border-radius: 8px;
    text-decoration: none;
    display: inline-block;
    transition: border-color 0.18s, color 0.18s;
  }

  .ent-btn-outline:hover { border-color: var(--accent); color: var(--accent); }
</style>
