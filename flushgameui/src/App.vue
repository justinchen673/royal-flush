<template>
  <topbar title="RoyalFlush"></topbar>
  <body>
    <player style="margin-top: 100px;" class="center" name="Zach"></player>
    <buyin baseAmount="$100.00"></buyin>
    <pot></pot>
  </body>
</template>

<script>
import topbar from './components/topbar.vue'
import buyin from './components/buyin.vue'
import pot from './components/pot.vue'
import player from './components/player.vue'

export default {
  name: 'App',
  components: {
    buyin,
    topbar,
    pot,
    player
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

  body {
    background: linear-gradient(-30deg, white, green, white, white);
    background-size: 40% 40000%;
    animation: gradient 10s ease infinite;
  }

  @keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
  }
</style>
