import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const APP_URL = 'http://localhost:5173/'
// fileURLToPath decodifica %20 e espaços corretamente (a pasta tem espaço no nome)
const OUT = fileURLToPath(
  new globalThis.URL('../analise-site-atual/screenshots/', import.meta.url),
)
mkdirSync(OUT, { recursive: true })

// Rola a página até o fim em passos, para disparar as animações whileInView
async function revealAll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0
      const step = Math.round(window.innerHeight * 0.7)
      const timer = setInterval(() => {
        window.scrollBy(0, step)
        y += step
        if (y >= document.body.scrollHeight) {
          clearInterval(timer)
          resolve()
        }
      }, 120)
    })
  })
  await page.waitForTimeout(600)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(400)
}

async function shotSection(page, selector, name) {
  const el = page.locator(selector).first()
  try {
    await el.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)
    await el.screenshot({ path: `${OUT}${name}.png` })
    console.log('  ok  ', name)
  } catch (e) {
    console.log('  skip', name, '-', e.message.split('\n')[0])
  }
}

const browser = await chromium.launch({ channel: 'chrome', args: ['--no-sandbox'] })

/* ----------------------------- DESKTOP ----------------------------- */
const desktop = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
})
const dp = desktop.newPage ? await desktop.newPage() : await desktop.newPage()
await dp.goto(APP_URL, { waitUntil: 'networkidle' })
await revealAll(dp)
await dp.screenshot({ path: `${OUT}desktop-full.png`, fullPage: true })
console.log('desktop full ok')

// Seções por id / contexto
await shotSection(dp, '#inicio', 'desktop-01-hero')
await shotSection(dp, '#solucoes', 'desktop-02-pilares')
await shotSection(dp, '#revenda-weg', 'desktop-03-autoridade-weg')
await shotSection(dp, '#servicos', 'desktop-04-servicos')
await shotSection(dp, 'section:has(img[alt*="Peças"])', 'desktop-05-loja')
await shotSection(dp, '#projetos', 'desktop-06-projetos')
await shotSection(dp, '#reconhecimentos', 'desktop-07-metricas')
await desktop.close()

/* ----------------------------- MOBILE ------------------------------ */
const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
const mp = await mobile.newPage()
await mp.goto(APP_URL, { waitUntil: 'networkidle' })
await revealAll(mp)
await mp.screenshot({ path: `${OUT}mobile-full.png`, fullPage: true })
console.log('mobile full ok')

// Hero mobile (elemento) + menu hambúrguer aberto
await mp.evaluate(() => {
  document.documentElement.style.scrollBehavior = 'auto'
  window.scrollTo(0, 0)
})
await mp.waitForTimeout(500)
await shotSection(mp, '#inicio', 'mobile-01-hero')
try {
  await mp.getByLabel('Abrir menu').click()
  await mp.waitForTimeout(600)
  await mp.screenshot({ path: `${OUT}mobile-02-menu.png` })
  console.log('mobile menu ok')
} catch (e) {
  console.log('mobile menu skip -', e.message.split('\n')[0])
}
await mobile.close()

await browser.close()
console.log('\nScreenshots em:', OUT)
