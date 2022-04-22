<template>
  <Header />
  <slot />
  <Footer/>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: "HomeComponent",
  components: {
    Header,
    Footer
  },
};
</script>
