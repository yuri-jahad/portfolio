// Imports des images de projets
import borealeIcon from '@/assets/img/winter-7593872.webp'
import defAPIIcon from '@/assets/img/def-api.webp'
import pokeAPIIcon from '@/assets/img/pokemon-api.webp'
import emmaBOTIcon from '@/assets/img/emma-bot.webp'

// Imports statiques des icônes SVG
import FigmaIcon from '@/assets/icons/svg/figma.svg?react'
import XDIcon from '@/assets/icons/svg/xd.svg?react'
import JavaScriptIcon from '@/assets/icons/svg/javascript.svg?react'
import ReactIcon from '@/assets/icons/svg/react.svg?react'
import TypeScriptIcon from '@/assets/icons/svg/TypeScript.svg?react'
import PandaCSSIcon from '@/assets/icons/svg/panda-css.svg?react'
import TanstackIcon from '@/assets/icons/svg/tanstack.svg?react'
import NodeJSIcon from '@/assets/icons/svg/nodejs.svg?react'
import BunIcon from '@/assets/icons/svg/bun.svg?react'
import ElysiaIcon from '@/assets/icons/svg/elysia.svg?react'
import PostgreSQLIcon from '@/assets/icons/svg/postgre.svg?react'
import KyselyIcon from '@/assets/icons/svg/kysely.svg?react'
import SequelizeIcon from '@/assets/icons/svg/sequelize.svg?react'
import IllustratorIcon from '@/assets/icons/svg/illustrator.svg?react'
import GsapIcon from '@/assets/icons/svg/gsap.svg?react'
import ExpressIcon from '@/assets/icons/svg/express.svg?react'

const GITHUB_BASE_URL = 'https://github.com/yuri-jahad/'
const SERVER_BASE_URL = 'https://mwamed.com/'

const gitUrlConstructor = (projectName: string): string => {
  return `${GITHUB_BASE_URL}${projectName}`
}
const linkUrlConstructor = (projectName: string): string => {
  return `${SERVER_BASE_URL}${projectName}`
}

export const technos = [
  'JavaScript',
  'TypeScript',
  'Bun',
  'Elysia',
  'Kysely',
  'Sequelize',
  'Figma',
  'PostgreSQL',
  'PandaCSS',
  'React',
  'Tanstack',
  'Fastify',
  'Adobe XD',
  'Node.JS',
  'DiscordJS'
] as const

export const projects = [
  {
    name: 'Syllabe Boréale',
    technos: [
      'Bun',
      'Elysia',
      'Kysely',
      'React',
      'Tanstack',
      'PandaCSS',
      'TypeScript',
      'Adobe XD'
    ],
    url: {
      icon: borealeIcon,
      github: gitUrlConstructor('Syllabe-Boreale'),
      server: linkUrlConstructor('syllabe-boreale/')
    }
  },
  {
    name: 'Définition API',
    technos: ['Bun', 'Elysia', 'Kysely', 'PostgreSQL', 'TypeScript'],
    url: {
      icon: defAPIIcon,
      github: gitUrlConstructor('def-api-frontend'),
      server: linkUrlConstructor('def')
    }
  },
  {
    name: 'Api rest Pokémon',
    technos: ['Node.JS', 'Fastify', 'Sequelize', 'TypeScript'],
    url: {
      icon: pokeAPIIcon,
      github: gitUrlConstructor('api-pokemons'),
      server: null
    }
  },
  {
    name: 'Emma Bot (discord)',
    technos: ['Node.JS', 'Fastify', 'DiscordJS', 'TypeScript'],
    url: {
      icon: emmaBOTIcon,
      github: gitUrlConstructor('Emma'),
      server: null
    }
  }
]

export const stack = [
  {
    title: 'Design',
    technos: [
      {
        name: 'Figma',
        IconComponent: FigmaIcon
      },
      {
        name: 'Adobe XD',
        IconComponent: XDIcon
      },
      {
        name: 'Illustrator',
        IconComponent: IllustratorIcon
      }
    ]
  },
  {
    title: 'Frontend',
    technos: [
      {
        name: 'JavaScript',
        IconComponent: JavaScriptIcon
      },
      {
        name: 'React',
        IconComponent: ReactIcon
      },
      {
        name: 'TypeScript',
        IconComponent: TypeScriptIcon
      },
      {
        name: 'Panda CSS',
        IconComponent: PandaCSSIcon
      },
      {
        name: 'Tanstack',
        IconComponent: TanstackIcon
      },
      {
        name: 'Gsap',
        IconComponent: GsapIcon
      }
    ]
  },
  {
    title: 'Backend',
    technos: [
      {
        name: 'NodeJS',
        IconComponent: NodeJSIcon
      },
      {
        name: 'Bun',
        IconComponent: BunIcon
      },
      {
        name: 'TypeScript',
        IconComponent: TypeScriptIcon
      },
      {
        name: 'Express',
        IconComponent: ExpressIcon
      },
      {
        name: 'Elysia',
        IconComponent: ElysiaIcon
      },
      {
        name: 'PostgreSQL',
        IconComponent: PostgreSQLIcon
      },
      {
        name: 'Kysely',
        IconComponent: KyselyIcon
      },
      {
        name: 'Sequelize',
        IconComponent: SequelizeIcon
      }
    ]
  }
]
