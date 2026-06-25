import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { businessPillars, company } from '@/data/siteData'
import { buildWhatsappLink } from '@/lib/utils'
import { trackContact } from '@/lib/pixel'

const cardVariants = {
  hover: {
    scale: 1.03,
    transition: { type: 'spring', stiffness: 280, damping: 22 },
  },
}

const iconVariants = {
  hover: {
    rotate: -12,
    transition: { type: 'spring', stiffness: 320, damping: 14 },
  },
}

export function BusinessPillarsSection() {
  return (
    <section id="solucoes" className="section-padding bg-white">
      <Container>
        <SectionHeading
          eyebrow="O que fazemos"
          title="Duas soluções para manter sua operação em movimento"
          highlight="movimento"
          description="Da manutenção técnica ao fornecimento de peças WEG, a Thecman concentra em um só lugar o que sua empresa precisa para não parar."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {businessPillars.map((pillar, i) => {
            const link = buildWhatsappLink(company.whatsapp, pillar.whatsappMessage)
            const fromLeft = i === 0

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover="hover"
                variants={cardVariants}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card"
              >
                {/* Header escuro com ícone e número */}
                <div className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 px-8 py-8">
                  <span
                    className="pointer-events-none absolute right-6 top-4 select-none text-7xl font-black leading-none text-white/[0.06]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <motion.span
                    variants={iconVariants}
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-blue text-white shadow-lg"
                  >
                    <FontAwesomeIcon
                      icon={pillar.icon}
                      className="h-7 w-7"
                      aria-hidden="true"
                    />
                  </motion.span>

                  <h3 className="mt-5 text-center text-[1.0625rem] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-left">
                    {pillar.title}
                  </h3>
                </div>

                {/* Corpo */}
                <div className="flex flex-1 flex-col px-8 py-7">
                  <p className="flex-1 text-center text-[13.5px] leading-[1.55] text-navy-600 sm:text-left">
                    {pillar.description}
                  </p>
                  <div className="mt-7">
                    <Button
                      as="a"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={trackContact}
                      variant="primary"
                      size="md"
                      className="w-full justify-center"
                    >
                      {pillar.ctaLabel}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
