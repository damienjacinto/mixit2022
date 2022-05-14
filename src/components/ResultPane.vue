<template>
  <div class="result" v-bind:class="{ darkMode: darkmodebool , splitpanes__pane: true}" style="display: block">
    <div class="titleEditor" >
      <ul>
        <li>result</li>
      </ul>
    </div>
    <div style="background-color: white">
      <ImgComparisonSlider hover="true" >
        <!-- eslint-disable -->
        <iframe
          slot="first"
          id="resultPane"
          class="resultPane"
          v-bind:class="{ lightDarkMode: darkmodebool }"
          :srcdoc="codeComputed"
          sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          frameBorder="0"
        ></iframe>
        <img slot="second" src="favicon.svg" class="resultImg">
        <!-- eslint-enable -->
      </ImgComparisonSlider>
    </div>
  </div>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
export default {
  name: "result-pane",
  props: {
    payload: {
      type: Object,
      default: () => {
        return {
          css: "",
          javascript: "",
          html: "",
        }
      },
    },
    darkmode: {
      type: String,
      default: 'false'
    }
  },
  components: {
    ImgComparisonSlider,
  },
  computed: {
    codeComputed: function() {
      // eslint-disable-next-line
      var javascript = `<script type="text/javascript" id="_script">${this.payload.javascript}<\/script>`
      var header = `<head>
        <style id="_style">${this.payload.css}</style>
        ${javascript}
        </head>`

      return `<html>${header}<body>${this.payload.html}</body></html>`;
    },
    darkmodebool: function() {
      return (this.darkmode === 'true')
    }
  }
};
</script>
