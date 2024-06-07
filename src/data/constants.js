const MOOD_TYPES = [
  { id: 2, mood: 'ecstatic', emoji: '😁', color: 'emotionVeryGood' },
  { id: 3, mood: 'neutral', emoji: '😐', color: 'emotionNeutral' },
  { id: 4, mood: 'annoyed', emoji: '😠', color: 'emotionSad' },
  { id: 5, mood: 'displesed', emoji: '😞', color: 'emotionVerySad' },
  { id: 1, mood: 'happy', emoji: '😀', color: 'emotionVeryGood' },
  { id: 6, mood: 'angry', emoji: '😤', color: 'emotionVerySad' },
  { id: 7, mood: 'content', emoji: '😊', color: 'emotionGood' },
  { id: 8, mood: 'frustrated', emoji: '🤬', color: 'emotionSad' },
  { id: 9, mood: 'furious', emoji: '😡', color: 'emotionVerySad' }
]

const MOOD_EMOGIES = MOOD_TYPES.reduce((map, emoji) => {
  map[emoji.id] = emoji.emoji
  return map
}, {})
export { MOOD_EMOGIES, MOOD_TYPES }

const MESSAGES = [
  {
    type: 'Good Morning',
    message: 'Good morning! Have a wonderful day ahead.',
    timeOfDay: 'morning',
    language: 'English',
    emoji: '🌞'
  },
  {
    type: 'Good Afternoon',
    message: "Good afternoon! Hope you're having a great day.",
    timeOfDay: 'afternoon',
    language: 'English',
    emoji: '☀️'
  },
  {
    type: 'Good Evening',
    message: 'Good evening! Relax and unwind, you deserve it.',
    timeOfDay: 'evening',
    language: 'English',
    emoji: '🌅'
  },
  {
    type: 'Good Night',
    message: 'Good night! Sweet dreams and rest well.',
    timeOfDay: 'night',
    language: 'English',
    emoji: '🌜'
  }
]

export { MESSAGES }

const CATEGORIES = [
  { name: 'work', bg: 'bgOutline' },
  { name: 'family', bg: 'bgOutline' },
  { name: 'relationship', bg: 'bgOutline' },
  { name: 'friend', bg: 'bgOutline' },
  { name: 'school', bg: 'bgOutline' },
  { name: 'health', bg: 'bgOutline' },
  { name: 'college', bg: 'bgOutline' },
  { name: 'coworker', bg: 'bgOutline' }
]
export { CATEGORIES }

import ICON_SEARCH from '@/assets/images/icons8-search-64.png'
import AVATOR_MALE from '@/assets/images/icons8-avatar-male.png'
import AVATOR_FEMALE from '@/assets/images/icons8-avatar-female.png'

export { ICON_SEARCH, AVATOR_MALE, AVATOR_FEMALE }
