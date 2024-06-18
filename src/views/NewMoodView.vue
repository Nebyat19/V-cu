<template>
  <div class="py-3 px-4 scrollbar-hidden h-screen bg-[#fcfbfa]">
    <ButtonBack />
  <div class="flex gap-1 text-center items-center">  <H1>Hey</H1> <h3 class="text-lg text-black">{{ username }} </h3></div>
    <h4 class="text-xs mt-1 text-slate-800">How was your day?</h4>

    <MoodList :MOOD_TYPES :setMood />
    <h3 class="my-5 text-textBlack font-semibold text-sm">What was about it?</h3>
    <div class="flex flex-wrap gap-1 w-[90%]">
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
    <div class="flex justify-end mr-5 mt-5 hover:scale-105">
      <VButton @click="goNextPage" rounded="roundedLg" padding="2" bg="bgGradient"
        >Next <IconNext
      /></VButton>
    </div>
  </div>
</template>

<script setup>
import { MOOD_TYPES, CATEGORIES } from '@/data/constants.js'
import H1 from '@/components/ui/H1.vue'
import VButton from '@/components/ui/VButton.vue'
import MoodList from '../components/ui/MoodList.vue'
import ButtonBack from '@/components/ui/ButtonBack.vue'
import IconNext from '@/components/icons/IconNext.vue'
import { ref } from 'vue'
import { useMoodStore } from '@/stores/MoodStore.js'
import { useRouter } from 'vue-router'
import { formatDate } from '@/utils/formatDate.js'
import Swal from 'sweetalert2'
import { useConfigStore } from '@/stores/module/config'

const selectedCatagory = ref([])
const selectedMood = ref({})
const router = useRouter()
const mood = ref({})
const configStore = useConfigStore()
const username = configStore.getUsername 
const moodStore = useMoodStore()
const setMood = (selected, newmood) => {
  selectedMood.value = selected.value
  mood.value = newmood.value
  console.log(mood.value)
}
const { day, time, month, dayOfWeek,year } = formatDate()

const addCatagory = (item) => {
  if (selectedCatagory.value.includes(item)) {
    selectedCatagory.value = selectedCatagory.value.filter((element) => element !== item)
  } else {
    selectedCatagory.value.push(item)
  }
}

const goNextPage = () => {
  if (selectedMood.value == '' || selectedCatagory.value.length == 0) {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Please select a mood and a catagory',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    return
  }
  moodStore.recordMood({
    date: day,
    month: month,
    dayOfWeek: dayOfWeek,
    time: time,
    year:year,
    about: selectedCatagory.value,
    emoji: mood.value.emoji,
    mood: mood.value.mood,
    bg: mood.value.bgColor
  })

  router.push({ name: 'add-detail' })
}
</script>
