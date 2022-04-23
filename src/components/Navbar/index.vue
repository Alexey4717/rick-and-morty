<template>
  <div class="nav nav-pills ms-auto" id="nav">
    <NavLink v-for="navlink in navlinks" :link="navlink" :key="navlink" />
  </div>
</template>

<script>
import NavLink from "./NavLink";

export default {
  name: "NavbarComponent",
  data() {
    return {
      navlinks: [
        "Main",
        "Characters",
        "Locations",
        "Episodes"
      ]
    }
  },
  components: {
    NavLink,
  },
};
</script>
