<template>
    <h1>Record Your Mood</h1>
    <AddMoodCard />

</template>

<script>
import AddMoodCard from '@/components/AddMoodCard.vue';
export default {
    name: 'MoodRecordPage',
    components: {
        AddMoodCard,
    }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    color: #006a65;
  }
</style>