<script>
  let form = $state({ name: "", email: "", subject: "", message: "" });
  let status = $state({ loading: false, success: false, error: "" });

  async function handleSubmit() {
    status = { loading: true, success: false, error: "" };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        status = { loading: false, success: true, error: "" };
        form = { name: "", email: "", subject: "", message: "" };
      } else {
        status = {
          loading: false,
          success: false,
          error: data.error || "Transmission failed.",
        };
      }
    } catch (e) {
      status = {
        loading: false,
        success: false,
        error: "Network error. Please try again.",
      };
    }
  }
</script>

<main class="pt-32 pb-20 px-6 max-w-7xl mx-auto">
  <!-- Header -->
  <header class="mb-16">
    <div
      class="text-xs tracking-widest uppercase mb-4"
      style="font-family: 'JetBrains Mono', monospace; color: #4edea3;"
    >
      04 / Connectivity
    </div>
    <h1
      class="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight"
      style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
    >
      Let's build <span style="color: #c0c1ff;">together.</span>
    </h1>
    <p class="text-lg max-w-2xl leading-relaxed" style="color: #c7c4d8;">
      Open to backend engineering roles, .NET consulting, and interesting
      projects. If you want to discuss systems, APIs, or just talk code — reach
      out.
    </p>
  </header>

  <!-- Main Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
    <!-- Contact Form -->
    <div
      class="lg:col-span-7 p-8 md:p-12 relative overflow-hidden group"
      style="background: #171f33; border-radius: 0.5rem;"
    >
      <div
        class="absolute top-0 right-0 pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"
        style="width: 16rem; height: 16rem; background: radial-gradient(circle, rgba(192,193,255,0.05), transparent); margin-right: -8rem; margin-top: -8rem; border-radius: 50%;"
      ></div>

      <h2
        class="text-2xl font-bold mb-8 flex items-center gap-3"
        style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
      >
        <span class="material-symbols-outlined" style="color: #c0c1ff;"
          >terminal</span
        >
        Initialize Connection
      </h2>

      <!-- Success state -->
      {#if status.success}
        <div
          class="p-6 mb-6 flex items-start gap-4"
          style="background: rgba(78,222,163,0.1); border-left: 4px solid #4edea3; border-radius: 0.25rem;"
        >
          <span class="material-symbols-outlined mt-0.5" style="color: #4edea3;"
            >check_circle</span
          >
          <div>
            <div
              class="font-bold mb-1"
              style="font-family: 'Space Grotesk', sans-serif; color: #4edea3;"
            >
              Signal Transmitted
            </div>
            <p class="text-sm" style="color: #c7c4d8;">
              Message received. I'll respond within 24 hours.
            </p>
          </div>
        </div>
      {/if}

      <!-- Error state -->
      {#if status.error}
        <div
          class="p-4 mb-6 flex items-center gap-3"
          style="background: rgba(255,180,171,0.1); border-left: 4px solid #ffb4ab; border-radius: 0.25rem;"
        >
          <span class="material-symbols-outlined" style="color: #ffb4ab;"
            >error</span
          >
          <p class="text-sm" style="color: #ffb4ab;">{status.error}</p>
        </div>
      {/if}

      <div class="space-y-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each [{ field: "name", label: "sender_identity", placeholder: "Name", type: "text" }, { field: "email", label: "return_address", placeholder: "Email", type: "email" }] as input}
            <div class="space-y-2">
              <!-- svelte-ignore a11y_label_has_associated_control -->
              <label
                class="text-xs uppercase tracking-widest"
                style="font-family: 'JetBrains Mono', monospace; color: #a7b6cc;"
                >{input.label}</label
              >
              <input
                type={input.type}
                placeholder={input.placeholder}
                bind:value={form[input.field]}
                class="w-full px-0 py-3 outline-none transition-colors"
                style="background: transparent; border: none; border-bottom: 1px solid rgba(70,69,85,0.2); color: #dae2fd; font-family: 'Inter', sans-serif;"
                onfocus={(e) => (e.target.style.borderBottomColor = "#c0c1ff")}
                onblur={(e) =>
                  (e.target.style.borderBottomColor = "rgba(70,69,85,0.2)")}
              />
            </div>
          {/each}
        </div>

        <div class="space-y-2">
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label
            class="text-xs uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: #a7b6cc;"
            >subject_header</label
          >
          <input
            type="text"
            placeholder="What are we discussing?"
            bind:value={form.subject}
            class="w-full px-0 py-3 outline-none transition-colors"
            style="background: transparent; border: none; border-bottom: 1px solid rgba(70,69,85,0.2); color: #dae2fd; font-family: 'Inter', sans-serif;"
            onfocus={(e) => (e.target.style.borderBottomColor = "#c0c1ff")}
            onblur={(e) =>
              (e.target.style.borderBottomColor = "rgba(70,69,85,0.2)")}
          />
        </div>

        <div class="space-y-2">
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label
            class="text-xs uppercase tracking-widest"
            style="font-family: 'JetBrains Mono', monospace; color: #a7b6cc;"
            >payload_content</label
          >
          <textarea
            placeholder="Tell me about your project..."
            rows="5"
            bind:value={form.message}
            class="w-full px-0 py-3 outline-none transition-colors resize-none"
            style="background: transparent; border: none; border-bottom: 1px solid rgba(70,69,85,0.2); color: #dae2fd; font-family: 'Inter', sans-serif;"
            onfocus={(e) => (e.target.style.borderBottomColor = "#c0c1ff")}
            onblur={(e) =>
              (e.target.style.borderBottomColor = "rgba(70,69,85,0.2)")}
          ></textarea>
        </div>

        <div class="pt-4">
          <button
            onclick={handleSubmit}
            disabled={status.loading}
            class="group flex items-center gap-3 px-8 py-4 font-bold transition-all active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            style="background: #4edea3; color: #003824; border-radius: 0.25rem; font-family: 'Space Grotesk', sans-serif;"
            onmouseenter={(e) => {
              if (!status.loading) e.currentTarget.style.background = "#6ffbbe";
            }}
            onmouseleave={(e) => (e.currentTarget.style.background = "#4edea3")}
          >
            {#if status.loading}
              <span class="material-symbols-outlined animate-spin"
                >autorenew</span
              >
              Transmitting...
            {:else}
              Transmit Signal
              <span
                class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1"
                >send</span
              >
            {/if}
          </button>
        </div>
      </div>
    </div>

    <!-- Contact Info Panel -->
    <div class="lg:col-span-5 flex flex-col gap-6">
      <!-- Email -->
      <div
        class="p-8"
        style="background: #222a3d; border-radius: 0.5rem; border-left: 4px solid #c0c1ff;"
      >
        <div
          class="text-xs uppercase tracking-widest mb-4"
          style="font-family: 'JetBrains Mono', monospace; color: #a7b6cc;"
        >
          Direct Email
        </div>
        <a
          href="mailto:alchemistlowkey@gmail.com"
          class="text-xl font-bold block break-all transition-colors"
          style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
          onmouseenter={(e) => (e.target.style.color = "#c0c1ff")}
          onmouseleave={(e) => (e.target.style.color = "#dae2fd")}
        >
          alchemistlowkey@gmail.com
        </a>
      </div>

      <!-- Social Links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {#each [{ icon: "code", label: "GitHub", sublabel: "@alchemistlowkey", href: "https://github.com/alchemistlowkey" }, { icon: "hub", label: "LinkedIn", sublabel: "lucky-samuel", href: "https://www.linkedin.com/in/lucky-samuel/" }] as link}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="p-6 transition-colors block"
            style="background: #222a3d; border-radius: 0.5rem;"
            onmouseenter={(e) => (e.currentTarget.style.background = "#2d3449")}
            onmouseleave={(e) => (e.currentTarget.style.background = "#222a3d")}
          >
            <div class="flex flex-col h-full justify-between">
              <span
                class="material-symbols-outlined text-3xl mb-4 block"
                style="color: {link.icon === 'code' ? '#4edea3' : '#c0c1ff'};"
                >{link.icon}</span
              >
              <div>
                <h3
                  class="font-bold text-lg"
                  style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
                >
                  {link.label}
                </h3>
                <p
                  class="text-xs uppercase tracking-widest"
                  style="font-family: 'JetBrains Mono', monospace; color: #a7b6cc;"
                >
                  {link.sublabel}
                </p>
              </div>
            </div>
          </a>
        {/each}
      </div>

      <!-- Status -->
      <div
        class="p-8 flex items-center justify-between"
        style="background: #060e20; border-radius: 0.5rem; border: 1px solid rgba(70,69,85,0.1);"
      >
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span
              class="w-2 h-2 rounded-full"
              style="background: #4edea3; box-shadow: 0 0 10px #4edea3;"
            ></span>
            <span
              class="text-xs font-bold uppercase tracking-widest"
              style="font-family: 'JetBrains Mono', monospace; color: #6ffbbe;"
              >Status: Available</span
            >
          </div>
          <p class="text-sm" style="color: #c7c4d8;">
            Open to backend engineering roles, .NET consulting, and interesting
            projects.
          </p>
        </div>
      </div>

      <!-- Location -->
      <div
        class="grow min-h-48 relative overflow-hidden"
        style="background: #171f33; border-radius: 0.5rem;"
      >
        <div
          class="absolute inset-0 flex items-center justify-center"
          style="background: linear-gradient(135deg, #131b2e 0%, #171f33 50%, #222a3d 100%);"
        >
          <div class="text-center opacity-30">
            <span
              class="material-symbols-outlined"
              style="font-size: 5rem; color: #c0c1ff;">map</span
            >
          </div>
        </div>
        <div
          class="absolute bottom-4 left-4 z-10 p-3 backdrop-blur-md"
          style="background: rgba(11,19,38,0.8); border-radius: 0.25rem; border: 1px solid rgba(70,69,85,0.2);"
        >
          <div
            class="text-xs uppercase tracking-tighter mb-1"
            style="font-family: 'JetBrains Mono', monospace; color: #a7b6cc;"
          >
            Node Location
          </div>
          <div
            class="font-bold text-sm"
            style="font-family: 'Space Grotesk', sans-serif; color: #dae2fd;"
          >
            Lagos, Nigeria 🇳🇬 [WAT]
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
