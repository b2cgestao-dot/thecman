import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { store, company, whatsappMessages } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'


export function StoreSection() {
  const link = buildWhatsappLink(company.whatsapp, whatsappMessages.parts)

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto + destaques */}
          <Reveal>
            <div className="text-center sm:text-left">
              <span className="mb-1 inline-block font-cascadia text-[11px] font-bold uppercase tracking-[0.14em] text-brand-blue">
                — Revenda autorizada WEG
              </span>
              <h2 className="mt-4 text-balance font-cascadia text-[1.875rem] font-medium leading-[1.05] tracking-[-0.04em] text-navy-900 sm:text-[2.5rem]">
                Peças e soluções WEG com{' '}
                <span className="text-brand-blue">atendimento especializado</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-600">
                {store.description}
              </p>

              <ul className="mt-7 grid grid-cols-2 gap-3">
                {store.highlights.map((h) => (
                  <li
                    key={h.text}
                    className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white px-3.5 py-3.5 shadow-soft transition-all hover:border-brand-blue/25 hover:shadow-card"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue">
                      <FontAwesomeIcon
                        icon={h.icon}
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-[13px] font-semibold leading-snug text-navy-800">
                      {h.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex justify-center sm:justify-start">
                <Button
                  as="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="lg"
                >
                  <FontAwesomeIcon icon={faCommentDots} className="h-5 w-5" aria-hidden="true" />
                  {store.ctaLabel}
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Imagem real */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-navy-100 shadow-card">
              <img
                src="/Pe%C3%A7as-Weg.png"
                alt={store.imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
