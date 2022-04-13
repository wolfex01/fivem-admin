import { writable, readable } from 'svelte/store';
// Store ;)
export const players = writable([
  {
    name: 'John Doe',
    id: 1,
  },
  {
    name: 'Jane Doe',
    id: 2,
  },
]);
