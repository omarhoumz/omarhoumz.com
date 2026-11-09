// "MMMM D, YYYY" in UTC, so the output doesn't depend on the build machine's timezone.
const formatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

export default function formatDate(date: Date): string {
  return formatter.format(date)
}
