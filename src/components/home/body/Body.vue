<template>
  <div class="body">
    <router-link class="body-link" to="/about">
      <a class="body-icon">
        <img style="display: inline" src="@/assets/images/friendship.svg" alt="about us"/>
      </a>
    </router-link>
    <router-link class="body-link" to="/shop">
      <a class="body-icon">
        <img style="display: inline" src="@/assets/images/golf.svg" alt="shop"/>
      </a>
    </router-link>
    <router-link class="body-link" to="/contact">
      <a class="body-icon">
        <img style="display: inline" src="@/assets/images/contact.svg" alt="contact"/>
      </a>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Body',
  data() {
    return {
      links: [
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
.body {
  display: inline-block;
  text-align: right;
  width: 250px;
  padding-right: 100px;
}
.body-link:hover {
  opacity: 0.7;
}
</style>