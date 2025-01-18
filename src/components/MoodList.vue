<template>
  <div class="container">

    <button @click="previousPage" :disabled="currentPage === 1" class="nav-button">
      <img src="../assets/arrow-back.svg" alt="Previous" class="arrow-icon">
    </button>

    <div class="mood-list">
      <MoodCard
        v-for="(mood, index) in paginatedMoods"
        :key="mood.createdAt"
        :mood="mood.mood"
        :createdAt="mood.createdAt"
      />
    </div>

    <button @click="nextPage" :disabled="currentPage === totalPages" class="nav-button">
        <img src="../assets/arrow-forward.svg" alt="Next" class="arrow-icon">
    </button>
    
  </div>
</template>

<script>
import { useMoodStore } from '../stores/moodStore';
import MoodCard from './MoodCard.vue';

export default {
  components: {
    MoodCard,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 8,
    };
  },
  computed: {
    moods() {
      const moodStore = useMoodStore();
      return moodStore.recentMoods;
    },
    totalPages() {
      return Math.ceil(this.moods.length / this.itemsPerPage);
    },
    paginatedMoods() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.moods.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      this.currentPage++;
    },
    previousPage() {
      this.currentPage--;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding: 0 20px;
  margin-bottom: 10px;
}

.nav-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #4a6360;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

.arrow-icon {
  width: 20px;
  height: 20px;
  pointer-events: none;
}

.nav-button:disabled {
  background-color: #bbb;
  cursor: not-allowed;
}

.nav-button:hover:not(:disabled) {
  background-color: #2b423f;
  transition: background-color 0.3s ease;
}

.mood-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  flex-grow: 1;
  margin: 50px 20px;
}
</style>