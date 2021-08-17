<template>
  <v-container>
    <PhotoForm />
    <v-row>
      <Photo v-for="photo in getAllPhotos" :photo="photo" :key="photo.id" />
    </v-row>
    <PhotoDialog />
  </v-container>
</template>

<script>
import Photo from "../components/Photo/Photo";
import PhotoForm from "../components/Photo/PhotoForm";
import PhotoDialog from "../components/Photo/PhotoDialog";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "PhotosPage",
  components: {
    PhotoDialog,
    Photo,
    PhotoForm,
  },
  methods: {
    ...mapActions(["fetchPhotos"]),
  },
  computed: {
    ...mapGetters(["getAllPhotos"]),
  },
  mounted() {
    this.fetchPhotos();
  },
};
</script>

<style scoped></style>
