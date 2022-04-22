<template>
  <div :class="`container alert alert-${status}`" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "AlertComponent",
  props: {
    status: {
      //type: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
};
</script>
