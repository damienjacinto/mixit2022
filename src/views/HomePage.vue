<template>
  <div class="mainChallenge">
    <img src="challenge.png" class="logoChallenge" />
    <div class="selectChallenge">
      <div class="boxChallenge">
        <router-link to="/cssSelect">
          <h3>CSS</h3>
        </router-link>
      </div>
      <div class="boxChallenge">
        <h3>CODE</h3>
      </div>
      <div class="boxChallenge">
        <router-link to="/devopsSelect">
          <h3>DEVOPS</h3>
        </router-link>
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
  width: 40%;
}

.mainChallenge {
  padding-top: 40px;
}

.selectChallenge {
  display: flex;
  width: 100%;
  height:100%;
  justify-content: center;
  margin-top:50px;
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



.boxChallenge {
  width: 20%;
  height: 60%;
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}
</style>