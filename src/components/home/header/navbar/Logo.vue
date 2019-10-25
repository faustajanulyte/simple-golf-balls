<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="logo"/>
  </div>
</template>

<script>

export default {
  name: 'Logo',
}
</script>

<style>
.logo {
  display: inline-block;
  max-width: 20%;
  padding-left: 100px;
  text-align: center;
  padding-top: 20px;
}
.logo img {
  max-width: 150px;
  filter: invert(1.0);
}
</style>