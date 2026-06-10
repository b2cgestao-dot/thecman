import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faStore, faUserGear } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'

const items = [
  { icon: faAward,    label: '38 anos de Experiência'       },
  { icon: faStore,    label: 'Loja própria'                 },
  { icon: faUserGear, label: 'Equipe técnica especializada' },
]

export function TrustStrip() {
  return (
    <div className="relative z-20 -mt-7 sm:-mt-9">
      <Container>
        <div className="mx-auto grid max-w-3xl grid-cols-3 overflow-hidden rounded-2xl bg-white shadow-[0_8px_48px_rgba(13,27,46,0.18)]">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={[
                'flex flex-col items-center justify-center gap-2 px-4 py-4',
                'sm:flex-row sm:gap-3 sm:px-8 sm:py-5',
                i < items.length - 1 ? 'border-r border-navy-100' : '',
              ].join(' ')}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent sm:h-9 sm:w-9">
                <FontAwesomeIcon icon={item.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <span className="text-center text-xs font-semibold leading-tight text-navy-900 sm:text-left sm:text-sm">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
