<template>
  <div
    
    ref="childelement"
    :class="CLASS_DEFAULT"
    class="pb-1 size-10 grid cursor-pointer place-content-center border border-[#f4ede3] rounded-full text-[#cdb89b] font-date"
  >
    <slot class=""> </slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const CLASS_DEFAULT = ref('bg-white')
const childelement = ref(null)

onMounted(() => {
  if (childelement.value.innerText.trim().length !== 0) {
    CLASS_DEFAULT.value = !isNaN(Number(childelement.value.innerText.trim()))
      ? 'text-sm bg-[#f4ede3]'
      : 'text-2xl bg-[#f4ede3]'
  }
})
</script>
