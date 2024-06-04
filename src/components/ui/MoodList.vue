<template>
  <div class="grid gap-3 grid-cols-3 grid-rows-3 justify-between mt-5">
   
    <MoodItem
      :selectedMood
      :handleCheckboxChange
      v-for="moodtype in MOOD_TYPES"
      :key="moodtype.id"
      :moodtype
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MoodItem from './MoodItem.vue'
const selectedMood = ref('')

defineProps({
  MOOD_TYPES: {
    type: Array,
    required: true
  }
})
const handleCheckboxChange =(selected) =>{
     selectedMood.value = selected;
    
     
    }
</script>
