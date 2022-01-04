import ProjectItem from './project-item'

function ProjectList({ projects }) {
  return (
    <ul className='flex flex-col max-w-2xl gap-4 md:gap-6'>
      {projects.map((project, index) => {
        return (
          <li key={`${index}`}>
            <ProjectItem {...project} />
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectList
