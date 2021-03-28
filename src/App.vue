<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from "./components/Ninjas";
export default {
  components: {
    ninjas: Ninjas,
  },
  data() {
    return {
      title: "Ninja App",
    };
  },
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
