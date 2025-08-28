import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(CSSPlugin, useGSAP, ScrollTrigger, ScrollToPlugin, SplitText)

export { gsap, useGSAP, ScrollTrigger }
