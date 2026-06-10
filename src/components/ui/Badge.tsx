import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  className?: string
  /** Variante de cor de fundo. */
  variant?: 'light' | 'dark' | 'accent' | 'weg'
  icon?: ReactNode
}

const variants = {
  light: 'bg-navy-50 text-navy-700 border border-navy-100',
  dark: 'bg-white/10 text-white border border-white/15',
  accent: 'bg-accent/10 text-accent border border-accent/20',
  weg: 'bg-weg/10 text-weg border border-weg/20',
}

/** Etiqueta compacta para destaques e marcadores de seção. */
export function Badge({ children, className, variant = 'light', icon }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold sm:text-sm',
        variants[variant],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}
