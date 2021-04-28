<template>
    <div class="log">
        <div class="container">
             <h4><b>Log</b></h4>
             {{ moves }}
        </div>
    </div>
</template>

<script>
export default {
  name: 'log',
  props: {
	title: String,
    moves: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log {
    font-family: 'Poppins', sans-serif;
    position: fixed;
    bottom: 0;
    left: 0;
    background:  #348ceb;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 20%;
    width: 20%;
    border: 3px solid black;
    border-radius: 10px;
}

.log:hover {
    background-color: white;
    transition: ease-out 0.5s;
}

/* On mouse-over, add a deeper shadow */
.commands:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

.button {
    height: auto;
    padding: 10px;
    margin: 0 auto 0 auto;
    width: 150px;
    border-radius: 1px;
    align-items:center;
    background-color: gray;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: #ffffff;
    border-radius: 32px;
    transition: ease-in 0.2s;
    font-family: 'Poppins', sans-serif;
    margin: 10px;
}

.button:hover {
    background-color: black;
    transition: ease-out 0.5s;
}

.row {
    display: flex;
    flex-direction: row;
}
</style>
