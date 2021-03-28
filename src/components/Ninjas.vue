<template>
  <div id="ninjas">
    <ul>
      <li
        v-for="(ninja, index) in ninjas"
        :key="index"
        v-on:click="ninja.show = !ninjas.show"
      >
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: [
        { name: "Blink", speciality: "Vue Components", show: false },
        { name: "Queen", speciality: "HTML Wizardry", show: false },
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
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
