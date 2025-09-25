import { projects, technos } from './../data/techno'
import { create } from 'zustand'
import type { ProjectsArray, StackArray } from '../data/techno.type'

export type Theme = 'dark' | 'light' | null
export type Technos = typeof technos[number]
export type FilterMode = 'OR' | 'AND'

interface TypeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
  projectsFiltered: ProjectsArray
  setProjectsFiltered: (projectsFiltered: ProjectsArray) => void
  filterByTech: (techsSelected: Technos[]) => void
  techsSelected: Technos[]
  setTechsSelected: (techsSelected: Technos[]) => void
  addTech: (tech: Technos) => void
  removeTech: (tech: Technos) => void
  toggleTech: (tech: Technos) => void
  clearFilters: () => void
  filterMode: FilterMode
  filterByProjectName: (projectName: string) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void
  setFilterMode: (mode: FilterMode) => void
}

const useStore = create<TypeStore>((set, get) => ({
  theme: null,
  setTheme: theme => set({ theme }),
  projectsFiltered: [...projects],
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: isMobileMenuOpen => set({ isMobileMenuOpen }),
  setProjectsFiltered: projectsFiltered => set({ projectsFiltered }),
  techsSelected: [], // Commence vide, pas avec toutes les technos
  filterMode: 'OR', // Mode par défaut

  // Définir le mode de filtrage
  setFilterMode: mode => {
    set({ filterMode: mode })
    // Recalculer les filtres avec le nouveau mode
    get().filterByTech(get().techsSelected)
  },

  // Définir directement la liste des technos sélectionnées
  setTechsSelected: techsSelected => {
    set({ techsSelected })
    get().filterByTech(techsSelected)
  },

  // Ajouter une techno si elle n'existe pas déjà
  addTech: tech => {
    const { techsSelected } = get()
    if (!techsSelected.includes(tech)) {
      const newSelection = [...techsSelected, tech]
      set({ techsSelected: newSelection })
      get().filterByTech(newSelection)
    }
  },

  // Retirer une techno
  removeTech: tech => {
    const { techsSelected } = get()
    const newSelection = techsSelected.filter(t => t !== tech)
    set({ techsSelected: newSelection })
    get().filterByTech(newSelection)
  },

  // Toggle une techno (ajouter si absente, retirer si présente)
  toggleTech: tech => {
    const { techsSelected } = get()
    const isSelected = techsSelected.includes(tech)

    const newSelection = isSelected
      ? techsSelected.filter(t => t !== tech)
      : [...techsSelected, tech]

    set({ techsSelected: newSelection })
    get().filterByTech(newSelection)
  },

  clearFilters: () => {
    set({
      techsSelected: [],
      projectsFiltered: [...projects],
      filterMode: 'OR' // Reset au mode par défaut
    })
  },

  filterByTech: techsSelected => {
    if (!techsSelected || techsSelected.length === 0) {
      set({ projectsFiltered: [...projects] })
      return
    }

    const { filterMode } = get()

    const filteredProjects = projects.filter(project => {
      if (!project.technos || project.technos.length === 0) {
        return false
      }

      if (filterMode === 'OR') {
        // Au moins une techno en commun (OR)
        return project.technos.some(projectTech =>
          techsSelected.includes(projectTech as Technos)
        )
      } else {
        // Toutes les technos sélectionnées doivent être présentes (AND)
        return techsSelected.every(selectedTech =>
          project.technos.includes(selectedTech as string)
        )
      }
    })

    set({ projectsFiltered: filteredProjects })
  },
  filterByProjectName: (projectName: string) => {
    const project = projects.find(p => p.name === projectName)
    if (project) {
      set({
        projectsFiltered: [project],
        techsSelected: project.technos as Technos[],
        filterMode: 'AND'
      })
    }
  }
}))

export default useStore
