<template>
  <Home />
</template>

<script>
import Home from "@/components/user/Home.vue";
export default {
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page"
        }
      ]
    }
  },
  name: "IndexPage",
  layout: 'default',
  components: {
    Home,
  },
};
</script>
