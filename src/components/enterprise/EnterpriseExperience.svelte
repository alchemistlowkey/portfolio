<script>
  import { experience } from '$lib/data/portfolio.js';
</script>

<section class="ent-exp">
  <div class="ent-exp-inner">
    <div class="ent-section-header">
      <span class="ent-section-kicker">Experience</span>
      <h2 class="ent-section-title">Work history</h2>
    </div>

    <div class="ent-timeline">
      {#each experience as job, i}
        <div class="ent-job">
          <div class="ent-job-dot">
            <div class="job-dot-inner"></div>
            {#if i < experience.length - 1}
              <div class="job-dot-line"></div>
            {/if}
          </div>
          <div class="ent-job-body">
            <div class="ent-job-header">
              <div>
                <h3 class="ent-job-role">{job.role}</h3>
                <p class="ent-job-company">{job.company}</p>
              </div>
              <div class="ent-job-meta">
                <span class="ent-job-period">{job.period}</span>
                <span class="ent-job-location">{job.location}</span>
              </div>
            </div>
            <ul class="ent-job-points">
              {#each job.points as point}
                <li>{point}</li>
              {/each}
            </ul>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .ent-exp {
    padding: 5rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ent-exp-inner {
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

  .ent-timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .ent-job {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 1.5rem;
    padding-bottom: 2.5rem;
  }

  .ent-job-dot {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4px;
  }

  .job-dot-inner {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--accent);
    border: 3px solid var(--bg);
    box-shadow: 0 0 0 2px var(--accent);
    flex-shrink: 0;
  }

  .job-dot-line {
    flex: 1;
    width: 2px;
    background: var(--rule);
    margin-top: 6px;
    border-radius: 1px;
  }

  .ent-job-body {
    padding-bottom: 0.5rem;
  }

  .ent-job-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .ent-job-role {
    font-family: 'Inter', sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--ink);
    margin: 0 0 0.2rem;
    letter-spacing: -0.01em;
  }

  .ent-job-company {
    font-family: 'Inter', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--accent);
    margin: 0;
  }

  .ent-job-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    flex-shrink: 0;
  }

  .ent-job-period {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--dim);
  }

  .ent-job-location {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    color: var(--dim);
    opacity: 0.75;
  }

  .ent-job-points {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .ent-job-points li {
    font-family: 'Inter', sans-serif;
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--text);
    padding-left: 1.1rem;
    position: relative;
  }

  .ent-job-points li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.6em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--rule);
  }
</style>
