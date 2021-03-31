<template>
  <!-- <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div> -->
  <!-- <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button @click="component = 'form-one'">Show form one</button>
    <button @click="component = 'form-two'">Show form two</button>
  </div> -->
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blogs></show-blogs>
  </div>
</template>

<script>
// import formHelper from "./components/FormHelper";
// import formOne from "./components/formOne";
// import formTwo from "./components/formTwo";
import addBlog from "./components/addBlog";
import showBlogs from "./components/showBlog";
export default {
  components: {
    // "form-helper": formHelper,
    // "form-one": formOne,
    // "form-two": formTwo,
    "add-blog": addBlog,
    "show-blogs": showBlogs,
  },
  data() {
    return {
      // title: "I am Dinamic Slot Title",
      // component: "form-two",
    };
  },
  methods: {},
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
