<script>
  import { page } from "$app/stores";

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  let mobileOpen = $state(false);
</script>

<nav
  class="fixed top-0 w-full z-50"
  style="background: rgba(11,19,38,0.6); backdrop-filter: blur(12px); box-shadow: 0 32px 64px -15px rgba(218,226,253,0.04);"
>
  <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
    <a
      href="/"
      class="text-xl font-bold tracking-tighter"
      style="font-family: 'Space Grotesk', sans-serif; color: #c0c1ff;"
    >
      <img src="/logo.png" alt="logo" class="w-16" />
    </a>

    <!-- Desktop nav -->
    <div
      class="hidden md:flex items-center gap-8"
      style="font-family: 'Space Grotesk', sans-serif;"
    >
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm tracking-tight transition-colors pb-1"
          style={$page.url.pathname === link.href
            ? "color: #c0c1ff; font-weight: 700; border-bottom: 2px solid #c0c1ff;"
            : "color: rgba(218,226,253,0.7);"}
          onmouseenter={(e) => {
            if ($page.url.pathname !== link.href)
              e.target.style.color = "#dae2fd";
          }}
          onmouseleave={(e) => {
            if ($page.url.pathname !== link.href)
              e.target.style.color = "rgba(218,226,253,0.7)";
          }}
        >
          {link.label}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-4">
      <a
        href="/contact"
        class="px-5 py-2 rounded text-sm font-bold transition-all duration-300 active:scale-95"
        style="background: #c0c1ff; color: #1000a9; font-family: 'Space Grotesk', sans-serif;"
        onmouseenter={(e) => (e.currentTarget.style.background = "#4b4dd8")}
        onmouseleave={(e) => (e.currentTarget.style.background = "#c0c1ff")}
      >
        Hire Me
      </a>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2"
        onclick={() => (mobileOpen = !mobileOpen)}
        aria-label="Toggle menu"
        style="color: #dae2fd;"
      >
        <span class="material-symbols-outlined"
          >{mobileOpen ? "close" : "menu"}</span
        >
      </button>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if mobileOpen}
    <div
      class="md:hidden px-8 pb-6 space-y-4"
      style="background: rgba(11,19,38,0.95);"
    >
      {#each navLinks as link}
        <a
          href={link.href}
          onclick={() => (mobileOpen = false)}
          class="block text-sm py-2 transition-colors"
          style={$page.url.pathname === link.href
            ? "color: #c0c1ff; font-weight: 700;"
            : "color: rgba(218,226,253,0.7);"}
        >
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>
