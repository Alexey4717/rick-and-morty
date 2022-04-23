<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import router from './routes'

export default {
  name: 'App',
  router,
  components: {
    MainLayout
  }
}

</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: none;
  text-decoration: none;
}

button {
  border: none;
  margin: 0;
  padding: 0;
}
</style>
