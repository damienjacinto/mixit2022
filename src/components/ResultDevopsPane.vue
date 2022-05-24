<template>
  <div v-html="data.data.response" :class="{ valid: isValid, error: !isValid }">
  </div>
</template>

<script>
import DevopsChallengeData from "../data/devopschallenge.json";
const axios = require('axios').default;
export default {
  name: "result-devops-pane",
  data() {
    return {
      status: true,
      data: { data : { response: ""}},
      isValid: false,
      interval: null
    };
  },
  props: {
    idChallenge: {
      type: String,
      default: "1"
    }
  },
  methods: {
    reNew() {
      var idChallenge = this.idChallenge;
      var challenge = DevopsChallengeData.filter(function(item) {
        return item.id === parseInt(idChallenge)
      })[0];
      axios.get(challenge.url)
        .then((response) => {
          this.data = response;
          this.isValid = true;
          if (response.statut == 200) {
            clearInterval(this.interval)
          }
        })
        .catch(() => {
          this.isValid = false;
          this.data.data.response = "Une erreur est présente";
        })
    }
  },
  mounted() {
    this.reNew()
  },
  created(){
    this.interval = setInterval(() =>{
      this.reNew()},3000)
  },
  unmounted(){
    clearInterval(this.interval)
  },
  computed: {

  }
};
</script>

<style>
.valid {
  padding-left: 20px;
  color: green;
}
.error {
  padding-left: 20px;
  color: red;
}
</style>