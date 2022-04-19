<template>
  <div class="titleEditor" v-bind:class="{ lightDarkMode: darkmodebool }">
    <ul>
      <li v-bind:class="{ darkMode: darkmodebool }">{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header-editor",
  props: {
    darkmode: {
      type: String,
      default: "false"
    },
    title: {
      type: String,
      default: "title"
    }
  },
  computed: {
    darkmodebool: function() {
      return (this.darkmode === 'true')
    }
  }
}
</script>
