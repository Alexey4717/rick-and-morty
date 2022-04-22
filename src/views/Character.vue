<template>
  
</template>

<script>
export default {
  name: "CharacterComponent",
  props: {
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    species: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    originUrl: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    locationUrl: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    episodes: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    created: {
      type: String,
      required: true
    },
  }
};
</script>