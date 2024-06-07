<template>
       <div class="flex justify-end">
     <a @click="back" class="px-2 py-1 cursor-pointer">   <IconBack /></a>
      </div>
</template>
<script setup>
import IconBack from '@/components/icons/IconBack.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const back=(e)=>{
  e.preventDefault()
  router.back()
}
</script>