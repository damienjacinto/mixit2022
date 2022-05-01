<template>
  <iframe
    class="resultPane"
    v-bind:class="{ lightDarkMode: darkmodebool }"
    :srcdoc="codeComputed"
    sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
    frameBorder="0"
  ></iframe>
</template>

<script>
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
