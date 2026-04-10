<main class="pt-32 pb-24 px-8 max-w-7xl mx-auto">
  <header class="mb-20">
    <div
      class="inline-block px-3 py-1 mb-4"
      style="background: #222a3d; border-left: 2px solid #c0c1ff;"
    >
      <span
        class="text-xs uppercase tracking-widest"
        style="font-family: 'JetBrains Mono', monospace; color: #c0c1ff;"
        >Selected Works / 05</span
      >
    </div>
    <h1
      class="text-5xl md:text-7xl font-bold tracking-tight mb-6"
      style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
    >
      Shipped <span style="color: #c0c1ff;">Projects</span>
    </h1>
    <p class="max-w-2xl text-lg leading-relaxed" style="color: #c7c4d8;">
      .NET/C# backends, SvelteKit frontends, and everything in between — built
      clean, tested, and deployed.
    </p>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
    <!-- E-Commerce: Featured Large -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="md:col-span-8 overflow-hidden group"
      style="background: #171f33; border-radius: 0.5rem; border: 1px solid transparent; transition: border-color 0.5s;"
      onmouseenter={(e) =>
        (e.currentTarget.style.borderColor = "rgba(192,193,255,0.2)")}
      onmouseleave={(e) => (e.currentTarget.style.borderColor = "transparent")}
    >
      <div class="p-8 flex flex-col h-full">
        <div class="flex justify-between items-start mb-12">
          <div class="p-4" style="background: #222a3d; border-radius: 0.25rem;">
            <span
              class="material-symbols-outlined text-3xl"
              style="color: #c0c1ff;">storefront</span
            >
          </div>
          <div class="flex gap-4">
            <a
              href="https://csharp-ecommerce-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style="color: #c7c4d8;"
              onmouseenter={(e) => (e.target.style.color = "#c0c1ff")}
              onmouseleave={(e) => (e.target.style.color = "#c7c4d8")}
            >
              <span class="material-symbols-outlined">open_in_new</span>
            </a>
            <a
              href="https://github.com/alchemistlowkey/ECommerce"
              target="_blank"
              rel="noopener noreferrer"
              style="color: #c7c4d8;"
              onmouseenter={(e) => (e.target.style.color = "#c0c1ff")}
              onmouseleave={(e) => (e.target.style.color = "#c7c4d8")}
            >
              <span class="material-symbols-outlined">code</span>
            </a>
          </div>
        </div>
        <div class="mt-auto">
          <div class="flex items-center gap-3 mb-4">
            <span
              class="px-2 py-0.5 text-xs uppercase tracking-wider"
              style="border-radius: 0.125rem; background: rgba(78,222,163,0.15); color: #4edea3; font-family: 'JetBrains Mono', monospace; border: 1px solid rgba(78,222,163,0.3);"
              >Featured</span
            >
            <span
              class="px-2 py-0.5 text-xs uppercase tracking-wider"
              style="border-radius: 0.125rem; background: #39485a; color: #a7b6cc; font-family: 'JetBrains Mono', monospace;"
              >Fullstack</span
            >
          </div>
          <h3
            class="text-3xl font-bold mb-4"
            style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
          >
            E-Commerce Platform
          </h3>
          <p
            class="text-sm max-w-xl leading-relaxed mb-6"
            style="color: #c7c4d8;"
          >
            Full e-commerce solution — Powered by a robust, production-ready <span
              class="font-extrabold text-white">ASP.NET Core 10</span
            > e-commerce backend API using Clean Architecture with Repository & Service
            patterns. Features JWT authentication, PostgreSQL with EF Core migrations,
            Paystack/Flutterwave payments, Serilog logging, and Scalar API documentation
          </p>
          <div class="flex flex-wrap gap-2 mb-6">
            {#each ["C# / .NET", "ASP.NET Core", "SvelteKit", "Tailwind CSS", "EF Core"] as tag}
              <span
                class="px-2 py-1 uppercase tracking-tighter text-xs"
                style="font-family: 'JetBrains Mono', monospace; background: #39485a; color: #a7b6cc; border-radius: 0.125rem;"
                >{tag}</span
              >
            {/each}
          </div>
          <div class="flex gap-4">
            <a
              href="https://csharp-ecommerce-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm group/link"
              style="color: #4edea3; font-family: 'JetBrains Mono', monospace;"
            >
              LIVE_DEMO <span
                class="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
                >open_in_new</span
              >
            </a>
            <a
              href="https://github.com/alchemistlowkey/ECommerce"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm group/link ml-4"
              style="color: #c0c1ff; font-family: 'JetBrains Mono', monospace;"
            >
              SOURCE <span
                class="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
                >code</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Expense Tracker -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="md:col-span-4 p-8 flex flex-col transition-colors"
      style="background: #131b2e; border-radius: 0.5rem;"
      onmouseenter={(e) => (e.currentTarget.style.background = "#171f33")}
      onmouseleave={(e) => (e.currentTarget.style.background = "#131b2e")}
    >
      <div class="flex justify-between items-start mb-8">
        <span class="material-symbols-outlined text-4xl" style="color: #4edea3;"
          >account_balance_wallet</span
        >
        <a
          href="https://expense-tracker-mu-eight-84.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 transition-all"
          style="background: #222a3d; border-radius: 0.25rem;"
          onmouseenter={(e) => {
            e.currentTarget.style.background = "#4edea3";
            e.currentTarget.querySelector(
              ".material-symbols-outlined",
            ).style.color = "#003824";
          }}
          onmouseleave={(e) => {
            e.currentTarget.style.background = "#222a3d";
            e.currentTarget.querySelector(
              ".material-symbols-outlined",
            ).style.color = "#dae2fd";
          }}
        >
          <span
            class="material-symbols-outlined text-sm"
            style="color: #dae2fd;">open_in_new</span
          >
        </a>
      </div>
      <h3
        class="text-2xl font-bold mb-4"
        style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
      >
        Expense Tracker
      </h3>
      <p class="text-sm leading-relaxed mb-8" style="color: #c7c4d8;">
        <span class="font-extrabold text-white"
          >Clean Architecture ASP.NET Core 10 Web API</span
        > for personal expense tracking. Features JWT auth, EF Core PostgreSQL, Swagger
        docs, layered design (Repository/Service patterns).
      </p>
      <div class="mt-auto">
        <div class="flex flex-wrap gap-2 mb-6">
          {#each ["C# / .NET", "SvelteKit", "Tailwind CSS"] as tag}
            <span
              class="px-2 py-1 uppercase tracking-tighter text-xs"
              style="font-family: 'JetBrains Mono', monospace; background: #39485a; color: #a7b6cc; border-radius: 0.125rem;"
              >{tag}</span
            >
          {/each}
        </div>
        <a
          href="https://expense-tracker-mu-eight-84.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-bold flex items-center gap-2 group"
          style="font-family: 'Space Grotesk', sans-serif; color: #4edea3;"
        >
          Live Demo <span
            class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1"
            >arrow_forward</span
          >
        </a>
      </div>
    </div>

    <!-- Invoicely -->
    <div
      class="md:col-span-5 p-8 flex flex-col justify-between"
      style="background: #222a3d; border-radius: 0.5rem;"
    >
      <div>
        <div class="flex items-center justify-between mb-6">
          <span
            class="material-symbols-outlined text-3xl"
            style="color: #c0c1ff;">receipt_long</span
          >
          <span
            class="text-xs px-2 py-1 uppercase"
            style="font-family: 'JetBrains Mono', monospace; background: rgba(192,193,255,0.1); color: #c0c1ff; border-radius: 0.125rem; border: 1px solid rgba(192,193,255,0.2);"
            >In Progress</span
          >
        </div>
        <h3
          class="text-2xl font-bold mb-2"
          style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
        >
          Invoicely
        </h3>
        <p class="text-sm mb-6 leading-relaxed" style="color: #c7c4d8;">
          Full-featured invoicing platform in SvelteKit — client management,
          real-time PDF previews, and a responsive dashboard built with Tailwind
          v4.
        </p>
      </div>
      <div>
        <ul class="space-y-2 mb-6">
          {#each ["Client management", "Real-time PDF preview", "Svelte stores for shared state", "Mobile-responsive layout"] as item}
            <li class="flex items-center gap-3 text-xs" style="color: #c7c4d8;">
              <span
                class="material-symbols-outlined text-sm"
                style="color: #4edea3;">check_circle</span
              >
              {item}
            </li>
          {/each}
        </ul>
        <div class="flex justify-between items-start">
          <div class="flex flex-wrap gap-2">
            {#each ["SvelteKit", "Tailwind v4", "Node.js"] as tag}
              <span
                class="px-2 py-1 uppercase tracking-tighter text-xs"
                style="font-family: 'JetBrains Mono', monospace; background: #39485a; color: #a7b6cc; border-radius: 0.125rem;"
                >{tag}</span
              >
            {/each}
          </div>
          <a
            href="https://invoicelyapp-gen.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 transition-all ml-4 shrink-0"
            style="background: #2d3449; border-radius: 0.5rem;"
            onmouseenter={(e) => {
              e.currentTarget.style.background = "#c0c1ff";
              e.currentTarget.querySelector(
                ".material-symbols-outlined",
              ).style.color = "#1000a9";
            }}
            onmouseleave={(e) => {
              e.currentTarget.style.background = "#2d3449";
              e.currentTarget.querySelector(
                ".material-symbols-outlined",
              ).style.color = "#dae2fd";
            }}
          >
            <span class="material-symbols-outlined" style="color: #dae2fd;"
              >open_in_new</span
            >
          </a>
        </div>
      </div>
    </div>

    <!-- BookStore API -->
    <div
      class="md:col-span-7 overflow-hidden relative group"
      style="background: #171f33; border-radius: 0.5rem;"
    >
      <div
        class="absolute top-0 right-0 w-1/3 h-full pointer-events-none"
        style="background: linear-gradient(to left, rgba(192,193,255,0.05), transparent);"
      ></div>
      <div class="p-8 relative z-10 h-full flex flex-col">
        <div class="mb-6 flex items-center gap-4">
          <div
            class="w-12 h-12 flex items-center justify-center"
            style="background: rgba(192,193,255,0.1); border-radius: 0.25rem;"
          >
            <span class="material-symbols-outlined" style="color: #c0c1ff;"
              >library_books</span
            >
          </div>
          <div>
            <h3
              class="text-2xl font-bold"
              style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
            >
              BookStore API
            </h3>
            <span
              class="text-xs uppercase tracking-widest"
              style="font-family: 'JetBrains Mono', monospace; color: #a7b6cc;"
              >Backend · .NET / C#</span
            >
          </div>
        </div>
        <p class="text-sm mb-6 grow leading-relaxed" style="color: #c7c4d8;">
          A modern, scalable <span class="font-extrabold text-white"
            >BookStore API</span
          >
          built with
          <span class="font-extrabold text-white">.NET 10</span>,
          <span class="font-extrabold text-white">ASP.NET Core</span>, and
          <span class="font-extrabold text-white">Clean Architecture</span>
          using
          <span class="font-extrabold text-white"
            >Vertical Slice Architecture</span
          > with MediatR for CQRS patterns. Features JWT authentication with Keycloak,
          EF Core, FluentValidation, AutoMapper, Swagger/OpenAPI docs, and comprehensive
          testing
        </p>
        <div class="flex items-center justify-between">
          <div class="flex flex-wrap gap-2">
            {#each ["ASP.NET Core", "C#", "EF Core", "AutoMapper", "xUnit"] as tag}
              <span
                class="px-2 py-1 uppercase tracking-tighter text-xs"
                style="font-family: 'JetBrains Mono', monospace; background: #39485a; color: #a7b6cc; border-radius: 0.125rem;"
                >{tag}</span
              >
            {/each}
          </div>
          <a
            href="https://github.com/alchemistlowkey/BookStore.API"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 transition-all ml-4 shrink-0"
            style="background: #2d3449; border-radius: 0.5rem;"
            onmouseenter={(e) => {
              e.currentTarget.style.background = "#c0c1ff";
              e.currentTarget.querySelector(
                ".material-symbols-outlined",
              ).style.color = "#1000a9";
            }}
            onmouseleave={(e) => {
              e.currentTarget.style.background = "#2d3449";
              e.currentTarget.querySelector(
                ".material-symbols-outlined",
              ).style.color = "#dae2fd";
            }}
          >
            <span class="material-symbols-outlined" style="color: #dae2fd;"
              >open_in_new</span
            >
          </a>
        </div>
      </div>
    </div>

    <!-- Play Microservices -->
    <div
      class="md:col-span-6 p-8 flex flex-col justify-between"
      style="background: #171f33; border-radius: 0.5rem; border: 1px solid rgba(192,193,255,0.15);"
    >
      <div>
        <div class="flex items-center justify-between mb-6">
          <div
            class="w-12 h-12 flex items-center justify-center"
            style="background: rgba(192,193,255,0.1); border-radius: 0.25rem;"
          >
            <span class="material-symbols-outlined text-2xl" style="color: #c0c1ff;"
              >dns</span
            >
          </div>
          <div class="flex gap-3">
            <a
              href="https://github.com/alchemistlowkey/play.microservices"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 transition-all"
              style="background: #222a3d; border-radius: 0.25rem;"
              onmouseenter={(e) => {
                e.currentTarget.style.background = "#c0c1ff";
                e.currentTarget.querySelector(
                  ".material-symbols-outlined",
                ).style.color = "#1000a9";
              }}
              onmouseleave={(e) => {
                e.currentTarget.style.background = "#222a3d";
                e.currentTarget.querySelector(
                  ".material-symbols-outlined",
                ).style.color = "#dae2fd";
              }}
            >
              <span
                class="material-symbols-outlined text-sm"
                style="color: #dae2fd;">code</span
              >
            </a>
          </div>
        </div>
        <h3
          class="text-2xl font-bold mb-2"
          style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
        >
          Play Microservices
        </h3>
        <p class="text-sm mb-6 leading-relaxed" style="color: #c7c4d8;">
          A .NET 5 microservices architecture demonstrating event-driven communication
          with <span class="font-extrabold text-white">MongoDB</span> and
          <span class="font-extrabold text-white">RabbitMQ</span> via MassTransit.
          Features Catalog and Inventory services with Next.js frontend.
        </p>
        <ul class="space-y-2 mb-6">
          {#each ["Event-driven architecture", "MongoDB repositories", "RabbitMQ message broker", "Docker Compose infra"] as item}
            <li class="flex items-center gap-3 text-xs" style="color: #c7c4d8;">
              <span
                class="material-symbols-outlined text-sm"
                style="color: #4edea3;">check_circle</span
              >
              {item}
            </li>
          {/each}
        </ul>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex flex-wrap gap-2">
          {#each [".NET 5", "MongoDB", "RabbitMQ", "Next.js 14"] as tag}
            <span
              class="px-2 py-1 uppercase tracking-tighter text-xs"
              style="font-family: 'JetBrains Mono', monospace; background: #39485a; color: #a7b6cc; border-radius: 0.125rem;"
              >{tag}</span
          >
          {/each}
        </div>
        <span
          class="text-xs uppercase tracking-widest"
          style="font-family: 'JetBrains Mono', monospace; color: #4edea3;"
          >Just Shipped</span
        >
      </div>
    </div>

    <!-- Terminal: git log -->
    <div
      class="md:col-span-6 p-6 text-xs"
      style="background: #060e20; border-radius: 0.5rem; font-family: 'JetBrains Mono', monospace; border: 1px solid rgba(70,69,85,0.1);"
    >
      <div
        class="flex items-center gap-2 mb-4 pb-3"
        style="border-bottom: 1px solid rgba(70,69,85,0.1);"
      >
        <div class="flex gap-1.5">
          <div
            class="w-2.5 h-2.5 rounded-full"
            style="background: rgba(255,180,171,0.4);"
          ></div>
          <div
            class="w-2.5 h-2.5 rounded-full"
            style="background: rgba(192,193,255,0.4);"
          ></div>
          <div
            class="w-2.5 h-2.5 rounded-full"
            style="background: rgba(78,222,163,0.4);"
          ></div>
        </div>
        <span class="ml-2" style="color: rgba(167,182,204,0.5);"
          >~/@alchemistlowkey</span
        >
      </div>
      <div class="space-y-1">
        <p style="color: #b9c8de;"># Backend Engineer</p>
        <p style="color: #c7c4d8;">
          <span style="color: #c0c1ff;">$</span> git log --oneline --author="Lucky"
        </p>
        <p style="color: rgba(167,182,204,0.6);">
          feat: play microservices — event-driven .NET services
        </p>
        <p style="color: rgba(167,182,204,0.6);">
          feat: product catalogue & cart — ecommerce API
        </p>
        <p style="color: rgba(167,182,204,0.6);">
          feat: expense categories + chart endpoint
        </p>
        <p style="color: rgba(167,182,204,0.6);">
          fix: unit test typo in BookStore.API
        </p>
        <p style="color: rgba(167,182,204,0.6);">
          feat: PDF export — Invoicely
        </p>
        <p style="color: rgba(167,182,204,0.6);">
          feat: responsive sidebar with Svelte store
        </p>
        <p style="color: #4edea3;">∞ commits and counting...</p>
      </div>
      <div class="mt-8">
        <h3
          class="text-xl font-bold mb-2"
          style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
        >
          @alchemistlowkey
        </h3>
        <p
          class="text-sm leading-relaxed mb-4"
          style="font-family: 'Inter', sans-serif; color: #c7c4d8;"
        >
          Building in public. Always learning, always shipping.
        </p>
        <div class="flex gap-2">
          {#each [".NET", "C#", "SvelteKit"] as tag}
            <span
              class="px-2 py-1 uppercase tracking-tighter"
              style="background: #39485a; color: #a7b6cc; border-radius: 0.125rem;"
              >{tag}</span
            >
          {/each}
        </div>
      </div>
    </div>

    <!-- Portfolio v1 -->
    <div
      class="md:col-span-6 p-8"
      style="background: #171f33; border-radius: 0.5rem; border-right: 4px solid #4edea3;"
    >
      <div class="flex flex-col h-full">
        <div class="flex items-center gap-3 mb-4">
          <span
            class="material-symbols-outlined text-2xl"
            style="color: #4edea3;">web</span
          >
          <h3
            class="text-2xl font-bold"
            style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
          >
            Portfolio v1
          </h3>
        </div>
        <p class="text-sm mb-6 leading-relaxed" style="color: #c7c4d8;">
          Previous portfolio iteration with polished motion design, dark mode
          toggle, and SSG deployment via Vercel.
        </p>
        <ul class="space-y-2 mb-8 grow">
          {#each ["Next.js + Framer Motion", "Dark / light mode toggle", "Static site generation", "Deployed on Vercel"] as item}
            <li class="flex items-center gap-3 text-xs" style="color: #c7c4d8;">
              <span
                class="material-symbols-outlined text-sm"
                style="color: #4edea3;">check_circle</span
              >
              {item}
            </li>
          {/each}
        </ul>
        <div class="flex items-center justify-between mt-auto">
          <div class="flex gap-2">
            {#each ["Next.js", "Framer Motion"] as tag}
              <span
                class="px-2 py-1 uppercase tracking-tighter text-xs"
                style="font-family: 'JetBrains Mono', monospace; background: #39485a; color: #a7b6cc; border-radius: 0.125rem;"
                >{tag}</span
              >
            {/each}
          </div>
          <span
            class="text-xs uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: rgba(167,182,204,0.5);"
            >Shipped</span
          >
        </div>
      </div>
    </div>
  </div>

  <!-- CTA -->
  <section
    class="mt-32 p-12 text-center"
    style="background: #131b2e; border-radius: 0.5rem;"
  >
    <h2
      class="text-3xl font-bold mb-4"
      style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
    >
      Want to build something together?
    </h2>
    <p class="mb-8 max-w-xl mx-auto" style="color: #c7c4d8;">
      Open to backend engineering roles, .NET consulting, and interesting
      projects. Let's talk.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="/contact"
        class="px-8 py-3 font-bold transition-all"
        style="background: #c0c1ff; color: #1000a9; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif;"
        >Let's Talk</a
      >
      <a
        href="https://github.com/alchemistlowkey"
        target="_blank"
        rel="noopener noreferrer"
        class="px-8 py-3 font-bold transition-all"
        style="background: #2d3449; color: #dae2fd; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif;"
        >GitHub Profile ↗</a
      >
    </div>
  </section>
</main>
