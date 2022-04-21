<template>
  <div class="nav nav-pills ms-auto" id="nav">
    <NavLink link="Main" />
    <NavLink link="Characters" />
    <NavLink link="Locations" />
    <NavLink link="Episodes" />
  </div>
</template>

<script>
import NavLink from "./NavLink";

export default {
  name: "NavbarComponent",
  components: {
    NavLink,
  },
};
</script>
