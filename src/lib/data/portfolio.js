export const stats = {
  apis: '10+',
  years: '3+',
  stack: '.NET 10',
  location: 'Lagos',
};

export const projects = [
  {
    id: 'healthbridge',
    title: 'HealthBridge',
    tagline: 'Multi-Tenant Healthcare Platform',
    description:
      'Cloud-native, API-first healthcare SaaS connecting hospitals, patients, and HMO providers across Nigeria. Digitises appointment booking, HMO authorisation, patient records, and billing under a single event-driven backend.',
    stack: ['.NET 10', 'MongoDB', 'RabbitMQ', 'Keycloak', 'MassTransit', 'SvelteKit', 'Docker'],
    metrics: [
      { value: '7', label: 'Microservices' },
      { value: '6', label: 'Domain Events' },
      { value: '3', label: 'Tenant Types' },
    ],
    tags: ['Microservices', 'Healthcare', 'SaaS', 'Featured'],
    repoUrl: 'https://github.com/alchemistlowkey',
    featured: true,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    tagline: 'Full-stack commerce solution',
    description:
      'Production-ready ASP.NET Core 10 e-commerce backend using Clean Architecture with Repository & Service patterns. Features JWT authentication, PostgreSQL with EF Core, Paystack/Flutterwave payments, Serilog logging, and Scalar API docs.',
    stack: ['ASP.NET Core', 'PostgreSQL', 'EF Core', 'SvelteKit', 'JWT'],
    metrics: [],
    tags: ['Fullstack', 'Ecommerce'],
    liveUrl: 'https://csharp-ecommerce-frontend.vercel.app',
    featured: false,
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    tagline: 'Personal finance API',
    description:
      'Clean Architecture ASP.NET Core 10 Web API for personal expense tracking. JWT auth, EF Core PostgreSQL, Swagger docs, layered design with Repository/Service patterns.',
    stack: ['.NET', 'C#', 'SvelteKit', 'PostgreSQL'],
    metrics: [],
    tags: ['API', 'Finance'],
    liveUrl: 'https://expense-tracker-mu-eight-84.vercel.app',
    featured: false,
  },
  {
    id: 'invoicely',
    title: 'Invoicely',
    tagline: 'Invoicing platform',
    description:
      'Full-featured invoicing platform in SvelteKit — client management, PDF previews, and a dashboard built with Tailwind v4.',
    stack: ['SvelteKit', 'Tailwind', 'PDF'],
    metrics: [],
    tags: ['Frontend', 'SaaS'],
    liveUrl: 'https://invoicelyapp-gen.vercel.app/dashboard',
    featured: false,
  },
  {
    id: 'bookstore',
    title: 'BookStore API',
    tagline: 'Clean architecture + VSA demo',
    description:
      'Modern .NET 10 Bookstore API using Vertical Slice Architecture with MediatR for CQRS. Features JWT + Keycloak auth, EF Core, FluentValidation, AutoMapper, and comprehensive tests.',
    stack: ['.NET 10', 'MediatR', 'Keycloak', 'EF Core'],
    metrics: [
      { value: '10+', label: 'APIs Built' },
      { value: '3+', label: 'Yrs Exp' },
    ],
    tags: ['API', 'CQRS'],
    repoUrl: 'https://github.com/alchemistlowkey/BookStore.API',
    featured: false,
  },
  {
    id: 'play-microservices',
    title: 'Play Microservices',
    tagline: 'Event-driven demo',
    description:
      '.NET 5 microservices architecture demonstrating event-driven communication with MongoDB and RabbitMQ via MassTransit. Features Catalog Service, Inventory Service, and Next.js 14 frontend.',
    stack: ['.NET 5', 'MongoDB', 'RabbitMQ', 'MassTransit', 'Next.js 14'],
    metrics: [],
    tags: ['Microservices', 'Event-Driven'],
    repoUrl: 'https://github.com/alchemistlowkey/play.microservices',
    featured: false,
  },
];

export const experience = [
  {
    role: 'Backend Engineer',
    company: 'Freelance / Open Source',
    period: '2022 — Present',
    location: 'Lagos, Nigeria',
    points: [
      'Building HealthBridge — multi-tenant healthcare SaaS connecting hospitals, patients, and HMOs across Nigeria',
      'Designed event-driven microservices with .NET 10, RabbitMQ, MassTransit, and MongoDB in production',
      'Delivered full-stack solutions pairing ASP.NET Core backends with SvelteKit and Next.js frontends',
      'Applied Vertical Slice Architecture and CQRS across all projects for feature cohesion and low coupling',
    ],
  },
  {
    role: '.NET Backend Developer',
    company: 'Previous Engagement',
    period: '2021 — 2022',
    location: 'Lagos, Nigeria',
    points: [
      'Developed RESTful APIs with ASP.NET Core, Entity Framework Core, and PostgreSQL',
      'Implemented JWT authentication, role-based access control, and middleware pipelines',
      'Contributed to clean architecture refactors and introduced FluentValidation across the codebase',
    ],
  },
];

