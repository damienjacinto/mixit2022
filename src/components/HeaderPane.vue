<template>
  <div class="header" v-bind:class="{ lightDarkMode: darkmodebool }">
    <input type="radio" name="darkmode" value="false" id="default" @input="$emit('update:darkmode', $event.target.value)" checked />
    <label for="default">Default</label>
    <input type="radio" name="darkmode" value="true" id="darkmode"  @input="$emit('update:darkmode', $event.target.value)" />
    <label for="darkmode">Darkmode</label>
  </div>
</template>

<script>
export default {
  name: "header-pane",
  props: {
    darkmode: {
      type: String,
      default: 'false'
    }
  },
  emits: ["update:darkmode"],
  computed: {
    darkmodebool: function() {
      return (this.darkmode === 'true')
    }
  }
}
</script>
