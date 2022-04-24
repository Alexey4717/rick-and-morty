<template>
  <div
    class="card mb-3 text-white bg-secondary bg-gradient"
    style="flex-basis: calc(50% - 0.5rem)"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="#" class="img-fluid rounded-start" :alt="name" />
      </div>
      <div class="col-md-8">
        <div
          class="
            d-flex
            flex-column
            justify-content-between
            align-items-start
            card-body
            pb-1
          "
          style="height: 100%"
        >
          <h5 class="card-title my-0">
            <a src="#">
              {{ name }}
            </a>
          </h5>
          <p class="card-text my-0">
            {{ title }}
          </p>
          <p class="card-text my-0">
            {{ subtitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import UnknownStatus from "@/assets/icons/UnknownStatus";

export default {
  name: "UniCard",
  components: {
    //UnknownStatus,
  },
  props: {
    name: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>