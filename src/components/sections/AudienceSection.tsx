import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { audience } from '@/data/siteData'

const audienceDescriptions: Record<string, string> = {
  'Indústrias':                                                    'Suporte eletromecânico para equipamentos críticos de produção contínua.',
  'Empresas com operação contínua':                                'Atendimento ágil para minimizar paradas e reduzir prejuízos operacionais.',
  'Compradores técnicos':                                          'Consultoria especializada na especificação de peças e equipamentos WEG.',
  'Setores de manutenção':                                         'Diagnóstico técnico preciso e execução de serviços com padrão industrial.',
  'Oficinas e empresas parceiras':                                 'Parcerias técnicas com suporte especializado e fornecimento de peças WEG.',
  'Geradores, motores, redutores e equipamentos eletromecânicos':  'Atendimento focado por tipo de equipamento, com profissionais especializados.',
}

export function AudienceSection() {
  return (
    <section className="section-padding bg-surface-muted">
      <Container>
        <SectionHeading
          eyebrow="Para quem atendemos"
          title="Atendimento para empresas que precisam de confiança técnica"
          highlight="confiança técnica"
          description="A Thecman atende empresas e decisores técnicos, não público genérico. Conheça os perfis que contam com a nossa estrutura."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="group flex h-full flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-brand-blue/20 hover:shadow-card-hover">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white transition-colors group-hover:bg-brand-blue">
                  <FontAwesomeIcon icon={item.icon} className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold leading-snug text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
                  {audienceDescriptions[item.title] ?? 'Atendimento técnico especializado pela equipe Thecman.'}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
