import { defineStore } from 'pinia'

const useMoodStore = defineStore('MoodStore', {
  state: () => ({
    mood: {},
    moods: [],
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
      return state.moods.slice(0,1)[0]
   // return state.moods.find(mood => mood.id === id)
    }
  },
  actions: {
    recordMood(mood) {
      this.mood = mood
    },
    addMood(mood) {

      this.moods.push({...mood,id: this.moods.length + 1})
      this.mood = {}
    }
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

    // If months are the same, compare by date (day)
    if (a.date !== b.date) {
      return a.date - b.date
    }

    // If dates are the same, compare by time
    // Assuming time is in "hh:mm AM/PM" format
    let [aTime, aPeriod] = a.time.split(' ')
    let [aHour, aMinute] = aTime.split(':').map(Number)
    let [bTime, bPeriod] = b.time.split(' ')
    let [bHour, bMinute] = bTime.split(':').map(Number)
    // Convert 12-hour time to 24-hour format for comparison
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
  const groupedData = [];
  
  let currentMonthYear = null;
  let currentGroup = null;

  // Iterate through the sorted data
  sortedData.forEach(item => {
    const { month, year } = item;
    const monthYear = `${month} ${year}`;

    // If it's a new month-year combination, create a new group
    if (monthYear !== currentMonthYear) {
      // Push previous group if exists
      if (currentGroup) {
        groupedData.push(currentGroup);
      }
      // Create a new group for the current month-year
      currentMonthYear = monthYear;
      currentGroup = {
        month: month,
        year: year,
        data: []
      };
    }

    // Add current item to the current group
    currentGroup.data.push(item);
  });

  // Push the last group to groupedData
  if (currentGroup) {
    groupedData.push(currentGroup);
  }

  return groupedData;
}

export { useMoodStore }
