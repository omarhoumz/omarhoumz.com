export const months = [
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
  'December',
]

export default function formatDate(d) {
  const date = new Date(d)

  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  // "MMMM DD, YYYY"
  return `${month} ${day}, ${year}`
}
