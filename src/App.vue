<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ninjas from "./components/Ninjas";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas,
  },
  data() {
    return {
      ninjas: [
        { name: "Blink", speciality: "Vue Components", show: false },
        { name: "Queen", speciality: "Rizqi Aulia Nadhifah", show: false },
        { name: "Ryu", speciality: "Click Events", show: false },
        { name: "Izzat", speciality: "Sound System", show: false },
        { name: "Dani", speciality: "Photograpy", show: false },
        { name: "Hendra", speciality: "Kepala Asrama", show: false },
      ],
    };
  },
};
</script>

<style scoped>
</style>
