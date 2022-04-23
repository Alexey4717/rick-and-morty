<template>
  <div
    class="card mb-3 text-white bg-secondary bg-gradient"
    style="flex-basis: calc(50% - 0.5rem)"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="image" class="img-fluid rounded-start" :alt="name" />
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
          <div>
            <p class="card-text my-0">
              <HeardPulse v-if="status === 'Alive'" />
              <HeardBroken v-if="status === 'Dead'" />
              <UnknownStatus v-if="status === 'unknown'" />
              {{ status === "unknown" ? "unknown live status" : status }}
            </p>
            <p class="card-text my-0 text-warning">{{ species }}</p>
          </div>
          <div class="d-flex justify-content-between my-0 w-100">
            <div class="card-text mb-0">
              <p class="d-block my-0">origin:</p>
              <p>{{ origin }}</p>
            </div>
            <div class="card-text mb-0">
              <p class="d-block my-0">Last known location:</p>
              <p>{{ location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeardPulse from "@/assets/icons/HeardPulse";
import HeardBroken from "@/assets/icons/HeardBroken";
import UnknownStatus from "@/assets/icons/UnknownStatus";

export default {
  name: "CharacterCard",
  components: {
    HeardPulse,
    HeardBroken,
    UnknownStatus,
  },
  props: {
    name: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
    species: {
      type: String,
      required: false,
    },
    origin: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
};
</script>