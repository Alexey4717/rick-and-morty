<template>
  <div class="container">
    <div v-if="withPagination">
      <Pagination />
    </div>
    <slot />
  </div>
</template>

<script>
import Pagination from "./Pagination"

export default {
  name: "ViewComponent",
  props: {
    withPagination: {
      type: Boolean,
      default: false,
      required: false
    },
  },
  components: {
    Pagination,
  },
};
</script>