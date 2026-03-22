<script>
  const items = [
    { text: "Dotnet Core", accent: true },
    { text: "·", accent: false },
    { text: "C#", accent: false },
    { text: "·", accent: false },
    { text: "SvelteKit", accent: true },
    { text: "·", accent: false },
    { text: "React", accent: false },
    { text: "·", accent: false },
    { text: "Next.js", accent: false },
    { text: "·", accent: false },
    { text: "REST APIs", accent: true },
    { text: "·", accent: false },
    { text: "Tailwind", accent: false },
    { text: "·", accent: false },
    { text: "SEO Optimised", accent: true },
    { text: "·", accent: false },
    { text: "PostgreSQL", accent: false },
    { text: "·", accent: false },
    { text: "MongoDB", accent: false },
    { text: "·", accent: false },
    { text: "MsSQL", accent: false },
    { text: "·", accent: false },
  ];
  const doubled = [...items, ...items];
</script>

<div class="overflow-hidden border-y border-line bg-surface py-4 select-none">
  <div class="marquee-track flex gap-10 w-max">
    {#each doubled as item}
      <span
        class="font-mono text-[10px] tracking-[.22em] uppercase whitespace-nowrap {item.accent
          ? 'text-accent'
          : 'text-muted'}">{item.text}</span
      >
    {/each}
  </div>
</div>
