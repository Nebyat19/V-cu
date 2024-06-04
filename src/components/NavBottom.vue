<template>
<data class="absolute flex gap-3 bottom-3 left-1/2 -translate-x-1/2">
    <VButton rounded="rouded" padding="1" bg="bgGradient2">
    <span>
      <IconCalander />
    </span>
    <span><IconUser /></span>
    <span class="bg-white rounded-xl p-3"><IconHome/></span>
   
  </VButton>
  <VButton rounded="rouded" padding="4" bg="bgGradient2">
    <span>
      <IconPlus />
    </span>
   
   
  </VButton>

</data>
</template>

<script setup>
import IconUser from './icons/IconUser.vue'
import IconCalander from './icons/IconCalander.vue'
import IconPlus from './icons/IconPlus.vue'
import IconHome from './icons/IconHome.vue'
 import VButton from '@/components/ui/VButton.vue'
</script>
