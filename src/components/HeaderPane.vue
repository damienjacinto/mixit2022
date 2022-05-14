<template>
  <div class="header" v-bind:class="{ lightDarkMode: darkmodebool }">
    <input type="radio" name="darkmode" value="false" id="default" @input="$emit('update:darkmode', $event.target.value)" checked />
    <label for="default">Default</label>
    <input type="radio" name="darkmode" value="true" id="darkmode"  @input="$emit('update:darkmode', $event.target.value)" />
    <label for="darkmode">Darkmode</label>
    <button @click="tojpg">Result</button>
  </div>
</template>

<script>

import * as htmlToImage from 'html-to-image';

export default {
  name: "header-pane",
  props: {
    darkmode: {
      type: String,
      default: 'false'
    }
  },
  methods: {
    tojpg() {
      htmlToImage.toPng(document.getElementById('resultPane').contentWindow.document.documentElement, { quality: 0.95 })
        .then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'my-image-name.jpeg';
          link.href = dataUrl;
          link.click();
        });
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
