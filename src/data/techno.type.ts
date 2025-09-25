import type { ComponentType } from 'react'

export interface StackType {
  title: string
  technos: {
    name: string
    IconComponent: ComponentType
  }[]
}

export type StackArray = StackType[]

export interface ProjectURL {
  icon: ComponentType
  github: string
  server: string | null
}

export interface ProjectsType {
  name: string
  technos: string[]
  url: ProjectURL
}

export type ProjectsArray = ProjectsType[]
