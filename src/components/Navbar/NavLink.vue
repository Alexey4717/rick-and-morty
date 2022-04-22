<template>
  <router-link
    class="nav-item"
    :to="{ name: link }"
    v-slot="{ isActive, href }"
  >
    <a
      :href="{ href }"
      class="nav-link text-white"
      :class="{ active: isActive }"
    >
      {{ link }}
    </a>
  </router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    link: String,
  },
};
</script>
