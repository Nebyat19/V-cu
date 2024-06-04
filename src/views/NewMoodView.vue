<template>
    <AppContainer>
     
        <div class="flex justify-end">
     <span >   <IconBack /></span>
      </div>
      <H1>Dear Xhetu!</H1>
      <h4 class="text-xs mt-1  text-slate-800">How was your day?</h4>
  
      <MoodList :MOOD_TYPES />
      <h3 class="my-5 text-textBlack font-semibold text-sm">What was about it?</h3>
      <div class="flex flex-wrap gap-1 w-[90%] ">
        <VButton
          @click="addCatagory(catagory.name)"
          v-for="catagory in CATEGORIES"
          :key="catagory.name"
          canClick="true"
          padding="1"
          :bg="catagory.bg"
          >{{ catagory.name }}</VButton
        >
      </div>
      <div class="flex justify-end mr-5 mt-5">
        <VButton rounded="roundedLg" padding="2" bg="bgGradient">Next <IconNext /></VButton>
      </div>
    
    </AppContainer>
  </template>
  
  <script setup>
  import { MOOD_TYPES, CATEGORIES } from '@/data/constants.js'
  import H1 from '@/components/ui/H1.vue'
  import VButton from '@/components/ui/VButton.vue'
  import MoodList from '../components/ui/MoodList.vue'
  import AppContainer from '@/components/AppContainer.vue'
  import IconBack from '@/components/icons/IconBack.vue'
  import IconNext from '@/components/icons/IconNext.vue'
  import { ref } from 'vue'
  
  const selectedCatagory = ref([])
  
  
  const addCatagory = (item) => {
    if (selectedCatagory.value.includes(item)) {
      selectedCatagory.value = selectedCatagory.value.filter((element) => element !== item)
    } else {
      selectedCatagory.value.push(item)
    }
  }
  </script>
  