export const stackCategories = {
  Runtime: ['.NET 10', 'ASP.NET Core 10', 'C# 13', 'Node.js'],
  Framework: ['Minimal APIs', 'MediatR 12', 'MassTransit 8', 'FluentValidation'],
  Database: ['MongoDB 7', 'PostgreSQL', 'SQL Server', 'EF Core'],
  Messaging: ['RabbitMQ 3', 'MassTransit', 'Domain Events'],
  Auth: ['Keycloak 24', 'JWT / OIDC', 'OAuth2'],
  DevOps: ['Docker', 'Docker Compose', 'GitHub Actions', 'Vercel'],
  Frontend: ['SvelteKit 5', 'Next.js 14', 'Tailwind CSS v4', 'React'],
};

export const endpoints = [
  { method: 'POST', path: '/api/appointments', desc: 'Book appointment with doctor + HMO code', status: '201 Created' },
  { method: 'GET', path: '/api/patients/{id}', desc: 'Retrieve patient profile and history', status: '200 OK' },
  { method: 'POST', path: '/api/auth/login', desc: 'Exchange credentials for JWT via Keycloak', status: '200 OK' },
  { method: 'GET', path: '/api/records', desc: 'List tenant-scoped medical records', status: '200 OK' },
  { method: 'POST', path: '/api/prescriptions', desc: 'Create prescription linked to appointment', status: '201 Created' },
];

export const pipelineStages = [
  { name: 'Restore', status: 'passed', duration: '18s' },
  { name: 'Build', status: 'passed', duration: '42s' },
  { name: 'Test', status: 'passed', duration: '1m 14s' },
  { name: 'Publish', status: 'passed', duration: '31s' },
  { name: 'Deploy', status: 'passed', duration: '24s' },
];

export const pipelineMeta = { run: '#284', branch: 'main', total: '3m 09s', status: 'passing' };

