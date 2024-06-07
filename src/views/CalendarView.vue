<template>
  <div ref="container" class="py-3 relative select-none px-4 mx-auto h-screen bg-pageBackground">
    <ButtonBack />
    <H1>My Calendar</H1>
    <div class="flex justify-between mt-3">
      <div class="flex justify-start gap-3">
        <VButton padding="1">month</VButton>
        <VButton padding="1" bg="bgWhite">Week</VButton>
      </div>

      <VButton padding="1" bg="bgWhite">Aug <DownIcon /></VButton>
    </div>

    <div  @click="changHeight" class="bg-white p-3 grid grid-cols-7 mt-3 shadow-sm rounded-[20px]">
      <template v-for="date in dates" :key="date">
        <DateNumber>{{ date }}</DateNumber></template
      >
    </div>
    <div
   ref="scrollable"

    class="scrollable overflow-hidden select-none transition-all bg-gradient-to-b from-gradientStart from-10% via-gradientStart via-30% to-gradientEnd to-90% w-full left-0 pt-8 px-5 absolute bottom-0 rounded-t-[38px]"
    >
      <div  @click="changHeight" class="relative">
        <span
          class=" w-20 bg-pageBackground h-20 pb-0 flex flex-col items-center justify-end absolute bottom-3 -translate-x-1/2 left-1/2 rounded-full"
        >
        <UppIcon v-if="upp"/>
          <DownIcon v-else />
        </span>
      </div>
      <div class="flex justify-between">
        <H1 color="text-gray-300">August 10</H1>
        <span
          class="text-2xl w-10 h-10 grid place-content-center bg-gray-500 border border-opacity-90 border-gray-900 bg-opacity-30 rounded-xl"
          >😊</span
        >
      </div>
      <div class="mt-3 flex flex-col gap-2">
        <h3 class="text-sm text-gray-300">I was feeling</h3>
        <div class="flex items-center text-center gap-2">
          <span class="text-xs font-semibold border-2 border-white rounded-3xl text-white px-4 py-1"
            >happy</span
          >
          <span class="text-xs font-semibold border-2 border-white rounded-3xl text-white px-4 py-1"
            >surprized</span
          >
          <span class="text-xs font-semibold border-2 border-white rounded-3xl text-white px-4 py-1"
            >annoyed</span
          >
        </div>
        <h3 class="text-md mt-5 text-gray-300">What Happend</h3>
        <div class=" pb-20 scrollbar-hidden flex h-80 flex-col gap-1">
          <RoundedCardContainer
            v-for="recentMood in recentMoods"
            :key="recentMood"
            :bgColor="recentMood.bg"
          >
            <div class="flex items-center justify-between gap-2 p-2">
              <div class="">
                <h2 class="text-md font-semibold text-slate-800">{{ recentMood.head }}</h2>

                <h3 class="text-xs text-textLight line-clamp-1">{{ recentMood.text }}...</h3>
              </div>
              <VButton rounded="rouded" padding="2" bg="bgGradient"><IconNextArrow /></VButton>
            </div>
          </RoundedCardContainer>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VButton from '@/components/ui/VButton.vue'
import H1 from '@/components/ui/H1.vue'
import ButtonBack from '@/components/ui/ButtonBack.vue'
import DateNumber from '@/components/ui/DateNumber.vue'
import DownIcon from '@/components/icons/DownIcon.vue'
import UppIcon from '@/components/icons/UppIcon.vue'
import RoundedCardContainer from '@/components/ui/RoundedCardContainer.vue'
import IconNextArrow from '@/components/icons/IconNextArrow.vue'
import { onMounted, ref, watch, watchEffect} from 'vue'
import setDragable from '@/utils/drag'


const scrollable = ref(null)
const container = ref(null)
const height = ref(29)
const upp = ref(true)
let h = '10rem'

const changHeight = () => {
  h = h === '10rem' ? (h = '29rem') : '10rem'
  scrollable.value.style.setProperty('--dynamic-height', `${h}`)
  upp.value=!upp.value
 
}


onMounted(() => {
  setDragable(container.value,scrollable.value,height.value)
})
const dates = [
  '',
  '',
  '',
  '1',
  '2',
  '😊',
  '4',
  '5',
  '😢',
  '7',
  '8',
  '😡',
  '10',
  '11',
  '😎',
  '13',
  '14',
  '😔',
  '16',
  '17',
  '😁',
  '19',
  '20',
  '😩',
  '22',
  '23',
  '😤',
  '25',
  '26',
  '😴',
  '28',
  '29',
  '😜',
  '',
  ''
]

const recentMoods = [
  {
    id: '1',
    time: '10:00 AM',
    day: '11',
    week: 'Monday',
    month: 'Aug',
    year: '2023',
    head: 'Feeling Good',
    emoji: '😊',
    feeling: 'Happy',
    about: ['Family', 'Friends'],
    text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
    bg: 'bg-emotionVeryGood'
  },
  {
    id: '1',
    time: '10:00 AM',
    day: '11',
    week: 'Monday',
    month: 'Aug',
    year: '2023',
    head: 'Feeling Good',
    emoji: '😊',
    feeling: 'Happy',
    about: ['Family', 'Friends'],
    text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
    bg: 'bg-emotionSad'
  },
  {
    id: '1',
    time: '10:00 AM',
    day: '11',
    week: 'Monday',
    month: 'Aug',
    year: '2023',
    head: 'Feeling Good',
    emoji: '😊',
    feeling: 'Happy',
    about: ['Family', 'Friends'],
    text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
    bg: 'bg-emotionSad'
  },
  {
    id: '1',
    time: '10:00 AM',
    day: '11',
    week: 'Monday',
    month: 'Aug',
    year: '2023',
    head: 'Feeling Good',
    emoji: '😊',
    feeling: 'Happy',
    about: ['Family', 'Friends'],
    text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
    bg: 'bg-emotionSad'
  },
  {
    id: '1',
    time: '10:00 AM',
    day: '11',
    week: 'Monday',
    month: 'Aug',
    year: '2023',
    head: 'Feeling Good',
    emoji: '😊',
    feeling: 'Happy',
    about: ['Family', 'Friends'],
    text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
    bg: 'bg-emotionSad'
  },
  {
    id: '1',
    time: '10:00 AM',
    day: '11',
    week: 'Monday',
    month: 'Aug',
    year: '2023',
    head: 'Feeling Good',
    emoji: '😊',
    feeling: 'Happy',
    about: ['Family', 'Friends'],
    text: 'I had a great day today. I went to the park and played with my friends. I also had a great time with my family. I am so happy and grateful for everything in my life.',
    bg: 'bg-emotionSad'
  }
]
</script>
