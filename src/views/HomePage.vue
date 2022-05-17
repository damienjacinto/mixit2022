<template>
  <div style="padding-top: 40px;">
    <img src="challenge.png" class="logoChallenge" />
    <div class="mainChallenge">
      <div class="boxChallenge">
        <router-link to="/cssSelect">
          <h3>CSS</h3>
        </router-link>
      </div>
      <div class="boxChallenge">
        <h3>CODE</h3>
      </div>
      <div class="boxChallenge">
        <h3>DEVOPS</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {

  }
}
</script>

<style>
.logoChallenge {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.mainChallenge {
  display: flex;
  width: 100%;
  height:100%;
  justify-content: center;
  margin-top:50px;
}

.boxChallenge {
  width: 20%;
  height: 60%;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>