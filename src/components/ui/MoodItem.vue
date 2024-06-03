<template>
  <div
    class="px-7 py-3 cursor-pointer gap-2 rounded-lg flex items-center justify-center flex-col"
    :class="'bg-' + moodtype.color"
  >
    <span class="text-3xl">{{ moodtype.emoji }}</span>
    <span class="text-textLight font-semibold text-[0.7rem]">{{ moodtype.mood }}</span>
  </div>
</template>

<script setup>
defineProps({
  moodtype: {
    type: Object,
    required: true
  }
})
const colors = [
  'bg-emotionVeryGood',
  'bg-emotionVeryGood',
  'bg-emotionNeutral',
  'bg-emotionSad',
  'bg-emotionVerySad',
  'bg-emotionVerySad',
  'bg-emotionGood',
  'bg-emotionSad',
  'bg-emotionVerySad'
]
</script>
