import { m } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { hero, company, whatsappMessages } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'
import { trackContact } from '@/lib/pixel'

export function HeroSection() {
  const specialistLink = buildWhatsappLink(
    company.whatsapp,
    whatsappMessages.specialist,
  )

  return (
    <section
      id="inicio"
      className="relative overflow-hidden text-white"
    >
      {/* Fundo mobile — degradê escuro no topo, foto do técnico embaixo */}
      <img
        src="/Mobile-Background.webp"
        alt=""
        aria-hidden="true"
        width={828}
        height={1792}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center sm:hidden"
      />

      {/* Fundo desktop */}
      <img
        src="/Hero-Background.webp"
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 hidden h-full w-full object-cover object-center sm:block"
      />

      {/* Conteúdo */}
      <div className="relative z-10
        flex min-h-screen flex-col pt-16
        sm:min-h-[600px] sm:flex-row sm:items-center sm:pt-16
        lg:min-h-[740px] lg:pt-20">
        <Container className="w-full">

          {/* Mobile: centrado, topo | Desktop: esquerda, meio */}
          <div className="[text-shadow:0_2px_8px_rgba(0,0,0,0.55)]
            py-8 text-center
            sm:py-10 sm:text-left sm:max-w-[62%]
            lg:py-14">

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-balance text-4xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-[3.25rem]"
            >
              Assistência Técnica e<br />
              Revenda Autorizada<br />
              <span className="text-brand-blue-light">WEG</span> em Salvador
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-[1.0625rem] font-light leading-[1.62] text-white/88 sm:max-w-xl"
            >
              {hero.subheadline}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-8 flex justify-center sm:justify-start"
            >
              <m.a
                href={specialistLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackContact}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                className="relative inline-flex cursor-pointer items-center gap-2.5 overflow-hidden rounded-lg bg-brand-blue px-7 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-white shadow-[0_4px_16px_rgba(37,99,235,0.4)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.55)]"
              >
                <m.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ['-180%', '220%'] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: 'easeInOut',
                    repeatDelay: 1.8,
                  }}
                />
                <FontAwesomeIcon
                  icon={faCommentDots}
                  className="relative h-5 w-5 shrink-0"
                  aria-hidden="true"
                />
                <span className="relative">Falar com um especialista</span>
              </m.a>
            </m.div>

          </div>
        </Container>
      </div>
    </section>
  )
}
