<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from "../main";

export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      title: "Blink Vuejs",
    };
  },
  methods: {
    changeTitle: function () {
      // this.$emit("changeTitle", "Oi Blink");
      this.title = "Panggil Aku Blink";
      bus.$emit("titleChanged", "Pangil Aku Blink");
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
