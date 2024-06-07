const formatDate = () => {
  const date = new Date()
  const day = date.getDate()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const dayOfWeek = daysOfWeek[date.getDay()]
  const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const year = date.getFullYear();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const month = monthNames[date.getMonth()]
  return { day, year,time, month,dayOfWeek }
}
export { formatDate }
