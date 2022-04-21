<template>
  <div id="nav">
    <router-link :to="{ name: 'Main' }">Home</router-link> |
    <router-link :to="{ name: 'Characters' }">Characters</router-link> |
    <router-link :to="{ name: 'Locations' }">Locations</router-link> |
    <router-link :to="{ name: 'Episodes' }">Episodes</router-link>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>
