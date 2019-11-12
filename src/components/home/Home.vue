<template>
<div class="background">
  <div class="home">
    <Header/>
    <Body/>
    <Footer/>
  </div>
</div>
</template>

<script>
import Logo from './header/navbar/Logo.vue'
import Body from './body/Body.vue'
import Footer from './footer/Footer.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    Body,
    Footer
  }
}
</script>

<style scoped>

.background {
  background-image: url('~@/assets/images/background.jpg');
  background-size: 100%;
  margin: 0px;
  opacity: 0.7;
}

.logo {
  display: inline-block;
  max-width: 250px;
  text-align: center;
  padding-left: 0px;
}
</style>