<template>
  <label
    :for="moodtype.mood"
    @click="handleClick"
    class="px-7 py-3 cursor-pointer gap-2 shadow-md rounded-lg flex items-center justify-center flex-col"
    :class="[bgColor]"
  >
    <span class="text-3xl">{{ moodtype.emoji }}</span>
    <span class="font-semibold text-[0.7rem]">{{ moodtype.mood }}</span>
  </label>
  <input
    class="hidden"
    :value="moodtype.mood"
    type="radio"
    name="mood"
    :id="moodtype.mood"
    :checked="selectedMood === moodtype.mood"
  />
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  moodtype: {
    type: Object,
    required: true
  },
  handleCheckboxChange: {
    type: Function,
    require: true
  },
  selectedMood: {
    type: String,
    require: true
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
const bgColor = computed(() =>
  props.selectedMood === props.moodtype.mood
    ? 'bg-orange-300 text-white'
    : 'bg-' + props.moodtype.color + ' text-textLight'
)

const handleClick = () => {
  props.handleCheckboxChange(props.moodtype.mood, {bgColor: bgColor.value, emoji: props.moodtype.emoji, mood: props.moodtype.mood})
}
</script>
