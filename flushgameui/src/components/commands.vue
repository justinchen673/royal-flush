<template>
    <div class="commands">
        <div class="container">
             <h4><b>Commands</b></h4>
             <div class="row">
                <div class="button">Check</div>
                <div class="button">Call</div>
                <div class="button">Fold</div>
             </div>
             <div class="row">
                <div class="button">Raise</div>
                <div class="button">$0.00</div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'commands',
  props: {
	title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.commands {
    font-family: 'Poppins', sans-serif;
    position: fixed;
    bottom: 0;
    right: 0;
    background:  #348ceb;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    height: 30%;
    width: 30%;
    border: 3px solid black;
    border-radius: 10px;
}

/* On mouse-over, add a deeper shadow */
.commands:hover {
  background-color: white;
  transition: ease-out 0.5s;
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
