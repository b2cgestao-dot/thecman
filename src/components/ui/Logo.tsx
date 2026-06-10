import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/LogoBranca%20(1).png"
      alt="Thecman"
      className={cn('h-9 w-auto', className)}
      draggable={false}
    />
  )
}
