<template>
   <div class="py-3 px-4 h-screen bg-[#fcfbfa]">

  <NavHeader />
  <h-1>{{ greeting }}</h-1>
  <h3 class="text-textLight tracking-wide leading-6 text-sm mt-3">
    Don't let a bad day make you feel like you have a bad life
  </h3>

  <div class="h-96 pb-16 scrollbar-hidden">
    <MoodRecentList v-for="recentMoods in AllrecentMoods" :key="recentMoods.id" :recentMoods />
  </div>
  <NavBottom />
   </div>
</template>

<script setup>
import NavHeader from '@/components/NavHeader.vue'
import NavBottom from '@/components/NavBottom.vue'
import MoodRecentList from '@/components/ui/MoodRecentList.vue'
import { getGreeting } from '@/utils/getGreeting'
const greeting = getGreeting()

const AllrecentMoods = [

  [
    {
      id: '1',
      time: '10:00 AM',
      day: '11',
      week: 'Monday',
      month: 'Aug',
      year: '2023',
      head: 'Feeling Good',
      emoji: '😊',
      feeling: 'Happy',
      about: ['Family', 'Friends'],
      text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
      bg: 'bg-emotionVeryGood'
    },
    {
      id:'2',
      time: '1:00 AM',
      
      day: '12',
      week: 'Tuesday',
      month: 'Aug',
      year: '2023',
      head: 'Feeling Sad',
      emoji: '😢',
      feeling: 'Sad',
      about: ['Family', 'Friends'],
      text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
      bg: 'bg-emotionSad'

    },
    
  ]
]
</script>
