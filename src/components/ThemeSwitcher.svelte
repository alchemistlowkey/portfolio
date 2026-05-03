<script>
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { activeTheme } from '$lib/stores/theme.js';

  const themes = [
    { id: 'default', label: 'Default', route: '/' },
    { id: 'editorial', label: 'Editorial', route: '/editorial' },
    { id: 'enterprise', label: 'Enterprise', route: '/enterprise' },
  ];

  $: current = $page.url.pathname.startsWith('/editorial')
    ? 'editorial'
    : $page.url.pathname.startsWith('/enterprise')
      ? 'enterprise'
      : 'default';

  function switchTheme(t) {
    activeTheme.set(t.id);
    goto(t.route);
  }
</script>

<div class="switcher" role="group" aria-label="Switch portfolio theme">
  {#each themes as t}
    <button
      class="btn"
      class:active={current === t.id}
      onclick={() => switchTheme(t)}
      title={t.label}
    >
      {t.label}
    </button>
  {/each}
</div>

<style>
  .switcher {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
    background: rgba(10, 10, 20, 0.82);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
  }

  .btn {
    padding: 5px 13px;
    border-radius: 999px;
    font-size: 11px;
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.55);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.18s, background 0.18s;
    white-space: nowrap;
    line-height: 1.4;
  }

  .btn:hover {
    color: rgba(255, 255, 255, 0.88);
  }

  .btn.active {
    background: rgba(255, 255, 255, 0.14);
    color: rgba(255, 255, 255, 0.95);
  }

  @media (max-width: 480px) {
    .switcher {
      bottom: 1rem;
      right: 1rem;
    }
    .btn {
      padding: 5px 10px;
      font-size: 10px;
    }
  }
</style>
