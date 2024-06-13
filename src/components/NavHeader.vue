<template>
  <header class="flex items-center mb-5 justify-between">
    <div class="w-14 rounded-full h-14 relative">
      <router-link to="user/profile">
        <img  :src="profile.avator=='male'? AVATOR_MALE : AVATOR_FEMALE" class="absolute rounded-full inset-0 w-full h-full overflow-hidden" alt=""
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
      <li class="relative">
        <span @click="isShowList=!isShowList"><IconBars3 /> </span>
        <div v-show="isShowList"
          class="cursor-pointer items-start absolute -left-20 bg-white pr-7 px-3 py-2 flex flex-col gap-3"
        >
          <router-link to="user/profile" class="text-md text-textLight flex gap-2">
            <svg
              class="w-5 h-5"
              data-slot="icon"
              aria-hidden="true"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Profile
          </router-link >
          <h3 class="flex gap-2 items-center text-md text-slate-900">
            <svg
              class="w-5 h-5"
              data-slot="icon"
              aria-hidden="true"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            premium
          </h3>
        </div>
      </li>
    </ul>
  </header>
</template>

<script setup>
import IconBars3 from './icons/IconBars3.vue'
import { ICON_SEARCH, AVATOR_MALE, AVATOR_FEMALE } from '@/data/constants'
import { computed, ref } from 'vue'
import { useConfigStore } from '@/stores/module/config'

const searchTerm = ref('')
const isShowList = ref(false)
const props = defineProps(['setSearchKey'])
const profile = computed(()=>useConfigStore().getUser())
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
