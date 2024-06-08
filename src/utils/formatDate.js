import { monthNames } from '@/data/constants'

const formatDate = () => {
  const date = new Date()
  const day = date.getDate()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = daysOfWeek[date.getDay()]
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const year = date.getFullYear();

  const month = monthNames[date.getMonth()]
  return { day, year,time, month,dayOfWeek }
}
export { formatDate }
