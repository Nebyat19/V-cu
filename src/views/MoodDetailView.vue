
<template>
  <div class="py-3 relative px-4 mx-auto h-screen bg-pageBackground">
    <ButtonBack />
    <RoundedCardContainer
      bgColor="bg-white shadow-sm "
      class="flex mt-5 items-center justify-between"
    >
      <div class="flex p-1 items-baseline gap-3 justify-between">
        <H1>{{ mood.date }}</H1
        >{{ mood.month }}
      </div>

      <h1 class="text-3xl">{{ mood.emoji }}</h1>
    </RoundedCardContainer>

    <h3 class="w-full mt-10 text-md text-textBlack font-bold capitalize bg-inherit outline-none">
      {{ mood.head }}   <span class="mt-1 text-xs text-gray-500 flex justify-start ml-2 gap-1 mr-2">{{ mood.dayOfWeek }} {{ mood.time }}</span>

    </h3>
    <div class="relative h-[35%] my-5 scrollbar-hidden">
      <h3
        class="mt-6 leading-relaxed scrollbar-hidden resize-none bg-inherit outline-none text-slate-700 w-full h-full"
      >
        {{ mood.text }}
      </h3>
    </div>
    <div class="flex justify-center items-center">
      <div class="flex justify-between gap-3">
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
    <button
      @click="router.push('/')"
      class="text-sm text-white hover:bg-slate-900 bg-black px-3 py-3 w-full mt-3 rounded-lg"
    >
      Go Home
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import VButton from '@/components/ui/VButton.vue'
import RoundedCardContainer from '@/components/ui/RoundedCardContainer.vue'
import H1 from '@/components/ui/H1.vue'
import ButtonBack from '@/components/ui/ButtonBack.vue'
import { computed, onMounted, ref } from 'vue'
import { useMoodStore } from '@/stores/MoodStore'

const router = useRouter()
const mood = computed(() => moodStore.getMoodById(props.id)|| {})
const moodStore = useMoodStore()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

onMounted(() => {
 //if(!mood.value.id) router.push('/')
})
</script>

