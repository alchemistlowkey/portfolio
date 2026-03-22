<footer style="background: #060e20; width: 100%; padding: 3rem 0;">
  <div
    class="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6"
  >
    <div
      class="text-lg font-black"
      style="color: #dae2fd; font-family: 'Space Grotesk', sans-serif;"
    >
      <img src="/logo_dark.png" alt="" class="w-16" />
    </div>
    <div
      class="flex gap-8"
      style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem;"
    >
      {#each [["GitHub", "https://github.com/alchemistlowkey"], ["LinkedIn", "https://www.linkedin.com/in/lucky-samuel/"], ["Email", "mailto:lucky.samuel.egiagbo@gmail.com"]] as [label, href]}
        <a
          {href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          class="uppercase tracking-widest transition-all inline-block"
          style="color: #a7b6cc;"
          onmouseenter={(e) => {
            e.target.style.color = "#4edea3";
            e.target.style.transform = "translateX(4px)";
          }}
          onmouseleave={(e) => {
            e.target.style.color = "#a7b6cc";
            e.target.style.transform = "translateX(0)";
          }}
        >
          {label}
        </a>
      {/each}
    </div>
    <div
      style="color: rgba(167,182,204,0.5); font-family: 'JetBrains Mono', monospace; font-size: 0.7rem;"
      class="uppercase tracking-widest"
    >
      © {new Date().getFullYear()} Lucky Samuel. All rights reserved.
    </div>
  </div>
</footer>
