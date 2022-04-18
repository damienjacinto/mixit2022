<template>
  <header-pane :title="title" :darkmode="darkmode"/>
  <codemirror :value="code" :options="cmoptions" @input='emitValue' />
</template>

<script>
import Codemirror from "codemirror-editor-vue3";
import "codemirror/theme/dracula.css";
import HeaderPane from './HeaderPane.vue'

export default {
  name: "code-editor",
  data: function() {
    var theme = (this.darkmode ? 'dracula' : 'default')
    return {
      cmoptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: theme,
        lineNumbers: true,
        line: true,
      }
    }
  },
  emits: ["updateCode"],
  methods: {
    emitValue(value) {
      this.$emit(`updateCode`, value);
    },
  },
  props: {
    darkmode: {
      type: Boolean,
      default: false
    },
    code: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "title"
    }
  },
  components: {
    Codemirror, HeaderPane
  }
};
</script>
