<script lang="ts">
  import { players } from '../stores.js';
</script>

<div class="players">
  {#each $players as player}
    <p>{player.name}</p>
    <p>{player.id}</p>
  {/each}
</div>
