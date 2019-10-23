<template>
  <div class="footer">
    <a href="https://www.google.co.uk/" class="footer-icon"><img src="@/assets/images/instagram.svg" alt="logo"/></a>
    <a href="https://www.google.co.uk/" class="footer-icon"><img src="@/assets/images/facebook.svg" alt="logo"/></a>
    <h1>&copy; 2019 Copyright: SimpleGolfBalls</h1>
  </div>
</template>

<script>

export default {
  name: 'Footer',
}
</script>

<style>
.footer {
    Margin-right: 50px;
    font-family: 'Sawasdee', sans-serif;
    font-size: 10px;
    background-color: white;
    color: black;
    text-decoration: none;
    background-color: white;
    font-weight: 50;
}

.footer-icon img {
  max-width: 40px;
  margin-right: 10px;
  margin-top: 10px;
}

.footer-icon img:hover {
    opacity: 0.7;
  }
</style>