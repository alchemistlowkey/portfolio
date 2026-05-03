<script>
  let { onCaseStudy = () => {} } = $props();
</script>

<section class="ent-contact" id="contact">
  <div class="ent-contact-inner">
    <div class="ent-contact-content">
      <span class="ent-contact-kicker">Get in touch</span>
      <h2 class="ent-contact-heading">Ready to build together?</h2>
      <p class="ent-contact-sub">
        Open to backend engineering roles, .NET consulting, and interesting
        architecture problems. Based in Lagos — available remotely worldwide.
      </p>

      <div class="ent-contact-actions">
        <a href="mailto:alchemistlowkey@gmail.com" class="ent-btn-primary">
          Send a message
        </a>
        <a href="/Lucky_Samuel_Resume.pdf" download class="ent-btn-outline">
          Download CV
        </a>
        <button class="ent-btn-ghost" onclick={onCaseStudy}>
          HealthBridge case study →
        </button>
      </div>

      <div class="ent-contact-links">
        <a
          href="https://github.com/alchemistlowkey"
          target="_blank"
          rel="noopener noreferrer"
          class="ent-social-link"
        >
          <span class="ent-social-icon">GH</span>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lucky-samuel"
          target="_blank"
          rel="noopener noreferrer"
          class="ent-social-link"
        >
          <span class="ent-social-icon">LI</span>
          LinkedIn
        </a>
        <a href="mailto:lucky.samuel.egiagbo@gmail.com" class="ent-social-link">
          <span class="ent-social-icon">@</span>
          Email
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .ent-contact {
    padding: 6rem 2rem;
    background: var(--hero-grad);
    border-top: 1px solid var(--rule);
  }

  .ent-contact-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .ent-contact-content {
    max-width: 600px;
  }

  .ent-contact-kicker {
    display: inline-block;
    font-family: "Inter", sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--accent);
    background: var(--accent-soft);
    padding: 3px 10px;
    border-radius: 999px;
    margin-bottom: 1rem;
  }

  .ent-contact-heading {
    font-family: "Inter", sans-serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: var(--ink);
    margin: 0 0 1rem;
    letter-spacing: -0.025em;
    line-height: 1.1;
  }

  .ent-contact-sub {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text);
    margin: 0 0 2.5rem;
  }

  .ent-contact-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }

  .ent-btn-primary {
    font-family: "Inter", sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    background: var(--accent);
    color: #fff;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    transition:
      opacity 0.18s,
      transform 0.12s;
    box-shadow: 0 2px 10px rgba(37, 99, 235, 0.3);
  }

  .ent-btn-primary:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  .ent-btn-outline {
    font-family: "Inter", sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    background: transparent;
    border: 1.5px solid var(--rule);
    color: var(--text);
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    text-decoration: none;
    display: inline-block;
    transition:
      border-color 0.18s,
      color 0.18s;
  }

  .ent-btn-outline:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .ent-btn-ghost {
    font-family: "Inter", sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    background: none;
    border: none;
    color: var(--accent);
    cursor: pointer;
    padding: 0.75rem 0;
    transition: opacity 0.18s;
  }

  .ent-btn-ghost:hover {
    opacity: 0.75;
  }

  .ent-contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .ent-social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--text);
    text-decoration: none;
    transition: color 0.15s;
  }

  .ent-social-link:hover {
    color: var(--accent);
  }

  .ent-social-icon {
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: var(--panel);
    border: 1px solid var(--rule);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
    font-weight: 700;
    color: var(--dim);
    font-family: "JetBrains Mono", monospace;
  }
</style>
