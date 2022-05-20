<template>
  <div class="navHeader">
    <div class="navPeaks">
      <router-link to="/">
        <img src="/peakslogo.svg" class="navImg" alt="peaks" />
      </router-link>
    </div>
    <div class="navMixit">
      <img src="/mixitlogo.svg" class="navImg" alt="mixit" /> 24-25 Mai 2022
    </div>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
