<template>
  <div class="tab" v-show="data.isActive">
    {{ data.text }}
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
          isActive: true
        })
      }
    }
  }
</script>

<style>
  .tab {
    display: block;
    font-size: 18px;
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
</style>