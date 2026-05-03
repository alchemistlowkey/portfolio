<script>
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Navbar from "../components/Navbar.svelte";
  import ThemeSwitcher from "../components/ThemeSwitcher.svelte";
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

  const THEME_ROUTES = ['/editorial', '/enterprise'];
  let isThemePage = $derived(THEME_ROUTES.some((r) => $page.url.pathname.startsWith(r)));

  onMount(() => {
    if (isThemePage) return;

    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const onEnter = () => document.body.classList.add("cursor-hover");
    const onLeave = () => document.body.classList.remove("cursor-hover");
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    let raf;
    function tick() {
      if (!dot || !ring) return;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      raf = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  });

  let { children } = $props();

  const title = "Lucky Samuel | Backend Engineer";
  const description = "Backend Engineer | .NET / C#";
</script>

<svelte:head>
  <meta name="description" content={description} />
  <link rel="canonical" href="https://lucky-samuel.vercel.app" />
  <meta name="image" content="https://lucky-samuel.vercel.app/logo.png" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://lucky-samuel.vercel.app" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://lucky-samuel.vercel.app/logo.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://x.com/alchemistlowkey" />
  <meta property="twitter:title" content="Lucky Samuel" />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content="https://lucky-samuel.vercel.app/logo.png" />
  <meta name="twitter:site" content="@alchemistlowkey" />
  <meta name="twitter:creator" content="@alchemistlowkey" />
</svelte:head>

{#if !isThemePage}
  <div id="cursor-dot" aria-hidden="true"></div>
  <div id="cursor-ring" aria-hidden="true"></div>
  <Navbar />
{/if}

{@render children()}

{#if !isThemePage}
  <Footer />
{/if}

<ThemeSwitcher />
