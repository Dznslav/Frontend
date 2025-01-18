<template>

  <div class="landing-page">
    <h1>Welcome to Moodscape</h1>
    <p>Track your mood and see how it changes over time.</p>
  </div>

  </template>
  
  <script>

  export default {
    name: 'LandingPage',
    components: {
      
    },
  };
  </script>
  
  <style scoped>
  .landing-page {
    width: 60%;
    height: 50vh;
    background-image: url('../public/landingBackground.png');
    background-size: cover;
    text-align: center;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: 23px;
    color: #161d1c;
  }

  </style>