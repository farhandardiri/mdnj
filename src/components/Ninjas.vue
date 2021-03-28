<template>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Farhan", "Blink", "Queen"],
    };
  },
};
</script>

<style lang="scss">
</style>
