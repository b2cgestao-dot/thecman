import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  /** Atraso em segundos (limitado para não exagerar). */
  delay?: number
  className?: string
  /** Direção da entrada. */
  y?: number
}

/** Wrapper leve de animação de entrada (fade + subida) ao entrar na viewport. */
export function Reveal({ children, delay = 0, className, y = 20 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.4) }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
