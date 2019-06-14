<template>
  <div id="app">
  	<nav-bar></nav-bar>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Foot from '@/components/Foot'
export default {
  name: 'App',
  components:{
  	NavBar,
    Foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
