<script>
  let { dark = $bindable(false) } = $props();

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "/resume", label: "CV" },
  ];

  let mobileOpen = $state(false);
</script>

<header class="ed-header" class:dark>
  <div class="ed-header-inner">
    <a href="/editorial" class="ed-logo">
      <img
        src={dark ? "/logo.png" : "/logo.png"}
        alt="Lucky Samuel"
        style="height:56px; width:auto;"
      />
      <span class="ed-logo-text">Lucky Samuel</span>
      <span class="ed-logo-meta">— Backend Engineer</span>
    </a>

    <nav class="ed-nav" aria-label="Editorial navigation">
      {#each navLinks as link}
        <a href={link.href} class="ed-nav-link">{link.label}</a>
      {/each}
      <button
        class="ed-toggle"
        onclick={() => (dark = !dark)}
        aria-label="Toggle dark mode"
        title={dark ? "Switch to light" : "Switch to dark"}
      >
        {dark ? "◐" : "○"}
      </button>
    </nav>

    <button
      class="ed-hamburger"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
    >
      {mobileOpen ? "✕" : "☰"}
    </button>
  </div>

  {#if mobileOpen}
    <div class="ed-mobile-menu">
      {#each navLinks as link}
        <a
          href={link.href}
          class="ed-mobile-link"
          onclick={() => (mobileOpen = false)}>{link.label}</a
        >
      {/each}
      <button
        class="ed-toggle mt-2"
        onclick={() => {
          dark = !dark;
          mobileOpen = false;
        }}
      >
        {dark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  {/if}
</header>

<style>
  .ed-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--bg);
    border-bottom: 1px solid var(--rule);
    transition:
      background 0.3s,
      border-color 0.3s;
  }

  .ed-header-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0.9rem 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .ed-logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    flex-shrink: 0;
  }

  .ed-logo-text {
    font-family: "Source Serif 4", serif;
    font-style: italic;
    font-size: 1rem;
    font-weight: 500;
    color: var(--ink);
    white-space: nowrap;
  }

  .ed-logo-meta {
    font-family: "Inter", sans-serif;
    font-size: 0.7rem;
    color: var(--dim);
    letter-spacing: 0.02em;
    display: none;
  }

  @media (min-width: 768px) {
    .ed-logo-meta {
      display: inline;
    }
  }

  .ed-nav {
    display: none;
    align-items: center;
    gap: 1.75rem;
    margin-left: auto;
  }

  @media (min-width: 640px) {
    .ed-nav {
      display: flex;
    }
  }

  .ed-nav-link {
    font-family: "Inter", sans-serif;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--dim);
    text-decoration: none;
    transition: color 0.18s;
  }

  .ed-nav-link:hover {
    color: var(--ink);
  }

  .ed-toggle {
    background: none;
    border: 1px solid var(--rule);
    color: var(--dim);
    font-size: 0.9rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition:
      border-color 0.18s,
      color 0.18s;
  }

  .ed-toggle:hover {
    border-color: var(--ink);
    color: var(--ink);
  }

  .ed-hamburger {
    display: flex;
    background: none;
    border: none;
    color: var(--ink);
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: auto;
    padding: 0.25rem;
  }

  @media (min-width: 640px) {
    .ed-hamburger {
      display: none;
    }
  }

  .ed-mobile-menu {
    padding: 1rem 2rem 1.5rem;
    border-top: 1px solid var(--rule);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .ed-mobile-link {
    font-family: "Inter", sans-serif;
    font-size: 0.85rem;
    color: var(--text);
    text-decoration: none;
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--rule);
  }

  .mt-2 {
    margin-top: 0.5rem;
  }
</style>
