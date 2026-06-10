import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: IconDefinition
  value: string
  label: string
  index?: number
  featured?: boolean
}

export function StatCard({ icon, value, label, index = 0, featured = false }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.3) }}
      className={cn(
        'flex flex-col items-center rounded-xl border border-white/10 p-6 text-center backdrop-blur-sm',
        'transition-colors hover:border-white/20',
        featured
          ? 'bg-white/[0.07] hover:bg-white/[0.1]'
          : 'bg-white/[0.04] hover:bg-white/[0.07]',
      )}
    >
      <span className={cn(
        'mb-4 inline-flex items-center justify-center rounded-lg',
        featured ? 'h-14 w-14 bg-brand-blue/30 text-brand-blue-light' : 'h-12 w-12 bg-accent/15 text-accent-light',
      )}>
        <FontAwesomeIcon
          icon={icon}
          className={featured ? 'h-7 w-7' : 'h-6 w-6'}
          aria-hidden="true"
        />
      </span>
      <span className={cn(
        'font-extrabold leading-none text-white',
        featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl',
      )}>
        {value}
      </span>
      <span className="mt-2 text-sm text-navy-100">{label}</span>
    </motion.div>
  )
}
