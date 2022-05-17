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
            <code-editor title="html" mode="htmlmixed" :darkmode="darkmode" v-model:code="payload.html" />
          </pane>
          <pane>
            <code-editor title="css" mode="css" :darkmode="darkmode" v-model:code="payload.css" />
          </pane>
          <pane>
            <result-pane v-model:payload="payload" :idChallenge="id" :darkmode="darkmode"/>
          </pane>
        </splitpanes>
      </pane>
      <pane size="30">
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
  props: {
    id: {}
  },
  components: {
    Splitpanes, Pane, CodeEditor, ResultPane, HeaderPane
  },
}
</script>
