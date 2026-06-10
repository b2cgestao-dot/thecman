import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faCheck } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { company, whatsappMessages } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'

const desktopList = [
  'Motores elétricos CA, CC e especiais',
  'Motoredutores e redutores industriais',
  'Alternadores e sistemas eletromecânicos',
  'Manutenção preventiva, corretiva e preditiva',
  'Quadros e suporte eletromecânico',
]

const mobileItems = [
  'Motores elétricos',
  'Motoredutores',
  'Alternadores',
  'Preventiva',
  'Corretiva',
  'Preditiva',
]

export function ServicesSection() {
  const link = buildWhatsappLink(company.whatsapp, whatsappMessages.technicalService)

  return (
    <section
      id="servicos"
      className="relative flex min-h-[820px] flex-col overflow-hidden text-white sm:min-h-[760px] lg:min-h-[840px]"
    >
      {/* ── Background: mobile ── */}
      <img
        src="/Servi%C3%A7os-Mobile.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover sm:hidden"
        style={{ objectPosition: 'center top' }}
        loading="eager"
        decoding="async"
      />

      {/* ── Background: desktop ── */}
      <img
        src="/Servi%C3%A7os-Desktop.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full object-cover sm:block"
        style={{ objectPosition: 'center right' }}
        loading="eager"
        decoding="async"
      />

      {/* ── Overlay mobile: escuro no topo, desvanece para baixo ── */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,27,51,0.96) 0%, rgba(11,27,51,0.90) 36%, rgba(11,27,51,0.55) 62%, rgba(11,27,51,0.12) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Overlay desktop: escuro à esquerda, desvanece para a direita ── */}
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            'linear-gradient(to right, rgba(11,27,51,0.97) 0%, rgba(11,27,51,0.93) 26%, rgba(11,27,51,0.72) 46%, rgba(11,27,51,0.22) 66%, transparent 84%)',
        }}
        aria-hidden="true"
      />

      {/* ── Conteúdo ── */}
      <div className="relative flex flex-1 flex-col justify-start pt-20 pb-16 sm:justify-center sm:py-0">
        <Container>
          <Reveal>
            <div className="w-full sm:max-w-[540px] lg:max-w-[520px]">

              {/* Tag */}
              <span className="inline-block rounded-full border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue-light">
                Serviços técnicos
              </span>

              {/* Título desktop */}
              <h2 className="mt-5 hidden text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:block lg:text-[2.75rem] lg:leading-[1.08]">
                Manutenção eletromecânica para manter sua{' '}
                <span className="text-brand-blue-light">indústria em operação</span>
              </h2>

              {/* Título mobile */}
              <h2 className="mt-5 text-[1.75rem] font-extrabold leading-tight tracking-tight text-white sm:hidden">
                Manutenção eletromecânica para sua{' '}
                <span className="text-brand-blue-light">operação não parar</span>
              </h2>

              {/* Parágrafo desktop */}
              <p className="mt-5 hidden text-base leading-relaxed text-white/80 sm:block lg:text-[1.0625rem]">
                Quando um equipamento para, sua operação perde tempo, produtividade e
                segurança. A Thecman atua no diagnóstico, manutenção e suporte técnico de
                equipamentos industriais, oferecendo soluções para corrigir falhas, reduzir
                paradas e aumentar a confiabilidade da sua operação.
              </p>

              {/* Parágrafo mobile */}
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80 sm:hidden">
                Diagnóstico, manutenção e suporte técnico para reduzir falhas, evitar paradas
                e aumentar a confiabilidade dos equipamentos industriais.
              </p>

              {/* Lista desktop */}
              <ul
                className="mt-7 hidden space-y-2.5 sm:block"
                aria-label="Serviços oferecidos"
              >
                {desktopList.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-brand-blue/25 text-brand-blue-light"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faCheck} className="h-2.5 w-2.5" />
                    </span>
                    <span className="text-[0.9375rem] font-medium text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Lista compacta mobile */}
              <p className="mt-5 flex flex-wrap gap-x-0 text-sm font-medium leading-relaxed text-white/75 sm:hidden" aria-label="Serviços oferecidos">
                {mobileItems.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < mobileItems.length - 1 && (
                      <span className="mx-2 text-brand-blue-light/50" aria-hidden="true">•</span>
                    )}
                  </span>
                ))}
              </p>

              {/* CTA */}
              <div className="mt-8 sm:mt-9">
                <Button
                  as="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                >
                  <FontAwesomeIcon icon={faCommentDots} className="h-5 w-5" aria-hidden="true" />
                  Solicitar atendimento técnico
                </Button>
              </div>

            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  )
}
