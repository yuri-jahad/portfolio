import type { ComponentType } from 'react'

export interface StackType {
  title: string
  technos: {
    name: string
    IconComponent: ComponentType
  }[]
}

export type StackArray = StackType[]

export interface ProjectsType {
  name: string
  technos: string[]
  url: string
}

export type ProjectsArray = ProjectsType[]
