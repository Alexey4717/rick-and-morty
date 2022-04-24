<template>
  <div class="container px-0">
    <div class="d-flex justify-content-between align-items-center">
      <Pagination
        v-if="pagination"
        :lastPage="pagination?.lastPage"
        :currentPage="pagination?.currentPage"
        :handlePage="pagination?.handlePage"
      />
      <p v-if="totalCount">Total entities count: {{ totalCount }}</p>
    </div>
    <slot />
  </div>
</template>

<script>
import Pagination from "./Pagination";

export default {
  name: "ViewComponent",
  props: {
    pagination: {
      type: Object,
      required: false,
    },
    totalCount: {
      type: Number,
      required: false,
    },
  },
  components: {
    Pagination,
  },
};
</script>