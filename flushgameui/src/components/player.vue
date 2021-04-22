<template>
  <div class="column">
    <div class="userItem">
      <div class="status offline">
      </div>
      <div class="userName">
        {{name}}
      </div>
    </div>
    <div class="cards">
       <img class="card" src="~../assets/facedown.png"/>
       <img class="card" src="~../assets/facedown.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'player',
  props: {
	name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.column {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
}

.player {
  background-color: gray;
  color: white;
  border: 3px solid green;
  border-radius: 1px;
  width: 10%;
  height: auto;
  margin-top: 50px;
  margin-left: 0px;
}

.card {
  max-width: 10%;
  height: auto;
}

.card:hover {
  transition: .5s ease;
  background-color: #008CBA;
  opacity: 0.5;
}

.center {
  margin-top: 150px;
  border-radius: 100px;
  position: absolute;
  left: 50%;
  top: 5%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.userItem{
    height: auto;
    padding: 10px;
    margin: 0 auto 0 auto;
    width: 150px;
    border-radius: 1px;
    align-items:center;
    background-color: #348ceb;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    color: #ffffff;
    border-radius: 32px;
    transition: ease-in 0.2s;
    font-family: 'Poppins', sans-serif;
}

.userItem:hover{
    background-color: black;
    color: #ddd;
    transition: ease-out 0.5s;
}

.online{
    background-color: #0FA;
}

.busy{
    background-color: #FB0;
}

.offline{
    background-color: #888;
}

.status{
    border: 1px solid black;
    display: inline-block;
    /* min-width: 10px; */
    width: 10px;
    min-height: 10px;
    border-radius: 50%;
    /* margin: 2px 12px 0px 10px; */
}

.userName{
    width: 20%;
    display: inline-block;
}
</style>
