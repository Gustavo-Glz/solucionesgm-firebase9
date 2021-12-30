<template>
  <v-container class="admin-container">
    <v-data-table :headers="headers" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Productos</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="700px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" class="mb-2" v-bind="attrs" v-on="on"
                >Nuevo Producto</v-btn
              >
            </template>
            <v-card>
              <v-card-title class="my-2">Nuevo Producto</v-card-title>
              <v-card-text>
                <v-form v-model="valid">
                  <v-container>
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          :rules="nameRules"
                          label="Código"
                          outlined
                          dense
                          v-model="producto.codigo"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          :rules="nameRules"
                          label="Nombre"
                          outlined
                          dense
                          v-model="producto.nombre"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          label="Descripción"
                          outlined
                          dense
                          v-model="producto.descripcion"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12">
                        <v-textarea
                          label="Detalles"
                          outlined
                          dense
                          v-model="producto.detalles"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="8">
                        <v-select
                          :rules="nameRules"
                          :items="categorias"
                          outlined
                          dense
                          label="Categoria"
                          v-model="producto.categoria"
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          label="Precio"
                          outlined
                          dense
                          prefix="$"
                          v-model.trim="producto.precio"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="8">
                        <v-file-input
                          :rules="nameRules"
                          label="Imagen"
                          outlined
                          dense
                          prepend-icon="mdi-camera"
                          v-model="producto.imagen"
                          required
                        ></v-file-input>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="mb-5" color="secondary" @click="close"
                  >Cancelar</v-btn
                >
                <v-btn class="mb-5" color="primary" @click="guardar" :disabled="!valid"
                  >Guardar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import db from "@/plugins/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  data: () => ({
    dialog: false,
    valid: false,
    nameRules: [
        v => !!v || "Este campo es requerido",
    ],
    headers: [
      { text: "Código", value: "codigo" },
      { text: "Nombre", value: "nombre" },
      { text: "Descripción", value: "descripcion" },
      { text: "Detalles", value: "detalles" },
      { text: "Categoria", value: "categoria" },
      { text: "Precio", value: "precio" },
      { text: "Imagen", value: "imagen" },
      { text: "Acciones", value: "acciones" },
    ],

    categorias: [
      "Accesorios",
      "Almacenamiento",
      "Audio",
      "Componentes",
      "Computadoras",
      "Consumibles",
      "Energía",
      "Impresoras",
      "Monitores",
      "Redes",
    ],

    producto: {
      codigo: "",
      nombre: "",
      descripcion: "",
      detalles: "",
      categoria: "",
      precio: 0,
      imagen: "",
    },
  }),

  methods: {
    close() {
      this.dialog = false;
    },

    async guardar() {
      try {
        const storage = getStorage();
        const productsRef = ref(
          storage,
          `productos/${this.producto.imagen.name}`
        );
        await uploadBytes(productsRef, this.producto.imagen);
        await getDownloadURL(
          ref(storage, `productos/${this.producto.imagen.name}`)
        ).then((url) => {
          this.producto.imagen = url;
        });
        await addDoc(collection(db, "productos"), this.producto);
        this.dialog = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>