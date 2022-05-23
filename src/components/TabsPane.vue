<template lang="html">
  <div class="tabsMain">
    <ul class="tabsHeader">
      <li v-for="(tab, index) in hints" :key="tab.index" @click="selectTab(index)" :class='{"tabSelected": (index == selectedIndex)}'>{{ tab.title }}</li>
    </ul>
  </div>
  <TabPane v-for="tab in tabs" :key="tab.index" :data="tab"/>
</template>

<script>
  import TabPane from './TabPane.vue'
  export default {
    name: "tabs-pane",
    data: function() {
      var tabs = this.hints;
      tabs.forEach(elem => elem.isActive = false);
      return {
        selectedIndex: 0,
        tabs: tabs
      }
    },
    props: {
      hints: {
        type: Array,
        default: () => []
      },
    },
    mounted () {
      this.selectTab(0);
    },
    methods: {
      selectTab(i) {
        this.selectedIndex = i;
        this.tabs.forEach((tab, index) => {
          tab.isActive = (index === i)
        })
      }
    },
    components: {
      TabPane,
    },
  }
</script>

<style>
  ul.tabsHeader {
    display: block;
    list-style: none;
    margin: 0 0 0 20px;
    padding: 0;
  }
  ul.tabsHeader > li {
    padding: 5px 30px;
    border-radius: 10px;
    margin: 0;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }
  ul.tabsHeader > li.tabSelected {
    font-weight: bold;
    border-radius: 10px 10px 0px 0px;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom: 8px solid transparent;
  }
  .tabsHeader > li {
    background-color: #ddd;
    color: #aaa;
    font-size: 30px;
    border: 1px solid #000;
  }
  .tabsHeader > li.tabSelected {
    background-color: #fff;
    color: #E74E96;
  }
</style>
