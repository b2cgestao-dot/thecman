import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina classes condicionais (clsx) e resolve conflitos do Tailwind (twMerge).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gera um link do WhatsApp com mensagem pré-definida (URL-encoded).
 *
 * @param phone  Número no formato internacional só com dígitos. Ex: "5571999999999"
 * @param message Texto opcional pré-preenchido na conversa.
 */
export function buildWhatsappLink(phone: string, message?: string): string {
  const digits = phone.replace(/\D/g, '')
  const base = `https://wa.me/${digits}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

/**
 * Faz scroll suave até uma âncora interna, respeitando o header fixo.
 */
export function scrollToAnchor(id: string): void {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
