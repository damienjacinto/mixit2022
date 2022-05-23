<template>
  <div class="carousel__item">
    <div class="card" @click="handleSelect(challenge.id)">
      <div class="cardLink">
        {{ challenge.name }}
      </div>
      <div class="backgroundImagePreview">
        <img v-bind:src="challenge.path" class="imagePreview"/>
      </div>
      <div class="cardText">
          Difficulté :
      </div>
      <div class="cardRating">
        <StarRating inactive-color="#ffffff" :show-rating="false" :read-only="true" v-bind:rating="challenge.rating"/>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'CardSelector',
  components: {
    StarRating
  },
  props: {
    challenge: {
      type: Object,
      default () {
        return {
          path: "",
          name: "",
          rating: 0
        }
      }
    },
    name: {
      type: String,
      default: ""
    }
  },
  methods:{
    handleSelect(challengeId){
      this.$router.push({name: this.name, params: { id: challengeId } })
    }
  }
}
</script>

<style>
.cardLink {
  margin: 20px;
  color: white;
  font-size: 1.5em;
}
.imagePreview {
  width: 100px;
  height: 100px;
}
.backgroundImagePreview {
  background: white;
  padding-top: 10px;
}
.cardText {
  padding-top: 20px;
}
.card {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.cardRating {
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
}
</style>