<template>
  <div class="stripescontainer">
    <div class="moodstripe">
      <button @click="deleteMood" class="delete-btn">Delete</button>
      <h2>{{ mood }}</h2>
      <p class="mood-date">{{ formattedDate }}</p>
    </div>
  </div>
  </template>
  
  <script>
  import { useMoodStore } from '../stores/moodStore';
  export default {
    name: 'MoodStripe',
    props: {
      mood: {
        type: String,
        required: true,
      },
      createdAt: {
        type: String,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
    },
    computed: {
      formattedDate() {
        const date = new Date(this.createdAt);
        return date.toLocaleString('en-US', {
          day: 'numeric',
          month: 'long',
          hour: '2-digit',
          minute: '2-digit',
        });
      },
    },
    methods: {
      deleteMood() {
        const moodStore = useMoodStore();
        moodStore.deleteMood(this.createdAt);
      },
    },
  };
  </script>
  
  <style scoped>
  .stripescontainer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .moodstripe {
    border-radius: 25px;
    width: 40%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: #d5dbda;
    color: #006a65;
    font-size: 18px;
    gap: 100px;
    
  }
  
  .mood-date {
    margin-top: 20px;
    font-size: 18px;
    color: #555;
  }
  .delete-btn {
    background-color: #4a6360;
    color: white;
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    
  }

  </style>
  