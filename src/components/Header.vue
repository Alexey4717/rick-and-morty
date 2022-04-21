<template>
  <div class="d-flex container py-4">
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