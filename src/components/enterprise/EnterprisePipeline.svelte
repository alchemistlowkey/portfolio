<script>
  import { pipelineStages, pipelineMeta } from '$lib/data/portfolio.js';
</script>

<section class="ent-pipeline">
  <div class="ent-pipeline-inner">
    <div class="ent-section-header">
      <span class="ent-section-kicker">CI / CD</span>
      <h2 class="ent-section-title">Delivery pipeline</h2>
    </div>

    <div class="ent-pipeline-card">
      <div class="ent-pipeline-meta">
        <div class="meta-item">
          <span class="meta-label">Run</span>
          <span class="meta-value">{pipelineMeta.run}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Branch</span>
          <span class="meta-value">⎇ {pipelineMeta.branch}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Duration</span>
          <span class="meta-value">{pipelineMeta.total}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">Status</span>
          <span class="meta-value meta-passing">● {pipelineMeta.status}</span>
        </div>
      </div>

      <div class="ent-stages">
        {#each pipelineStages as stage, i}
          <div class="ent-stage">
            <div class="stage-icon">✓</div>
            {#if i < pipelineStages.length - 1}
              <div class="stage-connector"></div>
            {/if}
            <div class="stage-info">
              <span class="stage-name">{stage.name}</span>
              <span class="stage-dur">{stage.duration}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .ent-pipeline {
    padding: 5rem 2rem;
    border-top: 1px solid var(--rule);
    background: var(--bg-deep);
  }

  .ent-pipeline-inner {
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

  .ent-pipeline-card {
    background: var(--panel);
    border: 1px solid var(--rule);
    border-radius: 16px;
    padding: 1.75rem;
  }

  .ent-pipeline-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--rule);
  }

  .meta-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .meta-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--dim);
    font-weight: 600;
  }

  .meta-value {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--ink);
  }

  .meta-passing { color: var(--green); }

  .ent-stages {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0;
  }

  .ent-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-width: 80px;
    position: relative;
  }

  .stage-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--green-soft);
    border: 2px solid var(--green);
    color: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    z-index: 1;
    position: relative;
  }

  .stage-connector {
    position: absolute;
    top: 16px;
    left: calc(50% + 16px);
    right: calc(-50% + 16px);
    height: 2px;
    background: var(--green);
    opacity: 0.35;
  }

  .stage-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
  }

  .stage-name {
    font-family: 'Inter', sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--ink);
    text-align: center;
  }

  .stage-dur {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.65rem;
    color: var(--dim);
    margin-top: 2px;
    text-align: center;
  }
</style>
