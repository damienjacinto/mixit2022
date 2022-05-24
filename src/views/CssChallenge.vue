<template>
  <div class="content">
    <splitpanes
      class="default-theme"
      horizontal
      :push-other-panes="false"
      :dbl-click-splitter="false">
      <pane size="50">
        <splitpanes :push-other-panes="false" :dbl-click-splitter="false">
          <pane>
            <code-editor title="HTML" mode="htmlmixed" :darkmode="darkmode" v-model:code="payload.html" />
          </pane>
          <pane>
            <code-editor title="CSS" mode="css" :darkmode="darkmode" v-model:code="payload.css" />
          </pane>
          <pane>
            <result-pane :title="'Résultat'" v-model:payload="payload" :idChallenge="id" :darkmode="darkmode" @reset="reset"/>
          </pane>
        </splitpanes>
      </pane>
      <pane size="30">
        <div>
          <TabsPane :hints="hints"></TabsPane>
        </div>
      </pane>
    </splitpanes>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import CodeEditor from '../components/CodeEditor.vue'
import ResultPane from '../components/ResultPane.vue'
import TabsPane from '../components/TabsPane.vue'
import CssChallengeData from "../data/csschallenge.json";

export default {
  name: 'CssChallenge',
  data: function() {
    const challengeId = this.id;
    var challenge = CssChallengeData.filter(function(item) {
        return item.id === parseInt(challengeId)
      })[0];
    return {
      darkmode: 'false',
      payload: { css: "", javascript: "", html: "" },
      hints: challenge.hints
    }
  },
  props: {
    id: {}
  },
  methods: {
    reset() {
      this.payload.css = "";
      this.payload.html = "";
    }
  },
  components: {
    Splitpanes,
    Pane,
    CodeEditor,
    ResultPane,
    TabsPane,
  },
}
</script>


<style>
.splitpanes__pane {
  font-size: 50px;
}
</style>