<template>
  <div class="navHeader">
      <div class="navPeaks">
      <router-link to="/">
        <img src="peakslogo.svg" class="navImg" alt="peaks" />
      </router-link>
      </div>
    <div class="navMixit">
      <img src="mxticonlogo.svg" class="navImg" alt="mixit" /> Challenges
    </div>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