export const healthbridgeCase = {
  overview: {
    description:
      'HealthBridge is a cloud-native, API-first multi-tenant healthcare management platform for Nigeria. It digitises the full lifecycle of healthcare delivery — from hospital onboarding and patient registration through appointment booking, HMO authorisation, and billing reconciliation — under a single unified backend.',
    connects: 'Connects hospitals, patients, and HMO providers in a real-time event-driven ecosystem.',
    metrics: [
      { value: '7', label: 'Microservices' },
      { value: '6', label: 'Domain Events' },
      { value: '3', label: 'Tenant Types' },
      { value: 'Multi', label: 'Tenancy Model' },
    ],
    features: [
      { name: 'Hospital Management', desc: 'Tenant creation, departments, wards, staff, and doctor onboarding' },
      { name: 'Patient Management', desc: 'Registration, medical history, document upload, HMO enrolment' },
      { name: 'HMO Organisation', desc: 'Plan creation, pre-authorisation requests, claims tracking' },
      { name: 'Appointment Booking', desc: 'Slot validation, confirmation codes, cancellation windows' },
      { name: 'Billing & Invoices', desc: 'Auto-generated invoices, partial payments, HMO reconciliation' },
      { name: 'Notifications', desc: 'Email/SMS alerts via event-driven notification pipeline' },
    ],
  },
  architecture: {
    description:
      'Microservices topology with Vertical Slice Architecture (VSA) combined with CQRS + MediatR inside each service. Inter-service communication is fully asynchronous via RabbitMQ and MassTransit.',
    pipeline: ['Request', 'LoggingBehavior', 'TenantResolutionBehavior', 'ValidationBehavior', 'Handler'],
    services: [
      { name: 'Hospital', responsibility: 'Hospital CRUD, staff, wards, departments', port: '5001 / 5002', status: 'Live' },
      { name: 'Patient', responsibility: 'Patient registration, profiles, medical history', port: '5003 / 5004', status: 'Live' },
      { name: 'HMO', responsibility: 'Insurance plans, authorisations, claims', port: '5005 / 5006', status: 'In Progress' },
      { name: 'Appointment', responsibility: 'Booking, scheduling, availability', port: '5007 / 5008', status: 'In Progress' },
      { name: 'Billing', responsibility: 'Invoices, payments, HMO reconciliation', port: '5009 / 5010', status: 'In Progress' },
      { name: 'Notification', responsibility: 'Email, SMS, push alerts via events', port: '5011', status: 'In Progress' },
      { name: 'Gateway', responsibility: 'Routing, auth passthrough, rate limiting', port: '5055', status: 'Planned' },
    ],
    domainEvents: [
      { event: 'HospitalCreated', publisher: 'Hospital', consumers: 'Notification' },
      { event: 'PatientRegistered', publisher: 'Patient', consumers: 'HMO, Notification' },
      { event: 'AppointmentBooked', publisher: 'Appointment', consumers: 'Hospital, Notification, Billing' },
      { event: 'HMOPlanEnrolled', publisher: 'HMO', consumers: 'Patient, Notification' },
      { event: 'InvoiceGenerated', publisher: 'Billing', consumers: 'Notification' },
      { event: 'AuthorisationRequested', publisher: 'Appointment', consumers: 'HMO' },
    ],
  },
  api: [
    { method: 'POST', path: '/api/hospitals', desc: 'Register a new hospital tenant', code: '201' },
    { method: 'POST', path: '/api/patients/register', desc: 'Patient self-registration', code: '201' },
    { method: 'POST', path: '/api/hmo/plans', desc: 'Create HMO insurance plan', code: '201' },
    { method: 'POST', path: '/api/appointments', desc: 'Book appointment with doctor', code: '201' },
    { method: 'GET', path: '/api/appointments/{id}', desc: 'Get appointment details', code: '200' },
    { method: 'POST', path: '/api/hmo/authorisations', desc: 'Submit pre-authorisation request', code: '201' },
    { method: 'GET', path: '/api/patients/{id}', desc: 'Get patient profile', code: '200' },
    { method: 'POST', path: '/api/billing/invoices', desc: 'Generate appointment invoice', code: '201' },
  ],
  decisions: [
    {
      title: 'Shared Database, Tenant-Filtered Collections',
      summary:
        'All services share a single MongoDB instance. Every document carries a TenantId field; all queries filter by it. Compound indexes on (TenantId, field) enforce isolation.',
      why: 'Simpler operationally than DB-per-tenant for the current scale. MongoDB\'s compound indexing handles isolation and query performance without provisioning separate clusters per customer.',
    },
    {
      title: 'Vertical Slice Architecture over Layered',
      summary:
        'Every feature lives in a single .cs file: Command/Query, Response, Validator, Handler, Endpoint. No shared "Services" or "Repositories" layers.',
      why: 'Features are completely self-contained — changing one feature cannot silently break another. Onboarding is faster because the entire feature surface area is in one place.',
    },
    {
      title: 'CQRS + MediatR Pipeline',
      summary:
        'Reads and writes are separated at the MediatR pipeline level. Cross-cutting concerns (logging, tenant resolution, validation) are pipeline behaviours, not scattered middleware.',
      why: 'The pipeline composition model scales naturally: adding a new cross-cutting concern is one new IPipelineBehavior<,> class, with zero changes to existing handlers.',
    },
    {
      title: 'Keycloak for Identity',
      summary:
        'Keycloak 24 provides OIDC/OAuth2 with multi-tenant JWT claims (tenant_id, tenant_type, roles). No custom auth code in the domain layer.',
      why: 'Production-grade identity without maintaining custom token infrastructure. Keycloak\'s realm isolation maps cleanly to the multi-tenant model and handles SSO out of the box.',
    },
  ],
  stack: [
    { concern: 'Runtime', tech: '.NET 10' },
    { concern: 'API Framework', tech: 'ASP.NET Core 10 Minimal APIs' },
    { concern: 'Architecture', tech: 'Microservices + Vertical Slice Architecture' },
    { concern: 'Mediator', tech: 'MediatR 12' },
    { concern: 'Validation', tech: 'FluentValidation' },
    { concern: 'Database', tech: 'MongoDB 7 (shared cluster, tenant-filtered)' },
    { concern: 'Identity', tech: 'Keycloak 24 (OIDC / OAuth2)' },
    { concern: 'Message Broker', tech: 'RabbitMQ 3 + MassTransit 8' },
    { concern: 'Image Storage', tech: 'Cloudinary' },
    { concern: 'Containerisation', tech: 'Docker + Docker Compose' },
    { concern: 'Frontend', tech: 'SvelteKit 5 + Tailwind CSS 4' },
    { concern: 'Logging', tech: 'Serilog + Seq' },
  ],
};
