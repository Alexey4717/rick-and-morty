<template>
  <View
    :pagination="{
      lastPage: episodes?.info?.pages,
      currentPage: page,
      handlePage
    }"
    :totalCount="episodes?.info?.count"
  >
    <div
      class="d-flex flex-wrap justify-content-between"
      v-if="episodes?.results?.length"
    >
      <UniCard
        v-for="result in episodes?.results"
        :key="result?.id"
        :name="result?.name"
        :title="result?.air_date"
        :subtitle="result?.episode"
      />
    </div>
    <span v-if="loading">...loading...</span>
  </View>
  <Alert v-if="error" message="Fetching episodes is failed" status="danger" />
</template>

<script>
import GET_ALL_EPISODES from "@/api/episodes";
import View from "@/components/View";
import UniCard from "@/components/UniCard";
import Alert from "@/components/Alert";

export default {
  name: 'EpisodesComponent',
  components: {
    View,
    UniCard,
    Alert,
  },
  data() {
    return {
      page: 1,
      episodes: null,
      loading: 0,
      error: null,
    };
  },
  apollo: {
    episodes: {
      query: GET_ALL_EPISODES,
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
