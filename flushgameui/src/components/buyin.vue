<template>
  <nav class="bar">
    <ol>
        <li class ="Buyheader">Buy In</li>
        <li class="amount">(Pay {{ baseAmount }})</li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'buyin',
  props: {
	baseAmount: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bar {
	background: #34eb86;
	border: 3px solid green;
	border-radius: 50px;
  width: 27%;
  margin-top: 100px;
  margin-left: 0px;
}

.bar:hover {
  background: #138719;
  transition: ease-out 0.5s;
}

.Buyheader {
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  margin-right: 50px;
}

</style>
