<template>
  <header-editor :title="title" :darkmode="darkmode"/>
  <div style="height:calc(100% - 20px);">
    <codemirror v-model:value="codeEditor" :options="cmoptions" @update:value='emitValue'/>
  </div>
</template>

<script>
import HeaderEditor from './HeaderEditor.vue'
import Codemirror from "codemirror-editor-vue3";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/css/css.js";
import "codemirror/mode/htmlmixed/htmlmixed.js";

export default {
  name: "code-editor",
  emits: ["update:code"],
  methods: {
    emitValue(value) {
      this.$emit(`update:code`, value);
    },
  },
  data: function() {
    return {
      codeEditor: this.code
    }
  },
  props: {
    darkmode: {
      type: String,
      default: "false"
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
      var theme = (this.darkmode === 'true' ? 'dracula' : 'default')
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
    Codemirror, HeaderEditor
  }
};
</script>
