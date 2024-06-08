<template>
  <header class="flex items-center mb-5 justify-between">
    <div class="w-12 rounded-full h-12 relative">
      <router-link to="user/profile">
        <img :src="AVATOR_MALE" class="absolute inset-0 w-full h-full overflow-hidden" alt=""
      /></router-link>
    </div>
    <ul class="flex items-center justify-end gap-8">
      <li class="flex rounded-lg justify-between border border-gray-100 px-2 py-1">
        <input
          @input="updatesearchKey"
          v-model="searchTerm"
          placeholder="search ..."
          class="text-xs placeholder:text-gray-400 text-gray-500 outline-none px-3 bg-inherit bg-opacity-0 w-32"
          type="text"
        />
        <img class="w-6 h-6" :src="ICON_SEARCH" alt="" />
        <span class=""></span>
      </li>
      <li>
        <a href=""><IconBars3 /></a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import IconBars3 from './icons/IconBars3.vue'
import { ICON_SEARCH, AVATOR_MALE, AVATOR_FEMALE } from '@/data/constants'
import { ref } from 'vue'

const searchTerm = ref('')
const props = defineProps(['setSearchKey'])

const updatesearchKey = ((timeout = 500) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      props.setSearchKey(searchTerm.value)
    }, timeout)
  }
})()
</script>
