<template>
  <header-pane :title="title" :darkmode="darkmode"/>
  <codemirror :value="code" :options="cmoptions" @input='emitValue' />
</template>

<script>
import HeaderPane from './HeaderPane.vue'
import Codemirror from "codemirror-editor-vue3";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";

export default {
  name: "code-editor",
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
    },
    mode: {
      type: String,
      default: "text/javascript"
    }
  },
  computed: {
    cmoptions: function() {
      var theme = (this.darkmode ? 'dracula' : 'default')
      return {
        tabSize: 4,
        mode: this.mode,
        theme: theme,
        lineNumbers: true,
        line: true,
        smartIndent: true,
        indentUnit: 2,
        styleActiveLine: true,
      };
    }
  },
  components: {
    Codemirror, HeaderPane
  }
};
</script>
