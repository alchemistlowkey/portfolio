<script>
  const year = new Date().getFullYear();
</script>

<footer class="ent-footer">
  <div class="ent-footer-inner">
    <p class="ent-footer-copy">
      © {year} Lucky Samuel · Backend Engineer · Lagos, Nigeria
    </p>
    <div class="ent-footer-links">
      <a href="/">Default</a>
      <a href="/editorial">Editorial</a>
      <a href="https://github.com/alchemistlowkey" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/lucky-samuel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>
</footer>

<style>
  .ent-footer {
    padding: 1.5rem 2rem;
    border-top: 1px solid var(--rule);
    background: var(--panel);
  }

  .ent-footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .ent-footer-copy {
    font-family: 'Inter', sans-serif;
    font-size: 0.78rem;
    color: var(--dim);
    margin: 0;
  }

  .ent-footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .ent-footer-links a {
    font-family: 'Inter', sans-serif;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--dim);
    text-decoration: none;
    transition: color 0.15s;
  }

  .ent-footer-links a:hover { color: var(--ink); }
</style>
