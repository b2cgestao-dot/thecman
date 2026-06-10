import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faCommentDots,
} from '@fortawesome/free-solid-svg-icons'
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import {
  company,
  navLinks,
  socialLinks,
  whatsappMessages,
} from '@/data/siteData'
import { buildWhatsappLink, scrollToAnchor } from '@/lib/utils'

const socials = [
  { key: 'instagram', icon: faInstagram, label: 'Instagram', url: socialLinks.instagram },
  { key: 'facebook',  icon: faFacebook,  label: 'Facebook',  url: socialLinks.facebook  },
  { key: 'linkedin',  icon: faLinkedin,  label: 'LinkedIn',  url: socialLinks.linkedin  },
] as const

export function Footer() {
  const whatsappLink = buildWhatsappLink(
    company.whatsapp,
    whatsappMessages.default,
  )
  const activeSocials = socials.filter((s) => s.url)

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    scrollToAnchor(href.replace('#', ''))
  }

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="h-1 w-full bg-gradient-to-r from-brand-blue via-weg-light to-brand-blue-light" aria-hidden="true" />

      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Marca + descrição */}
          <div className="lg:col-span-5">
            <Logo className="h-8" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-300">
              {company.tagline}
            </p>

            <div className="mt-5 inline-block rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-wider text-white">
                Horário de atendimento
              </p>
              <p className="mt-1 text-sm text-navy-300">
                Seg – Sex: 07h30 às 17h30
              </p>
            </div>

            {activeSocials.length > 0 && (
              <div className="mt-6 flex gap-3">
                {activeSocials.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-navy-200 transition-colors hover:border-brand-blue/50 hover:bg-brand-blue/20 hover:text-white"
                  >
                    <FontAwesomeIcon icon={s.icon} className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links rápidos */}
          <nav className="lg:col-span-3" aria-label="Links rápidos">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.09em] text-white">
              Links rápidos
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="group flex items-center gap-2 text-sm font-medium text-navy-300 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-brand-blue opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contatos */}
          <div className="lg:col-span-4">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.09em] text-white">
              Contato
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="mt-0.5 h-5 w-5 shrink-0 text-weg-light" aria-hidden="true" />
                <span className="text-navy-300">{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="h-5 w-5 shrink-0 text-weg-light" aria-hidden="true" />
                <a
                  href={`tel:${company.phone.replace(/\D/g, '')}`}
                  className="text-navy-300 transition-colors hover:text-white"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 shrink-0 text-weg-light" aria-hidden="true" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-navy-300 transition-colors hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCommentDots} className="h-5 w-5 shrink-0 text-[#25D366]" aria-hidden="true" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy-300 transition-colors hover:text-white"
                >
                  WhatsApp — falar agora
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-navy-400 sm:flex-row">
          <p>© 2026 {company.name}. Todos os direitos reservados.</p>
          <p className="text-navy-500">
            Assistência técnica e revenda autorizada WEG — {company.city}/{company.state}
          </p>
        </div>
      </Container>
    </footer>
  )
}
