<template>
  <!-- <div v-theme:column="'wide'" id="show-blogs"> -->
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div
      v-for="(blog, index) in filteredBlogs"
      :key="index"
      class="single-blog"
    >
      <!-- <h2 v-rainbow>{{ blog.title }}</h2> -->
      <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
      <article>{{ blog.body | snipped }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixins";

export default {
  components: {},
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (data) {
        // console.log(data);
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {},
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
  mixins: [searchMixin],
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
