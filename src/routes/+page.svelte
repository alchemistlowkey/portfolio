<script>
  import Home from "../components/Home.svelte";

  const title = "Lucky Samuel | Backend Engineer";
  const description = "Backend Engineer | .NET / C#";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href="https://lucky-samuel.vercel.app" />
  <meta name="image" content="https://lucky-samuel.vercel.app/logo.png" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://lucky-samuel.vercel.app" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://lucky-samuel.vercel.app/logo.png"
  />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://x.com/alchemistlowkey" />
  <meta property="twitter:title" content="Square Metres" />
  <meta property="twitter:description" content={description} />
  <meta
    property="twitter:image"
    content="https://lucky-samuel.vercel.app/logo.png"
  />
  <meta name="twitter:site" content="@alchemistlowkey" />
  <meta name="twitter:creator" content="@alchemistlowkey" />
</svelte:head>

<Home />
