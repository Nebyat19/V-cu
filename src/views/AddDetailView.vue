<template>
  <div class="py-3 relative px-4 mx-auto h-screen bg-pageBackground">
    <ButtonBack />
    <div class="flex items-center mt-3 justify-between">
      <h3 @click="submitEntry" class="text-slate-800 cursor-pointer">save</h3>
      <IconSave @click="submitEntry" />
    </div>
    <RoundedCardContainer bgColor="bg-white" class="flex mt-5 items-center justify-between">
      <div class="flex p-1 items-baseline gap-3 justify-between">
        <H1>{{ mood.date }}</H1
        >{{ mood.month }}
      </div>

      <h1 class="text-3xl">{{ mood.emoji }}</h1>
    </RoundedCardContainer>
    <span class="mt-1 text-xs text-gray-500 flex justify-end mr-2">{{ mood.dayOfWeek }} {{ mood.time }}</span>

    <input
      v-model="head"
      class="w-full mt-10 text-md text-textBlack font-bold placeholder:text-lg capitalize bg-inherit outline-none"
      placeholder="A Day in the Life"
      type="text"
    />
    <div class="relative h-[35%] my-5 scrollbar-hidden">
      <textarea
        v-model="text"
        placeholder="Today was an amazing day! I started with a refreshing morning run, followed by a productive work session. In the evening, I caught up with friends over a cozy dinner. Looking forward to more such days!"
        class="mt-6 leading-relaxed scrollbar-hidden resize-none bg-inherit outline-none text-slate-700 w-full h-full"
        name=""
        id=""
      ></textarea>
    </div>
    <div class="absolute bottom-4 w-full left-0 px-3 flex align-top justify-between mt-8">
      <div class="grid grid-cols-2 gap-1 mt-3">
        <VButton v-for="about in mood.about" bg="bgBlack" padding="1" rounded="rounded" :key="about"
          ><h3>{{ about }}</h3></VButton
        >
      </div>

      <VButton v-show="!isSaving" @click="submitEntry" padding="3" bg="bgWhite">save</VButton>
    </div>
  </div>
</template>

<script setup>
import {  useRouter } from 'vue-router'
import IconSave from '@/components/icons/IconSave.vue'
import VButton from '@/components/ui/VButton.vue'
import RoundedCardContainer from '@/components/ui/RoundedCardContainer.vue'
import H1 from '@/components/ui/H1.vue'
import ButtonBack from '@/components/ui/ButtonBack.vue'
import Swal from 'sweetalert2'
import { computed, onMounted, ref } from 'vue'
import { useMoodStore } from '@/stores/MoodStore.js'
import { useConfigStore } from '@/stores/module/config'
const moodStore = useMoodStore()
const configStore = useConfigStore()
const router = useRouter()
const head = ref('')
const text = ref('')
const mood = computed(() => moodStore.getMood)
const isSaving = ref(false)

onMounted(() => {
  if(!mood.value){
    router.push('/home')
  }
})
const saveEntry =async () => {
  isSaving.value=true
 await moodStore.addMood({
    head: head.value,
    text: text.value,
   ...mood.value
  },configStore.getUserId())
     head.value = ''
     text.value = ''
     isSaving.value=false
    

}
const submitEntry = async () => {
  if (head.value == '' || text.value == '') {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title: 'Please fill in all the fields',
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
 await saveEntry()

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Your diary entry has been saved',
    showConfirmButton: true,
    confirmButtonText: 'Home',
    customClass: {
      confirmButton: 'bg-[#f87171]'
    },
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  }).then((result) => {
    
    if (result.isConfirmed) {
      router.push('/home')
    }
    router.push('/home')
  })
}

</script>
