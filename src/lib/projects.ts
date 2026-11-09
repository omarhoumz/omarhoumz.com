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
    title: 'devfest.gdgcasablanca.com',
    link: {
      href: 'https://devfest.gdgcasablanca.com/',
    },
    status: projectStatuses.unmaintained,
    description:
      'DevFest is a yearly Developer festival organized by GDG Casablanca. I created the website with NextJs and ReactJs. Deployed with Vercel.',
  },
  {
    // icon: 'https://gdgcasablanca.com/gdg-casa-icon.png',
    title: 'gdgcasablanca.com',
    link: {
      href: 'https://gdgcasablanca.com/',
    },
    status: projectStatuses.unmaintained,
    description:
      'GDG (Google Developer Groups) is global program for developers. GDG Casablanca is a local chapter. I created the website with NextJs, ReactJs and meetup API. Deployed with Vercel.',
  },
  {
    // icon: 'https://wtm.gdgcasablanca.com/icons/icon-144x144.png',
    title: 'wtm.gdgcasablanca.com',
    link: {
      href: 'https://wtm.gdgcasablanca.com/',
    },
    status: projectStatuses.unmaintained,
    description:
      'WTM (Women TechMakers) is a global program that provides visibility and community for women in tech. WTM Casablanca is a local chapter. I created the website with gatsby and reactjs.',
  },
  {
    title: 'LineApp.',
    link: {
      href: 'https://github.com/omhoumz/lineapp',
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
