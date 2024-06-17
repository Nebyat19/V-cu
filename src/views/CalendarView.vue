<template>
  <div
    ref="container"
    class="py-3 transition-all relative select-none px-4 mx-auto h-screen bg-pageBackground"
  >
    <ButtonBack />
    <H1>My Calendar</H1>

    <div class="flex justify-between mt-3">
      <div class="flex justify-start gap-1">
        <div class="relative">
          <VButton @click="isYearHidden = !isYearHidden" padding="1">{{ selectedYear }} </VButton>
          <ul
            class="absolute top-8 gap-1 flex flex-col items-start text-md bg-gray-900 rounded-xl py-2 w-fit h-24 scrollbar-hidden"
          >
            <li
              v-show="!isYearHidden"
              :class="[{ 'bg-pageBackground text-black w-full': selectedYear === year }]"
              @click="selectYear(year)"
              value="year"
              v-for="year in availableYears"
              :key="year"
              class="p-1 px-3 text-slate-500"
            >
              {{ year }}
            </li>
          </ul>
        </div>
        <VButton padding="1" bg="bgWhite">Month</VButton>
      </div>

      <div class="relative">
        <VButton @click="isMonthHidden = !isMonthHidden" padding="1" bg="bgWhite"
          >{{ selectedMonth }} <DownIcon v-if="isMonthHidden" /> <UppIcon v-else
        /></VButton>
        <ul
          class="absolute gap-2 flex flex-col items-start text-md bg-gray-900 rounded-xl py-2 w-fit h-60 scrollbar-hidden"
        >
          <li
            v-show="!isMonthHidden"
            :class="[{ 'bg-pageBackground text-black w-full': selectedMonth === month }]"
            @click="selectMonth(month)"
            value="month"
            v-for="month in monthNames"
            :key="month"
            class="p-1 px-3 text-slate-500"
          >
            {{ month }}
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-white p-3 grid grid-cols-7 mt-3 shadow-sm rounded-[20px]">
      <template v-for="(date, ind) in calendarDays" :key="date">
        <DateNumber
          @click="
            () => {
              if (ind - 2 > 0 && ind - 2 <= 31) {
                selectedDate = ind - 2
                openList()
              }
            }
          "
          >{{ date }}</DateNumber
        ></template
      >
    </div>

    <div
      ref="scrollable"
      class="scrollable overflow-hidden select-none transition-all bg-gradient-to-b from-gradientStart from-10% via-gradientStart via-30% to-gradientEnd to-90% w-full left-0 pt-8 px-5 absolute bottom-0 rounded-t-[38px]"
    >
      <div @click="changHeight" class="relative">
        <span
          class="w-20 bg-pageBackground h-20 pb-0 flex flex-col items-center justify-end absolute bottom-3 -translate-x-1/2 left-1/2 rounded-full"
        >
          <UppIcon v-if="upp" />
          <DownIcon v-else />
        </span>
      </div>
      <div class="flex justify-between">
        <H1 color="text-gray-300"
          >{{ selectedMonth }} {{ selectedDate }}
          <span class="text-xs text-textLight">{{ selectedYear }}</span></H1
        >
        <span
          class="text-2xl text-textLight w-10 h-10 grid place-content-center bg-gray-500 border border-opacity-90 border-gray-900 bg-opacity-30 rounded-xl"
          >{{ calendarDays[selectedDate + 2] || monthEmoji }}</span
        >
      </div>
      <div class="mt-3 flex flex-col gap-2">
        <h3 class="text-sm text-gray-300">I was feeling</h3>
        <div class="flex items-center text-center gap-2">
          <span
            v-for="mood in filteredMoods"
            :key="mood"
            class="text-xs font-semibold border-2 border-white rounded-3xl text-white px-4 py-1"
            >{{ mood.mood }}</span
          >
        </div>
        <h3 class="text-md mt-5 text-gray-300">What Happend</h3>
        <div class="pb-20 scrollbar-hidden flex h-80 flex-col gap-1">
          <router-link
            v-for="recentMood in filteredMoods"
            :key="recentMood"
            :to="{ name: 'mood-detail', params: { id: recentMood.id || 0 } }"
          >
            <RoundedCardContainer :bgColor="recentMood.bg">
              <div class="flex items-center justify-between gap-2 p-2">
                <div class="">
                  <h2 class="text-md font-semibold text-slate-800">{{ recentMood.head }}</h2>

                  <h3 class="text-xs text-textLight line-clamp-1">{{ recentMood.text }}...</h3>
                </div>
                <VButton rounded="rouded" padding="2" bg="bgGradient"><IconNextArrow /></VButton>
              </div>
            </RoundedCardContainer>
          </router-link>
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
import { computed, onMounted, ref, watchEffect } from 'vue'
import setDragable from '@/utils/drag'
import { monthNames } from '@/data/constants'
import { useMoodStore } from '@/stores/MoodStore'
const moodStore = useMoodStore()

const selectedMonth = ref('June')
const selectedDate = ref('8')
const monthEmoji = ref('😊')
const selectedYear = ref(new Date().getFullYear())

const isMonthHidden = ref(true)
const isYearHidden = ref(true)
const scrollable = ref(null)
const container = ref(null)
const height = ref(29)
const upp = ref(true)
let h = '10rem'
const availableYears = computed(() => {
  return [2022, 2023, 2024].reverse()
})
const changHeight = () => {
  h = h === '10rem' ? (h = '29rem') : '10rem'
  scrollable.value.style.setProperty('--dynamic-height', `${h}`)
  upp.value = !upp.value
}
const openList = () => {
  h = '29rem'
  scrollable.value.style.setProperty('--dynamic-height', h)
  upp.value = false
}
const selectYear = (year) => {
  selectedYear.value = year
  isYearHidden.value = !isYearHidden.value
}
const selectMonth = (month) => {
  selectedMonth.value = month
  isMonthHidden.value = !isMonthHidden.value
}

const moods = ref([])

const fetchMoods = async () => {
  const data = await moodStore.filtereByMonthYear({
    year: selectedYear.value,
    month: selectedMonth.value
  })
  moods.value = data
}
watchEffect(() => {
  fetchMoods()
})

onMounted(() => {
  setDragable(container.value, scrollable.value, height.value)
})
const filteredMoods = computed(() => {
  return moods.value.filter((mood) => mood.date == selectedDate.value)
})

const calendarDays = computed(() => {
  const daysInMonth = 30
  const daysArray = Array(daysInMonth)
    .fill()
    .map((_, index) => index + 1)

  const moodMap = new Map()

  moods.value.forEach((mood) => {
    if (!moodMap.has(mood.date)) {
      moodMap.set(mood.date, mood.emoji)
    }
  })

  return ['', '', '', ...daysArray.map((day) => moodMap.get((day + ' ').trim()) || day), '', '']
})
</script>
