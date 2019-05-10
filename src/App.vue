<template>
  <div id="app">
    <img alt="Vue logo" src="https://66.media.tumblr.com/17352e8406b0587ea62d7d101bcf8090/tumblr_orvo5zynew1rdod18o1_400.gif">
    <Boggle msg="Bad Boggle Game @Beta 0.0.1" something = 'HHA'/>
  </div>
</template>

<script>
  import Boggle from './components/Boggle.vue';

  export default {
    name: 'app',
    components: {
      Boggle,
    },
  };
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

