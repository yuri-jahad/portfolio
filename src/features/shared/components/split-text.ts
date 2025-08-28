import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

// GÉNÉRATEUR DE SVG PATHS À PARTIR DE TEXTE
export const createDynamicSVGText = (container, options = {}) => {
  const {
    fontSize = 60,
    fontFamily = 'Athena, Arial Black, sans-serif',
    strokeColor = 'rgba(255,255,255,0.4)',
    fillColor = '#ffffff',
    viewBoxWidth = 400,
    viewBoxHeight = 100
  } = options

  // Créer le SVG container
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`)
  svg.style.cssText = `
    width: 100%;
    height: auto;
    cursor: pointer;
  `
  
  // Ajouter le gradient (identique à votre SVG)
  svg.innerHTML = `
    <defs>
      <linearGradient id="dynamicGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#13D5FF" />
        <stop offset="50%" stop-color="#eae547" />
        <stop offset="100%" stop-color="#ffffffe1" />
      </linearGradient>
    </defs>
  `
  
  container.appendChild(svg)
  
  let currentPaths = []
  let currentTween = null
  
  // Fonction pour convertir texte en paths SVG
  const textToSVGPaths = async (text) => {
    // Créer un canvas temporaire pour mesurer le texte
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    ctx.font = `${fontSize}px ${fontFamily}`
    
    // Simuler des paths pour chaque caractère (version simplifiée)
    // En production, utilisez opentype.js ou une API de conversion
    const chars = text.split('')
    const paths = []
    let xOffset = 20
    
    chars.forEach((char, i) => {
      const charWidth = ctx.measureText(char).width
      
      // Générer un path simplifié pour chaque caractère
      // Ceci est une approximation - pour un vrai projet, utilisez opentype.js
      let pathData = ''
      
      switch(char.toUpperCase()) {
        case 'M':
          pathData = `M${xOffset},80 L${xOffset},20 L${xOffset + charWidth/2},50 L${xOffset + charWidth},20 L${xOffset + charWidth},80`
          break
        case 'Y':
          pathData = `M${xOffset},20 L${xOffset + charWidth/2},50 L${xOffset + charWidth},20 M${xOffset + charWidth/2},50 L${xOffset + charWidth/2},80`
          break
        case 'S':
          pathData = `M${xOffset + charWidth},30 Q${xOffset + charWidth/2},20 ${xOffset},30 Q${xOffset + charWidth/2},50 ${xOffset + charWidth},70 Q${xOffset + charWidth/2},80 ${xOffset},70`
          break
        case 'T':
          pathData = `M${xOffset},20 L${xOffset + charWidth},20 M${xOffset + charWidth/2},20 L${xOffset + charWidth/2},80`
          break
        case 'A':
          pathData = `M${xOffset},80 L${xOffset + charWidth/2},20 L${xOffset + charWidth},80 M${xOffset + charWidth*0.25},60 L${xOffset + charWidth*0.75},60`
          break
        case 'C':
          pathData = `M${xOffset + charWidth},30 Q${xOffset},20 ${xOffset},50 Q${xOffset},80 ${xOffset + charWidth},70`
          break
        case 'K':
          pathData = `M${xOffset},20 L${xOffset},80 M${xOffset},50 L${xOffset + charWidth},20 M${xOffset},50 L${xOffset + charWidth},80`
          break
        default:
          // Caractère générique (rectangle)
          pathData = `M${xOffset},20 L${xOffset},80 L${xOffset + charWidth},80 L${xOffset + charWidth},20 Z`
      }
      
      if (char !== ' ') {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        path.setAttribute('d', pathData)
        path.setAttribute('stroke', strokeColor)
        path.setAttribute('stroke-width', '2')
        path.setAttribute('fill', 'transparent')
        path.classList.add('dynamic-char-path')
        
        paths.push(path)
        svg.appendChild(path)
      }
      
      xOffset += charWidth + 10
    })
    
    return paths
  }
  
  // Animation identique à votre SVG
  const animateText = async (text, animationOptions = {}) => {
    const {
      traceDuration = 0.8,
      fillDuration = 0.3,
      traceStagger = 0.05,
      fillStagger = 0.03,
      traceDelay = 0,
      fillDelay = 0.5
    } = animationOptions
    
    // Nettoyer les anciens paths
    currentPaths.forEach(path => path.remove())
    currentPaths = []
    
    // Créer les nouveaux paths
    currentPaths = await textToSVGPaths(text)
    
    // Configuration DrawSVG (identique à votre code)
    gsap.set(currentPaths, {
      drawSVG: "0%",
      opacity: 1
    })
    
    const timeline = gsap.timeline()
    
    // Phase 1: Tracé (identique strokeDashoffset: 0)
    timeline.to(currentPaths, {
      drawSVG: "100%",
      duration: traceDuration,
      stagger: traceStagger,
      ease: 'power2.out'
    }, traceDelay)
    
    // Phase 2: Remplissage (identique fill + stroke)
    timeline.to(currentPaths, {
      fill: fillColor,
      stroke: fillColor,
      duration: fillDuration,
      stagger: fillStagger,
      ease: 'power2.out'
    }, fillDelay)
    
    return timeline
  }
  
  // Animation de deux mots (comme MY + STACK)
  const animateTwoWords = async (word1, word2, options = {}) => {
    const {
      word1Delay = 0,
      word2Delay = 0.2,
      spacing = 80
    } = options
    
    // Nettoyer
    currentPaths.forEach(path => path.remove())
    currentPaths = []
    
    // Créer les paths pour les deux mots
    const paths1 = await textToSVGPaths(word1)
    
    // Ajuster position pour le deuxième mot
    const paths2 = await textToSVGPaths(word2)
    paths2.forEach(path => {
      const currentD = path.getAttribute('d')
      // Décaler le deuxième mot vers la droite
      const shiftedD = currentD.replace(/M(\d+)/g, (match, x) => `M${parseInt(x) + spacing}`)
                              .replace(/L(\d+)/g, (match, x) => `L${parseInt(x) + spacing}`)
                              .replace(/Q(\d+)/g, (match, x) => `Q${parseInt(x) + spacing}`)
      path.setAttribute('d', shiftedD)
    })
    
    currentPaths = [...paths1, ...paths2]
    
    // Configuration initiale
    gsap.set(currentPaths, {
      drawSVG: "0%",
      opacity: 1
    })
    
    const timeline = gsap.timeline()
    
    // Animation WORD1 (comme MY)
    timeline
      .to(paths1, {
        drawSVG: "100%",
        duration: 0.8,
        stagger: 0.05,
        ease: 'power2.out'
      }, word1Delay)
      .to(paths1, {
        fill: fillColor,
        stroke: fillColor,
        duration: 0.3,
        stagger: 0.03,
        ease: 'power2.out'
      }, word1Delay + 0.5)
    
    // Animation WORD2 (comme STACK)
    timeline
      .to(paths2, {
        drawSVG: "100%",
        duration: 0.8,
        stagger: 0.03,
        ease: 'power2.out'
      }, word2Delay)
      .to(paths2, {
        fill: fillColor,
        stroke: fillColor,
        duration: 0.3,
        stagger: 0.02,
        ease: 'power2.out'
      }, word2Delay + 0.7)
    
    return timeline
  }
  
  // Hover effect identique
  const addHoverEffect = () => {
    svg.addEventListener('mouseenter', () => {
      if (currentTween) currentTween.kill()
      
      currentTween = gsap.to(currentPaths, {
        fill: 'url(#dynamicGradient)',
        stroke: 'url(#dynamicGradient)',
        scale: 1.02,
        transformOrigin: 'center',
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.out'
      })
    })
    
    svg.addEventListener('mouseleave', () => {
      if (currentTween) currentTween.kill()
      
      currentTween = gsap.to(currentPaths, {
        fill: fillColor,
        stroke: fillColor,
        scale: 1,
        duration: 0.4,
        stagger: 0.015,
        ease: 'power2.out'
      })
    })
  }
  
  const destroy = () => {
    svg.remove()
  }
  
  return {
    animateText,
    animateTwoWords,
    addHoverEffect,
    destroy,
    svg
  }
}

// EXEMPLE D'UTILISATION - EXACTEMENT COMME VOTRE SVG
/*
const dynamicSVG = createDynamicSVGText(container)

// Animation identique à MY + STACK
dynamicSVG.animateTwoWords('MY', 'STACK', {
  word1Delay: 0,
  word2Delay: 0.2
})

// Hover identique
dynamicSVG.addHoverEffect()

// Pour n'importe quel autre texte :
dynamicSVG.animateText('HELLO')
*/