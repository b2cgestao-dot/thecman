import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faClock, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { contents, company, whatsappMessages } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'

const readingTimes = ['4 min', '5 min', '6 min', '4 min', '5 min']

const tagColors: Record<string, string> = {
  Manutenção:     'bg-brand-blue/10 text-brand-blue',
  Confiabilidade: 'bg-weg/10 text-weg',
  Motores:        'bg-navy-900/10 text-navy-800',
  Revenda:        'bg-success/10 text-success',
  Alternadores:   'bg-accent/10 text-accent',
}

const tagBarColors: Record<string, string> = {
  Manutenção:     'bg-brand-blue',
  Confiabilidade: 'bg-weg',
  Motores:        'bg-navy-700',
  Revenda:        'bg-success',
  Alternadores:   'bg-accent',
}

export function ContentSection() {
  const link = buildWhatsappLink(company.whatsapp, whatsappMessages.specialist)

  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Conteúdos técnicos"
          title="Conteúdos técnicos para sua operação"
          highlight="técnicos"
          description="Materiais para apoiar decisões de manutenção, confiabilidade e compra de peças WEG."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {contents.slice(0, 4).map((content, i) => (
            <Reveal key={content.title} delay={(i % 4) * 0.07}>
              <a
                href={content.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div
                  className={`h-1 w-full ${tagBarColors[content.tag] ?? 'bg-brand-blue'}`}
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ${tagColors[content.tag] ?? 'bg-navy-100 text-navy-700'}`}
                    >
                      {content.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-navy-400">
                      <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5" aria-hidden="true" />
                      {readingTimes[i] ?? '5 min'}
                    </span>
                  </div>
                  <h3 className="mt-4 flex-1 text-sm font-bold leading-snug text-navy-900">
                    {content.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-500">
                    {content.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors group-hover:text-accent-dark">
                    Ler conteúdo
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-navy-100 bg-surface-muted px-8 py-7 sm:flex-row">
            <div>
              <p className="text-base font-bold text-navy-900">
                Tem dúvidas técnicas sobre sua operação?
              </p>
              <p className="mt-1 text-sm text-navy-600">
                Nossa equipe pode orientar diretamente pelo WhatsApp.
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
              Falar com especialista
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
