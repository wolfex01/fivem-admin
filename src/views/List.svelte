<script lang="ts">
  import { players } from '../stores.js';
</script>

<div class="players">
  {#each $players as player}
    <p>{player.name || 'Unknown'}</p>
    <p>{player.id || 'Unknown'}</p>
  {/each}
</div>
