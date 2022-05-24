<template>
  <div class="result" v-bind:class="{ darkMode: darkmodebool , splitpanes__pane: true}" style="display: block">
    <div class="titleEditor" >
      <ul>
        <li>{{ title }}</li>
      </ul>
    </div>
    <div class="resultContent">
      <ImgComparisonSlider hover="true" >
        <!-- eslint-disable -->
        <iframe
          slot="first"
          id="resultPane"
          class="resultPane"
          v-bind:class="{ lightDarkMode: darkmodebool }"
          :srcdoc="codeComputed"
          sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          frameBorder="0"
        ></iframe>
        <img id="resultImg" slot="second" v-bind:src="'/' + challengeImg.path" class="resultImg">
        <!-- eslint-enable -->
      </ImgComparisonSlider>
      <div class="buttonCenter">
        <button class="button" @click="tojpg">Valider</button>
      </div>
    </div>
  </div>
  <ModalPane
      v-show="isModalVisible"
      @retry="closeModal"
      @close="exitChallenge"
      v-model:diffData="diffData"
      v-model:challengeData="challengeData"
      v-model:score="score"
      v-model:shown="isModalVisible"
      :imgResult="'/' + challengeImg.path"
    />
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';
import CssChallengeData from "../data/csschallenge.json";
import * as htmlToImage from 'html-to-image';
import ModalPane from './ModalPane.vue';
const pixelmatch = require('pixelmatch');
import { getDataFromImage, getDataFromCanvas, countPixels, calculateScore } from '../utils/helper.js';

export default {
  name: "result-pane",
  data: function() {
    return {
      isModalVisible: false,
      diffData: {},
      challengeData: {},
      score: 0
    }
  },
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
    },
    idChallenge: {
      type: String,
      default: "1"
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    ImgComparisonSlider,
    ModalPane
  },
  methods: {
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
          this.challengeData = challengeData;

          this.showModal();
        });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    exitChallenge() {
      this.$emit('reset');
      this.$router.push({name:'Home'});
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
    },
    challengeImg: function() {
      var idChallenge = this.idChallenge;
      return CssChallengeData.filter(function(item) {
        return item.id === parseInt(idChallenge)
      })[0];
    },
  },
  emits: ["reset"],
};
</script>

<style>
.resultContent {
  background-color: white;
  height: 100%;
  border: 1px solid #eee;
}
.rendered {
  border: 1px solid #E74E96;
  margin: 20px;
}
</style>