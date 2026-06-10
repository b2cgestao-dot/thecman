import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { services, company, whatsappMessages } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'

export function ServicesSection() {
  const link = buildWhatsappLink(company.whatsapp, whatsappMessages.technicalService)

  return (
    <section
      id="servicos"
      className="section-padding relative overflow-hidden bg-navy-900 text-white"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-weg/15 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Serviços técnicos"
          title="Serviços técnicos para a sua indústria"
          highlight="sua indústria"
          description="Atuação eletromecânica para corrigir falhas, reduzir paradas e manter seus equipamentos em operação com confiabilidade."
          dark
        />

        {/* Editorial numbered rows — 2 columns on desktop */}
        <div className="mt-12 grid lg:grid-cols-2">

          {/* Left column — services 1–3 */}
          <div className="divide-y divide-white/[0.08] lg:border-r lg:border-white/[0.08] lg:pr-10">
            {services.slice(0, 3).map((service, i) => (
              <Reveal key={service.title} delay={i * 0.07}>
                <div className="group flex items-center gap-5 border-l-2 border-l-transparent py-7 pl-4 transition-all duration-200 hover:border-l-weg-light/70 hover:bg-white/[0.03] sm:gap-7 sm:pl-5">
                  <span
                    className="w-9 shrink-0 font-mono text-3xl font-black leading-none text-white/[0.07] transition-colors duration-200 group-hover:text-weg-light/25 sm:w-12 sm:text-4xl lg:text-5xl"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-weg/20 text-weg-light transition-colors duration-200 group-hover:bg-weg/30">
                    <FontAwesomeIcon icon={service.icon} className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right column — services 4–6 */}
          <div className="divide-y divide-white/[0.08] border-t border-white/[0.08] lg:border-t-0 lg:pl-10">
            {services.slice(3).map((service, i) => (
              <Reveal key={service.title} delay={(i + 3) * 0.07}>
                <div className="group flex items-center gap-5 border-l-2 border-l-transparent py-7 pl-4 transition-all duration-200 hover:border-l-weg-light/70 hover:bg-white/[0.03] sm:gap-7 sm:pl-5">
                  <span
                    className="w-9 shrink-0 font-mono text-3xl font-black leading-none text-white/[0.07] transition-colors duration-200 group-hover:text-weg-light/25 sm:w-12 sm:text-4xl lg:text-5xl"
                    aria-hidden="true"
                  >
                    {String(i + 4).padStart(2, '0')}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-weg/20 text-weg-light transition-colors duration-200 group-hover:bg-weg/30">
                    <FontAwesomeIcon icon={service.icon} className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-bold leading-snug text-white sm:text-lg">
                      {service.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.5}>
          <div className="mt-12 flex justify-center">
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              <FontAwesomeIcon icon={faCommentDots} className="h-5 w-5" aria-hidden="true" />
              Solicitar serviço técnico
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
