<script lang="ts">
  import Home from '../views/Home.svelte';
  import Navbar from './Navbar.svelte';
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
    <Navbar />
    {#each routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </div>
</Router>

<style>
  .box {
    width: 70vmin;
    box-shadow: 0px 1px 23px 8px rgba(9, 0, 0, 0.3);
    height: 50vmin;
    background-color: rgba(90, 86, 86, 0.623);
    border-radius: 0.5rem;
    overflow: hidden;
  }
</style>
