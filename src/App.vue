<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TestComponent/>
  
</template>

<script>
import TestComponent from './components/TestComponent.vue';


export default {
  name: 'App',
  components: {
    TestComponent
  }
}
</script>

<style>
#app {
  font-family:'Courier New', Courier, monospace;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}
</style>
