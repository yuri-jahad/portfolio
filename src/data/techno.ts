// Imports des images de projets
import borealeIcon from '@/assets/img/winter-7593872.jpg'
import defAPIIcon from '@/assets/img/def-api.jpg'
import pokeAPIIcon from '@/assets/img/pokemon-api.png'
import emmaBOTIcon from '@/assets/img/emma-bot.png'

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
    url: borealeIcon
  },
  {
    name: 'Définition API',
    technos: ['Bun', 'Elysia', 'Kysely', 'PostgreSQL', 'TypeScript'],
    url: defAPIIcon
  },
  {
    name: 'Api rest Pokémon',
    technos: ['Node.JS', 'Fastify', 'Sequelize', 'TypeScript'],
    url: pokeAPIIcon
  },
  {
    name: 'Emma Bot (discord)',
    url: emmaBOTIcon,
    technos: ['Node.JS', 'Fastify', 'DiscordJS', 'TypeScript']
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
