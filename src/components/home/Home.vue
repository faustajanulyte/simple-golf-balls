<template>
  <div class="app">
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
.app {
  background-image: url('~@/assets/images/background.jpg');
  background-size: 100%;
  margin: 0px;
  opacity: 0.8;
}
</style>