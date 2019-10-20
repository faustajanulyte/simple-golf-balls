<template>
  <div>
    <h1>Contact Us</h1>
  <p>
    <ul>
      <li>Email: {{email}}</li>
      <li>Number: {{number}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      email: "info@simplegolfballs.com",
      number: "+447764755021"
    }
  }
}
</script>