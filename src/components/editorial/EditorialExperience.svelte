<script>
  import { experience } from '$lib/data/portfolio.js';
</script>

<section class="ed-exp">
  <div class="ed-exp-inner">
    <div class="ed-section-kicker">§ 06 — Experience</div>

    <div class="ed-timeline">
      {#each experience as job, i}
        <div class="ed-job" class:ed-job-last={i === experience.length - 1}>
          <div class="ed-job-meta">
            <span class="ed-job-period">{job.period}</span>
            <span class="ed-job-location">{job.location}</span>
          </div>
          <div class="ed-job-body">
            <h3 class="ed-job-role">{job.role}</h3>
            <p class="ed-job-company">{job.company}</p>
            <ul class="ed-job-points">
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
  .ed-exp {
    padding: 4rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ed-exp-inner {
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

  .ed-timeline {
    display: flex;
    flex-direction: column;
  }

  .ed-job {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--rule);
  }

  @media (min-width: 640px) {
    .ed-job { grid-template-columns: 180px 1fr; gap: 2rem; }
  }

  .ed-job-last { border-bottom: none; }

  .ed-job-meta {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
  }

  @media (min-width: 640px) {
    .ed-job-meta { flex-direction: column; gap: 0.25rem; }
  }

  .ed-job-period {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.78rem;
    color: var(--dim);
    white-space: nowrap;
  }

  .ed-job-location {
    font-family: 'Inter', sans-serif;
    font-size: 0.72rem;
    color: var(--dim);
    opacity: 0.7;
  }

  .ed-job-role {
    font-family: 'Source Serif 4', serif;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--ink);
    margin: 0 0 0.2rem;
  }

  .ed-job-company {
    font-family: 'Inter', sans-serif;
    font-size: 0.82rem;
    color: var(--accent);
    margin: 0 0 1rem;
    font-weight: 500;
  }

  .ed-job-points {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .ed-job-points li {
    font-family: 'Source Serif 4', serif;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--text);
    padding-left: 1rem;
    position: relative;
  }

  .ed-job-points li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--dim);
    font-size: 0.8rem;
  }
</style>
