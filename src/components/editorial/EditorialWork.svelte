<script>
  import { projects } from "$lib/data/portfolio.js";

  let { onCaseStudy = () => {} } = $props();

  const displayed = projects;
</script>

<section class="ed-work" id="work">
  <div class="ed-work-inner">
    <div class="ed-section-kicker">§ 02 — Selected Work</div>

    <div class="ed-work-grid">
      {#each displayed as project, i}
        <article class="ed-project-card" class:ed-featured={project.featured}>
          <div class="ed-project-num">Nº {String(i + 1).padStart(2, "0")}</div>
          <div class="ed-project-body">
            <div class="ed-project-tags">
              {#each project.tags as tag}
                <span class="ed-tag">{tag}</span>
              {/each}
            </div>
            <h3 class="ed-project-title">{project.title}</h3>
            <p class="ed-project-desc">{project.description}</p>

            {#if project.metrics.length > 0}
              <div class="ed-metrics">
                {#each project.metrics as m}
                  <div class="ed-metric">
                    <span class="ed-metric-val">{m.value}</span>
                    <span class="ed-metric-label">{m.label}</span>
                  </div>
                {/each}
              </div>
            {/if}

            <div class="ed-stack-tags">
              {#each project.stack.slice(0, 5) as s}
                <span class="ed-stack-tag">{s}</span>
              {/each}
            </div>

            <div class="ed-project-actions">
              {#if project.featured}
                <button class="ed-link-primary" onclick={onCaseStudy}>
                  Read full case study →
                </button>
              {:else if project.liveUrl}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ed-link-secondary"
                >
                  Live demo ↗
                </a>
              {:else if project.repoUrl}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="ed-link-secondary"
                >
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
  .ed-work {
    padding: 4rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ed-work-inner {
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

  .ed-work-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: 768px) {
    .ed-work-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .ed-project-card {
    padding: 2rem;
    border-bottom: 1px solid var(--rule);
    display: flex;
    gap: 1.25rem;
    transition: background 0.18s;
  }

  .ed-project-card:hover {
    background: var(--bg-deep);
  }

  @media (min-width: 768px) {
    .ed-project-card:nth-child(odd) {
      border-right: 1px solid var(--rule);
    }
  }

  .ed-featured {
    grid-column: 1 / -1;
    background: var(--bg-deep);
  }

  .ed-project-num {
    font-family: "Source Serif 4", serif;
    font-size: 0.7rem;
    color: var(--dim);
    padding-top: 0.25rem;
    flex-shrink: 0;
    width: 2.5rem;
  }

  .ed-project-body {
    flex: 1;
  }

  .ed-project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 0.6rem;
  }

  .ed-tag {
    font-family: "Inter", sans-serif;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--accent);
    border: 1px solid var(--accent-soft);
    padding: 1px 6px;
    border-radius: 2px;
  }

  .ed-project-title {
    font-family: "Source Serif 4", serif;
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--ink);
    margin: 0 0 0.5rem;
    line-height: 1.3;
  }

  .ed-featured .ed-project-title {
    font-size: 1.75rem;
  }

  .ed-project-desc {
    font-family: "Source Serif 4", serif;
    font-size: 0.9rem;
    line-height: 1.75;
    color: var(--text);
    margin: 0 0 1rem;
  }

  .ed-metrics {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.75rem;
    flex-wrap: wrap;
  }

  .ed-metric {
    display: flex;
    flex-direction: column;
  }

  .ed-metric-val {
    font-family: "JetBrains Mono", monospace;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--accent);
  }

  .ed-metric-label {
    font-family: "Inter", sans-serif;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--dim);
  }

  .ed-stack-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: 1rem;
  }

  .ed-stack-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    color: var(--dim);
    background: var(--bg-deep);
    padding: 2px 8px;
    border: 1px solid var(--rule);
    border-radius: 2px;
  }

  .ed-featured .ed-stack-tag {
    background: var(--panel);
  }

  .ed-project-actions {
    margin-top: 0.75rem;
  }

  .ed-link-primary {
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--accent);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-decoration: none;
    transition: opacity 0.15s;
  }

  .ed-link-primary:hover {
    opacity: 0.7;
  }

  .ed-link-secondary {
    font-family: "Inter", sans-serif;
    font-size: 0.8rem;
    color: var(--dim);
    text-decoration: none;
    transition: color 0.15s;
  }

  .ed-link-secondary:hover {
    color: var(--ink);
  }
</style>
