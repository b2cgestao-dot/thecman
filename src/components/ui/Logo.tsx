import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/logo-branca.webp"
      alt="Thecman"
      width={120}
      height={36}
      className={cn('h-9 w-auto', className)}
      draggable={false}
    />
  )
}
