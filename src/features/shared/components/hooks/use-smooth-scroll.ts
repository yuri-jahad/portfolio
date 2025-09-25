import useStore from "@/core/store"

export const useSmoothScroll = (gsap: any) => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useStore()

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const onSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string | HTMLElement // ✅ Accepter les deux types
  ): void => {
    e.preventDefault()

    // Gérer les deux types de target
    const targetElement = typeof target === 'string' 
      ? document.querySelector(target)
      : target

    if (targetElement) {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: targetElement, offsetY: 80 },
        ease: 'power2.inOut'
      })
    }

    closeMobileMenu()
  }

  return { onSmoothScroll, closeMobileMenu }
}