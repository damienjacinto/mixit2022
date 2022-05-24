<template>
  <div class="navHeader">
    <div class="navPeaks">
      <router-link to="/">
        <img src="/peakslogo.svg" class="navImg" alt="peaks" />
      </router-link>
    </div>
    <div class="navMixit">
      <div class="sponsor" >
        Sponsor du
        <img src="/mixitlogo.svg" class="navImg" alt="mixit" />
      </div>
      <div class="date">24-25 Mai 2022</div>
    </div>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.date {
  display: inline;
  float: right;
}
.sponsor {
  display: inline;
  width: 80%;
}
</style>
