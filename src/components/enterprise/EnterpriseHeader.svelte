<script>
  let { dark = $bindable(false) } = $props();

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  let mobileOpen = $state(false);
</script>

<header class="ent-header" class:dark>
  <div class="ent-header-inner">
    <a href="/enterprise" class="ent-logo">
      <img
        src={dark ? "/logo_dark.png" : "/logo.png"}
        alt="Lucky Samuel"
        style="height:32px; width:auto;"
      />
      <div class="ent-logo-text">
        <span class="ent-logo-name">Lucky Samuel</span>
        <span class="ent-logo-badge">Backend Engineer</span>
      </div>
    </a>

    <nav class="ent-nav" aria-label="Enterprise navigation">
      {#each navLinks as link}
        <a href={link.href} class="ent-nav-link">{link.label}</a>
      {/each}
      <span class="ent-open-badge">
        <span class="ent-green-dot"></span> Open to work
      </span>
      <button
        class="ent-toggle"
        onclick={() => (dark = !dark)}
        aria-label="Toggle dark mode"
        title={dark ? "Switch to light" : "Switch to dark"}
      >
        {dark ? "🌙" : "☀"}
      </button>
    </nav>

    <button
      class="ent-hamburger"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
    >
      {mobileOpen ? "✕" : "☰"}
    </button>
  </div>

  {#if mobileOpen}
    <div class="ent-mobile-menu">
      {#each navLinks as link}
        <a
          href={link.href}
          class="ent-mobile-link"
          onclick={() => (mobileOpen = false)}>{link.label}</a
        >
      {/each}
      <button
        class="ent-toggle-mobile"
        onclick={() => {
          dark = !dark;
          mobileOpen = false;
        }}
      >
        {dark ? "Switch to light" : "Switch to dark"}
      </button>
    </div>
  {/if}
</header>

<style>
  .ent-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--panel);
    border-bottom: 1px solid var(--rule);
    transition:
      background 0.3s,
      border-color 0.3s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .ent-header-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.85rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .ent-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    flex-shrink: 0;
  }

  .ent-logo-text {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .ent-logo-name {
    font-family: "Inter", sans-serif;
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--ink);
    line-height: 1.2;
  }

  .ent-logo-badge {
    font-family: "Inter", sans-serif;
    font-size: 0.65rem;
    font-weight: 500;
    color: var(--dim);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    line-height: 1.2;
  }

  .ent-nav {
    display: none;
    align-items: center;
    gap: 1.5rem;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .ent-nav {
      display: flex;
    }
  }

  .ent-nav-link {
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--dim);
    text-decoration: none;
    transition: color 0.18s;
  }

  .ent-nav-link:hover {
    color: var(--ink);
  }

  .ent-open-badge {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: "Inter", sans-serif;
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--green);
    background: var(--green-soft);
    padding: 3px 10px;
    border-radius: 999px;
    border: 1px solid var(--green);
    opacity: 0.85;
  }

  .ent-green-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--green);
    animation: pulse-dot 1.8s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.4);
    }
  }

  .ent-toggle {
    background: none;
    border: 1px solid var(--rule);
    color: var(--dim);
    font-size: 0.85rem;
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      border-color 0.18s,
      color 0.18s;
  }

  .ent-toggle:hover {
    border-color: var(--accent);
    color: var(--ink);
  }

  .ent-hamburger {
    display: flex;
    background: none;
    border: none;
    color: var(--ink);
    font-size: 1.1rem;
    cursor: pointer;
    margin-left: auto;
    padding: 0.25rem;
  }

  @media (min-width: 768px) {
    .ent-hamburger {
      display: none;
    }
  }

  .ent-mobile-menu {
    padding: 1rem 2rem 1.5rem;
    border-top: 1px solid var(--rule);
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .ent-mobile-link {
    font-family: "Inter", sans-serif;
    font-size: 0.88rem;
    color: var(--text);
    text-decoration: none;
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--rule);
  }

  .ent-toggle-mobile {
    font-family: "Inter", sans-serif;
    font-size: 0.78rem;
    background: none;
    border: 1px solid var(--rule);
    color: var(--dim);
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 0.25rem;
    align-self: flex-start;
  }
</style>
