<template>
  <View withPagination>
    <p>Всего страниц: {{ characters?.info?.pages }}</p>
    <p>Всего персонажей: {{ characters?.info?.count }}</p>
    <p>Предыдущая ссылка: {{ characters?.info?.prev }}</p>
    <p>Следующая ссылка: {{ characters?.info?.next }}</p>
    <div
      class="d-flex flex-wrap justify-content-between"
      v-if="characters?.results?.length"
    >
      <CharacterCard
        v-for="result in characters?.results"
        :key="result?.id"
        :name="result?.name"
        :status="result?.status"
        :species="result?.species"
        :origin="result?.origin?.name"
        :location="result?.location?.name"
        :image="result?.image"
      />
    </div>
    <span v-if="loading">...loading...</span>
  </View>
  <Alert
    v-if="error"
    message="Fetching characters is failed"
    status="danger"
  />
</template>

<script>
import GET_ALL_CHARACTERS from "@/api/characters";
import View from "@/components/View";
import CharacterCard from "@/components/CharacterCard";
import Alert from "@/components/Alert";

export default {
  name: "CharactersComponent",
  components: {
    View,
    CharacterCard,
    Alert,
  },

  data() {
    return {
      page: 1,
      characters: null,
      loading: 0,
      error: null
    };
  },
  apollo: {
    characters: {
      query: GET_ALL_CHARACTERS,
      loadingKey: 'loading',
      variables() {
        return { page: this.page }
      },
      error(error) {
        this.error = error 
      }
    },
  },
};
</script>
