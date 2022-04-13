<script lang="ts">
  import Content from './components/Content.svelte';
  let visibleState = true; // for developing
  const handleMesssage = ({ data }) => {
    if (data.type === 'open') {
      visibleState = !visibleState;
    }
  };
</script>

{#if visibleState}
  <Content />
{/if}

<svelte:window on:message={handleMesssage} />
