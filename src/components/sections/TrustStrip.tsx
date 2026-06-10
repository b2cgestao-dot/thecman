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
      <style>{`
        @keyframes trust-light-sweep {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes trust-light-sweep { to { transform: translate(-50%, -50%) rotate(0deg); } }
        }
      `}</style>

      <div className="relative z-20 -mt-7 sm:-mt-9">
        <Container>
          {/*
            Outer div: carries the shadow — NOT overflow-hidden so the
            shadow is not clipped and hugs the badge shape at the corners.
            Negative spread (-8px) keeps it tight, no horizontal bleed line.
          */}
          <div className="mx-auto max-w-3xl rounded-2xl shadow-[0_12px_28px_-8px_rgba(13,27,46,0.26)]">

            {/*
              Inner div: overflow-hidden clips the spinning gradient so the
              animated border is contained within the rounded corners.
            */}
            <div className="relative overflow-hidden rounded-2xl p-[2px]">

              {/* Spinning conic gradient — the "light passing around" effect */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  width: '900px',
                  height: '900px',
                  transform: 'translate(-50%, -50%)',
                  background:
                    'conic-gradient(from 0deg at 50% 50%, ' +
                    'transparent 0%, ' +
                    'transparent 50%, ' +
                    'rgba(59,130,246,0.25) 60%, ' +
                    'rgba(147,197,253,0.85) 68%, ' +
                    'rgba(255,255,255,0.95) 72%, ' +
                    'rgba(147,197,253,0.85) 76%, ' +
                    'rgba(59,130,246,0.25) 84%, ' +
                    'transparent 92%, ' +
                    'transparent 100%)',
                  animation: 'trust-light-sweep 5s linear infinite',
                }}
              />

              {/* Badge — sits on top of the gradient, revealing the 2px border */}
              <div className="relative grid grid-cols-3 overflow-hidden rounded-[14px] bg-white">
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
