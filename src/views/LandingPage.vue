<template>
  <div class="landing-page">
    <h1>Welcome to Moodscape</h1>
    <p>Track your mood and see how it changes over time.</p>
  </div>

  <div class="bottomcards">
    <LandingCard mainText="Dashboard" link="/dashboard" />
    <LandingCard mainText="New Mood" link="/addmood" />
  </div>

  </template>
  
  <script>
import LandingCard from '@/components/LandingCard.vue';


  export default {
    name: 'LandingPage',
    components: {
      LandingCard,
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
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-size: 23px;
    color: #161d1c;
  }
  .bottomcards{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 300px;

  }

  </style>