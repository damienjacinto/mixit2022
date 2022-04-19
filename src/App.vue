<template>
  <div class="header">
    ENTETE
  </div>
  <div class="content">
    <splitpanes
      class="default-theme"
      horizontal
      :push-other-panes="false"
      :dbl-click-splitter="false">
      <pane size="50">
        <splitpanes :push-other-panes="false" :dbl-click-splitter="false">
          <pane>
            <code-editor title="css" mode="css" darkmode="true" :code="payload.css" @updateCode="updateCss"/>
          </pane>
          <pane>
            <code-editor title="js" mode="javascript" :code="payload.javascript" @updateCode="updateJavascript" />
          </pane>
          <pane>
            <code-editor title="html" mode="htmlmixed" :code="payload.html" @updateCode="updateHtml" />
          </pane>
        </splitpanes>
      </pane>
      <pane size="30">
        <result-pane :payload="result"/>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import CodeEditor from './components/CodeEditor.vue'
import ResultPane from './components/ResultPane.vue'

const emptyPayload = { css: "", javascript: "", html: "" }

export default {
  name: 'App',
  data: function() {
    return {
      result: emptyPayload,
      payload: emptyPayload
    }
  },
  methods: {
    updateCss: function(value) {
      this.result.css = value
    },
    updateJavascript: function(value) {
      this.result.javascript = value
    },
    updateHtml: function(value) {
      this.result.html = value
    }
  },
  components: {
    Splitpanes, Pane, CodeEditor, ResultPane
  },
}
</script>
