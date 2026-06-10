import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'
import { projects, company, whatsappMessages } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'

const categoryColors: Record<string, string> = {
  'Motor elétrico industrial': 'bg-brand-blue/10 text-brand-blue',
  'Alternador de gerador':     'bg-weg/10 text-weg',
  'Motorredutor':               'bg-navy-900/10 text-navy-900',
  'Fornecimento de peça WEG':  'bg-success/10 text-success',
}

export function ProjectsSection() {
  const link = buildWhatsappLink(company.whatsapp, whatsappMessages.specialist)

  return (
    <section id="projetos" className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="Projetos e atendimentos"
          title="Projetos e atendimentos técnicos realizados"
          highlight="técnicos"
          description="Exemplos do tipo de atuação eletromecânica que a Thecman realiza para manter equipamentos críticos em operação."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 4) * 0.07}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`Atendimento técnico: ${project.category}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <ImagePlaceholder
                      icon={project.icon}
                      accent={project.accent}
                      label={`Atendimento técnico: ${project.category}`}
                    />
                  )}
                  <div className="absolute inset-0 bg-navy-900/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span
                    className={`inline-block w-fit rounded-full px-2.5 py-1 text-xs font-bold ${categoryColors[project.category] ?? 'bg-navy-100 text-navy-700'}`}
                  >
                    {project.category}
                  </span>
                  <h3 className="mt-2.5 text-sm font-bold text-navy-900">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-navy-500">
                    {project.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="max-w-xl text-sm text-navy-500">
              Exemplos institucionais de escopo de atuação. Para detalhes sobre uma
              necessidade específica, fale com nossa equipe técnica.
            </p>
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
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
