<script>
  const year = new Date().getFullYear();
</script>

<footer class="ed-footer">
  <div class="ed-footer-inner">
    <p class="ed-footer-text">
      Lucky Samuel · Backend Engineering · Lagos, Nigeria · © {year}
    </p>
    <div class="ed-footer-links">
      <a href="https://github.com/alchemistlowkey" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/lucky-samuel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="/contact">Contact</a>
    </div>
  </div>
</footer>

<style>
  .ed-footer {
    border-top: 1px solid var(--rule);
    padding: 1.75rem 2rem;
  }

  .ed-footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .ed-footer-text {
    font-family: 'Source Serif 4', serif;
    font-size: 0.82rem;
    font-style: italic;
    color: var(--dim);
    margin: 0;
  }

  .ed-footer-links {
    display: flex;
    gap: 1.5rem;
  }

  .ed-footer-links a {
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--dim);
    text-decoration: none;
    transition: color 0.15s;
  }

  .ed-footer-links a:hover { color: var(--ink); }
</style>
