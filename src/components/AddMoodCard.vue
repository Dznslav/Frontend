<template>
    <div class="addMoodCard">
      <h1>What is your mood now?</h1>
      <div class="emojicontainer">
        <img
          src="../assets/good-emoji.png"
          alt="good"
          class="emoji"
          @click="submitMood('Good')"
        />
        <img
          src="../assets/normal-emoji.png"
          alt="normal"
          class="emoji"
          @click="submitMood('Normal')"
        />
        <img
          src="../assets/bad-emoji.png"
          alt="bad"
          class="emoji"
          @click="submitMood('Bad')"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { useMoodStore } from '../stores/moodStore';
  
  export default {
    name: 'AddMoodCard',
    methods: {
      submitMood(mood) {
        const moodStore = useMoodStore();
        moodStore.addMood(mood); //posielame v pinia store
        alert('Mood saved!');
        this.$router.push('/dashboard');
      },
    },
  };
  </script>
  
  <style scoped>
  .addMoodCard {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40%;
    height: 300px;
    background-color: #d5dbda;
    border-radius: 20px;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    color: #006a65;
  }
  .emojicontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 50px;
  }
  .emoji {
    width: 120px;
    height: 120px;
    cursor: pointer;
  }
  .emoji:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
  </style>
  