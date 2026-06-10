import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  /** Aplica realce no hover (elevação + borda). */
  hover?: boolean
  /** Variante de tema para cards em fundos escuros. */
  dark?: boolean
}

/** Card base com borda sutil, cantos arredondados e sombra técnica. */
export function Card({ children, className, hover = true, dark = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border p-6 transition-all duration-300',
        dark
          ? 'border-white/10 bg-white/[0.04] backdrop-blur-sm'
          : 'border-navy-100 bg-white shadow-soft',
        hover &&
          (dark
            ? 'hover:border-white/20 hover:bg-white/[0.07]'
            : 'hover:-translate-y-1 hover:border-navy-200 hover:shadow-card'),
        className,
      )}
    >
      {children}
    </div>
  )
}
