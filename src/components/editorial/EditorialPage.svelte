<script>
  import { onMount } from 'svelte';
  import EditorialHeader from './EditorialHeader.svelte';
  import EditorialHero from './EditorialHero.svelte';
  import EditorialStats from './EditorialStats.svelte';
  import EditorialPractice from './EditorialPractice.svelte';
  import EditorialWork from './EditorialWork.svelte';
  import EditorialArchitecture from './EditorialArchitecture.svelte';
  import EditorialEndpoints from './EditorialEndpoints.svelte';
  import EditorialPipeline from './EditorialPipeline.svelte';
  import EditorialExperience from './EditorialExperience.svelte';
  import EditorialStack from './EditorialStack.svelte';
  import EditorialContact from './EditorialContact.svelte';
  import EditorialFooter from './EditorialFooter.svelte';
  import CaseStudyModal from '../shared/CaseStudyModal.svelte';

  let dark = $state(false);
  let caseStudyOpen = $state(false);

  $effect(() => {
    document.body.style.backgroundColor = dark ? '#1a1814' : '#faf8f4';
    document.body.style.color = dark ? '#d8d2c4' : '#2a2a2a';
    document.body.style.cursor = 'auto';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.body.style.cursor = '';
    };
  });

  onMount(() => {
    const prev = document.body.style.cursor;
    document.body.style.cursor = 'auto';
    return () => { document.body.style.cursor = prev; };
  });

  function openCaseStudy() { caseStudyOpen = true; }
</script>

<svelte:head>
  <title>Lucky Samuel — Editorial | Backend Engineering</title>
</svelte:head>

<div class="ed-page" class:dark>
  <EditorialHeader bind:dark />
  <EditorialHero {dark} onCaseStudy={openCaseStudy} />
  <EditorialStats />
  <EditorialPractice />
  <EditorialWork onCaseStudy={openCaseStudy} />
  <EditorialArchitecture />
  <EditorialEndpoints />
  <EditorialPipeline />
  <EditorialExperience />
  <EditorialStack />
  <EditorialContact onCaseStudy={openCaseStudy} />
  <EditorialFooter />

  <CaseStudyModal bind:open={caseStudyOpen} theme="editorial" />
</div>

<style>
  /* Light tokens */
  .ed-page {
    --bg: #faf8f4;
    --bg-deep: #f3efe7;
    --panel: #ffffff;
    --ink: #1a1a1a;
    --text: #2a2a2a;
    --dim: #6b675f;
    --rule: #d8d2c4;
    --accent: #7a3b2e;
    --accent-soft: #f0d9d2;
    --green: #3f6b4a;
    --green-soft: #e8f0e6;

    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    min-height: 100vh;
    transition: background 0.3s, color 0.3s;
  }

  /* Dark tokens */
  .ed-page.dark {
    --bg: #1a1814;
    --bg-deep: #13110e;
    --panel: #23201a;
    --ink: #f0ebe0;
    --text: #d8d2c4;
    --dim: #8a857a;
    --rule: #3a352c;
    --accent: #d99584;
    --accent-soft: #3a2a22;
    --green: #7fb38c;
    --green-soft: rgba(127,179,140,0.15);

    background: var(--bg);
    color: var(--text);
  }
</style>
