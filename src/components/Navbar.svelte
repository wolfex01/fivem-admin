<script lang="ts">
  import { Link } from 'svelte-navigator';
</script>

<div class="navbar">
  <Link to="/">Home</Link>
  <Link to="functions">Functions</Link>
  <Link to="list">List</Link>
</div>

<style>
  .navbar {
    display: flex;
    justify-content: center;
    gap: 1em;
  }
</style>
