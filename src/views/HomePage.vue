<template>
  <div class="mainChallenge">
    <img src="challenge.png" class="logoChallenge" />
    <div class="selectChallenge">
      <TypeChallenge :title="'CSS'" :text="box.css.text" :path="'/cssSelect'" :image="box.css" />
      <TypeChallenge :title="'ALGO'" :text="box.algo.text" :path="'/'" :image="box.algo" :disable="true" />
      <TypeChallenge :title="'KUBE'" :text="box.kube.text" :path="'/devopsSelect'" :image="box.kube" />
    </div>
  </div>
</template>

<script>
import TypeChallenge from '../components/TypeChallenge.vue'
export default {
  name: 'HomePage',
  data() {
    return {
      box: {
        css: {
          img: "",
          logo: "/css.png",
          text: "Reproduit la forme pour remporter le challenge"
        },
        algo: {
          img: "/gorille.png",
          logo: "/algo.png",
          text: "Corrige l'aglorithme pour remporter le challenge"
        },
        kube: {
          img: "/devops.png",
          logo: "/kube.png",
          text: "Répare un déploiement sur kubernetes"
        }
      }
    }
  },
  components: {
    TypeChallenge
  }
}
</script>

<style>
.logoChallenge {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}

.mainChallenge {
  padding-top: 40px;
}

.selectChallenge {
  display: flex;
  width: 100%;
  //height:100%;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.green {
  background-color: ;
}

.blue {
  background-color: ;
}

.red {
  background-color: ;
}

</style>