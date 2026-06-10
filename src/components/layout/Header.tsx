import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { company } from '@/data/siteData'
import { scrollToAnchor } from '@/lib/utils'

const navItems = [
  { label: 'Quem Somos', href: '#revenda-weg' },
  { label: 'Serviços',   href: '#servicos'    },
  { label: 'Equipe',     href: '#equipe'       },
  { label: 'Contato',    href: '#contato'      },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Sólido quando scroll passa 85% da altura da hero
  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById('inicio')
      const threshold = hero ? hero.offsetHeight * 0.85 : 600
      setScrolled(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    scrollToAnchor(href.replace('#', ''))
  }

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? '#0D1B2E' : 'rgba(0,0,0,0)',
        boxShadow: scrolled
          ? '0 12px 32px rgba(13,27,46,0.18)'
          : '0 0 0 rgba(0,0,0,0)',
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">

          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="rounded-md"
            aria-label={`${company.name} - início`}
          >
            <Logo />
          </a>

          {/* Nav desktop */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-1.5 rounded-md px-3 py-2 text-[14px] font-semibold tracking-[-0.01em] text-white transition-colors hover:bg-white/10"
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="h-3 w-3 shrink-0 text-brand-blue"
                  aria-hidden="true"
                />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hambúrguer mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <FontAwesomeIcon
              icon={mobileOpen ? faXmark : faBars}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </Container>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-brand-navy lg:hidden"
          >
            <Container className="py-4">
              <nav className="flex flex-col gap-1" aria-label="Navegação principal mobile">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-2 rounded-md px-3 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="h-3.5 w-3.5 shrink-0 text-brand-blue"
                      aria-hidden="true"
                    />
                    {item.label}
                  </a>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
