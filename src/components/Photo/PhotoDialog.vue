<template>
  <v-dialog
    v-model="getDialogVisible"
    max-width="600"
    @click:outside="closePhotoDialog"
  >
    <v-card>
      <v-card-title>
        {{ photo_title }}
      </v-card-title>
      <v-card-text>
        <v-img :src="getCurrentPhoto.url" :alt="getCurrentPhoto.title" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "PhotoDialog",
  methods: {
    ...mapMutations(["closePhotoDialog"]),
  },
  computed: {
    ...mapGetters(["getCurrentPhoto", "getDialogVisible"]),
    photo_title() {
      return `Photo name - ${this.getCurrentPhoto.title}`;
    },
  },
};
</script>

<style scoped></style>
