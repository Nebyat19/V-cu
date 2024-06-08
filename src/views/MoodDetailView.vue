<template>
  <div class="py-3 relative px-4 mx-auto h-screen bg-pageBackground">

    <ButtonBack />

 
    <span v-if="Object.values(mood).length === 0" class="text-sm flex justify-center h-full items-center text-textLight text-center">
      <div class="flex flex-col items-center">
 <ErrorIcon />

No Mood found
<VButton bg="bgOutline" @click="router.push('/')" class="mt-1" padding="1">Go Home</VButton>

</div>

    
    </span>
    <div v-else>
      <RoundedCardContainer
        bgColor="bg-white shadow-sm "
        class="flex shadow-sm mt-5 items-center justify-between"
      >
        <div class="flex p-1 items-baseline gap-3 justify-between">
          <H1>{{ mood.date }}</H1
          >{{ mood.month }}
        </div>

        <h1 class="text-3xl">{{ mood.emoji }}</h1>
      </RoundedCardContainer>
      <span class="mt-1 text-xs float-right text-gray-500 flex justify-start ml-2 gap-1 mr-2"
          >{{ mood.dayOfWeek }} {{ mood.time }}</span
        >
      <h3 class="w-full mt-10 text-md text-textBlack font-bold capitalize bg-inherit outline-none">
        {{ mood.head }}
     
      </h3>
      <div class="relative h-[35%] my-5 scrollbar-hidden">
        <h3
          class="mt-6 leading-relaxed scrollbar-hidden resize-none bg-inherit outline-none text-slate-700 w-full h-full"
        >
          {{ mood.text }}
        </h3>
      </div>
      <div class="flex justify-start items-center">
        <div class="flex justify-start gap-3">
          <VButton
            v-for="about in mood.about"
            bg="bgOutline"
            padding="1"
            rounded="roundedLg"
            :key="about"
            ><h3>{{ about }}</h3></VButton
          >
        </div>
      </div>
   <div class="absolute bottom-5 w-full left-0 px-4">
    <div class="flex  items-baseline justify-between">
      <VButton
      padding="1" bg="bgGradient"
        @click="router.push('/')"
        class="text-sm text-white hover:bg-slate-900 bg-black px-3 py-3  mt-3 rounded-lg"
      >
        Go Home
        <IconReturn/>
      
      </VButton>
      <button @click="confirmDeletion(mood.id)" class="text-md font-bold flex items-center gap-1 text-textLight"><IconDelete/> remove</button>
  
    </div>
   </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import VButton from '@/components/ui/VButton.vue'
import RoundedCardContainer from '@/components/ui/RoundedCardContainer.vue'
import H1 from '@/components/ui/H1.vue'
import ButtonBack from '@/components/ui/ButtonBack.vue'
import { computed, onBeforeMount, ref } from 'vue'
import { useMoodStore } from '@/stores/MoodStore'
import IconReturn from '@/components/icons/IconReturn.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import Swal from 'sweetalert2'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
const router = useRouter()
const moodId = ref(0)
const mood = computed(() => moodStore.getMoodById(moodId.value) || {})
const moodStore = useMoodStore()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onBeforeMount(() => {
  moodId.value = props.id || router.currentRoute.value.params.id
})
const confirmDeletion = (moodId) => {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'gray',
        cancelButtonColor: 'black',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          removeMood(moodId)
          Swal.fire(
            'Deleted!',
            'Your entry has been deleted.',
            'success'
          );
        }
      });
    };
const removeMood = (moodId)=>{
  try {
    moodStore.removeMood(moodId)
    router.push('/')
  } catch (error) {
    return error
  }
 
}
</script>
