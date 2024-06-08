import { defineStore } from 'pinia'

const useMoodStore = defineStore('MoodStore', {
  state: () => ({
    mood: {},
    moods: [
      {
        id: 1,
        about: ['work', 'family','life'],
        bg: 'bg-emotionSad text-textLight',
        date: 8,
        dayOfWeek: 'Saturday',
        emoji: '🤬',
        head: 'A Very Bad Day',
        month: 'June',
        mood: 'frustrated',
        text: 'Today was an amazing day! I started with a refreshing morning run, followed by a productive work session. In the evening, I caught up with friends over a cozy dinner. Looking forward to more such days!',
        time: '10:00 AM',
        year: 2024
      }
    ],
    isLoading: false,
    error: null
  }),
  getters: {
    getMood(state) {
      return state.mood
    },
    getRecentMoods(state) {
      return groupByMonthAndYear(sortMood(state.moods)).slice(0, 10)
    },
    getMoodById: (state) => (id) => {
      return state.moods.find((mood) => mood.id == id) || {}
    },
    searchByTerm: (state) => (term) => {
      return  groupByMonthAndYear(sortMood( state.moods.filter((mood) => {
        return mood.head.toLowerCase().includes(term.toLowerCase()) || mood.text.toLowerCase().includes(term.toLowerCase());
      })));
    }
  },
  actions: {
    recordMood(mood) {
      this.mood = mood
    },
    addMood(mood) {
      this.moods.push({ ...mood, id: this.moods.length + 1 })
      console.log('mood', this.moods)
      this.mood = {}
    },
    filtereByMonthYear({ year, month }) {
      return this.moods.filter(mood => mood.year === year && mood.month === month);
    },
    removeMood(id) {
      this.moods = this.moods.filter((mood) => mood.id !== id)
    },
  
    
  }
})

function sortMood(data) {
  data.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year
    }

    const monthOrder = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12
    }

    if (monthOrder[a.month] !== monthOrder[b.month]) {
      return monthOrder[a.month] - monthOrder[b.month]
    }

  
    if (a.date !== b.date) {
      return a.date - b.date
    }

 
    let [aTime, aPeriod] = a.time.split(' ')
    let [aHour, aMinute] = aTime.split(':').map(Number)
    let [bTime, bPeriod] = b.time.split(' ')
    let [bHour, bMinute] = bTime.split(':').map(Number)
  
    if (aPeriod === 'PM' && aHour !== 12) {
      aHour += 12
    } else if (aPeriod === 'AM' && aHour === 12) {
      aHour = 0
    }

    if (bPeriod === 'PM' && bHour !== 12) {
      bHour += 12
    } else if (bPeriod === 'AM' && bHour === 12) {
      bHour = 0
    }

    if (aHour !== bHour) {
      return aHour - bHour
    }

    return aMinute - bMinute
  })

  return data
}
function groupByMonthAndYear(sortedData) {
  const groupedData = []

  let currentMonthYear = null
  let currentGroup = null

  // Iterate through the sorted data
  sortedData.forEach((item) => {
    const { month, year } = item
    const monthYear = `${month} ${year}`

    // If it's a new month-year combination, create a new group
    if (monthYear !== currentMonthYear) {
      // Push previous group if exists
      if (currentGroup) {
        groupedData.push(currentGroup)
      }
      // Create a new group for the current month-year
      currentMonthYear = monthYear
      currentGroup = {
        month: month,
        year: year,
        data: []
      }
    }

    // Add current item to the current group
    currentGroup.data.push(item)
  })

  // Push the last group to groupedData
  if (currentGroup) {
    groupedData.push(currentGroup)
  }

  return groupedData
}

export { useMoodStore }
