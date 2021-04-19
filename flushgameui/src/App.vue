<template>
  <topbar title="RoyalFlush"></topbar>
  <buyin baseAmount="$100.00"></buyin>
  <pot></pot>
</template>

<script>
import topbar from './components/topbar.vue'
import buyin from './components/buyin.vue'
import pot from './components/pot.vue'

export default {
  name: 'App',
  components: {
    buyin,
    topbar,
    pot
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
</style>
