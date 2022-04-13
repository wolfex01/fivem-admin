<script lang="ts">
  import Home from '../views/Home.svelte';
  import { Router, Route, Link } from 'svelte-navigator';
  import Functions from '../views/Functions.svelte';
  import List from '../views/List.svelte';
  // more intellisense
  interface Route {
    name: string;
    path: string;
    component: Function;
  }
  const routes: Route[] = [
    { name: 'home', path: '/', component: Home },
    { name: 'functions', path: 'functions', component: Functions },
    { name: 'list', path: 'list', component: List },
  ];
</script>

<Router>
  <div class="box">
    {#each routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </div>
</Router>

<style>
  .box {
    width: 40vmin;
    height: 40vmin;
    background-color: rgba(90, 86, 86, 0.623);
    border-radius: 0.5rem;
  }
</style>
