export const GA_TRACKING_ID = 'UA-35979647-3'

const noop = () => {}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  const gtag = window.gtag ?? noop
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  const gtag = window.gtag ?? noop
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
