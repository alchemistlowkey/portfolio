<script>
  import { onMount } from "svelte";

  const roles = [
    "C# & .NET",
    "Clean/Onion Architecture",
    "Vertical Slices",
    "REST APIs, Minimal APIs",
    "SvelteKit",
    "Next.js / React",
  ];
  let roleIndex = $state(0);
  let displayed = $state("");
  let deleting = $state(false);
  let charIndex = $state(0);

  onMount(() => {
    let timeout;

    function type() {
      const current = roles[roleIndex];
      if (!deleting) {
        displayed = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          timeout = setTimeout(() => {
            deleting = true;
            type();
          }, 1800);
          return;
        }
      } else {
        displayed = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeout = setTimeout(type, deleting ? 45 : 80);
    }

    type();
    return () => clearTimeout(timeout);
  });
</script>

<main class="pt-32 pb-20 px-8 max-w-7xl mx-auto space-y-32">
  <!-- Hero Section -->
  <section class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-7 space-y-8">
      <div class="space-y-4">
        <span
          class="text-sm uppercase tracking-widest px-3 py-1"
          style="font-family: 'JetBrains Mono', monospace; color: #4edea3; background: rgba(78,222,163,0.1); border-radius: 0.125rem;"
          >01 // Identity</span
        >
        <h1
          class="text-5xl md:text-7xl font-bold leading-tight tracking-tighter"
          style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
        >
          Backend Engineer.
        </h1>
        <!-- Typewriter line -->
        <p
          class="fade-up-3 font-mono text-sm md:text-base text-white/40 mb-10 h-6"
        >
          Building with <span class="text-accent">{displayed}</span><span
            class="animate-pulse">|</span
          >
        </p>
      </div>
      <div
        class="space-y-6 text-lg leading-relaxed max-w-2xl"
        style="color: #c7c4d8;"
      >
        <p>
          I'm a backend engineer who specialises in <strong
            style="color: #dae2fd; font-weight: 500;">.NET / C#</strong
          > — building RESTful APIs, clean architectures, and systems that are maintainable,
          tested, and production-ready.
        </p>
        <p>
          Frontend is part of the toolkit too: I reach for SvelteKit when a
          project needs a sharp, fast UI.
        </p>
      </div>
    </div>

    <div class="lg:col-span-5 relative group">
      <div
        class="aspect-square overflow-hidden relative"
        style="background: #222a3d; border-radius: 0.25rem;"
      >
        <div
          class="w-full h-full flex items-center justify-center transition-all duration-700"
          style="opacity: 0.4;"
        >
          <span
            class="material-symbols-outlined"
            style="font-size: 10rem; color: #c0c1ff;">terminal</span
          >
        </div>
        <div
          class="absolute inset-0"
          style="background: linear-gradient(to top, #0b1326, transparent);"
        ></div>
      </div>
      <div
        class="absolute -bottom-6 -left-6 p-6 shadow-xl"
        style="background: #171f33; border-left: 4px solid #c0c1ff; border-radius: 0.25rem;"
      >
        <div
          class="text-2xl font-bold"
          style="font-family: 'JetBrains Mono', monospace; color: #c0c1ff;"
        >
          3+
        </div>
        <div
          class="text-xs uppercase tracking-widest"
          style="font-family: 'Space Grotesk', sans-serif; color: #a7b6cc;"
        >
          .NET Experience
        </div>
      </div>
    </div>
  </section>

  <!-- Technical Stack -->
  <section class="space-y-16">
    <div class="text-center space-y-4">
      <span
        class="text-sm uppercase tracking-widest px-3 py-1"
        style="font-family: 'JetBrains Mono', monospace; color: #4edea3; background: rgba(78,222,163,0.1); border-radius: 0.125rem;"
        >02 // Technical Stack</span
      >
      <h2
        class="text-4xl font-bold"
        style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
      >
        The Engineering Toolbox
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {#each [{ icon: "api", title: "Backend (.NET)", tags: ["ASP.NET Core", "C#", "EF Core", "AutoMapper", "REST APIs"] }, { icon: "terminal", title: "Frontend", tags: ["SvelteKit", "React", "Next.js", "Tailwind CSS v4"] }, { icon: "database", title: "Databases", tags: ["PostgreSQL", "SQL Server", "MongoDB", "EF Core"] }, { icon: "build", title: "Tools", tags: ["Git", "xUnit", "Swagger", "Vercel", "Docker"] }] as cat}
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="p-8 space-y-6 transition-colors"
          style="background: #171f33; border-radius: 0.25rem;"
          onmouseenter={(e) => (e.currentTarget.style.background = "#222a3d")}
          onmouseleave={(e) => (e.currentTarget.style.background = "#171f33")}
        >
          <div class="flex items-center gap-4">
            <span
              class="material-symbols-outlined text-3xl"
              style="color: #c0c1ff;">{cat.icon}</span
            >
            <h3
              class="text-xl font-bold"
              style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
            >
              {cat.title}
            </h3>
          </div>
          <div class="flex flex-wrap gap-2">
            {#each cat.tags as tag}
              <span
                class="text-xs px-2 py-1"
                style="font-family: 'JetBrains Mono', monospace; background: #39485a; color: #a7b6cc; border-radius: 0.125rem;"
                >{tag}</span
              >
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Philosophy -->
  <section
    class="overflow-hidden"
    style="background: #131b2e; border-radius: 0.5rem;"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="p-12 space-y-12">
        <div class="space-y-4">
          <span
            class="text-sm uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: #4edea3;"
            >03 // Philosophy</span
          >
          <h2
            class="text-4xl font-bold"
            style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
          >
            How I Build
          </h2>
        </div>
        <div class="space-y-8">
          {#each [{ icon: "layers", color: "#c0c1ff", bg: "rgba(192,193,255,0.1)", title: "Clean Architecture + Vertical Slices", desc: "I apply Clean Architecture for strong domain isolation, and Vertical Slice Architecture for feature cohesion — each slice owns its request, handler, and response end-to-end." }, { icon: "route", color: "#4edea3", bg: "rgba(78,222,163,0.1)", title: "CQRS with MediatR", desc: "Commands and queries are strictly separated via MediatR. Every feature is a self-contained handler — no bloated services, no leaking concerns." }, { icon: "rule", color: "#c0c1ff", bg: "rgba(192,193,255,0.08)", title: "FluentValidation", desc: "Validation lives in dedicated validator classes, not scattered across controllers or services. Rules are expressive, testable, and close to the feature they protect." }, { icon: "verified", color: "#4edea3", bg: "rgba(78,222,163,0.1)", title: "Reliable & Tested", desc: "Unit tests are not optional. I write them, fix them, and refactor until the test suite is a source of confidence, not anxiety." }, { icon: "devices", color: "#a7b6cc", bg: "rgba(57,72,90,0.3)", title: "Frontend When It Counts", desc: "SvelteKit for UIs that need to be fast and maintainable. The backend drives the logic; the frontend surfaces it cleanly." }] as item}
            <div class="flex gap-6">
              <div
                class="w-12 h-12 shrink-0 flex items-center justify-center"
                style="background: {item.bg}; border-radius: 0.25rem;"
              >
                <span
                  class="material-symbols-outlined"
                  style="color: {item.color};">{item.icon}</span
                >
              </div>
              <div>
                <h5
                  class="text-lg font-bold mb-1"
                  style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
                >
                  {item.title}
                </h5>
                <p class="text-sm" style="color: #c7c4d8;">{item.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <div
        class="relative min-h-96 hidden lg:block overflow-hidden"
        style="background: #060e20;"
      >
        <div
          class="absolute inset-8 space-y-2 text-xs"
          style="font-family: 'JetBrains Mono', monospace; color: rgba(167,182,204,0.5);"
        >
          <div class="flex gap-2">
            <span style="color: #4edea3;">➜</span>
            <span>dotnet run --project Api</span>
          </div>
          <div style="color: #e1e0ff;">Building Lucky's backend stack...</div>
          <div
            class="pl-4 ml-2 space-y-1"
            style="border-left: 1px solid rgba(70,69,85,0.3);"
          >
            <div>[OK] ASP.NET Core: RUNNING</div>
            <div>[OK] Entity Framework Core: MIGRATED</div>
            <div>[OK] AutoMapper: CONFIGURED</div>
            <div>[OK] xUnit Tests: ALL PASSING</div>
            <div>[OK] SvelteKit Frontend: DEPLOYED</div>
          </div>
          <div class="mt-4" style="color: #4edea3;">
            Build succeeded. API listening on :5000
          </div>
          <div
            class="mt-8 pt-8 opacity-20"
            style="border-top: 1px solid rgba(70,69,85,0.2); font-size: 0.5rem; line-height: 1;"
          >
            01000011 01101111 01100100 01100101 00100000 01110111 01101001
            01110100 01101000
          </div>
        </div>
        <div
          class="absolute bottom-0 right-0 w-3/4 h-3/4 blur-3xl"
          style="background: linear-gradient(to top left, rgba(192,193,255,0.1), transparent); border-radius: 100% 0 0 0;"
        ></div>
      </div>
    </div>
  </section>
</main>
