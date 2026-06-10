import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'whatsapp' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-blue text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:bg-brand-blue-dark hover:shadow-[0_6px_16px_rgba(37,99,235,0.32)] focus-visible:ring-brand-blue',
  secondary:
    'bg-transparent text-brand-blue border border-brand-blue hover:bg-blue-50 focus-visible:ring-brand-blue',
  whatsapp:
    'bg-[#25D366] text-white shadow-sm hover:bg-[#1da851] hover:shadow-md focus-visible:ring-[#25D366]',
  outline:
    'border-2 border-white/30 bg-white/0 text-white hover:bg-white/10 focus-visible:ring-white',
  ghost:
    'bg-navy-50 text-navy-800 hover:bg-navy-100 focus-visible:ring-navy-300',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-base',
  lg: 'px-7 py-3.5 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...rest
  } = props

  const classes = cn(base, variants[variant], sizes[size], className)

  if (props.as === 'a') {
    const { as: _as, ...anchorRest } = rest as ButtonAsAnchor
    void _as
    return (
      <a className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const { as: _as, ...buttonRest } = rest as ButtonAsButton
  void _as
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
