<template>
    <div class="grid  gap-3 grid-cols-3 grid-rows-3 justify-between mt-5 " > 
<MoodItem v-for="moodtype in MOOD_TYPES" :key="moodtype.id" :moodtype />

    </div>
</template>

<script setup>
import MoodItem from './MoodItem.vue'
defineProps({
    MOOD_TYPES:{
        type: Array,
        required: true
    }
})
</script>