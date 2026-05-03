<script>
  const contact = {
    email: "lucky.samuel.egiagbo@gmail.com",
    location: "Lagos, Nigeria",
    linkedin: "linkedin.com/in/lucky-samuel",
    github: "github.com/alchemistlowkey",
    portfolio: "lucky-samuel.vercel.app",
  };

  const skills = [
    { label: "Languages", value: "C#, JavaScript, HTML5, CSS3" },
    { label: "Frameworks & Platforms", value: "ASP.NET Core, .NET 5–10 (Minimal APIs), Node.js, Express.js" },
    { label: "Architecture & Patterns", value: "Clean Architecture, Vertical Slice Architecture, Microservices, CQRS / MediatR, Repository Pattern, Dependency Injection, Event-Driven Architecture, SOLID Principles, OOP" },
    { label: "Databases", value: "Microsoft SQL Server (MSSQL), PostgreSQL, MongoDB — Entity Framework Core, Dapper" },
    { label: "Messaging & Queues", value: "RabbitMQ, MassTransit, Message Queues, Distributed Systems" },
    { label: "Frontend", value: "SvelteKit, React, Next.js, Tailwind CSS" },
    { label: "Testing", value: "xUnit, Moq, FluentAssertions, Unit Testing, Integration Testing (90%+ coverage achieved)" },
    { label: "Auth & Security", value: "JWT, Keycloak, Role-Based Authorization (RBAC), OAuth 2.0 / OIDC" },
    { label: "Tools & DevOps", value: "Docker, Docker Compose, Git, GitHub, Swagger / OpenAPI / Scalar, Serilog, AutoMapper, FluentValidation, YARP, Agile / Scrum" },
    { label: "Cloud & Hosting", value: "Vercel, Railway, AWS (basic), Azure (basic)" },
    { label: "Payment Integrations", value: "Paystack, Flutterwave (webhook handling, error handling)" },
    { label: "Media & Storage", value: "Cloudinary (per-tenant scoped uploads)" },
  ];

  const projects = [
    {
      name: "HealthBridge — Multi-Tenant Healthcare Management Platform",
      period: "2025 – Present",
      stack: ".NET 10 · ASP.NET Core Minimal APIs · MongoDB · RabbitMQ / MassTransit · Keycloak · Docker · Serilog / Seq · YARP · Cloudinary",
      bullets: [
        "Architecting and building a cloud-native, multi-tenant healthcare management platform for hospitals, patients, and HMO organisations in Nigeria/West Africa, targeting 50+ hospital tenants and sub-200ms P95 API response times.",
        "Designed a 7-service Microservices topology (Hospital, Patient, HMO, Appointment, Billing, Notification, Gateway) each internally structured with Vertical Slice Architecture and CQRS + MediatR — every feature is a self-contained slice with co-located handler, validator, request/response DTOs, and endpoint definition.",
        "Implemented a robust self-service tenant onboarding system: auto-generates unique tenant slugs via atomic MongoDB sequence increments (FindOneAndUpdate + $inc), records ownership in a tenant_registry, and stamps tenant_id onto the user's Keycloak account via the Admin REST API — with full rollback if the Keycloak call fails, keeping the operation safely retryable.",
        "Resolved a critical multi-tenancy correctness bug: enforced a single authoritative JWT-resolved tenant source (ITenantContext) across all repository queries, eliminating silent cross-collection data leakage between write and read paths.",
        "Wired Keycloak JWT authentication with correct role claim mapping from nested realm_access.roles; configured Swagger with both Bearer and OAuth2 security schemes and EnablePersistAuthorization() for reliable API testing.",
        "Built event-driven Notification Worker consuming RabbitMQ domain events (appointment booked, invoice generated, patient enrolled, etc.) via MassTransit consumers — purely event-driven background service with dead letter queue configured.",
        "Integrated Cloudinary for per-tenant scoped media uploads and Serilog + Seq for structured observability across all services.",
      ],
    },
    {
      name: "E-Commerce Platform — Production-Ready Web Application",
      period: "2025 – Present",
      stack: "ASP.NET Core 10 (C#) · PostgreSQL · Entity Framework Core · SvelteKit · Paystack · Flutterwave",
      bullets: [
        "Built a production-ready, high-volume e-commerce web application using ASP.NET Core 10 with Clean Architecture (Repository & Service patterns) and PostgreSQL with EF Core migrations.",
        "Implemented JWT authentication; integrated Paystack and Flutterwave payment gateways with robust error handling and webhook processing; added Serilog structured logging and Scalar OpenAPI documentation.",
        "Developed SvelteKit storefront for product catalogue, cart management, and order processing with real-time cart synchronisation.",
      ],
    },
    {
      name: "Play Microservices — Event-Driven Distributed System",
      period: "2026",
      stack: ".NET 5 · ASP.NET Core · RabbitMQ · MassTransit · MongoDB · Next.js 15 · Docker",
      bullets: [
        "Architected an event-driven microservices system using .NET 5 with RabbitMQ and MassTransit for asynchronous inter-service communication.",
        "Built Catalog Service (RESTful CRUD) and Inventory Service (event consumer); created shared Play.Common library with reusable MongoDB repositories and MassTransit extensions; containerised with Docker Compose.",
      ],
    },
    {
      name: "BookStore API — Vertical Slice Architecture with CQRS",
      period: "2024",
      stack: "ASP.NET Core · .NET 10 · MediatR · Keycloak · xUnit · Moq · FluentValidation",
      bullets: [
        "Developed a scalable RESTful Web API using Vertical Slice Architecture with MediatR for CQRS — each feature is a self-contained slice with co-located handler, validator, and DTOs.",
        "Implemented JWT authentication via Keycloak with role-based authorization; achieved 90%+ test coverage with comprehensive xUnit + Moq suite.",
      ],
    },
    {
      name: "Expense Tracker API — Full-Stack Web Application",
      period: "2024",
      stack: "ASP.NET Core 10 (C#) · PostgreSQL · Entity Framework Core · SvelteKit",
      bullets: [
        "Built a Clean Architecture Web API for expense tracking with layered Repository/Service design, JWT auth with token refresh, and EF Core PostgreSQL persistence.",
        "Created Swagger/OpenAPI documentation; built SvelteKit frontend with real-time expense categorisation, filtering, and spending visualisation charts.",
      ],
    },
    {
      name: "Invoicely — Invoicing SaaS Web Application",
      period: "2024 – Present",
      stack: "SvelteKit · Node.js · Tailwind CSS v4",
      bullets: [
        "Built a full-featured invoicing SaaS with client management, real-time PDF generation, and mobile-first responsive dashboard.",
        "Implemented shared Svelte writable store for cross-component state synchronisation and card-based UI alternatives to data tables.",
      ],
    },
  ];

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

