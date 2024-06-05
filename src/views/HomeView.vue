<template>
  <NavHeader />
  <h-1>Good Morning!</h-1>
  <h3 class="text-textLight tracking-wide leading-6 text-sm mt-3">
    Don't let a bad day make you feel like you have a bad life
  </h3>

  <div class="h-96 pb-14 scrollbar-hidden">

     <MoodRecentList v-for="recentMoods in AllrecentMoods" :key="recentMoods" :recentMoods/>
  </div>
  <NavBottom />
</template>

<script setup>
import NavHeader from '@/components/NavHeader.vue'
import NavBottom from '@/components/NavBottom.vue'
import MoodRecentList from '@/components/ui/MoodRecentList.vue'



const AllrecentMoods = [
   [
  {
    day:'11',
    week: 'Monday',
    month: 'Aug',
    year: '2023',
    head: 'Feeling Good',
    emoji: '😊',
    text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
    bg: 'bg-emotionVeryGood'
  },
  {
    day:'10',
    week: 'Tuesday',
    month: 'Aug',
      year: '2023',
    head: 'Feeling Sad',
    emoji: '😔',
    text: 'I had a bad day today. I got into a fight with my friend and I feel really sad. I wish I could go back and change things. I hope tomorrow will be better.',
    bg: 'bg-emotionSad'
  },

],[
   //Jul
   {
      day:'31',
      week: 'Monday',
      month: 'Jul',
      year: '2023',
      head: 'Feeling Good',
      emoji: '😊',
      text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
      bg: 'bg-emotionVeryGood'   
   },
   {
      day:'30',
      week: 'Tuesday',
      month: 'Jul',
      year: '2023',
      head: 'Feeling Sad',
      emoji: '😔',
      text: 'I had a bad day today. I got into a fight with my friend and I feel really sad. I wish I could go back and change things. I hope tomorrow will be better.',
      bg: 'bg-emotionSad'
   },
   {
      day:'29',
      week: 'Wednesday',
      month: 'Jul',
      year: '2023',
      head: 'Feeling Good',
      emoji: '😊',
      text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
      bg: 'bg-emotionVeryGood'
   },
   {
      day:'28',
      week: 'Thursday',
      month: 'Jul',
      year: '2023',
      head: 'Feeling Sad',
      emoji: '😔',
      text: 'I had a bad day today. I got into a fight with my friend and I feel really sad. I wish I could go back and change things. I hope tomorrow will be better.',
      bg: 'bg-emotionSad'
   },
   {
      day:'27',
      week: 'Friday',
      month: 'Jul',
      year: '2023',
      head: 'Feeling Good',
      emoji: '😊',
      text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
      bg: 'bg-emotionVeryGood'
   },
   {
      day:'26',
      week: 'Saturday',
      month: 'Jul',
      year: '2023',
      head: 'Feeling Sad',
      emoji: '😔',
      text: 'I had a bad day today. I got into a fight with my friend and I feel really sad. I wish I could go back and change things. I hope tomorrow will be better.',
      bg: 'bg-emotionSad'
   },
   {
      day:'25',
      week: 'Sunday',
      month: 'Jul',
      year: '2023',
      head: 'Feeling Good',
      emoji: '😊',
      text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
      bg: 'bg-emotionVeryGood'
   }
]
]
</script>
