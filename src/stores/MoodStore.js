import { defineStore } from 'pinia'

const useMoodStore = defineStore('MoodStore', {
  state: () => ({
    mood: {},
    moods: [
      {
        "id": 1,
        "about": ["work", "family", "life"],
        "bg": "bg-emotionSad text-textLight",
        "date": 8,
        "dayOfWeek": "Saturday",
        "emoji": "🤬",
        "head": "A Very Bad Day",
        "month": "June",
        "mood": "frustrated",
        "text": "Today was incredibly stressful. Work was overwhelming, and I had a major argument with a family member. Nothing seemed to go right.",
        "time": "10:00 AM",
        "year": 2024
      },
      {
        "id": 2,
        "about": ["friends", "leisure"],
        "bg": "bg-emotionVeryGood text-textLight",
        "date": 15,
        "dayOfWeek": "Sunday",
        "emoji": "😁",
        "head": "Fantastic Day Out",
        "month": "June",
        "mood": "ecstatic",
        "text": "Spent the entire day with friends at the beach. The weather was perfect, and we had so much fun playing games and relaxing.",
        "time": "3:00 PM",
        "year": 2024
      },
      {
        "id": 3,
        "about": ["routine", "work"],
        "bg": "bg-emotionNeutral text-textDark",
        "date": 18,
        "dayOfWeek": "Wednesday",
        "emoji": "😐",
        "head": "An Average Day",
        "month": "June",
        "mood": "neutral",
        "text": "Nothing much happened today. It was just another day at work, followed by a quiet evening at home.",
        "time": "6:00 PM",
        "year": 2024
      },
      {
        "id": 4,
        "about": ["work", "commute"],
        "bg": "bg-emotionSad text-textDark",
        "date": 20,
        "dayOfWeek": "Friday",
        "emoji": "😠",
        "head": "Annoying Commute",
        "month": "June",
        "mood": "annoyed",
        "text": "The traffic was horrendous today. I was stuck in a jam for hours, making me late for an important meeting at work.",
        "time": "8:30 AM",
        "year": 2024
      },
      {
        "id": 5,
        "about": ["personal", "reflection"],
        "bg": "bg-emotionVerySad text-textLight",
        "date": 25,
        "dayOfWeek": "Monday",
        "emoji": "😞",
        "head": "Feeling Down",
        "month": "June",
        "mood": "displesed",
        "text": "I've been feeling a bit down lately. Nothing specific triggered it, just a general sense of unease and dissatisfaction.",
        "time": "7:00 PM",
        "year": 2024
      },
      {
        "id": 6,
        "about": ["family", "events"],
        "bg": "bg-emotionVeryGood text-textLight",
        "date": 30,
        "dayOfWeek": "Saturday",
        "emoji": "😀",
        "head": "Family Reunion",
        "month": "June",
        "mood": "happy",
        "text": "Had a wonderful family reunion today. It was great to catch up with everyone and enjoy a day filled with laughter and joy.",
        "time": "12:00 PM",
        "year": 2024
      },
      {
        "id": 7,
        "about": ["work", "stress"],
        "bg": "bg-emotionVerySad text-textLight",
        "date": 2,
        "dayOfWeek": "Monday",
        "emoji": "😤",
        "head": "Intense Meeting",
        "month": "July",
        "mood": "angry",
        "text": "Today's meeting at work was intense. There was a lot of disagreement, and I felt really angry by the end of it.",
        "time": "2:00 PM",
        "year": 2024
      },
      {
        "id": 8,
        "about": ["personal", "achievements"],
        "bg": "bg-emotionGood text-textDark",
        "date": 5,
        "dayOfWeek": "Thursday",
        "emoji": "😊",
        "head": "Content with Progress",
        "month": "July",
        "mood": "content",
        "text": "Feeling content with the progress I've made on my personal projects. It's satisfying to see my hard work pay off.",
        "time": "4:00 PM",
        "year": 2024
      },
      {
        "id": 9,
        "about": ["work", "projects"],
        "bg": "bg-emotionVerySad text-textDark",
        "date": 10,
        "dayOfWeek": "Tuesday",
        "emoji": "😡",
        "head": "Project Deadline Chaos",
        "month": "July",
        "mood": "furious",
        "text": "The project deadline is approaching, and everything seems to be falling apart. I'm furious with how poorly things are going.",
        "time": "5:00 PM",
        "year": 2024
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
