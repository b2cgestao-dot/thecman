import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { differentials } from '@/data/siteData'

export function WhyChooseSection() {
  return (
    <section className="section-padding bg-surface-muted">
      <Container>
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher a Thecman?"
          highlight="Thecman"
          description="Manutenção e revenda WEG com a confiança de quem entende a operação industrial."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="group relative flex h-full gap-4 overflow-hidden rounded-xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                <span
                  className="pointer-events-none absolute right-4 top-3 select-none text-5xl font-black leading-none text-navy-900/[0.04]"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <FontAwesomeIcon icon={item.icon} className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
