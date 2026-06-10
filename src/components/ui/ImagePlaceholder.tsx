import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { cn } from '@/lib/utils'

interface ImagePlaceholderProps {
  icon: IconDefinition
  label: string
  accent?: 'navy' | 'weg' | 'accent'
  className?: string
}

const accents: Record<NonNullable<ImagePlaceholderProps['accent']>, string> = {
  navy: 'from-navy-800 to-navy-950',
  weg: 'from-weg-dark to-navy-900',
  accent: 'from-accent-dark to-navy-900',
}

export function ImagePlaceholder({
  icon,
  label,
  accent = 'navy',
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br',
        accents[accent],
        className,
      )}
    >
      <div className="absolute inset-0 bg-tech-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/5 blur-xl"
        aria-hidden="true"
      />
      <FontAwesomeIcon
        icon={icon}
        className="relative h-16 w-16 text-white/80"
        aria-hidden="true"
      />
    </div>
  )
}
