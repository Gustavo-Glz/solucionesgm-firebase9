<template>
  <v-app-bar app color="#26a96c" dark height="100">
    <v-container class="admin-container" fluid>
      <v-toolbar color="#26a96c" flat>
        <div class="d-flex aling-center">
          <a href="/">
            <v-img src="/logo.svg" contain width="180" transition="scale-transition"></v-img>
          </a>
        </div>
        <v-spacer></v-spacer>
        <v-btn to="admin/nuevoProducto" text>Nuevo Producto</v-btn>
        <v-btn text>Cerrar Sesión</v-btn>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.admin-container {
  max-width: 90%;
}
</style>