<template>
  <div class="container">
    <div class="row">
        <div class="col-xs-12">
            <header> <h1>Server Status</h1> </header>
        </div>
    </div>
    <hr>        
    <Home></Home>
    <hr>
    <div class="row">
        <div class="col-xs-12">
            <footer> <p>All Servers are managed here</p> </footer>
        </div>
    </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}


</script>

<style>
</style>
