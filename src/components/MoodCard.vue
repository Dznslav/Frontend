<template>
    <div class="moodcard">
      <img :src="moodIconPath" alt="moodicon" class="moodicon" />
      <h2>{{ mood }}</h2>
      <p class="mood-date">{{ formattedDate }}</p>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'MoodCard',
    props: {
      mood: {
        type: String,
        required: true,
      },
      createdAt: {
        type: String,
        required: true,
      },
    },
    computed: {
      moodIconPath() {
        switch (this.mood) {
          case 'Good':
            return '../good-emoji.png';
          case 'Normal':
            return '../normal-emoji.png';
          case 'Bad':
            return '../bad-emoji.png';
          default:
            return '';
        }
      },
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
  };
  </script>
  
  <style scoped>
  .moodcard {
    border-radius: 25px;
    width: 300px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #d5dbda;
    color: #006a65;
    font-size: 20px;
    
  }
  
  .moodicon {
    width: 60%;
    height: 45%;
    margin-top: 10px;
  }
  
  .mood-date {
    margin-top: 15px;
    font-size: 14px;
    color: #4a6360;
    font-size: 20px;
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
  .delete-btn:hover {
    background-color: #2b423f;
    transition: background-color 0.3s ease;
  }

  </style>
  