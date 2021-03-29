<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      title: {
        type: String,
      },
    },
  },
  data() {
    return {
      title: "Blink Vuejs",
    };
  },
  methods: {
    changeTitle: function () {
      this.title = "Panggil aku BlinK";
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
