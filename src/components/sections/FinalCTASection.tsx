import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCommentDots,
  faShieldHalved,
  faClock,
  faAward,
} from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { finalCta, company } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'
import { trackContact } from '@/lib/pixel'

const trustBadges = [
  { icon: faShieldHalved, label: 'Autorizada WEG' },
  { icon: faClock,        label: '+38 anos de experiência' },
  { icon: faAward,        label: 'Única em Salvador' },
]

export function FinalCTASection() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-weg-dark py-20 text-white sm:py-24"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-40" aria-hidden="true" />
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-weg/25 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            {/* Badges de confiança */}
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
                >
                  <FontAwesomeIcon icon={badge.icon} className="h-4 w-4 text-weg-light" aria-hidden="true" />
                  {badge.label}
                </span>
              ))}
            </div>

            <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-[2.5rem] lg:text-[2.75rem]">
              Sua indústria precisa de manutenção, peças ou{' '}
              <span className="text-brand-blue-light">suporte WEG</span>?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
              {finalCta.description}
            </p>

            <div className="mt-9">
              <Button
                as="a"
                href={buildWhatsappLink(company.whatsapp, finalCta.buttons[0]?.message ?? '')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackContact}
                variant="primary"
                size="lg"
                className="mx-auto w-full max-w-xs justify-center text-base"
              >
                <FontAwesomeIcon icon={faCommentDots} className="h-5 w-5" aria-hidden="true" />
                {finalCta.buttons[0]?.label}
              </Button>
            </div>

            <p className="mt-8 text-sm text-navy-200">
              Atendimento técnico especializado em {company.city}/{company.state} e região.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
