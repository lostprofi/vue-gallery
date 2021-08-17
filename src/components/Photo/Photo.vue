<template>
  <v-col cols="4">
    <v-card @click="openPhoto">
      <v-card-title>
        {{ photo.title }}
      </v-card-title>
      <v-img width="200" height="200" :src="photo.url" :alt="photo.title" />
    </v-card>
  </v-col>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Photo",
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["setCurrentPhoto", "openPhotoDialog"]),
    openPhoto() {
      this.setCurrentPhoto(this.photo);
      this.openPhotoDialog();
    },
  },
};
</script>

<style scoped></style>
