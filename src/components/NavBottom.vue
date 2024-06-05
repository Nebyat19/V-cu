<template>
  <data class="absolute flex gap-3 bottom-2 left-1/2 -translate-x-1/2">
    <VButton rounded="rouded" padding="1" bg="bgGradient2">
      <span>
        <router-link to="memo">
        <IconCalander />
        </router-link>
      </span>
      <span><IconUser /></span>
     
      <router-link class="bg-white rounded-xl p-2" to="/"><IconHome />
      </router-link>
    </VButton>
    <router-link to="add">
      <VButton rounded="rouded" padding="4" bg="bgGradient2">
        <IconPlus />
      </VButton>
    </router-link>
  </data>
</template>

<script setup>
import IconUser from './icons/IconUser.vue'
import IconCalander from './icons/IconCalander.vue'
import IconPlus from './icons/IconPlus.vue'
import IconHome from './icons/IconHome.vue'
import VButton from '@/components/ui/VButton.vue'
</script>
