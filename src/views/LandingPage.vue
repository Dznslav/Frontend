<template>
    <div class="landing-page">
      <h1>Welcome to Moodscape!</h1>
      <RouterLink to="/register" class="routerLink">Register</RouterLink>
      <RouterLink to="/login" class="routerLink">Login</RouterLink>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
  };
  </script>
  
  <style scoped>
  .landing-page {
    text-align: center;
    margin-top: 50px;
  }

  .routerLink {
    margin: 10px;
    padding: 10px;
  }

  </style>