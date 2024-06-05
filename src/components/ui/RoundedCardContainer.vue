<template>
  <div :class="[bgColor]"  class="px-3 rounded-[15px] py-3">
    <slot>
     
      
    </slot>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import Date from '@/components/ui/Date.vue'
const props = defineProps({
  bgColor: {
    type: String,
    required: true,
    default:'bg-[#ffd7d7]'
  }
})

const colors = {

  'bg-emotionVeryGood':'bg-[#d4f6e9]',
  'bg-emotionNeutral':'bg-[#d5f5ea]',
  'bg-emotionSad':'bg-[#ffd7d7]',
  'bg-emotionVerySad':'bg-[#ffd7d7]',
  'bg-emotionGood':'bg-[#ffedd4]',

}
</script>
