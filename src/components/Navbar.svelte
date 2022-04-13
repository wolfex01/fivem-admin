<script lang="ts">
  import { Link } from 'svelte-navigator';
</script>

<div class="navbar">
  <Link to="/">HOME</Link>
  <Link to="functions">FUNCTIONS</Link>
  <Link to="list">LIST</Link>
</div>

<style>
  .navbar {
    display: flex;
    justify-content: center;
    gap: 1em;
    padding: 0.5em;
    opacity: 85%;
    background: linear-gradient(to right, #1488cc, #2b32b2);
  }
</style>
