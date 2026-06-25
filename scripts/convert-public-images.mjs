import sharp from 'sharp'
import { readdir, unlink } from 'node:fs/promises'
import path from 'node:path'

const publicDir = path.resolve(process.cwd(), 'public')

const conversions = [
  { input: 'Hero-Background.png',   output: 'Hero-Background.webp',   quality: 82 },
  { input: 'Mobile-Background.png', output: 'Mobile-Background.webp', quality: 82 },
  { input: 'Peças-Weg.png',         output: 'pecas-weg.webp',         quality: 82 },
  { input: 'Serviços-Desktop.png',  output: 'servicos-desktop.webp',  quality: 82 },
  { input: 'Serviços-Mobile.png',   output: 'servicos-mobile.webp',   quality: 82 },
  { input: 'selo-weg.png',          output: 'selo-weg.webp',          quality: 85, resize: { width: 280 } },
  { input: 'LogoBranca (1).png',    output: 'logo-branca.webp',       quality: 90 },
]

for (const { input, output, quality, resize } of conversions) {
  const inputPath  = path.join(publicDir, input)
  const outputPath = path.join(publicDir, output)

  let pipeline = sharp(inputPath)
  if (resize) pipeline = pipeline.resize(resize)
  pipeline = pipeline.webp({ quality })

  const info = await pipeline.toFile(outputPath)
  const inputSizeKB  = Math.round((await sharp(inputPath).metadata()).size ?? 0 / 1024)
  const outputSizeKB = Math.round(info.size / 1024)

  console.log(`✓ ${input.padEnd(28)} → ${output.padEnd(28)} ${outputSizeKB} KB`)
}

console.log('\nDone. Delete old PNGs manually after verifying WebP files look correct.')
