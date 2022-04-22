<template>
  <div class="d-flex align-items-center container p-4 mt-2 mb-4 bg-dark bg-gradient rounded-pill">
    <logo/>
    <navbar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Logo from "@/assets/icons/Logo"

export default {
  name: 'HeaderComponent',
  components: {
    Navbar,
    Logo
  }
}

</script>