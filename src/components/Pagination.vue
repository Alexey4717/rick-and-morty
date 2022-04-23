<template>
  <nav aria-label="...">
    <div class="pagination mb-3">
      <button
        class="page-item"
        v-if="portionNumber > 1"
        @click="setFirstPortionNumber"
      >
        <a class="page-link">1 &#8592;</a>
      </button>
      <button
        class="page-item"
        :class="{ disabled: portionNumber <= 1 }"
        :disabled="portionNumber <= 1"
        @click="decrementPortionNumber"
      >
        <a class="page-link">Previous</a>
      </button>
      <button
        class="page-item"
        v-for="page in pages"
        :key="page"
        :class="{ active: page === currentPage }"
        @click="() => handlePage(page)"
        role="button"
      >
        <a class="page-link">
          {{ page }}
        </a>
      </button>
      <button
        class="page-item"
        :class="{ disabled: portionCount <= portionNumber }"
        :disabled="portionCount <= portionNumber"
        @click="incrementPortionNumber"
      >
        <a class="page-link">Next</a>
      </button>
      <button
        class="page-item cursor-pointer"
        v-if="portionCount > portionNumber"
        @click="setLastPortionNumber"
      >
        <a class="page-link">&#8594; {{ lastPage }}</a>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PaginationComponent",
  data() {
    return {
      // массив с номерами страниц (в порции)
      pages: [],
      // количество страниц
      pagesCount: 1,
      // размер порции
      portionSize: 10,
      // Количество порций
      portionCount: 1,
      // номер порции
      portionNumber: 1,
      // номер левой и правой страницы в порции
      leftPortionPageNumber: 1,
      rightPortionPageNumber: 10,
    };
  },
  props: {
    lastPage: {
      type: Number,
      default: 2,
      required: false,
    },
    currentPage: {
      type: Number,
      default: 1,
      required: false,
    },
    handlePage: {
      type: Function,
      required: false,
    },
  },
  methods: {
    setFirstPortionNumber() {
      this.portionNumber = 1;
    },
    incrementPortionNumber() {
      this.portionNumber += 1;
    },
    decrementPortionNumber() {
      this.portionNumber -= 1;
    },
    setLastPortionNumber() {
      this.portionNumber = this.portionCount;
    },
  },
  computed: {
    calculatedPortion() {
      return [
        this.lastPage,
        this.leftPortionPageNumber,
        this.rightPortionPageNumber,
      ];
    },
  },
  watch: {
    calculatedPortion(newPage) {
      const pagesArr = [];
      for (let i = 1; i <= newPage[0]; i++) {
        pagesArr.push(i);
      }
      this.pages = pagesArr.filter(
        (count) =>
          count >= this.leftPortionPageNumber &&
          count <= this.rightPortionPageNumber
      );

      this.pagesCount = this.lastPage;
      this.portionCount = Math.ceil(this.pagesCount / this.portionSize);
    },
    portionNumber(newNumber) {
      this.leftPortionPageNumber = (newNumber - 1) * this.portionSize + 1;
      this.rightPortionPageNumber = newNumber * this.portionSize;
    },
  },
};
</script>