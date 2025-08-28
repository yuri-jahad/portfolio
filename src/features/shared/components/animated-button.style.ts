import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  ani: {
    from: {
      WebkitMaskPosition: '0 0',
      maskPosition: '0 0'
    },
    to: {
      backgroundColor: 'yellow',
      WebkitMaskPosition: '100% 0',
      maskPosition: '100% 0'
    }
  },
  ani2: {
    from: {
      WebkitMaskPosition: '100% 0',
      maskPosition: '100% 0'
    },
    to: {
      WebkitMaskPosition: '0 0',
      maskPosition: '0 0'
    }
  }
})

