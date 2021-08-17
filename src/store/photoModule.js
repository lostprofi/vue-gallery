import axios from "axios";

export default {
  state: {
    photos: [],
    photoDialogVisible: false,
    currentPhoto: {},
  },
  mutations: {
    setPhotos(state, payload) {
      state.photos = payload;
    },
    openPhotoDialog(state) {
      state.photoDialogVisible = true;
    },
    closePhotoDialog(state) {
      state.photoDialogVisible = false;
    },
    setCurrentPhoto(state, payload) {
      state.currentPhoto = payload;
    },
    addPhoto(state, payload) {
      state.photos = [...state.photos, payload];
    },
  },
  getters: {
    getAllPhotos(state) {
      return state.photos;
    },
    getDialogVisible(state) {
      return state.photoDialogVisible;
    },
    getCurrentPhoto(state) {
      return state.currentPhoto;
    },
  },
  actions: {
    async fetchPhotos(context) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10`
        );
        context.commit("setPhotos", response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
