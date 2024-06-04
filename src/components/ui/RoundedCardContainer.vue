<template>
  <div :class="['bg-[#d4f6e9]']" class="px-4 rounded-[15px] py-4">
    <slot>
      <div class="flex">
        <span class="flex gap-1 flex-col items-center justify-center pr-4   border-r border-gray-400">
          <h1 class="text-3xl text-slate-700">03</h1>
          <Date>Aug</Date></span
        >

      <div class="flex flex-col w-full gap-3 ml-4">
        <div class="flex items-center justify-between ">
          <h2 class="text-lg font-semibold text-slate-800">Hard Day Af</h2>
          <h1 class="text-xl">😞</h1>
        </div>
        <h3 class="text-xs text-textLight">I had a wounderfull day! today was...</h3>
      </div>
      </div>
      
    </slot>
  </div>
  <div :class="[bgColor]" class="px-4 rounded-[15px] py-4">
    <slot>
      <div class="flex">
        <span class="flex gap-1  flex-col items-center justify-center pr-4   border-r border-gray-400">
          <h1 class="text-3xl text-slate-700">03</h1>
          <Date>Aug</Date></span
        >

      <div class="flex flex-col w-full gap-3 ml-4">
        <div class="flex items-center justify-between ">
          <h2 class="text-lg font-semibold text-slate-800">Hard Day Af</h2>
          <h1 class="text-xl">😞</h1>
        </div>
        <h3 class="text-xs text-textLight">I had a wounderfull day! today was...</h3>
      </div>
      </div>
      
    </slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Date from '@/components/ui/Date.vue'
const props = defineProps({
  bg: {
    type: String,
    required: true
  }
})
const bgColor = ref('bg-[#ffd7d7]')
const colors = {

  'bg-emotionVeryGood':'#d4f6e9',
  'bg-emotionNeutral':'#d5f5ea',
  'bg-emotionSad':'bg-[#ffd7d7]',
  'bg-emotionVerySad':'bg-[#ffd7d7]',
  'bg-emotionGood':'bg-[#ffedd4]',

}
</script>
