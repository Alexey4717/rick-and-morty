<template>
  <View
    :pagination="{
      lastPage: locations?.info?.pages,
      currentPage: page,
      handlePage
    }"
    :totalCount="locations?.info?.count"
  >
    <div
      class="d-flex flex-wrap justify-content-between"
      v-if="locations?.results?.length"
    >
      <UniCard
        v-for="result in locations?.results"
        :key="result?.id"
        :name="result?.name"
        :title="result?.type"
        :subtitle="result?.dimension"
      />
    </div>
    <span v-if="loading">...loading...</span>
  </View>
  <Alert v-if="error" message="Fetching locations is failed" status="danger" />
</template>

<script>
import GET_ALL_LOCATIONS from "@/api/locations";
import View from "@/components/View";
import UniCard from "@/components/UniCard";
import Alert from "@/components/Alert";

export default {
  name: 'LocationsComponent',
  components: {
    View,
    UniCard,
    Alert,
  },
  data() {
    return {
      page: 1,
      locations: null,
      loading: 0,
      error: null,
    };
  },
  apollo: {
    locations: {
      query: GET_ALL_LOCATIONS,
      loadingKey: "loading",
      variables() {
        return { page: this.page };
      },
      error(error) {
        this.error = error;
      },
    },
  },
  methods: {
    handlePage(pageNumber) {
      this.page = pageNumber
    }
  }
}
</script>
