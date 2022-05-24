<template>
  <div class="boxChallenge" :class="{ disable: disable }">
    <router-link class="boxRouter" :to="path">
      <div class="boxImage">
        <img class="boxLogo" v-bind:src="image.logo"/>
      </div>
      <div class="boxText">
        <p>{{ text }}</p>
      </div>
      <!--<div class="boxImage">
        <img class="boxLogo" v-bind:src="image.img"/>
      </div>-->
    </router-link>
  </div>
</template>

<script>
export default {
  name: "typechallenge-pane",
  props: {
    title: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      default: "/"
    },
    text: {
      type: String,
      default: ""
    },
    image: {
      type: Object,
      default: () => ({ logo: "", img: "" })
    },
    disable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .disable {
    opacity: 0.33;
  }
  .boxChallenge {
    width: 30%;
    margin: 20px;
    padding-top: 30px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .boxImage {
    text-align: center;
    height: 40%;
  }
  .boxLogo {
    width: 50%;
  }
  .boxText {
    color: #000;
    font-size: .6em;
    padding: 20px;
    text-align: center;
  }
  .boxRouter {
    text-decoration: none;
  }
</style>