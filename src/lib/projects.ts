export const projectStatuses = {
  archived: 'archived',
  unmaintained: 'unmaintained',
  active: 'active',
} as const

export type ProjectStatus = keyof typeof projectStatuses

export interface Project {
  icon?: string
  title: string
  /** Live site, when it is still up. */
  live?: string
  /** Source repository. */
  repo?: string
  status?: ProjectStatus
  description: string
}
const allProjects: Project[] = [
  {
    icon: 'https://devfest-casablanca-2020.web.app/icons/icon-144x144.png',
    title: 'DevFest Casablanca 2020',
    live: 'https://devfest-casablanca-2020.web.app/',
    repo: 'https://github.com/gdgcasablanca/devfest-casablanca-2020',
    status: projectStatuses.unmaintained,
    description:
      'DevFest is the yearly developer festival organized by GDG Casablanca. I built the 2020 season site with Gatsby and React, as an offline-ready PWA on Firebase Hosting.',
  },
  {
    title: 'DevFest Casablanca 2019',
    live: 'https://devfest-casablanca-2019.web.app/',
    repo: 'https://github.com/gdgcasablanca/devfest-casablanca-2019',
    status: projectStatuses.unmaintained,
    description:
      'The 2019 season site, built with Gatsby and React as an offline-ready PWA on Firebase Hosting.',
  },
  {
    title: 'GDG Casablanca',
    live: 'https://gdgcasablanca-website.web.app/',
    repo: 'https://github.com/gdgcasablanca/gdgcasablanca.com',
    status: projectStatuses.unmaintained,
    description:
      'GDG (Google Developer Groups) is a global program for developers, and GDG Casablanca is a local chapter. I built its site with Gatsby, React and Material UI, with events pulled from the Meetup API. Hosted on Firebase.',
  },
  {
    title: 'WTM Casablanca',
    live: 'https://wtm-casablanca.web.app/',
    repo: 'https://github.com/gdgcasablanca/wtm-casablanca',
    status: projectStatuses.unmaintained,
    description:
      'WTM (Women Techmakers) is a global program that provides visibility and community for women in tech, and WTM Casablanca is a local chapter. I built its site with Gatsby and React. Hosted on Firebase.',
  },
  {
    title: 'LineApp',
    live: 'https://lineapp.netlify.app/',
    repo: 'https://github.com/omarhoumz/lineapp',
    status: projectStatuses.unmaintained,
    description:
      "A to-do app for lining up the day's tasks. Built with React (Create React App), with sign-in through Google or GitHub via Firebase Auth. Hosted on Netlify.",
  },
  {
    title: 'CC Platform',
    repo: 'https://github.com/omarhoumz/ccp',
    status: projectStatuses.unmaintained,
    description:
      'One search for free, high-resolution photos: it brings together Creative Commons images from the Unsplash and Flickr APIs. Built with React (Create React App).',
  },
]

export default allProjects
