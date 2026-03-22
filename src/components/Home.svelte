<script>
  import Marquee from "./Marquee.svelte";
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

<main class="pt-24">
  <!-- Hero Section -->
  <section
    class="max-w-7xl mx-auto px-8 py-20 md:py-32 flex flex-col lg:flex-row items-center gap-16"
  >
    <div class="lg:w-3/5 space-y-8">
      <div
        class="inline-flex items-center gap-2 px-3 py-1"
        style="border-radius: 0.125rem; background: #131b2e; border: 1px solid rgba(70,69,85,0.15);"
      >
        <span class="w-2 h-2 rounded-full" style="background: #4edea3;"></span>
        <span
          class="uppercase tracking-widest text-xs"
          style="font-family: 'JetBrains Mono', monospace; color: #4edea3;"
          >Available for Work</span
        >
      </div>

      <h1
        class="text-5xl md:text-7xl font-bold leading-tight tracking-tighter"
        style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
      >
        Backend Engineer.
        <!-- <span style="color: #c0c1ff;">.NET &amp; C#</span> -->
      </h1>

      <!-- Typewriter line -->
      <p
        class="fade-up-3 font-mono text-sm md:text-base text-white/40 mb-10 h-6"
      >
        Building with <span class="text-accent">{displayed}</span><span
          class="animate-pulse">|</span
        >
      </p>

      <p
        class="text-lg md:text-xl leading-relaxed max-w-2xl"
        style="color: #c7c4d8;"
      >
        I build robust, production-ready backends in <strong
          style="color: #dae2fd;">.NET / C#</strong
        > — clean architecture, RESTful APIs, and scalable systems. Frontend when
        it counts, with SvelteKit.
      </p>

      <div class="flex flex-wrap gap-4 pt-4">
        <a
          href="/projects"
          class="px-8 py-4 font-semibold flex items-center gap-2 transition-all"
          style="background: #c0c1ff; color: #1000a9; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif;"
          onmouseenter={(e) => (e.currentTarget.style.background = "#4b4dd8")}
          onmouseleave={(e) => (e.currentTarget.style.background = "#c0c1ff")}
        >
          View My Projects
          <span class="material-symbols-outlined transition-transform"
            >arrow_forward</span
          >
        </a>
        <a
          href="https://github.com/alchemistlowkey"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-4 font-semibold transition-all cursor-pointer"
          style="border-radius: 0.25rem; border: 1px solid rgba(70,69,85,0.3); color: #dae2fd; background: transparent;"
          onmouseenter={(e) => (e.currentTarget.style.background = "#222a3d")}
          onmouseleave={(e) =>
            (e.currentTarget.style.background = "transparent")}
        >
          Documentation
        </a>
      </div>
    </div>

    <!-- Terminal Visual -->
    <div class="lg:w-2/5 w-full">
      <div
        class="shadow-2xl overflow-hidden"
        style="background: #060e20; border-radius: 0.5rem; padding: 4px;"
      >
        <div
          class="p-4 flex items-center gap-2"
          style="background: #131b2e; border-bottom: 1px solid rgba(70,69,85,0.1);"
        >
          <div class="flex gap-1.5">
            <div
              class="w-3 h-3 rounded-full"
              style="background: rgba(255,180,171,0.4);"
            ></div>
            <div
              class="w-3 h-3 rounded-full"
              style="background: rgba(57,72,90,0.4);"
            ></div>
            <div
              class="w-3 h-3 rounded-full"
              style="background: rgba(78,222,163,0.4);"
            ></div>
          </div>
          <div
            class="mx-auto text-xs"
            style="font-family: 'JetBrains Mono', monospace; color: rgba(167,182,204,0.6);"
          >
            bash — stack.sh
          </div>
        </div>
        <div
          class="p-6 space-y-3"
          style="font-family: 'JetBrains Mono', monospace; font-size: 0.875rem; line-height: 1.6;"
        >
          <div class="flex gap-3">
            <span style="color: #4edea3;">➜</span>
            <span style="color: #dae2fd;">fetch --core-stack</span>
          </div>
          <div class="pl-6 space-y-1">
            {#each [["Primary", ".NET / C# / ASP.NET Core"], ["Frontend", "SvelteKit / React/Next.Js"], ["Language", "C# / JS"], ["Database", "PostgreSQL / SQL Server / MongoDB"]] as [key, val]}
              <div class="flex justify-between">
                <span style="color: #b9c8de;">{key}</span>
                <span style="color: #c0c1ff;">{val}</span>
              </div>
            {/each}
          </div>
          <div class="flex gap-3 pt-2">
            <span style="color: #4edea3;">➜</span>
            <span class="animate-pulse" style="color: #dae2fd;">_</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Marquee />

  <!-- Bento Grid Projects -->
  <section style="background: #131b2e; padding: 6rem 0;">
    <div class="max-w-7xl mx-auto px-8">
      <div
        class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
      >
        <div>
          <h2
            class="text-sm uppercase tracking-widest mb-4"
            style="font-family: 'JetBrains Mono', monospace; color: #4edea3; letter-spacing: 0.3em;"
          >
            Production Ready
          </h2>
          <h3
            class="text-4xl font-bold"
            style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
          >
            Shipped Projects
          </h3>
        </div>
        <p class="max-w-sm" style="color: #c7c4d8;">
          Engineered for uptime, security, and developer ergonomics.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Featured Project 1 -->
        <div
          class="md:col-span-8 overflow-hidden group"
          style="background: #222a3d; border-radius: 0.5rem;"
        >
          <div class="relative h-96 overflow-hidden">
            <div
              class="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
            >
              <img src="/ecommerce.png" alt="" />
            </div>
          </div>
          <div class="p-8">
            <div class="flex gap-2 mb-4">
              {#each ["Fullstack", "Featured"] as tag}
                <span
                  class="px-2 py-0.5 text-xs uppercase tracking-wider"
                  style="border-radius: 0.125rem; background: #39485a; color: #a7b6cc; font-family: 'JetBrains Mono', monospace;"
                  >{tag}</span
                >
              {/each}
            </div>
            <h4
              class="text-2xl font-bold mb-2"
              style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
            >
              E-Commerce Platform
            </h4>
            <p class="mb-6" style="color: #c7c4d8;">
              Full e-commerce solution — Powered by a robust, production-ready <span
                class="font-extrabold text-white">ASP.NET Core 10</span
              > e-commerce backend API using Clean Architecture with Repository &
              Service patterns. Features JWT authentication, PostgreSQL with EF Core
              migrations, Paystack/Flutterwave payments, Serilog logging, and Scalar
              API documentation
            </p>
            <a
              href="https://csharp-ecommerce-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm group/link"
              style="color: #c0c1ff; font-family: 'JetBrains Mono', monospace;"
            >
              LIVE_DEMO <span
                class="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
                >open_in_new</span
              >
            </a>
          </div>
        </div>

        <!-- Side Card 1 -->
        <div
          class="md:col-span-4 p-8 flex flex-col justify-between"
          style="background: #222a3d; border-radius: 0.5rem;"
        >
          <div>
            <span
              class="material-symbols-outlined text-4xl mb-6 block"
              style="color: #4edea3;">account_balance_wallet</span
            >
            <h4
              class="text-xl font-bold mb-2"
              style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
            >
              Expense Tracker
            </h4>
            <p class="text-sm leading-relaxed" style="color: #c7c4d8;">
              <span class="font-extrabold text-white"
                >Clean Architecture ASP.NET Core 10 Web API</span
              > for personal expense tracking. Features JWT auth, EF Core PostgreSQL,
              Swagger docs, layered design (Repository/Service patterns).
            </p>
          </div>
          <div class="pt-8 flex flex-wrap gap-2">
            {#each [".NET", "C#", "SvelteKit"] as tag}
              <span
                class="text-xs"
                style="font-family: 'JetBrains Mono', monospace; color: rgba(167,182,204,0.6);"
                >{tag}</span
              >
            {/each}
          </div>
          <div class="relative h-72 overflow-hidden mt-5">
            <div
              class="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
            >
              <img
                src="/expenseTracker.png"
                alt="expense tracker pics"
                class=""
              />
            </div>
          </div>
          <a
            href="https://expense-tracker-mu-eight-84.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm group/link"
            style="color: #c0c1ff; font-family: 'JetBrains Mono', monospace;"
          >
            LIVE_DEMO <span
              class="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
              >open_in_new</span
            >
          </a>
        </div>

        <!-- Side Card 2 -->
        <div
          class="md:col-span-4 p-8 flex flex-col justify-between"
          style="background: #222a3d; border-radius: 0.5rem;"
        >
          <div>
            <span
              class="material-symbols-outlined text-4xl mb-6 block"
              style="color: #c0c1ff;">receipt_long</span
            >
            <h4
              class="text-xl font-bold mb-2"
              style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
            >
              Invoicely
            </h4>
            <p class="text-sm leading-relaxed" style="color: #c7c4d8;">
              Full-featured invoicing platform in SvelteKit — client management,
              PDF previews, and a dashboard built with Tailwind v4.
            </p>
          </div>
          <div class="pt-8">
            <div
              class="w-full h-1 rounded-full overflow-hidden"
              style="background: #060e20;"
            >
              <div
                class="h-full"
                style="background: #c0c1ff; width: 100%;"
              ></div>
            </div>
            <span
              class="text-xs mt-2 block uppercase"
              style="font-family: 'JetBrains Mono', monospace; color: rgba(167,182,204,0.6);"
              >Status: Completed</span
            >
          </div>
          <a
            href="https://invoicelyapp-gen.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center text-sm group/link mt-3"
            style="color: #c0c1ff; font-family: 'JetBrains Mono', monospace;"
          >
            LIVE_DEMO <span
              class="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
              >open_in_new</span
            >
          </a>
        </div>

        <!-- Featured Project 2 -->
        <div
          class="md:col-span-8 p-1"
          style="background: #171f33; border-radius: 0.5rem;"
        >
          <div
            class="p-8 flex flex-col md:flex-row gap-8 items-center h-full"
            style="background: #222a3d; border-radius: 0.375rem;"
          >
            <div class="flex-1">
              <h4
                class="text-xl font-bold mb-2"
                style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
              >
                BookStore API
              </h4>
              <p class="text-sm leading-relaxed mb-6" style="color: #c7c4d8;">
                A modern, scalable <span class="font-extrabold text-white"
                  >BookStore API</span
                >
                built with
                <span class="font-extrabold text-white">.NET 10</span>,
                <span class="font-extrabold text-white">ASP.NET Core</span>, and
                <span class="font-extrabold text-white">Clean Architecture</span
                >
                using
                <span class="font-extrabold text-white"
                  >Vertical Slice Architecture</span
                > with MediatR for CQRS patterns. Features JWT authentication with
                Keycloak, EF Core, FluentValidation, AutoMapper, Swagger/OpenAPI
                docs, and comprehensive testing
              </p>
              <a
                href="https://github.com/alchemistlowkey/BookStore.API"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs py-2 px-4 transition-colors inline-block"
                style="font-family: 'JetBrains Mono', monospace; background: #131b2e; color: #dae2fd; border-radius: 0.25rem; border: 1px solid rgba(70,69,85,0.2);"
              >
                VIEW_REPO ↗
              </a>
            </div>
            <div class="flex-1 grid grid-cols-2 gap-4">
              <div
                class="p-4 text-center"
                style="background: #131b2e; border-radius: 0.25rem;"
              >
                <div
                  class="text-2xl font-bold"
                  style="color: #4edea3; font-family: 'JetBrains Mono', monospace;"
                >
                  10+
                </div>
                <div
                  class="text-xs uppercase tracking-widest"
                  style="font-family: 'JetBrains Mono', monospace; color: #c7c4d8;"
                >
                  APIS BUILT
                </div>
              </div>
              <div
                class="p-4 text-center"
                style="background: #131b2e; border-radius: 0.25rem;"
              >
                <div
                  class="text-2xl font-bold"
                  style="color: #c0c1ff; font-family: 'JetBrains Mono', monospace;"
                >
                  3+
                </div>
                <div
                  class="text-xs uppercase tracking-widest"
                  style="font-family: 'JetBrains Mono', monospace; color: #c7c4d8;"
                >
                  YRS EXP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Philosophy Section -->
  <section class="py-24 max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div class="space-y-12">
        <div>
          <h2
            class="text-4xl font-bold mb-6"
            style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
          >
            The Backend Philosophy
          </h2>
          <p class="leading-relaxed" style="color: #c7c4d8;">
            I write .NET backends with intention — clean architecture, vertical
            slices, CQRS, and APIs that are a pleasure to consume. These
            principles guide every project:
          </p>
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
        class="relative p-8"
        style="background: #171f33; border-radius: 1rem;"
      >
        <div
          class="absolute -top-4 -right-4 px-4 py-2 text-xs shadow-lg"
          style="background: #c0c1ff; color: #1000a9; font-family: 'JetBrains Mono', monospace; border-radius: 0.25rem;"
        >
          BUILD: PASSING
        </div>
        <div class="space-y-6">
          {#each [{ accent: "#c0c1ff", label: "// Clean / Vertical Slice", lines: ["pattern: clean_architecture", "slices: feature_per_folder", "separation: domain | app | infra"] }, { accent: "#4edea3", label: "// CQRS via MediatR", lines: ["mediator: MediatR", "commands: IRequest<T>", "queries: IRequest<T>", "handlers: IRequestHandler<T>"] }, { accent: "#c0c1ff", label: "// FluentValidation", lines: ["validator: AbstractValidator<T>", "pipeline: ValidationBehavior", "rules: expressive + testable"] }, { accent: "#918fa1", label: "// Supporting Stack", lines: ["orm: entity_framework_core", "mapper: automapper", "tests: xUnit + Moq", "docs: swagger / openapi"] }] as block}
            <div
              class="p-6"
              style="background: #131b2e; border-radius: 0.5rem; border-left: 4px solid {block.accent};"
            >
              <div
                class="text-xs mb-2"
                style="font-family: 'JetBrains Mono', monospace; color: {block.accent};"
              >
                {block.label}
              </div>
              <div
                class="text-sm"
                style="font-family: 'JetBrains Mono', monospace; color: #c7c4d8;"
              >
                {#each block.lines as line}<div>{line}</div>{/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="max-w-7xl mx-auto px-8 py-24 text-center">
    <div
      class="relative overflow-hidden p-16"
      style="background: #222a3d; border-radius: 1.5rem;"
    >
      <div
        class="absolute inset-0 opacity-10 pointer-events-none"
        style="background-image: radial-gradient(circle at 2px 2px, #c0c1ff 1px, transparent 0); background-size: 40px 40px;"
      ></div>
      <h2
        class="text-4xl md:text-5xl font-bold mb-6 relative z-10"
        style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
      >
        Ready to build the future?
      </h2>
      <p
        class="text-lg mb-10 max-w-xl mx-auto relative z-10"
        style="color: #c7c4d8;"
      >
        Open to backend engineering roles, .NET consulting, and interesting
        projects. Let's talk.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
        <a
          href="/contact"
          class="px-10 py-4 font-bold transition-all"
          style="background: #4edea3; color: #003824; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif;"
          onmouseenter={(e) => (e.currentTarget.style.background = "#006e4b")}
          onmouseleave={(e) => (e.currentTarget.style.background = "#4edea3")}
        >
          Initiate Connection
        </a>
        <a
          href="/resume"
          class="px-10 py-4 font-bold transition-all"
          style="background: #060e20; color: #dae2fd; border-radius: 0.25rem; border: 1px solid rgba(70,69,85,0.3); font-family: 'Space Grotesk', sans-serif;"
          onmouseenter={(e) => (e.currentTarget.style.background = "#131b2e")}
          onmouseleave={(e) => (e.currentTarget.style.background = "#060e20")}
        >
          Download CV
        </a>
      </div>
    </div>
  </section>
</main>
