<template>
  <div class="header">
    <logo/>
    <navbar/>
  </div>
    <slot/>
  <div class="footer">
    footer
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import Logo from "@/assets/icons/Logo"

export default {
  name: "HomeComponent",
  components: {
    Navbar,
    Logo
  }
};
</script>
