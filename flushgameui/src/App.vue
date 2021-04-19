<template>
<topbar title="RoyalFlush"></topbar>
  <body>
    <buyin baseAmount="$100.00"></buyin>
    <pot></pot>
  </body>
  
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

  body {
    background: linear-gradient(-70deg, white, #D2F5F9, #A9F4FC , #81EDF9 );
    background-size: 4000% 400%;
    animation: gradient 15s ease infinite;
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
