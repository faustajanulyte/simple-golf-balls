<template>
  <div id="app">
    <Navbar/>
    <Body/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './header/navbar/Navbar.vue'
import Body from './body/Body.vue'
import Footer from './footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Body,
    Footer
  }
}
</script>

<style>

</style>