<script>
  let { onCaseStudy = () => {} } = $props();
</script>

<section class="ed-contact" id="contact">
  <div class="ed-contact-inner">
    <div class="ed-section-kicker">§ 08 — Contact</div>

    <div class="ed-contact-grid">
      <div>
        <h2 class="ed-contact-heading">Let's build something.</h2>
        <p class="ed-contact-sub">
          Open to backend engineering roles, .NET consulting, and interesting
          problems. Based in Lagos — available remotely.
        </p>
        <div class="ed-contact-links">
          <a
            href="mailto:lucky.samuel.egiagbo@gmail.com"
            class="ed-contact-link"
          >
            lucky.samuel.egiagbo@gmail.com
          </a>
          <a
            href="https://github.com/alchemistlowkey"
            target="_blank"
            rel="noopener noreferrer"
            class="ed-contact-link"
          >
            github.com/alchemistlowkey ↗
          </a>
          <a
            href="https://www.linkedin.com/in/lucky-samuel"
            target="_blank"
            rel="noopener noreferrer"
            class="ed-contact-link"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div class="ed-contact-resume">
        <p class="ed-resume-note">
          Curriculum Vitae — Lucky Samuel, Backend Engineer, Lagos, Nigeria.
        </p>
        <div class="ed-resume-actions">
          <a href="/Lucky_Samuel_Resume.pdf" download class="ed-btn-primary">
            Download CV (PDF)
          </a>
          <button class="ed-btn-secondary" onclick={onCaseStudy}>
            HealthBridge case study →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .ed-contact {
    padding: 5rem 2rem;
    border-top: 1px solid var(--rule);
  }

  .ed-contact-inner {
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

  .ed-contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: 768px) {
    .ed-contact-grid {
      grid-template-columns: 1.2fr 1fr;
    }
  }

  .ed-contact-heading {
    font-family: "Source Serif 4", serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 400;
    color: var(--ink);
    margin: 0 0 1rem;
    line-height: 1.15;
  }

  .ed-contact-sub {
    font-family: "Source Serif 4", serif;
    font-size: 1rem;
    line-height: 1.75;
    color: var(--text);
    margin: 0 0 2rem;
    max-width: 44ch;
  }

  .ed-contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .ed-contact-link {
    font-family: "Inter", sans-serif;
    font-size: 0.85rem;
    color: var(--text);
    text-decoration: none;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 0.5rem;
    transition:
      color 0.15s,
      border-color 0.15s;
  }

  .ed-contact-link:hover {
    color: var(--accent);
    border-color: var(--accent);
  }

  .ed-contact-resume {
    padding: 2rem;
    background: var(--bg-deep);
    border: 1px solid var(--rule);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .ed-resume-note {
    font-family: "Source Serif 4", serif;
    font-size: 0.88rem;
    font-style: italic;
    color: var(--dim);
    margin: 0;
    line-height: 1.6;
  }

  .ed-resume-actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .ed-btn-primary {
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 600;
    background: var(--accent);
    color: #fff;
    padding: 0.65rem 1.25rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    display: block;
    transition: opacity 0.18s;
  }

  .ed-btn-primary:hover {
    opacity: 0.85;
  }

  .ed-btn-secondary {
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    background: none;
    border: 1px solid var(--rule);
    color: var(--text);
    padding: 0.65rem 1.25rem;
    border-radius: 2px;
    cursor: pointer;
    transition:
      border-color 0.18s,
      color 0.18s;
  }

  .ed-btn-secondary:hover {
    border-color: var(--ink);
    color: var(--ink);
  }
</style>
