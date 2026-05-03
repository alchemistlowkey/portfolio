<script>
  const stackRows = [
    { category: "Runtime", items: ".NET 10 · ASP.NET Core 10 · C# 13" },
    { category: "Architecture", items: "Microservices · VSA · CQRS · MediatR" },
    { category: "Database", items: "MongoDB 7 · PostgreSQL · EF Core" },
    { category: "Messaging", items: "RabbitMQ 3 · MassTransit 8" },
    { category: "Auth", items: "Keycloak 24 · JWT / OIDC · OAuth2" },
    { category: "Frontend", items: "SvelteKit 5 · Next.js 14 · Tailwind v4" },
  ];
</script>

<section class="ed-practice" id="about">
  <div class="ed-practice-inner">
    <div class="ed-section-kicker">§ 01 — Practice</div>
    <div class="ed-practice-grid">
      <div class="ed-practice-text">
        <p class="ed-dropcap">
          I write .NET backends with intention — not just working code, but code
          that communicates its own structure, that handles failure gracefully,
          and that makes the next engineer's job easier. Clean Architecture
          keeps domains isolated. Vertical Slice Architecture keeps features
          coherent. CQRS with MediatR keeps the read and write paths honest.
        </p>
        <p class="ed-para">
          The result is backends that are a pleasure to maintain — where adding
          a feature is adding a slice, not excavating a layered monolith.
          Event-driven where appropriate, synchronous where simpler. Always
          documented, always tested.
        </p>
      </div>
      <div class="ed-stack-table">
        <table class="stack-tbl">
          <thead>
            <tr>
              <th>Category</th>
              <th>Technology</th>
            </tr>
          </thead>
          <tbody>
            {#each stackRows as row}
              <tr>
                <td class="stack-cat">{row.category}</td>
                <td class="stack-items">{row.items}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<style>
  .ed-practice {
    padding: 4rem 2rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .ed-section-kicker {
    font-family: "Inter", sans-serif;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--dim);
    margin-bottom: 2rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--rule);
  }

  .ed-practice-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (min-width: 900px) {
    .ed-practice-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  /* Drop cap */
  .ed-dropcap {
    font-family: "Source Serif 4", serif;
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text);
    margin: 0 0 1.25rem;
  }

  .ed-dropcap::first-letter {
    font-family: "Source Serif 4", serif;
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 0.85;
    float: left;
    margin: 0.12em 0.1em 0 0;
    color: var(--accent);
  }

  .ed-para {
    font-family: "Source Serif 4", serif;
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text);
    margin: 0;
  }

  .stack-tbl {
    width: 100%;
    border-collapse: collapse;
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
  }

  .stack-tbl th {
    text-align: left;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--dim);
    padding: 0.4rem 0.75rem;
    border-bottom: 1px solid var(--rule);
    font-weight: 500;
  }

  .stack-tbl td {
    padding: 0.55rem 0.75rem;
    border-bottom: 1px solid var(--rule);
    vertical-align: top;
  }

  .stack-cat {
    color: var(--dim);
    font-weight: 500;
    width: 35%;
    white-space: nowrap;
  }

  .stack-items {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    color: var(--ink);
    line-height: 1.5;
  }
</style>
