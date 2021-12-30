<template>
  <v-app>
    <Header />
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/admin/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.admin-container {
  max-width: 90%;
}
</style>
