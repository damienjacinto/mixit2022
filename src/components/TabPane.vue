<template>
  <div class="tab" v-show="data.isActive">
    <div v-if="data.color">
      Couleurs :
      <ul>
        <li v-for="(c,index) in data.color" :key="index"><span class="dot" v-bind:style="'background-color: ' + c"/>{{ c }}</li>
      </ul>
    </div>
    <ul v-html='format(data.text)'>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "tab-pane",
    props: {
      data: {
        type: Object,
        default: () => ({
          text: "",
          color: [],
          isActive: true
        })
      }
    },
    computed: {
      format(){
        return (t)=>{
          return '<li>' + t.replaceAll('\n','</li><li>') + '</li>'
        }
      }
    }
  }
</script>

<style scoped>
  .tab ul {
    margin: 20px;
  }
  .tab ul li{
    display: inline;
  }
  .tab {
    display: block;
    font-size: .8em;
    color: black;
    width: 100%;
    padding: 20px;
    min-width: 800px;
    border-radius: 10px;
    min-height: 400px;
    background-color: #fff;
    border: 1px solid #000;
    margin-top: -3px;
  }
  .dot {
    height: 30px;
    width: 30px;
    border: 1px solid #000;
    border-radius: 50%;
    margin-right: 5px;
    display: inline-block;
  }
</style>