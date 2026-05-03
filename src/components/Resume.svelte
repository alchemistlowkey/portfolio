<script>
  const resumeProjects = [
    {
      title: "HealthBridge",
      company: "Multi-Tenant Healthcare Platform · .NET 10 / Microservices / Keycloak / MongoDB",
      period: "2025 – PRESENT",
      link: null,
      bullets: [
        "Architecting and building a cloud-native, multi-tenant healthcare management platform for hospitals, patients, and HMO organisations in Nigeria/West Africa, targeting 50+ hospital tenants and sub-200ms P95 API response times.",
        "Designed a 7-service Microservices topology (Hospital, Patient, HMO, Appointment, Billing, Notification, Gateway) each internally structured with Vertical Slice Architecture and CQRS + MediatR — every feature is a self-contained slice with co-located handler, validator, request/response DTOs, and endpoint definition.",
        "Implemented a robust self-service tenant onboarding system: auto-generates unique tenant slugs via atomic MongoDB sequence increments (FindOneAndUpdate + $inc), records ownership in a tenant_registry, and stamps tenant_id onto the user's Keycloak account via the Admin REST API — with full rollback if the Keycloak call fails.",
        "Resolved a critical multi-tenancy correctness bug: enforced a single authoritative JWT-resolved tenant source (ITenantContext) across all repository queries, eliminating silent cross-collection data leakage between write and read paths.",
        "Wired Keycloak JWT authentication with correct role claim mapping from nested realm_access.roles; configured Swagger with both Bearer and OAuth2 security schemes and EnablePersistAuthorization() for reliable API testing.",
        "Built event-driven Notification Worker consuming RabbitMQ domain events (appointment booked, invoice generated, patient enrolled, etc.) via MassTransit consumers — purely event-driven background service with dead letter queue configured.",
        "Integrated Cloudinary for per-tenant scoped media uploads and Serilog + Seq for structured observability across all services.",
      ],
    },
    {
      title: "E-Commerce Platform",
      company: "Fullstack · ASP.NET Core 10 (C#) + SvelteKit",
      period: "2025 – PRESENT",
      link: "https://csharp-ecommerce-frontend.vercel.app",
      bullets: [
        "Built a production-ready, high-volume e-commerce web application using ASP.NET Core 10 with Clean Architecture (Repository & Service patterns) and PostgreSQL with EF Core migrations.",
        "Implemented JWT authentication; integrated Paystack and Flutterwave payment gateways with robust error handling and webhook processing; added Serilog structured logging and Scalar OpenAPI documentation.",
        "Developed SvelteKit storefront for product catalogue, cart management, and order processing with real-time cart synchronisation.",
      ],
    },
    {
      title: "Play Microservices",
      company: "Event-Driven Distributed System · .NET 5 / RabbitMQ / MongoDB / Next.js",
      period: "2026",
      link: "https://github.com/alchemistlowkey/play.microservices",
      bullets: [
        "Architected an event-driven microservices system using .NET 5 with RabbitMQ and MassTransit for asynchronous inter-service communication.",
        "Built Catalog Service (RESTful CRUD) and Inventory Service (event consumer); created shared Play.Common library with reusable MongoDB repositories and MassTransit extensions; containerised with Docker Compose.",
      ],
    },
    {
      title: "BookStore API",
      company: "Vertical Slice Architecture with CQRS · ASP.NET Core / .NET 10",
      period: "2024",
      link: "https://github.com/alchemistlowkey/BookStore.API",
      bullets: [
        "Developed a scalable RESTful Web API using Vertical Slice Architecture with MediatR for CQRS — each feature is a self-contained slice with co-located handler, validator, and DTOs.",
        "Implemented JWT authentication via Keycloak with role-based authorization; achieved 90%+ test coverage with comprehensive xUnit + Moq suite.",
      ],
    },
    {
      title: "Expense Tracker API",
      company: "Fullstack · ASP.NET Core 10 (C#) + SvelteKit",
      period: "2024",
      link: "https://expense-tracker-mu-eight-84.vercel.app",
      bullets: [
        "Built a Clean Architecture Web API for expense tracking with layered Repository/Service design, JWT auth with token refresh, and EF Core PostgreSQL persistence.",
        "Created Swagger/OpenAPI documentation; built SvelteKit frontend with real-time expense categorisation, filtering, and spending visualisation charts.",
      ],
    },
    {
      title: "Invoicely",
      company: "Invoicing SaaS · SvelteKit + Node.js + Tailwind CSS v4",
      period: "2024 – PRESENT",
      link: null,
      bullets: [
        "Built a full-featured invoicing SaaS with client management, real-time PDF generation, and mobile-first responsive dashboard.",
        "Implemented shared Svelte writable store for cross-component state synchronisation and card-based UI alternatives to data tables.",
      ],
    },
  ];

  const skillCategories = [
    ["Backend", "ASP.NET Core, C#, .NET 5–10 (Minimal APIs), Clean Architecture, Vertical Slices"],
    ["Microservices & Messaging", "RabbitMQ, MassTransit, Event-Driven Architecture, Distributed Systems"],
    ["Patterns", "CQRS / MediatR, Repository Pattern, Dependency Injection, SOLID Principles, OOP"],
    ["Databases", "MSSQL, PostgreSQL, MongoDB — Entity Framework Core, Dapper"],
    ["Auth & Security", "JWT, Keycloak, Role-Based Authorization (RBAC), OAuth 2.0 / OIDC"],
    ["Frontend", "SvelteKit, React, Next.js, Tailwind CSS"],
    ["Testing", "xUnit, Moq, FluentAssertions (90%+ coverage achieved)"],
    ["Tools & DevOps", "Docker, Docker Compose, Git, Swagger / OpenAPI / Scalar, Serilog, AutoMapper, FluentValidation, YARP, Agile / Scrum"],
    ["Cloud & Hosting", "Vercel, Railway, AWS (basic), Azure (basic)"],
    ["Payments & Media", "Paystack, Flutterwave (webhook handling), Cloudinary (per-tenant scoped uploads)"],
  ];

  const tools = ["MediatR", "FluentValidation", "AutoMapper", "xUnit + Moq", "Swagger / Scalar", "JWT / Keycloak", "Serilog + Seq", "Docker Compose", "RabbitMQ", "MassTransit", "YARP", "Cloudinary"];

  const education = [
    {
      degree: "Bachelor of Science — Industrial Chemistry",
      institution: "University of Benin · Nigeria",
    },
    {
      degree: "Certificate of Completion — Back-End Specialisation (12-Month Programme)",
      institution: "ALX Software Engineering (Powered by Holberton Inc) · June 2024",
    },
  ];

  const certifications = [
    { name: "Career Essentials in Software Development", issuer: "Microsoft & LinkedIn Learning", date: "Jun 2024" },
    { name: "Build Your Generative AI Productivity Skills", issuer: "Microsoft & LinkedIn Learning", date: "Jul 2024" },
    { name: "Introduction to Prompt Engineering for Generative AI", issuer: "LinkedIn Learning", date: "Jul 2024" },
    { name: "Programming Foundations: Beyond the Fundamentals", issuer: "LinkedIn Learning", date: "Jun 2024" },
    { name: "Introduction to Career Skills in Software Development", issuer: "LinkedIn Learning", date: "Jun 2024" },
    { name: "English for IT 1 & 2", issuer: "Cisco Networking Academy / OpenEDG", date: "Jun 2024" },
    { name: "Professional Soft Skills Learning Pathway", issuer: "LinkedIn Learning", date: "Aug 2024" },
    { name: "Communication Foundations", issuer: "LinkedIn Learning", date: "Aug 2024" },
    { name: "Critical Thinking for Better Judgment & Decision-Making", issuer: "LinkedIn Learning", date: "Jul 2024" },
    { name: "Unconscious Bias (CPE Credit — NASBA)", issuer: "LinkedIn Learning", date: "Jul 2024" },
  ];
