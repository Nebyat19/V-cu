<template>
     <div class="flex flex-col gap-3 ">
    <div class="flex flex-col gap-3">
      <div class="flex justify-between mt-6">
        <Date>{{ recentMoods.month }} {{ recentMoods.year }} </Date>

        <Memories> {{ recentMoods.data.length }} memories</Memories>
      </div>
    <router-link  class="mb-5" v-for="recentMood in recentMoods.data" :key="recentMood"   :to="{ name: 'mood-detail', params: { id: recentMood.id || 0 } }">
      <RoundedCardContainer :bgColor="recentMood.bg"><MoodRecentItem :recentMood  /></RoundedCardContainer>
    </router-link>  
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