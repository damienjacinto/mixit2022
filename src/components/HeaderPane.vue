<template>
  <div class="header" v-bind:class="{ lightDarkMode: darkmodebool }">
    <input type="radio" name="darkmode" value="false" id="default" @input="$emit('update:darkmode', $event.target.value)" checked />
    <label for="default">Default</label>
    <input type="radio" name="darkmode" value="true" id="darkmode"  @input="$emit('update:darkmode', $event.target.value)" />
    <label for="darkmode">Darkmode</label>
    <button @click="tojpg">Result</button>
    <button @click="showModal">Show modal</button>
  </div>
  <ModalPane
      v-show="isModalVisible"
      @retry="closeModal"
      @close="exitChallenge"
      v-model:diffData="diffData"
      v-model:score="score"
      v-model:shown="isModalVisible"
    />
</template>

<script>

import * as htmlToImage from 'html-to-image';
import ModalPane from './ModalPane.vue';
const pixelmatch = require('pixelmatch');
import { getDataFromImage, getDataFromCanvas, countPixels, calculateScore } from '../utils/helper.js';

export default {
  name: "header-pane",
  props: {
    darkmode: {
      type: String,
      default: 'false'
    }
  },
  data: function() {
    return {
      isModalVisible: false,
      diffData: {},
      score: 0
    }
  },
  components: {
    ModalPane
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    exitChallenge() {
      this.$emit('reset');
      this.$router.push({name:'Home'});
    },
    tojpg() {
      htmlToImage.toCanvas(document.getElementById('resultPane').contentWindow.document.documentElement, { quality: 0.95, canvasWidth: 400, canvasHeight: 400, width: 400, height: 400})
        .then((canvas) => {
          var challengeData = getDataFromCanvas(canvas);
          var resultData = getDataFromImage(document.getElementById('resultImg'));
          var diffData = document.createElement('canvas').getContext('2d').createImageData(400, 400);

          var numDiffPixels = pixelmatch(challengeData.data, resultData.data, diffData.data, 400, 400, {threshold: 0.1});

          var maxDiff = countPixels(resultData.data, 400, 400);
          this.score = calculateScore(numDiffPixels, maxDiff);
          this.diffData = diffData;

          this.showModal();
        });
    }
  },
  emits: ["update:darkmode", "reset"],
  computed: {
    darkmodebool: function() {
      return (this.darkmode === 'true')
    }
  }
}
</script>