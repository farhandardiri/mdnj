<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in this form to conyact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <label>Your Message</label>
        <textarea></textarea>
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Send</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./FormHelper";
export default {
  components: {
    "form-helper": formHelper,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>
