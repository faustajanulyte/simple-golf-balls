<template>
  <div class="about">
    <Navbar/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/home/header/navbar/Navbar.vue'
import Footer from '@/components/home/footer/Footer.vue'

export default {
  name: 'About',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.about {
  background-image: url('~@/assets/images/background.jpg');
  background-size: 100%;
  margin: 0px;
  opacity: 0.7;
}
</style>