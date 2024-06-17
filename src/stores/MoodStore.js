import { defineStore } from 'pinia'
import { supabase } from '@/libs/supabase.js'
import { CodeSquare } from 'lucide-vue-next'

const useMoodStore = defineStore('MoodStore', {
  state: () => ({
    mood: {},
    FetchedMoods: [],
    moods: [
      // {
      //   userid: 1,
      //   id: 1,
      //   about: ['work', 'family', 'life'],
      //   bg: 'bg-emotionSad text-textLight',
      //   date: 8,
      //   dayOfWeek: 'Saturday',
      //   emoji: '🤬',
      //   head: 'A Very Bad Day',
      //   month: 'June',
      //   mood: 'frustrated',
      //   text: 'Today was incredibly stressful. Work was overwhelming, and I had a major argument with a family member. Nothing seemed to go right.',
      //   time: '10:00 AM',
      //   year: 2024
      // }
    ],
    isLoading: false,
    error: null
  }),
  getters: {
    isLoaded(state) {
      return state.isLoading
    },
    getMood(state) {
      return state.mood
    },
    getRecentMoods(state) {
      return groupByMonthAndYear(state.moods)
    },
    getMoodById: (state) => (id) => {
      return state.moods.find((mood) => mood.id == id) || {}
    },
    searchByTerm: (state) => async (term, userId) => {
      const { data, error } = await supabase
        .from('moods')
        .select()
        .eq('userid', userId)
        .or(`head.ilike.%${term}%, text.ilike.%${term}%`)
      if (error) {
        throw error
      }

      console.log('data', data)
      return groupByMonthAndYear(data)
    }
  },
  actions: {
    async fetchMoods(userId) {
      this.isLoading = true
      const { data, error } = await supabase
        .from('moods')
        .select()
        .eq('userid', userId)
        .order('created_at', { ascending: false })
        .limit(20)

      if (error) {
        this.error = true
      }
      if (data.length) {
        data.forEach((e, i) => {
          let aboutObject = JSON.parse(e.about)
          data[i].about = aboutObject.about
        })

        this.moods = data || []
      }
      this.isLoading = false
      console.log('done')
    },
    recordMood(mood) {
      this.mood = mood
    },
    async addMood(mood, userId) {
      let aboutObject = {
        about: mood.about
      }
      mood.about = JSON.stringify(aboutObject)
      const { data, error } = await supabase
        .from('moods')
        .insert({ ...mood, userid: userId })
        .select()
      this.mood = {}
      if (error) {
        this.error = true
      } else {
        mood.about = aboutObject.about
        this.moods.unshift({ ...mood, id: data[0].id })
      }
    },

    async filtereByMonthYear({ year, month,userId }) {
      this.isLoading = true
      const { data, error } = await supabase
        .from('moods')
        .select()
        .eq('userid', userId)
        .eq('year', year)
        .eq('month', month)

      if (error) {
        this.error = true
      }

      this.FetchedMoods = data
      this.isLoading = false
      return data || []
    },

    async removeMood(id) {
      this.moods = this.moods.filter((mood) => mood.id !== id)
      const { error } = await supabase.from('moods').delete().eq('id', id)
      if (error) {
        this.error = true
      }
    }
  }
})

function groupByMonthAndYear(sortedData) {
  const groupedData = []

  let currentMonthYear = null
  let currentGroup = null

  sortedData.forEach((item) => {
    const { month, year } = item
    const monthYear = `${month} ${year}`

    if (monthYear !== currentMonthYear) {
      if (currentGroup) {
        groupedData.push(currentGroup)
      }

      currentMonthYear = monthYear
      currentGroup = {
        month: month,
        year: year,
        data: []
      }
    }

    currentGroup.data.push(item)
  })

  if (currentGroup) {
    groupedData.push(currentGroup)
  }

  return groupedData
}

async function getLastInsertedMoodId() {
  const { data, error } = await supabase
    .from('moods')
    .select('id')
    .order('id', { ascending: false })
    .limit(1)

  if (error) {
    console.error('Error fetching last inserted mood ID:', error.message)
    return null
  }

  if (data && data.length > 0) {
    return data[0].id
  }

  return null
}

export { useMoodStore }
