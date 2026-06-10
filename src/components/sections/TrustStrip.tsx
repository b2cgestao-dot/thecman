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
    <>
      {/*
        @property registers --trust-angle as an animatable CSS custom property.
        Without this, the browser cannot interpolate angle values in keyframes.
        The conic-gradient(from var(--trust-angle)) then creates a true
        animated-gradient border without any overflow / spinner artifacts.
      */}
      <style>{`
        @property --trust-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes trust-border-spin {
          to { --trust-angle: 360deg; }
        }

        .trust-badge {
          /* 1.5 px transparent border — the gradient fills only this strip */
          border: 1.5px solid transparent;

          /*
            Two-layer background trick:
            ① white fills the PADDING-BOX (inside the border) → hides gradient there
            ② conic-gradient fills the BORDER-BOX → visible only in the 1.5 px border gap
            Result: an animated colored border that follows the rounded corners perfectly.
          */
          background:
            linear-gradient(#fff, #fff) padding-box,
            conic-gradient(
              from var(--trust-angle),
              #e2e8f0  0%,
              #e2e8f0  35%,
              rgba(59,130,246,0.35)  44%,
              rgba(147,197,253,0.9)  50%,
              #ffffff               53%,
              rgba(147,197,253,0.9)  56%,
              rgba(59,130,246,0.35)  65%,
              #e2e8f0  74%,
              #e2e8f0 100%
            ) border-box;

          animation: trust-border-spin 5s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .trust-badge {
            animation: none;
            background: linear-gradient(#fff, #fff) padding-box,
                        linear-gradient(135deg, rgba(147,197,253,0.5), #e2e8f0, rgba(147,197,253,0.5)) border-box;
          }
        }
      `}</style>

      <div className="relative z-20 -mt-7 sm:-mt-9">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/*
              overflow-hidden clips the inner items to the rounded rect.
              box-shadow is NOT clipped by the element's own overflow-hidden —
              it renders in the shadow layer outside the box, creating a clean
              bottom shadow that hugs the badge shape (negative spread = tight corners).
            */}
            <div
              className="trust-badge overflow-hidden rounded-2xl"
              style={{ boxShadow: '0 10px 24px -8px rgba(13,27,46,0.22)' }}
            >
              <div className="grid grid-cols-3">
                {items.map((item, i) => (
                  <div
                    key={item.label}
                    className={[
                      'flex flex-col items-center justify-center gap-2 bg-white px-4 py-4',
                      'sm:flex-row sm:gap-3 sm:px-8 sm:py-5',
                      i < items.length - 1 ? 'border-r border-navy-100' : '',
                    ].join(' ')}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent sm:h-9 sm:w-9">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="text-center text-xs font-semibold leading-tight text-navy-900 sm:text-left sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
