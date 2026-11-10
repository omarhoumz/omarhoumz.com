export const projectStatuses = {
  archived: 'archived',
  unmaintained: 'unmaintained',
  active: 'active',
} as const

export type ProjectStatus = keyof typeof projectStatuses

export interface Project {
  icon?: string
  title: string
  link: { href: string }
  status?: ProjectStatus
  description: string
}
const allProjects: Project[] = [
  {
    icon: 'https://devfest-casablanca-2020.web.app/icons/icon-144x144.png',
    title: 'DevFest Casablanca 2020',
    link: { href: 'https://devfest-casablanca-2020.web.app/' },
    status: projectStatuses.unmaintained,
    description:
      'DevFest is the yearly developer festival organized by GDG Casablanca. I built the 2020 season site with Gatsby and React, as an offline-ready PWA on Firebase Hosting.',
  },
  {
    title: 'DevFest Casablanca 2019',
    link: { href: 'https://github.com/gdgcasablanca/devfest-casablanca-2019' },
    status: projectStatuses.unmaintained,
    description:
      'The 2019 season site, built with Gatsby and React as an offline-ready PWA on Firebase Hosting. The site is no longer online; this links to its source.',
  },
  {
    title: 'GDG Casablanca',
    link: { href: 'https://github.com/gdgcasablanca/gdgcasablanca.com' },
    status: projectStatuses.unmaintained,
    description:
      'GDG (Google Developer Groups) is a global program for developers, and GDG Casablanca is a local chapter. I built its site with Gatsby, React and Material UI, with events pulled from the Meetup API. Hosted on Firebase.',
  },
  {
    title: 'WTM Casablanca',
    link: { href: 'https://github.com/gdgcasablanca/wtm-casablanca' },
    status: projectStatuses.unmaintained,
    description:
      'WTM (Women Techmakers) is a global program that provides visibility and community for women in tech, and WTM Casablanca is a local chapter. I built its site with Gatsby and React. Hosted on Firebase.',
  },
  {
    title: 'LineApp.',
    link: {
      href: 'https://github.com/omarhoumz/lineapp',
    },
    status: projectStatuses.unmaintained,
    description: 'Yet another to do app that uses Firebase Auth.',
  },
  {
    title: 'CC Platform.',
    link: {
      href: 'https://github.com/omarhoumz/ccp',
    },
    status: projectStatuses.unmaintained,
    description:
      'Get free and high res photos from around the web. An agregation of APIs for CC images.',
  },
]

export default allProjects
