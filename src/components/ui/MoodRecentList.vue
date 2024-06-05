<template>
     <div class="flex flex-col gap-3 ">
    <div class="flex flex-col gap-3">
      <div class="flex justify-between mt-6">
        <Date>{{ recentMoods[0].month }} {{ recentMoods[0].year }} </Date>

        <Memories> {{ recentMoods.length }} memories</Memories>
      </div>
      <RoundedCardContainer v-for="recentMood in recentMoods" :key="recentMood" :bgColor="recentMood.bg"><MoodRecentItem :recentMood  /></RoundedCardContainer>
    </div>
  </div>
</template>

<script setup>
import Date from '@/components/ui/Date.vue'
import Memories from '@/components/ui/Memories.vue'
import RoundedCardContainer from '@/components/ui/RoundedCardContainer.vue'
import MoodRecentItem from './MoodRecentItem.vue';

const props = defineProps({
  recentMoods: {
    type: Array,
    required: true
  }
})


</script>