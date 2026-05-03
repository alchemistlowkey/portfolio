<script>
  import { onMount } from 'svelte';
  import EnterpriseHeader from './EnterpriseHeader.svelte';
  import EnterpriseHero from './EnterpriseHero.svelte';
  import EnterpriseProjects from './EnterpriseProjects.svelte';
  import EnterpriseArchitecture from './EnterpriseArchitecture.svelte';
  import EnterpriseEndpoints from './EnterpriseEndpoints.svelte';
  import EnterprisePipeline from './EnterprisePipeline.svelte';
  import EnterpriseSkills from './EnterpriseSkills.svelte';
  import EnterpriseExperience from './EnterpriseExperience.svelte';
  import EnterpriseContact from './EnterpriseContact.svelte';
  import EnterpriseFooter from './EnterpriseFooter.svelte';
  import CaseStudyModal from '../shared/CaseStudyModal.svelte';

  let dark = $state(false);
  let caseStudyOpen = $state(false);

  $effect(() => {
    const lightBg = '#f7f9fc';
    const darkBg = '#0b1220';
    document.body.style.backgroundColor = dark ? darkBg : lightBg;
    document.body.style.color = dark ? '#cbd5e1' : '#334155';
    document.body.style.cursor = 'auto';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.cursor = '';
    };
  });

  onMount(() => {
    document.body.style.cursor = 'auto';
    return () => { document.body.style.cursor = ''; };
  });

  function openCaseStudy() { caseStudyOpen = true; }
</script>

<svelte:head>
  <title>Lucky Samuel — Enterprise | Backend Engineering</title>
</svelte:head>

<div class="ent-page" class:dark>
  <EnterpriseHeader bind:dark />
  <EnterpriseHero {dark} onCaseStudy={openCaseStudy} />
  <EnterpriseProjects onCaseStudy={openCaseStudy} />
  <EnterpriseArchitecture {dark} />
  <EnterpriseEndpoints />
  <EnterprisePipeline />
  <EnterpriseSkills />
  <EnterpriseExperience />
  <EnterpriseContact onCaseStudy={openCaseStudy} />
  <EnterpriseFooter />

  <CaseStudyModal bind:open={caseStudyOpen} theme="enterprise" />
</div>

<style>
  /* Light tokens */
  .ent-page {
    --bg: #f7f9fc;
    --bg-deep: #eef2f7;
    --panel: #ffffff;
    --ink: #0f172a;
    --text: #334155;
    --dim: #64748b;
    --rule: #e2e8f0;
    --accent: #2563eb;
    --accent-soft: #dbeafe;
    --green: #059669;
    --green-soft: #d1fae5;
    --hero-grad: radial-gradient(circle at 90% 0%, #dbeafe 0%, #f7f9fc 50%);

    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    transition: background 0.3s, color 0.3s;
  }

  /* Dark tokens */
  .ent-page.dark {
    --bg: #0b1220;
    --bg-deep: #060d18;
    --panel: #111a2e;
    --ink: #f1f5f9;
    --text: #cbd5e1;
    --dim: #94a3b8;
    --rule: #1e293b;
    --accent: #60a5fa;
    --accent-soft: #1e3a8a;
    --green: #34d399;
    --green-soft: #064e3b;
    --hero-grad: radial-gradient(circle at 90% 0%, #1e3a8a 0%, #0b1220 60%);

    background: var(--bg);
    color: var(--text);
  }
</style>
