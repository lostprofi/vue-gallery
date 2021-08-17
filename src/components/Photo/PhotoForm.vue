<template>
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model="title" />
      <v-file-input v-model="img" />
      <v-btn @click="addPhoto">Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    title: "",
    img: null,
  }),
  methods: {
    ...mapMutations(["addPhoto"]),
    addPhoto() {
      const reader = new FileReader();
      reader.onload = () => {
        let photo = {
          id: Date.now(),
          title: this.title,
          url: reader.result,
        };
        this.addPhoto(photo);
      };
      reader.readAsDataURL(this.img);
    },
  },
};
</script>

<style scoped></style>
