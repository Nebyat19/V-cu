<template>
  <data class="absolute flex gap-3 bottom-2 left-1/2 -translate-x-1/2">
    <VButton rounded="rouded" padding="1" bg="bgGradient2">
      <router-link class="hover:scale-x-110"  to="memo">
        <IconCalander />
      </router-link>
    <!------ <router-link to="stats"><BarchartIcon/></router-link>----> 
      <router-link class="hover:scale-x-110"  to="user/profile"><IconUser /></router-link>

      <router-link class="bg-white rounded-xl p-2" to="/"><IconHome /> </router-link>
    </VButton>
    <router-link  class="hover:scale-x-110" to="add">
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
import BarchartIcon from './icons/BarchartIcon.vue'
import VButton from '@/components/ui/VButton.vue'
</script>
