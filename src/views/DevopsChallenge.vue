<template>
  <div class="content">
    <splitpanes
      class="default-theme"
      horizontal
      :push-other-panes="false"
      :dbl-click-splitter="false">
      <pane size="45">
        <TerminalEditor />
      </pane>
      <pane size="5">
        <ResultDevopsPane :idChallenge="id"/>
      </pane>
      <pane size="30">
        <div>
          <TabsPane :hints="hints"></TabsPane>
        </div>
      </pane>
    </splitpanes>
  </div>
  <header-pane v-model:darkmode="darkmode" @reset="reset"/>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import HeaderPane from '../components/HeaderPane.vue'
import TabsPane from '../components/TabsPane.vue'
import TerminalEditor from '../components/TerminalEditor.vue'
import DevopsChallengeData from '../data/devopschallenge.json'
import ResultDevopsPane from '../components/ResultDevopsPane.vue'

//const emptyPayload = { css: "", javascript: "", html: "" }

export default {
  name: 'DevopsChallenge',
  data: function() {
    const challengeId = this.id;
    var challenge = DevopsChallengeData.filter(function(item) {
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
    HeaderPane,
    TabsPane,
    TerminalEditor,
    ResultDevopsPane
  },
}
</script>


<style>
.splitpanes__pane {
  font-size: 50px;
}
</style>