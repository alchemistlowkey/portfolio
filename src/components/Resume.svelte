<main class="pt-32 pb-20 px-6 sm:px-8 max-w-5xl mx-auto">
  <!-- Hero -->
  <div
    class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
  >
    <div class="space-y-4">
      <h1
        class="text-5xl md:text-7xl font-bold tracking-tighter"
        style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
      >
        Resume
      </h1>
      <p
        class="text-sm uppercase tracking-widest"
        style="font-family: 'JetBrains Mono', monospace; color: #4edea3;"
      >
        Build Status: <span style="color: #6ffbbe;"
          >Stable // Deployment Ready</span
        >
      </p>
    </div>

    <!-- Download PDF button — links directly to the static PDF -->
    <a
      href="/Lucky_Samuel_Resume.pdf"
      download="Lucky_Samuel_Resume.pdf"
      class="flex items-center gap-2 px-6 py-3 transition-all font-medium group"
      style="background: #222a3d; border: 1px solid rgba(70,69,85,0.2); color: #dae2fd; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif; text-decoration: none;"
      onmouseenter={(e) =>
        (e.currentTarget.style.borderColor = "rgba(192,193,255,0.5)")}
      onmouseleave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(70,69,85,0.2)")}
    >
      <span
        class="material-symbols-outlined transition-transform group-hover:scale-110"
        style="color: #c0c1ff;">download</span
      >
      Download PDF
    </a>
  </div>

  <!-- Resume Canvas -->
  <div
    class="shadow-2xl overflow-hidden"
    style="background: #171f33; border: 1px solid rgba(70,69,85,0.1); border-radius: 0.5rem;"
  >
    <!-- Header -->
    <div
      class="p-10 md:p-16"
      style="border-bottom: 1px solid rgba(70,69,85,0.1); background: #131b2e;"
    >
      <div class="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2
            class="text-4xl font-bold tracking-tight mb-2"
            style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
          >
            Lucky Samuel
          </h2>
          <p
            class="text-lg tracking-tight mb-6"
            style="font-family: 'JetBrains Mono', monospace; color: #c0c1ff;"
          >
            Backend Engineer · .NET / C#
          </p>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm"
            style="color: #c7c4d8;"
          >
            {#each [["mail", "lucky.samuel.egiagbo@gmail.com"], ["location_on", "Lagos, Nigeria 🇳🇬"], ["link", "linkedin.com/in/lucky-samuel"], ["code", "github.com/alchemistlowkey"]] as [icon, text]}
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-xs">{icon}</span>
                {text}
              </div>
            {/each}
          </div>
        </div>
        <div
          class="hidden md:flex w-24 h-24 items-center justify-center"
          style="background: #2d3449; border-radius: 0.25rem; border: 1px solid rgba(192,193,255,0.2);"
        >
          <span
            class="material-symbols-outlined text-4xl"
            style="color: #c0c1ff;">terminal</span
          >
        </div>
      </div>
    </div>

    <div class="p-10 md:p-16 space-y-16">
      <!-- Summary -->
      <section class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <h3
            class="text-xs font-black uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: rgba(78,222,163,0.8);"
          >
            Professional Summary
          </h3>
        </div>
        <div class="md:col-span-3">
          <p class="leading-relaxed text-lg font-light" style="color: #c7c4d8;">
            Backend engineer with 3+ years of experience building
            production-ready APIs and systems in
            <span style="color: #dae2fd; font-weight: 500;"
              >.NET / C# (ASP.NET Core)</span
            >. Specialises in Clean Architecture, Vertical Slice Architecture,
            Microservices with event-driven patterns (RabbitMQ/MassTransit), 
            CQRS with MediatR, FluentValidation, and RESTful API design.
            Frontend-capable in SvelteKit when the project calls for it.
          </p>
        </div>
      </section>

      <!-- Projects -->
      <section class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <h3
            class="text-xs font-black uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: rgba(78,222,163,0.8);"
          >
            Projects
          </h3>
        </div>
        <div class="md:col-span-3 space-y-12">
          {#each [{ title: "Play Microservices", company: "Microservices · .NET 5 / RabbitMQ / MongoDB / Next.js", period: "2026", link: "https://github.com/alchemistlowkey/play.microservices", bullets: ["Event-driven microservices architecture with .NET 5, demonstrating async communication via MassTransit and RabbitMQ.", "Services: Catalog Service (REST API for catalog management), Inventory Service (consumes events, manages inventory).", "Next.js 14 frontend, Docker Compose for MongoDB and RabbitMQ infrastructure.", "Shared Play.Common library with MongoDB repositories and MassTransit extensions."] }, { title: "E-Commerce Platform", company: "Fullstack · ASP.NET Core (C#) + SvelteKit", period: "2025 — PRESENT", link: "https://csharp-ecommerce-frontend.vercel.app", bullets: ["Production-ready e-commerce backend built with ASP.NET Core 10 using Clean Architecture with Repository & Service patterns.", "Features JWT authentication, PostgreSQL with EF Core migrations, Paystack/Flutterwave payment integration, Serilog logging, and Scalar API documentation.", "SvelteKit storefront covering product catalogue, cart management, and order processing."] }, { title: "Expense Tracker", company: "Fullstack · ASP.NET Core (C#) + SvelteKit", period: "2024", link: "https://expense-tracker-mu-eight-84.vercel.app", bullets: ["Clean Architecture ASP.NET Core 10 Web API for personal expense tracking.", "Features JWT auth, EF Core with PostgreSQL, Swagger docs, and layered Repository/Service design.", "SvelteKit frontend for real-time categorisation, filtering, and spending visualisation."] }, { title: "BookStore API", company: "REST API · ASP.NET Core / C#", period: "2024", link: "https://github.com/alchemistlowkey/BookStore.API", bullets: ["Modern, scalable API built with .NET 10 and ASP.NET Core using Vertical Slice Architecture with MediatR for CQRS patterns.", "Features JWT authentication with Keycloak, EF Core, FluentValidation, AutoMapper, Swagger/OpenAPI docs, and comprehensive xUnit + Moq testing.", "Every feature is a self-contained slice — handler, validator, and DTO co-located per feature folder."] }] as job}
            <div class="space-y-4">
              <div
                class="flex flex-col sm:flex-row sm:items-start justify-between gap-2"
              >
                <h4
                  class="text-xl font-bold"
                  style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
                >
                  {job.title}
                  <span style="color: #c7c4d8; font-weight: 400;">·</span>
                  <span
                    style="color: #c7c4d8; font-weight: 400; font-size: 0.95rem;"
                    >{job.company}</span
                  >
                  {#if job.link}
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="ml-2 text-xs"
                      style="color: #4edea3; font-family: 'JetBrains Mono', monospace; font-weight: 400;"
                      >↗ Live</a
                    >
                  {/if}
                </h4>
                <span
                  class="text-xs px-3 py-1 whitespace-nowrap shrink-0"
                  style="font-family: 'JetBrains Mono', monospace; color: #b9c8de; background: #39485a; border-radius: 0.125rem;"
                  >{job.period}</span
                >
              </div>
              <ul class="space-y-3" style="color: #c7c4d8;">
                {#each job.bullets as bullet}
                  <li class="flex gap-3">
                    <span
                      class="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                      style="background: #c0c1ff;"
                    ></span>
                    <span>{bullet}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </section>

      <!-- Skills & Tools -->
      <section class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <h3
            class="text-xs font-black uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: rgba(78,222,163,0.8);"
          >
            Skills & Tools
          </h3>
        </div>
        <div class="md:col-span-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div class="space-y-3">
              {#each [["Backend", "ASP.NET Core, C#, Clean Arch, Vertical Slices"], ["Microservices", "RabbitMQ, MassTransit, Event-Driven, MongoDB"], ["Patterns", "CQRS / MediatR, Repository, FluentValidation"], ["Frontend", "SvelteKit, React, Next.js, Tailwind CSS v4"], ["Database", "PostgreSQL, SQL Server, EF Core, MongoDB"], ["Language", "C#, JavaScript"]] as [label, value]}
                <div>
                  <p
                    class="text-xs uppercase tracking-widest mb-0.5"
                    style="font-family: 'JetBrains Mono', monospace; color: #a7b6cc;"
                  >
                    {label}
                  </p>
                  <p class="text-sm" style="color: #dae2fd;">{value}</p>
                </div>
              {/each}
            </div>
            <div class="space-y-3">
              {#each ["MediatR", "FluentValidation", "AutoMapper", "xUnit + Moq", "Swagger / OpenAPI", "JWT / Keycloak", "Serilog", "Docker", "RabbitMQ", "MassTransit"] as tool}
                <div
                  class="flex items-center gap-3 p-3"
                  style="background: #131b2e; border-radius: 0.25rem; border: 1px solid rgba(70,69,85,0.1);"
                >
                  <span
                    class="material-symbols-outlined text-sm"
                    style="color: #4edea3;">verified</span
                  >
                  <span
                    class="text-xs"
                    style="font-family: 'JetBrains Mono', monospace; color: #dae2fd;"
                    >{tool}</span
                  >
                </div>
              {/each}
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Resume footer strip -->
    <div
      class="px-10 md:px-16 py-8 flex justify-between items-center text-xs uppercase tracking-widest"
      style="background: #060e20; color: #918fa1; font-family: 'JetBrains Mono', monospace;"
    >
      <span>Lucky Samuel</span>
      <span>Reference Available on Request</span>
    </div>
  </div>

  <!-- CTA -->
  <div class="mt-12 flex flex-col items-center gap-6">
    <p style="color: #c7c4d8;">Interested in working together?</p>
    <div class="flex gap-4">
      <a
        href="/contact"
        class="px-8 py-3 font-bold transition-all"
        style="background: #c0c1ff; color: #1000a9; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif;"
        >Contact Now</a
      >
      <a
        href="/Lucky_Samuel_Resume.pdf"
        download="Lucky_Samuel_Resume.pdf"
        class="px-8 py-3 font-bold transition-all"
        style="background: #222a3d; color: #dae2fd; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif; text-decoration: none;"
      >
        Download CV
      </a>
    </div>
  </div>
</main>
