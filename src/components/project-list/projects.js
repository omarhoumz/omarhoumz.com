export const projectStatuses = {
  archived: 'archived',
  unmaintained: 'unmaintained',
  active: 'active',
}

const allProjects = [
  {
    icon: 'https://devfest.gdgcasablanca.com/icons/icon-144x144.png',
    title: 'devfest.gdgcasablanca.com',
    link: {
      href: 'https://devfest.gdgcasablanca.com/',
      external: true,
    },
    status: projectStatuses.active,
    description:
      'DevFest is a yearly Developer festival organized by GDG Casablanca. I created the website with gatsby and reactjs.',
  },
  {
    icon: 'https://gdgcasablanca.com/icons/icon-144x144.png',
    title: 'gdgcasablanca.com',
    link: {
      href: 'https://gdgcasablanca.com/',
      external: true,
    },
    status: projectStatuses.active,
    description:
      'GDG (Google developer groups) is global program for developers. GDG Casablanca is a local chapter. I created the website with gatsby, reactjs and meetup API.',
  },
  {
    icon: 'https://wtm.gdgcasablanca.com/icons/icon-144x144.png',
    title: 'wtm.gdgcasablanca.com',
    link: {
      href: 'https://wtm.gdgcasablanca.com/',
      external: true,
    },
    status: projectStatuses.active,
    description:
      'WTM (Women TechMakers) is a global program that provides visibility and community for women in tech. WTM Casablanca is a local chapter. I created the website with gatsby and reactjs.',
  },
  {
    title: 'LineApp.',
    link: {
      href: 'https://github.com/omhoumz/lineapp',
      external: true,
    },
    status: projectStatuses.unmaintained,
    description: 'Yet another to do app that uses Firebase Auth.',
  },
  {
    title: 'CC Platform.',
    link: {
      href: 'https://github.com/omarhoumz/ccp',
      external: true,
    },
    status: projectStatuses.unmaintained,
    description:
      'Get free and high res photos from around the web. An agregation of APIs for CC images.',
  },
]

export default allProjects
