<template>
  <div class="navigation">
    <nav>
      <router-link class="router-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'home',
          page:'/'
        },
        {
          id: 1,
          text: 'about us',
          page:'/about'
        },
        {
          id: 2,
          text: 'shop',
          page:'/shop'
        },
        {
          id: 3,
          text: 'contact',
          page:'/contact'
        },
      ]
    }
  }
}
</script>

<style> 
.navigation {
    display: inline-block;
    text-align: right;
    width: 100%;
    padding-right: 100px;
}

.router-link { 
    Margin-right: 50px;
    font-family: 'Dosis', sans-serif;
    font-size: 28px;
    background-color: white;
    color: black;
    text-decoration: none;
  } 
  .router-link:hover {
    opacity: 0.7;
  }
</style>