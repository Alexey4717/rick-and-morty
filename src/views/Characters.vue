<template>
  <View withPagination>
    <p>Всего страниц: {{ pages }}</p>
    <p>Всего персонажей: {{ count }}</p>
    <p>Предыдущая ссылка: {{ prev }}</p>
    <p>Следующая ссылка: {{ next }}</p>
    <div class="d-flex flex-wrap justify-content-between" v-if="results.length">
      <CharacterCard
        v-for="result in results"
        :key="result.id"
        :name="result.name"
        :status="result.status"
        :species="result.species"
        :origin="result.origin.name"
        :originUrl="result.origin.url"
        :location="result.location.name"
        :locationUrl="result.location.url"
        :image="result.image"
        :url="result.url"
      />
    </div>
  </View>
  <Alert
    :v-if="fetchingStatus && alertMessage"
    :message="alertMessage"
    :status="fetchingStatus"
  />
</template>

<script>
import { charactersAPI } from "@/api/characters";
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
      count: null,
      pages: null,
      next: null,
      prev: null,
      results: [],
      fetchingStatus: null,
      alertMessage: null,
    };
  },
  async created() {
    try {
      const { data } = await charactersAPI.getAllCharacters();

      if (Object.keys(data).length) {
        const {
          info: { count, pages, next, prev },
          results,
        } = data;

        this.count = count;
        this.pages = pages;
        this.next = next;
        this.prev = prev;
        this.results = results;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
      this.fetchingStatus = "danger";
      this.alertMessage = "Fetching error";
    }
  },
};
</script>
