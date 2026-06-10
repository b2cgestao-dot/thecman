# Thecman — Landing Page

Landing page B2B da **Thecman**, assistência técnica e revenda autorizada **WEG**
em Salvador/BA. Construída com foco em confiança, conversão qualificada e
identidade industrial.

## Stack

- **React 18** + **TypeScript**
- **Vite 6** (build e dev server)
- **Tailwind CSS 3** (estilização)
- **Lucide React** (ícones)
- **Framer Motion** (animações leves de entrada)
- **React Helmet Async** (SEO / Open Graph)
- **clsx** + **tailwind-merge** (composição de classes)
- **ESLint** configurado

## Como instalar

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Acesse o endereço exibido no terminal (por padrão `http://localhost:5173`).

## Como gerar build de produção

```bash
npm run build      # checagem de tipos + build (saída em /dist)
npm run preview    # pré-visualiza o build localmente
```

Para validar o código:

```bash
npm run lint
```

## Estrutura de pastas

```
src/
  assets/
    images/        # fotos reais (atendimentos, equipamentos) — ver abaixo
    logos/         # logo oficial da Thecman
  components/
    layout/        # Header, Footer, FloatingWhatsapp
    sections/      # cada seção da página
    ui/            # Button, Card, Container, SectionHeading, Badge, StatCard, etc.
    Seo.tsx        # metadados de SEO / Open Graph
  data/
    siteData.ts    # ★ TODO o conteúdo editável da página
  lib/
    utils.ts       # cn(), buildWhatsappLink(), scrollToAnchor()
  styles/
    globals.css    # base Tailwind + utilitários
  App.tsx          # composição das seções
  main.tsx         # entrypoint (HelmetProvider)
```

## Onde alterar textos, contatos e métricas

Praticamente **todo o conteúdo** está centralizado em
[`src/data/siteData.ts`](src/data/siteData.ts):

| O que                         | Onde no `siteData.ts`                      |
| ----------------------------- | ------------------------------------------ |
| Nome, slogan, descrição       | `company`                                  |
| Telefone, WhatsApp, e-mail    | `company.phone` / `company.whatsapp` / `company.email` |
| Endereço                      | `company.address`                          |
| Redes sociais                 | `socialLinks`                              |
| Mensagens dos botões WhatsApp | `whatsappMessages`                         |
| Menu de navegação             | `navLinks`                                 |
| Headline / badges do Hero     | `hero`                                     |
| Pilares (2 soluções)          | `businessPillars`                          |
| Serviços técnicos             | `services`                                 |
| Loja / revenda                | `store`                                    |
| Público atendido              | `audience`                                 |
| Projetos / atendimentos       | `projects`                                 |
| Métricas / números            | `metrics`                                  |
| Equipe                        | `team`                                     |
| Diferenciais                  | `differentials`                            |
| Conteúdos / blog              | `contents`                                 |
| CTA final                     | `finalCta`                                 |
| Título/descrição SEO          | `seo`                                      |

> **WhatsApp:** o número em `company.whatsapp` deve estar no formato
> internacional, **apenas dígitos** (`55` + DDD + número). Ex.: `5571999999999`.

### Itens marcados com `TODO`

Busque por `TODO` em `siteData.ts` — são os campos que precisam ser
confirmados com dados oficiais antes de publicar (telefone, WhatsApp, e-mail,
endereço, redes sociais e os números das métricas).

## Onde trocar imagens e logos

- **Logo:** atualmente é um SVG inline (placeholder) em
  [`src/components/ui/Logo.tsx`](src/components/ui/Logo.tsx). Coloque o arquivo
  oficial em `src/assets/logos/` e ajuste o componente para usar
  `<img src={...} alt="Thecman" />`.
- **Imagens de projetos:** usam um placeholder local
  ([`ImagePlaceholder.tsx`](src/components/ui/ImagePlaceholder.tsx)). Para usar
  fotos reais, coloque-as em `src/assets/images/`, importe-as e troque o
  `<ImagePlaceholder />` por `<img loading="lazy" alt="..." />` em
  [`ProjectsSection.tsx`](src/components/sections/ProjectsSection.tsx).
- **Imagem Open Graph:** substitua `public/og-image.svg` por uma imagem real
  `1200×630` e atualize `seo.ogImage` em `siteData.ts`.
- **Favicon:** `public/favicon.svg`.

## Funcionalidades

- Scroll suave para âncoras, com compensação do header fixo.
- Header com efeito (sombra/blur) ao rolar e menu hambúrguer no mobile.
- Botões de WhatsApp gerados por `buildWhatsappLink()` com mensagem
  pré-definida por contexto.
- CTA flutuante de WhatsApp no canto inferior direito.
- Animações leves de entrada (Framer Motion), respeitando
  `prefers-reduced-motion`.
- 100% responsivo (mobile, tablet, desktop).
- SEO com React Helmet Async + HTML semântico + acessibilidade
  (aria-labels, foco visível, contraste).

---

© 2026 Thecman. Assistência técnica e revenda autorizada WEG — Salvador/BA.
