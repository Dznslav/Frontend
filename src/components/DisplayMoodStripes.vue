<template>
    <div>
        <h1>Mood History</h1>
      <div class="mood-list">
        <MoodStripe
          v-for="(mood, index) in recentMoods"
          :key="index"
          :mood="mood.mood"
          :createdAt="mood.createdAt"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { useMoodStore } from '../stores/moodStore';
  import MoodStripe from './MoodStripe.vue';
  
  export default {
    components: {
      MoodStripe,
    },
    computed: {
      recentMoods() {
        const moodStore = useMoodStore();
        return moodStore.recentMoods; // Dostavame zoznam z Pinia
      },
    },
  };
  </script>
  
  <style scoped>
  .mood-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 100px;
  }
  h1 {
    text-align: center;
    color: #006a65;
  }
  </style>
  