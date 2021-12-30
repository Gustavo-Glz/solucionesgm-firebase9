<template>
  <v-container class="admin-container" fluid>
    <div class="text-h4 my-5 blue--text text--darken-4 font-weight-bold">Bienvenido</div>
    <Productos/>
  </v-container>
</template>

<script>
import Productos from '~/components/admin/NuevoProducto.vue'
export default {
  components: {
    Productos,
  },
  }
</script>

<style lang="scss" scoped>
.admin-container {
  max-width: 90%;
}
</style>