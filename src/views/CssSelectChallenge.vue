<template>
  <div style="
    margin: 0 auto;
    padding: 4rem 1.5rem 4rem;
    width: 80%;
    line-height: 1.4;
    font-family: var(--font-family-base);
    font-size: 16px;
    font-weight: 400;
    color: var(--c-text);
    direction: ltr;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    padding-bottom: 1.5rem;
    position: relative;">
    <Carousel :itemsToShow="3.95" :wrapAround="true">
      <Slide v-for="challenge in cssChallenge" :key="challenge">
        <div class="carousel__item">
          <img v-bind:src="challenge.path" class="resultImg" />
          <a href="/cssChallenge">{{ challenge.name }}</a>
        </div>
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
import CssChallengeData from "../data/csschallenge.json";

export default {
  name: 'CssSelectChallenge',
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination
  },
  data: function() {
    return {
      cssChallenge: CssChallengeData,
    };
  },
}
</script>

<style>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-20px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(20px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
.carousel__item {
	min-height: 200px;
	width: 100%;
	background-color: #642afb;
	color: white;
	font-size: 20px;
	border-radius: 8px;
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
  background-color: #E74E96 !important;
}
</style>