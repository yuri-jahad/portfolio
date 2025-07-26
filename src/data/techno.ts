import boreale from '@/assets/winter-7593872.jpg'
import defAPI from '@/assets/def-api.jpg'
import pokeAPI from '@/assets/pokemon-api.png'
import emmaBOT from '@/assets/emma-bot.png'

export const technos = [
  'All Work',
  'JavaScript',
  'TypeScript',
  'Bun',
  'Elysia',
  'Kysely',
  'PostgreSQL',
  'PandaCSS',
  'React',
  'Tanstack',
  'Fastify',
  'Adobe XD',
  'Node.JS',
  'DiscordJS'
]

export const projects = [
  {
    name: 'Syllabe Boréale',
    technos: ['Bun', 'Elysia', 'Kysely', 'React', 'Tanstack', 'PandaCSS'],
    url: boreale
  },

  {
    name: 'Définition API',
    technos: ['Bun', 'Elysia', 'Kysely', 'PostgreSQL'],
    url: defAPI
  },
  {
    name: 'Api rest Pokémon',
    technos: ['Node.JS', 'Fastify', 'DiscordJS'],
    url: pokeAPI
  }, 

  {
    name:'Emma Bot (discord)', 
    url: emmaBOT,
    technos:['Node.JS', 'Fastify'], 

  }
]
