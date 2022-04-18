<template>
  <div class="titleEditor" v-bind:class="{ lightDarkMode: darkmode }">
    <ul id="onglets" class="clearfix">
      <li v-bind:class="{ darkMode: darkmode }">{{ title }}</li>
    </ul>
  </div>
</template>

<script>
    //<p v-bind:class="{ darkMode: darkmode }"
export default {
  name: "code-editor",
  props: {
    darkmode: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "title"
    }
  },
}
</script>
