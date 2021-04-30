<template>
  <body>
    <div class="column">
      <div class="row">
        <buyin :baseAmount = 'buyValue'></buyin>
      </div>
      <div class="row">
        <player name="Empty" class="center" ></player>  
        <player name="Empty" class="left"></player>
        <player name="Empty" class="right"></player>
        <player name="Empty" class="bottom"></player>
      </div>
    </div>
    <pot></pot>
  </body>
</template>

<script>
//import topbar from './components/topbar.vue'
import buyin from './components/buyin.vue'
import pot from './components/pot.vue'
import player from './components/player.vue'
import io from 'socket.io-client'
import jQuery from 'jquery'
global.$ = jQuery
import axios from 'axios'

export default {
  name: 'App',
  components: {
    buyin,
    //topbar,
    pot,
    player
  },
  data(){
    return{
      buyValue:'$10',
      roundInfo: {},
      playerSize: 0,
      code: "",
      username: "",
      userId: ""
    }
  },
  methods:{
      updatePlayers:function(round) {
        this.roundInfo = round;
        
        for (var i = 0; i < this.roundInfo.names.length; i++) {
          //document.getElementById("players").innerHTML = document.getElementById("players").innerHTML + this.roundInfo.stacks[i] + " " + this.roundInfo.names[i];

          if(i == 0) {
            document.getElementByClassName("center").name = "Jin"
          }
          if(i == 1) {
            document.getElementByClassName("left").name = "Dennis"
          }
          if(i == 2) {
            document.getElementByClassName("right").name = "Zach"
          }
          if(i == 3){
            document.getElementByClassName("bottom").name = "Andy"
          }

        }
    }
  },
    beforeMount() {

      // Obtains the code and joins that room
      var url = window.location.href;
      this.code = url.substring(url.length-4, url.length);

      // Sets the variable username
      axios.get('http://' + window.location.host + '/getName').then(response => {
        console.log(response.body);
        /*
        this.username = response.body;

        // Grabs the userID from the database
        axios.get('http://' + window.location.host + '/getUserId').then(response => {
          this.userId = response.body;

          document.getElementById("codeElement").innerHTML = "CODE: " + this.code;
          socket.emit('gameJoin', this.code, this.username, this.userId);
          });
          */
          
      });
    }

};

var socket = io();

// New person joined the game
socket.on('updatePlayers', function(round) {
  this.updatePlayers(round);
});


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