</script>

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

    <!-- View Resume button -->
    <div class="flex gap-4">
      <a
        href="/view"
        class="flex items-center gap-2 px-6 py-3 transition-all font-medium group"
        style="background: #222a3d; border: 1px solid rgba(70,69,85,0.2); color: #dae2fd; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif; text-decoration: none;"
        >View</a
      >
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
            Backend Engineer | C# / .NET Developer | Full-Stack Capable
          </p>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-sm"
            style="color: #c7c4d8;"
          >
            {#each [["mail", "lucky.samuel.egiagbo@gmail.com"], ["location_on", "Lagos, Nigeria"], ["link", "linkedin.com/in/lucky-samuel"], ["code", "github.com/alchemistlowkey"], ["language", "lucky-samuel.vercel.app"]] as [icon, text]}
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
          <p class="leading-relaxed text-base font-light" style="color: #c7c4d8;">
            Results-driven Backend Engineer with <span style="color: #dae2fd; font-weight: 500;">3+ years of experience</span> designing, developing, and maintaining production-ready
            web applications and distributed systems using <span style="color: #dae2fd; font-weight: 500;">C# and ASP.NET Core (.NET 5–10)</span>. Proven track record delivering
            medium-to-large-scale, high-volume, database-driven web applications end-to-end — from architecture through
            deployment. Deep expertise in <span style="color: #dae2fd; font-weight: 500;">Clean Architecture, Microservices, CQRS with MediatR</span>, and RESTful API design. Solid
            command of Microsoft SQL Server, PostgreSQL, and MongoDB with Entity Framework Core and Dapper. Experienced
            integrating external web portals and third-party APIs. Frontend-capable in SvelteKit, React, and Next.js. Thrives in
            Agile/Scrum team environments; comfortable working independently to meet deadlines. Passionate about clean, testable,
            and maintainable code.
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
          {#each resumeProjects as job}
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
              {#each skillCategories as [label, value]}
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
              {#each tools as tool}
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

      <!-- Education -->
      <section class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <h3
            class="text-xs font-black uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: rgba(78,222,163,0.8);"
          >
            Education
          </h3>
        </div>
        <div class="md:col-span-3 space-y-6">
          {#each education as edu}
            <div>
              <p class="font-semibold text-base" style="color: #dae2fd;">{edu.degree}</p>
              <p class="text-sm mt-1" style="color: #a7b6cc;">{edu.institution}</p>
            </div>
          {/each}
        </div>
      </section>

      <!-- Certifications -->
      <section class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <h3
            class="text-xs font-black uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: rgba(78,222,163,0.8);"
          >
            Certifications
          </h3>
        </div>
        <div class="md:col-span-3">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {#each certifications as cert}
              <div
                class="flex items-start gap-3 p-3"
                style="background: #131b2e; border-radius: 0.25rem; border: 1px solid rgba(70,69,85,0.1);"
              >
                <span
                  class="material-symbols-outlined text-sm mt-0.5 shrink-0"
                  style="color: #c0c1ff;">workspace_premium</span
                >
                <div>
                  <p class="text-xs font-medium" style="color: #dae2fd;">{cert.name}</p>
                  <p class="text-xs mt-0.5" style="color: #a7b6cc;">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            {/each}
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
