<template>
  <header-pane v-model:darkmode="darkmode" />
  <div class="content">
    <splitpanes
      class="default-theme"
      horizontal
      :push-other-panes="false"
      :dbl-click-splitter="false">
      <pane size="50">
        <splitpanes :push-other-panes="false" :dbl-click-splitter="false">
          <pane>
            <code-editor title="css" mode="css" :darkmode="darkmode" v-model:code="payload.css" />
          </pane>
          <pane>
            <code-editor title="js" mode="javascript" :darkmode="darkmode" v-model:code="payload.javascript" />
          </pane>
          <pane>
            <code-editor title="html" mode="htmlmixed" :darkmode="darkmode" v-model:code="payload.html" />
          </pane>
        </splitpanes>
      </pane>
      <pane size="30">
        <result-pane v-model:payload="payload" :darkmode="darkmode"/>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import CodeEditor from '../components/CodeEditor.vue'
import ResultPane from '../components/ResultPane.vue'
import HeaderPane from '../components/HeaderPane.vue'

const emptyPayload = { css: "", javascript: "", html: "" }

export default {
  name: 'CssChallenge',
  data: function() {
    return {
      darkmode: 'false',
      payload: emptyPayload
    }
  },
  components: {
    Splitpanes, Pane, CodeEditor, ResultPane, HeaderPane
  },
}
</script>
