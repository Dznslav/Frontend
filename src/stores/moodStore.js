import { defineStore } from 'pinia';

export const useMoodStore = defineStore('moodStore', {
  state: () => ({
    moods: [
      { mood: 'Good', createdAt: '2025-01-10T10:00:00Z' },
      { mood: 'Normal', createdAt: '2025-01-11T14:30:00Z' },
      { mood: 'Bad', createdAt: '2025-01-12T18:45:00Z' },
      { mood: 'Good', createdAt: '2025-01-13T10:00:00Z' },
      { mood: 'Normal', createdAt: '2025-01-14T14:30:00Z' },
      { mood: 'Bad', createdAt: '2025-01-15T18:45:00Z' },
      { mood: 'Good', createdAt: '2025-01-16T10:00:00Z' },
      { mood: 'Normal', createdAt: '2025-01-17T14:30:00Z' },
      { mood: 'Bad', createdAt: '2025-01-18T18:45:00Z' },
    ],
  }),

  getters: {
    recentMoods(state) {
      return state.moods.slice().reverse();
    },
  },

  actions: {
    addMood(mood) {
      const newMood = {
        mood,
        createdAt: new Date().toISOString(),
      };
      this.moods.push(newMood);
    },
    deleteMood(createdAt) {
      this.moods = this.moods.filter((mood) => mood.createdAt !== createdAt);
    },
  },
});
