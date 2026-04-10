<script>
  const contact = {
    email: "lucky.samuel.egiagbo@gmail.com",
    location: "Lagos, Nigeria",
    linkedin: "linkedin.com/in/lucky-samuel",
    github: "github.com/alchemistlowkey",
  };

  const skills = [
    {
      label: "Backend",
      value:
        "C#, ASP.NET Core, .NET 5-10, Clean Architecture, Vertical Slices, Minimal APIs",
    },
    {
      label: "Microservices",
      value: "RabbitMQ, MassTransit, Event-Driven Architecture, Message Queues",
    },
    {
      label: "Patterns",
      value:
        "CQRS with MediatR, Repository Pattern, FluentValidation, Dependency Injection",
    },
    {
      label: "Frontend",
      value: "SvelteKit, React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      label: "Databases",
      value: "PostgreSQL, SQL Server, MongoDB, Entity Framework Core, Dapper",
    },
    {
      label: "Testing",
      value: "xUnit, Moq, FluentAssertions, Integration Tests",
    },
    {
      label: "Tools",
      value: "Git, Docker, Swagger/OpenAPI, Serilog, JWT, Keycloak",
    },
    { label: "Cloud", value: "Vercel, AWS (basic), Azure (basic)" },
  ];

  const tools = [
    "CQRS / MediatR",
    "FluentValidation",
    "Swagger/OpenAPI",
    "JWT / Keycloak",
    "Serilog",
    "Docker",
    "RabbitMQ",
    "MassTransit",
    "MongoDB",
    "MSSQL",
    "PostgreSQL",
    "Git",
  ];

  const projects = [
    {
      name: "Play Microservices",
      period: "2026",
      stack:
        "Microservices Architecture | .NET 5 / RabbitMQ / MongoDB / Next.js 14",
      bullets: [
        "Architected event-driven microservices architecture using .NET 5 with RabbitMQ and MassTransit for asynchronous service communication",
        "Built Catalog Service (REST API for CRUD operations) and Inventory Service (event consumer, manages stock levels)",
        "Created shared Play.Common library with reusable MongoDB repositories and MassTransit extensions",
        "Containerized services with Docker Compose for MongoDB and RabbitMQ infrastructure",
        "Tech: C#, ASP.NET Core, .NET 5, MongoDB, RabbitMQ, MassTransit, Next.js 15+, Docker",
      ],
    },
    {
      name: "E-Commerce Platform",
      period: "2025 - Present",
      stack: "Fullstack | ASP.NET Core 10 (C#) + SvelteKit",
      bullets: [
        "Built production-ready e-commerce backend using ASP.NET Core 10 with Clean Architecture (Repository & Service patterns)",
        "Implemented JWT authentication and PostgreSQL with EF Core migrations for data persistence",
        "Integrated Paystack and Flutterwave payment gateways with proper error handling and webhook handling",
        "Added Serilog structured logging and Scalar OpenAPI documentation for API observability",
        "Developed SvelteKit storefront covering product catalogue, cart management, and order processing with real-time cart sync",
      ],
    },
    {
      name: "Expense Tracker API",
      period: "2024",
      stack: "Fullstack | ASP.NET Core 10 (C#) + SvelteKit",
      bullets: [
        "Developed Clean Architecture Web API for personal expense tracking with layered Repository/Service design",
        "Implemented JWT authentication with token refresh and EF Core PostgreSQL for data storage",
        "Created Swagger/OpenAPI documentation with XML comments and request/response examples",
        "Built SvelteKit frontend for real-time expense categorisation, filtering, and spending visualization with charts",
      ],
    },
    {
      name: "BookStore API",
      period: "2024",
      stack: "REST API | ASP.NET Core / C#",
      bullets: [
        "Developed modern, scalable API with .NET 10 using Vertical Slice Architecture with MediatR for CQRS patterns",
        "Implemented JWT authentication with Keycloak identity provider and role-based authorization",
        "Created FluentValidation validators for each feature slice with expressive, testable rules",
        "Added AutoMapper for DTO mapping and comprehensive xUnit + Moq test suite with 90%+ coverage",
        "Every feature is a self-contained slice: handler, validator, request/response DTOs co-located per folder",
      ],
    },
    {
      name: "Invoicely",
      period: "2024 - Present",
      stack: "SvelteKit | Node.js | Tailwind v4",
      bullets: [
        "Built full-featured invoicing SaaS with client management and real-time PDF generation",
        "Implemented shared Svelte writable store for cross-component sidebar state synchronization",
        "Designed mobile-first responsive dashboard with card-based alternatives to data tables",
      ],
    },
  ];
</script>

<article
  class="font-sans text-[11pt] leading-snug text-[#1a1a1a] bg-white max-w-204 mx-auto px-10 py-10 mt-22 print:px-0 print:py-0"
>
  <!-- HEADER -->
  <header class="border-b-2 border-[#1a1a1a] pb-3 mb-5">
    <h1 class="text-[24pt] font-bold tracking-tight">LUCKY SAMUEL</h1>
    <p class="text-[14pt] text-[#333] mt-1">
      Backend Engineer | .NET / C# Developer
    </p>
    <div class="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-[10pt] text-[#444]">
      <span>{contact.email}</span>
      <span>{contact.location}</span>
      <span>{contact.linkedin}</span>
      <span>{contact.github}</span>
    </div>
  </header>

  <!-- PROFESSIONAL SUMMARY -->
  <section class="mb-5">
    <h2
      class="text-[12pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-3"
    >
      Professional Summary
    </h2>
    <p class="text-[10pt] text-justify">
      Backend Engineer with 3+ years of experience building production-ready
      APIs and distributed systems in C# / ASP.NET Core. Expertise in Clean
      Architecture, Vertical Slice Architecture, Microservices with event-driven
      patterns (RabbitMQ, MassTransit), CQRS with MediatR, and RESTful API
      design. Strong in Entity Framework Core, PostgreSQL, MongoDB, and unit
      testing with xUnit + Moq. Frontend-capable in SvelteKit, Next.JS when
      needed. Passionate about clean code, testability, and building scalable,
      maintainable systems.
    </p>
  </section>

  <!-- TECHNICAL SKILLS -->
  <section class="mb-5">
    <h2
      class="text-[12pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-3"
    >
      Technical Skills
    </h2>
    <div class="grid grid-cols-2 gap-x-5 gap-y-1.5 text-[10pt]">
      {#each skills as skill}
        <div>
          <span class="font-bold">{skill.label}:</span>
          <span class="text-[#333]"> {skill.value}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="mb-5">
    <h2
      class="text-[12pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-3"
    >
      Projects
    </h2>
    <div class="space-y-4">
      {#each projects as project}
        <div class="break-inside-avoid">
          <div class="flex justify-between items-baseline">
            <span class="font-bold text-[11pt]">{project.name}</span>
            <span class="text-[10pt] text-[#555]">{project.period}</span>
          </div>
          <p class="text-[10pt] italic text-[#444] mt-0.5 mb-1">
            {project.stack}
          </p>
          <ul class="list-disc ml-4 text-[10pt] space-y-0.5">
            {#each project.bullets as bullet}
              <li class="text-justify">{bullet}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- TOOLS -->
  <section class="mb-2">
    <h2
      class="text-[12pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-3"
    >
      Tools
    </h2>
    <div class="grid grid-cols-4 gap-1.5 text-[10pt]">
      {#each tools as tool}
        <div class="text-center border border-[#ddd] bg-[#f5f5f5] px-2 py-0.5">
          {tool}
        </div>
      {/each}
    </div>
  </section>
</article>
