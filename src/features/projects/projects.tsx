import { technos, projects } from '@/data/techno'
import { filterButton } from '~styled-system/recipes'

export default function Projects () {
  return (
    <section>
      <span>03. PROJECTS</span>
      <div>CHOISIS TES FILTRES</div>
      <div>
        {technos.map((techno, index) => (
          <button className={filterButton()} key={index}>
            {techno}
          </button>
        ))}

        {projects.map(project => (
          <div>
            <img src={project.url} alt='' />
            <div>{project.name}</div>
            <div>
              {project.technos.map(techno => (
                <div className={filterButton()}>{techno}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
