<script>
  import { pipelineStages, pipelineMeta } from '$lib/data/portfolio.js';
</script>

<section class="ed-pipeline">
  <div class="ed-pipeline-inner">
    <div class="ed-section-kicker">§ 05 — Delivery</div>

    <div class="ed-pipeline-meta">
      <span class="meta-run">CI Run {pipelineMeta.run}</span>
      <span class="meta-branch">⎇ {pipelineMeta.branch}</span>
      <span class="meta-time">{pipelineMeta.total}</span>
      <span class="meta-status">● {pipelineMeta.status}</span>
    </div>

    <div class="ed-stages">
      {#each pipelineStages as stage, i}
        <div class="ed-stage">
          <div class="stage-dot"></div>
          {#if i < pipelineStages.length - 1}
            <div class="stage-line"></div>
          {/if}
          <div class="stage-label">{stage.name}</div>
          <div class="stage-dur">{stage.duration}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .ed-pipeline {
    padding: 4rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ed-pipeline-inner {
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

  .ed-pipeline-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 2.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
  }

  .meta-run { color: var(--ink); font-weight: 600; }
  .meta-branch { color: var(--dim); }
  .meta-time { color: var(--dim); }
  .meta-status { color: var(--green); font-weight: 600; }

  .ed-stages {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0;
  }

  .ed-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;
    min-width: 80px;
  }

  .stage-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--green);
    border: 2px solid var(--bg);
    box-shadow: 0 0 0 2px var(--green);
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  .stage-line {
    position: absolute;
    top: 6px;
    left: calc(50% + 8px);
    right: calc(-50% + 8px);
    height: 1px;
    background: var(--green);
    opacity: 0.4;
  }

  .stage-label {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--ink);
    margin-top: 0.6rem;
    text-align: center;
  }

  .stage-dur {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.68rem;
    color: var(--dim);
    margin-top: 0.2rem;
    text-align: center;
  }
</style>
