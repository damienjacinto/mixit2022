<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/css">Challenge CSS</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>
