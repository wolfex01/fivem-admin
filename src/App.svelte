<script lang="ts">
  import Content from './components/Content.svelte';
  const handleMesssage = ({ data }) => console.log('szia');
</script>

<Content />

<svelte:window on:message={handleMesssage} />