<article
  class="font-sans text-[11pt] leading-snug text-[#1a1a1a] bg-white max-w-204 mx-auto px-10 py-10 mt-22 print:px-0 print:py-0"
>
  <!-- HEADER -->
  <header class="border-b-2 border-[#1a1a1a] pb-3 mb-5">
    <h1 class="text-[24pt] font-bold tracking-tight">LUCKY SAMUEL</h1>
    <p class="text-[13pt] text-[#333] mt-1">
      Backend Engineer | C# / .NET Developer | Full-Stack Capable
    </p>
    <div class="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-[9.5pt] text-[#444]">
      <span>Email: {contact.email}</span>
      <span>Location: {contact.location}</span>
      <span>LinkedIn: {contact.linkedin}</span>
      <span>GitHub: {contact.github}</span>
      <span>Portfolio: {contact.portfolio}</span>
    </div>
  </header>

  <!-- PROFESSIONAL SUMMARY -->
  <section class="mb-5">
    <h2 class="text-[11pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-2">
      Professional Summary
    </h2>
    <p class="text-[10pt] text-justify leading-relaxed">
      Results-driven Backend Engineer with 3+ years of experience designing, developing, and maintaining production-ready
      web applications and distributed systems using C# and ASP.NET Core (.NET 5–10). Proven track record delivering
      medium-to-large-scale, high-volume, database-driven web applications end-to-end — from architecture through
      deployment. Deep expertise in Clean Architecture, Microservices, CQRS with MediatR, and RESTful API design. Solid
      command of Microsoft SQL Server, PostgreSQL, and MongoDB with Entity Framework Core and Dapper. Experienced
      integrating external web portals and third-party APIs. Frontend-capable in SvelteKit, React, and Next.js. Thrives in
      Agile/Scrum team environments; comfortable working independently to meet deadlines. Passionate about clean, testable,
      and maintainable code.
    </p>
  </section>

  <!-- TECHNICAL SKILLS -->
  <section class="mb-5">
    <h2 class="text-[11pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-2">
      Technical Skills
    </h2>
    <div class="space-y-1 text-[9.5pt]">
      {#each skills as skill}
        <div class="flex gap-1">
          <span class="font-bold shrink-0">{skill.label}:</span>
          <span class="text-[#333]">{skill.value}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="mb-5">
    <h2 class="text-[11pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-3">
      Projects
    </h2>
    <div class="space-y-4">
      {#each projects as project}
        <div class="break-inside-avoid">
          <div class="flex justify-between items-baseline gap-4">
            <span class="font-bold text-[10.5pt] leading-tight">{project.name}</span>
            <span class="text-[9pt] text-[#555] shrink-0">{project.period}</span>
          </div>
          <p class="text-[9.5pt] italic text-[#555] mt-0.5 mb-1">{project.stack}</p>
          <ul class="list-disc ml-4 text-[9.5pt] space-y-0.5">
            {#each project.bullets as bullet}
              <li class="text-justify leading-relaxed">{bullet}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </section>

  <!-- EDUCATION -->
  <section class="mb-5">
    <h2 class="text-[11pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-2">
      Education
    </h2>
    <div class="space-y-2 text-[9.5pt]">
      {#each education as edu}
        <div>
          <p class="font-bold">{edu.degree}</p>
          <p class="text-[#555]">{edu.institution}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- CERTIFICATIONS -->
  <section class="mb-5">
    <h2 class="text-[11pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-2">
      Certifications
    </h2>
    <div class="grid grid-cols-2 gap-x-6 gap-y-1 text-[9pt]">
      {#each certifications as cert}
        <div class="flex gap-1 items-baseline">
          <span class="text-[#333]">{cert.name}</span>
          <span class="text-[#888] shrink-0">· {cert.date}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- ADDITIONAL INFORMATION -->
  <section>
    <h2 class="text-[11pt] font-bold uppercase tracking-widest border-b border-[#999] pb-1 mb-2">
      Additional Information
    </h2>
    <ul class="list-disc ml-4 text-[9.5pt] space-y-0.5 text-justify">
      <li>Excellent written and verbal communication skills; able to clearly articulate technical concepts to both technical and non-technical stakeholders.</li>
      <li>Experienced in Agile / Scrum team environments — sprint planning, code reviews, and iterative delivery.</li>
      <li>Self-motivated, detail-oriented, and organised; able to work independently and efficiently to meet deadlines.</li>
      <li>Collaborative team player with a willingness to teach and to learn within cross-functional engineering teams.</li>
      <li>Experience developing and integrating external web portals and APIs allowing users to input and retrieve accurate real-time information.</li>
    </ul>
  </section>
</article>
