import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { team, company, whatsappMessages } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'

const cardAccents = [
  'from-brand-blue to-brand-blue-dark',
  'from-weg to-weg-dark',
  'from-brand-blue-light to-brand-blue',
  'from-navy-700 to-navy-900',
]

export function TeamSection() {
  const link = buildWhatsappLink(company.whatsapp, whatsappMessages.specialist)

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Nossa equipe"
          title={team.title}
          highlight="Especialistas"
          description={team.description}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.cards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div
                  className={`h-1 w-full bg-gradient-to-r ${cardAccents[i] ?? cardAccents[0]}`}
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-6 text-center">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors group-hover:bg-brand-blue">
                    <FontAwesomeIcon icon={card.icon} className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-bold leading-[1.25] tracking-[-0.02em] text-navy-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-navy-100 bg-surface-muted px-8 py-8 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <p className="text-base font-bold leading-[1.25] tracking-[-0.02em] text-navy-900">
                Precisa orientar sua equipe de manutenção?
              </p>
              <p className="mt-1 text-sm text-navy-600">
                Fale diretamente com um especialista Thecman e receba suporte técnico personalizado.
              </p>
            </div>
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
              className="shrink-0"
            >
              <FontAwesomeIcon icon={faCommentDots} className="h-4 w-4" aria-hidden="true" />
              Falar com a equipe
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
