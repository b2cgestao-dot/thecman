import { Fragment, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  /** Palavra(s) do título destacada(s) em azul (ênfase do design system). */
  highlight?: string | string[]
  description?: string
  /** Alinhamento do bloco. */
  align?: 'center' | 'left'
  /** Tema (afeta cor do texto). */
  dark?: boolean
  className?: string
}

/** Quebra o título destacando em azul as palavras informadas em `highlight`. */
function renderTitle(
  title: string,
  highlight: SectionHeadingProps['highlight'],
  dark: boolean,
): ReactNode {
  const phrases = (Array.isArray(highlight) ? highlight : [highlight]).filter(
    (p): p is string => Boolean(p),
  )
  if (phrases.length === 0) return title

  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const re = new RegExp(`(${escaped.join('|')})`, 'gi')
  const parts = title.split(re)
  const cls = dark ? 'text-brand-blue-light' : 'text-brand-blue'

  return parts.map((part, i) =>
    phrases.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className={cls}>
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

/** Cabeçalho padronizado de seção com badge pill, título e descrição. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'mb-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]',
            dark
              ? 'bg-brand-blue/15 text-brand-blue-light'
              : 'bg-blue-50 text-brand-blue',
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'text-balance text-3xl font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-4xl',
          dark ? 'text-white' : 'text-navy-900',
        )}
      >
        {renderTitle(title, highlight, dark)}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base font-normal leading-[1.65] sm:text-[1.0625rem]',
            dark ? 'text-navy-100' : 'text-navy-600',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
