<template>
  <div class="carouselMain">
    <Carousel :itemsToShow="3.95" :wrapAround="true">
      <Slide v-for="challenge in devopsChallenge" :key="challenge">
        <CardSelector :challenge="challenge" :name="type" />
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import DevopsChallengeData from "../data/devopschallenge.json";
import CardSelector from '../components/CardSelector.vue'

export default {
  name: 'DevopsSelectChallenge',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
    CardSelector
  },
  data: function() {
    return {
      devopsChallenge: DevopsChallengeData,
      type: 'DevopsChallenge'
    };
  },
}
</script>

<style>
:root {
  --vc-clr-primary: #E74E96;
  --vc-clr-secondary: #F195C0;
}
.carouselMain {
  margin: 0 auto;
  padding: 4rem 1.5rem 4rem;
  width: 80%;
  padding-bottom: 1.5rem;
  position: relative;
}
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
  z-index: 1;
}
.carousel__slide--visible > .carousel__item {
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-200px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.8) translate(200px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
  z-index: 2;
  opacity: 1;
}
.carousel__item {
  height: 400px;
  width: 400px;
	background-color: var(--vc-clr-primary);
  border: 1px solid var(--vc-clr-primary);
	border-radius: 10px;
	color: white;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.carousel__slide {
	padding: 20px;
}
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
</style>