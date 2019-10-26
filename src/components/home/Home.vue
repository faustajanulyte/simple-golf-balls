<template>
  <div class="home">
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
.home {
  background-image: url('~@/assets/images/background.jpg');
  background-size: 100%;
  margin: 0px;
  opacity: 0.7;
}
</style>