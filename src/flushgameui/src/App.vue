<template>
  <topbar title="RoyalFlush"></topbar>
  <body>
    <div class="column">
      <div class="row">
        <buyin baseAmount="$100.00"></buyin>
        <player class="center" name="Zach"></player>
      </div>
      <div class="row">
        <player name="John" class="left"></player>
        <player name="Dennis" class="right"></player>
        <player name="Anon" class="bottom"></player>
      </div>
    </div>
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
  margin-top: 50px;
  }

  .center {
  margin-top: 150px;
  border-radius: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

 .left {
  margin-top: 150px;
  border-radius: 100px;
  position: absolute;
  left: 10%;
  top: 30%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

 .right {
  margin-top: 150px;
  border-radius: 100px;
  position: absolute;
  right: -25%;
  top: 30%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

 .bottom {
  margin-top: 150px;
  border-radius: 100px;
  position: absolute;
  left: 50%;
  top: 70%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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

  .column {
    display: flex;
    flex-direction: column;
  }

  .row {
    display: flex;
    flex-direction: row;
  }
</style>
