import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faStore } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Reveal } from '@/components/ui/Reveal'
import { store, company, whatsappMessages } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'

const stats = [
  { value: '+38',  label: 'anos no mercado' },
  { value: '+874', label: 'clientes ativos'  },
  { value: '100%', label: 'peças originais'  },
]

export function StoreSection() {
  const link = buildWhatsappLink(company.whatsapp, whatsappMessages.parts)

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Texto + destaques */}
          <Reveal>
            <Badge variant="weg" icon={<FontAwesomeIcon icon={faStore} className="h-4 w-4" aria-hidden="true" />}>
              Revenda autorizada WEG
            </Badge>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              Peças e soluções WEG com{' '}
              <span className="text-brand-blue">atendimento especializado</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-600">
              {store.description}
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {store.highlights.map((h) => (
                <li
                  key={h.text}
                  className="flex items-center gap-3 rounded-xl border border-navy-100 bg-surface-muted px-4 py-3 transition-colors hover:border-brand-blue/30 hover:bg-brand-blue/5"
                >
                  <FontAwesomeIcon
                    icon={h.icon}
                    className="h-5 w-5 shrink-0 text-brand-blue"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-snug text-navy-700">
                    {h.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-3 divide-x divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-surface-muted">
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-5 text-center">
                  <p className="text-2xl font-extrabold text-navy-900">{s.value}</p>
                  <p className="mt-0.5 text-xs text-navy-500">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
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
          </Reveal>

          {/* Imagem real */}
          <Reveal delay={0.12}>
            <div className="relative overflow-hidden rounded-2xl border border-navy-100 shadow-card">
              <img
                src={store.image}
                alt={store.imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover lg:aspect-[4/5]"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-strong">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue text-white">
                  <FontAwesomeIcon icon={faStore} className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs leading-none text-navy-500">Thecman</p>
                  <p className="text-sm font-bold leading-tight text-navy-900">
                    Revenda autorizada WEG
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
