import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatCard } from '@/components/ui/StatCard'
import { Reveal } from '@/components/ui/Reveal'
import { metrics } from '@/data/siteData'

export function MetricsSection() {
  const featured = metrics.slice(0, 3)
  const secondary = metrics.slice(3)

  return (
    <section
      id="reconhecimentos"
      className="section-padding relative overflow-hidden bg-navy-900 text-white"
    >
      <div className="absolute inset-0 bg-tech-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-weg/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Experiência e estrutura"
          title="Experiência, estrutura e confiança para atender sua operação"
          highlight="confiança"
          description="Números que refletem a trajetória da Thecman atendendo empresas e operações técnicas."
          dark
        />

        {/* Métricas principais — destaque maior */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {featured.map((metric, i) => (
            <StatCard
              key={metric.label}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              index={i}
              featured
            />
          ))}
        </div>

        {/* Divisor */}
        <Reveal delay={0.2}>
          <div className="my-5 border-t border-white/10" />
        </Reveal>

        {/* Métricas secundárias */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {secondary.map((metric, i) => (
            <StatCard
              key={metric.label}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              index={featured.length + i}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
