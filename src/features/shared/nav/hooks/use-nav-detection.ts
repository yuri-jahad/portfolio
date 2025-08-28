
// hooks/useNavDetection.ts - Hook réutilisable optimisé
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DetectLinkNameByHref, { type LinksProps } from '@/features/shared/components/detect-link-name'

export function useNavDetection(sectionName: LinksProps, triggerId: string) {
  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: triggerId,
      start: 'top 50%',
      end: 'bottom 50%',
      onEnter: () => DetectLinkNameByHref(sectionName),
      onEnterBack: () => DetectLinkNameByHref(sectionName)
    })

    // Cleanup automatique
    return () => trigger.kill()
  }, [sectionName, triggerId])
}