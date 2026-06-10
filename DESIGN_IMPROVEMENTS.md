# Documento de Melhorias de Design — Thecman Landing Page

> Todas as alterações foram aplicadas nas seções exceto **Hero Section** e **Navbar**.  
> O sistema de design original (tokens Tailwind, paleta, fontes, animações) foi preservado integralmente.

---

## 1. BusinessPillarsSection — "Duas soluções"

### Antes
```
┌─────────────────────────────────────────┐
│ [Ícone navy]                            │
│ Título da solução                       │
│ Descrição do pilar                      │
│ [Ghost Button — texto simples]          │
│ ─────────────────── faixa colorida ──── │ ← 6px no fundo
└─────────────────────────────────────────┘
```

### Depois
```
┌─────────────────────────────────────────┐
│ ████████████ HEADER ESCURO (navy-900) ██│
│  [Ícone azul]                       01 │ ← número decorativo 7xl/transparente
│  Título da solução (branco)             │
├─────────────────────────────────────────┤
│ Descrição do pilar (navy-600)           │
│                                         │
│ [██████ Botão PRIMARY azul (w-full) █]  │ ← era "ghost", agora "primary" cheio
└─────────────────────────────────────────┘
```

**Mudanças visuais:**
- Header do card ganhou fundo escuro `navy-900 → navy-800` com gradiente
- Ícone trocou de bg `navy-900` para bg `brand-blue` (azul de marca) com sombra
- Número decorativo `01`/`02` aparece em branco quase invisível no canto superior direito
- Botão substituído de ghost transparente por botão primary azul full-width — maior conversão
- A faixa de cor no fundo foi removida (redundante com o header colorido)

---

## 2. WegAuthoritySection — "Autoridade WEG"

### Antes
```
      ┌──────────────┐
      │  [Imagem WEG]│  ← box escuro simples
      └──────────────┘

 ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
 │[Ícone]  │ │[Ícone]  │ │[Ícone]  │ │[Ícone]  │
 │Título   │ │Título   │ │Título   │ │Título   │
 └─────────┘ └─────────┘ └─────────┘ └─────────┘

 ○── [ShieldCheck] Texto institucional simples ──○
```

### Depois
```
         ╔═══════════════════╗
    ╭────║   [Imagem WEG]    ║────╮  ← glow azul blur-2xl ao redor
    │    ╚═══════════════════╝    │
    ╰──────── halo luminoso ──────╯

 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 │[Ícone] [✓]  │ │[Ícone] [✓]  │ │[Ícone] [✓]  │ │[Ícone] [✓]  │
 │Título bold  │ │Título bold  │ │Título bold  │ │Título bold  │
 │Descrição... │ │Descrição... │ │Descrição... │ │Descrição... │
 └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘

 ╔═══════════════════════════════════════════════════════╗
 ║ [ShieldCheck azul]  Texto institucional mais detalhado║  ← banner arredondado
 ╚═══════════════════════════════════════════════════════╝
```

**Mudanças visuais:**
- Selo WEG ganhou um halo de brilho azul desfocado (`blur-2xl`) atrás do container
- O box do selo ganhou `ring-1 ring-white/10` e `shadow-strong`
- Cada bloco de autoridade agora mostra: ícone azul (canto esq.) + checkmark verde (canto dir.) + título bold + descrição curta
- O badge institucional no fundo virou um banner largo com bordas arredondadas e texto mais completo destacando "Única autorizada WEG em Salvador"

---

## 3. ServicesSection — "Serviços técnicos"

### Antes
```
 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 │ [Ícone verde]│ │ [Ícone verde]│ │ [Ícone verde]│
 │ Título       │ │ Título       │ │ Título       │
 │ Descrição    │ │ Descrição    │ │ Descrição    │
 └──────────────┘ └──────────────┘ └──────────────┘
 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 │ [Ícone verde]│ │ [Ícone verde]│ │ [Ícone verde]│
 │ Título       │ │ Título       │ │ Título       │
 └──────────────┘ └──────────────┘ └──────────────┘
```

### Depois
```
 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 │ [Ícone]   01│ │ [Ícone]   02│ │ [Ícone]   03│  ← número decorativo canto dir
 │ Título      │ │ Título      │ │ Título      │
 │ Descrição   │ │ Descrição   │ │ Descrição   │
 │             │ │             │ │             │
 └─── (hover: borda esquerda verde acende) ────┘

             [██ Solicitar serviço técnico ██]   ← CTA primário centralizado
```

**Mudanças visuais:**
- Cada card ganhou um número sequencial `01`–`06` no canto superior direito, em branco quase invisível (efeito de profundidade)
- No hover, uma borda esquerda colorida (`weg-light`) aparece com transição suave
- Adicionado botão **"Solicitar serviço técnico"** centralizado após o grid — call-to-action direto para WhatsApp

---

## 4. StoreSection — "Revenda WEG"

### Antes
```
[Badge WEG]
Título grande
Descrição

• CheckCircle  Loja própria
• CheckCircle  Estoque a pronta entrega
• CheckCircle  Atendimento para indústrias...
• CheckCircle  Suporte técnico
• CheckCircle  Envio para regiões

[Botão WhatsApp verde]           |  [Imagem + tag flutuante simples]
```

### Depois
```
[Badge WEG]
Título grande
Descrição

┌────────────┐  ┌────────────┐
│[Ícone] Loja│  │[Ícone] Est.│   ← grid 2 colunas de chips com bordas
└────────────┘  └────────────┘
┌────────────┐  ┌────────────┐
│[Ícone] Ind.│  │[Ícone] Sup.│
└────────────┘  └────────────┘
┌───────────────────────────────┐
│[Ícone] Envio para regiões     │
└───────────────────────────────┘

┌────────┬────────┬────────┐
│  +38   │  +874  │  100%  │   ← faixa de 3 números/estatísticas
│ anos   │clients │ originais   │
└────────┴────────┴────────┘

[Botão WhatsApp]     |  [Imagem com tag redesenhada (ícone azul + subtítulo)]
```

**Mudanças visuais:**
- Lista de highlights transformada em **grid de chips** com ícone colorido + texto — mais legível e visualmente rico
- Cada chip tem borda, fundo acinzentado e micro-hover em azul
- Nova **faixa de 3 estatísticas** ("+38 anos", "+874 clientes", "100% peças originais") dividida em 3 colunas com números grandes
- A tag flutuante da imagem foi redesenhada: ícone azul em caixa azul + "Thecman" como subtítulo + "Revenda autorizada WEG" como título

---

## 5. AudienceSection — "Para quem atendemos"

### Antes
```
┌──────────────────────────────┐
│ [Ícone] Indústrias           │  ← card horizontal simples, apenas ícone + título
└──────────────────────────────┘
┌──────────────────────────────┐
│ [Ícone] Empresas com op. cont│
└──────────────────────────────┘
...
```

### Depois
```
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│ [Ícone navy]  │ │ [Ícone navy]  │ │ [Ícone navy]  │  ← layout vertical
│               │ │               │ │               │
│ Título bold   │ │ Título bold   │ │ Título bold   │
│ Descrição     │ │ Descrição     │ │ Descrição     │  ← descrição adicionada
│ em 2 linhas   │ │ em 2 linhas   │ │ em 2 linhas   │
└───────────────┘ └───────────────┘ └───────────────┘
```

**Mudanças visuais:**
- Cards convertidos de layout **horizontal** (ícone ao lado do texto) para **vertical** (ícone acima, título, depois descrição)
- Cada card ganhou uma **descrição contextual** explicando como a Thecman atende aquele perfil
- No hover, a borda fica azul (`brand-blue/20`) e o ícone muda para bg `brand-blue`
- Cards ficam mais altos e informativos, reduzindo o aspecto de "lista simples"

---

## 6. ProjectsSection — "Projetos e atendimentos"

### Antes
```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  [Img]   │ │  [Img]   │ │  [Img]   │ │  [Img]   │
│ CATEGORIA│ │ CATEGORIA│ │ CATEGORIA│ │ CATEGORIA│  ← texto uppercase azul
│ Descrição│ │ Descrição│ │ Descrição│ │ Descrição│
└──────────┘ └──────────┘ └──────────┘ └──────────┘

Nota institucional (texto pequeno, centralizado)
```

### Depois
```
┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│  [Img]   │ │  [Img]   │ │  [Img]   │ │  [Img]   │
│ (hover → overlay escuro sobre a imagem)          │
│ [Badge]  │ │ [Badge]  │ │ [Badge]  │ │ [Badge]  │  ← pill colorido por tipo
│ Título   │ │ Título   │ │ Título   │ │ Título   │  ← título bold adicionado
│ Descrição│ │ Descrição│ │ Descrição│ │ Descrição│
└──────────┘ └──────────┘ └──────────┘ └──────────┘

 Nota institucional          [Outline] Falar com especialista
```

**Mudanças visuais:**
- Imagens ganham **overlay escuro no hover** (`navy-900/40`) — efeito fotográfico premium
- Categoria exibida como **pill colorido** (cor única por tipo de projeto: azul, verde WEG, navy, success)
- **Título do projeto** foi adicionado como texto bold acima da descrição
- Rodapé da seção agora exibe nota + botão **"Falar com especialista"** em linha — conversão contextual

---

## 7. MetricsSection — "Experiência e estrutura"

### Antes
```
 ┌────────┐ ┌────────┐ ┌────────┐
 │[Ícone] │ │[Ícone] │ │[Ícone] │
 │ Valor  │ │ Valor  │ │ Valor  │
 │ Label  │ │ Label  │ │ Label  │
 └────────┘ └────────┘ └────────┘
 ┌────────┐ ┌────────┐ ┌────────┐
 │[Ícone] │ │[Ícone] │ │[Ícone] │  ← todos os 6 cards iguais
 │ Valor  │ │ Valor  │ │ Valor  │
 └────────┘ └────────┘ └────────┘
```

### Depois
```
 ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
 │  [Ícone 7x7] │ │  [Ícone 7x7] │ │  [Ícone 7x7] │  ← 3 métricas em destaque
 │   +38         │ │   +34.560    │ │   +874        │  ← texto maior (3xl–4xl)
 │  anos exper. │ │  projetos    │ │  clientes    │
 └──────────────┘ └──────────────┘ └──────────────┘
 ─────────────── divisor branco/10 ──────────────────
 ┌────────┐ ┌────────┐ ┌────────┐
 │[Ícone] │ │[Ícone] │ │[Ícone] │  ← 3 métricas qualitativas (menores)
 │Autorizada││Loja próp││Equipe  │
 └────────┘ └────────┘ └────────┘
```

**Mudanças visuais:**
- Métricas divididas em **dois grupos visuais**: 3 numéricas principais (maiores, mais brilhantes, ícone maior) + linha divisória + 3 qualitativas (tamanho normal)
- Cards "featured" têm bg levemente mais opaco e ícone com bg `brand-blue/30`
- Adicionado glow secundário no canto inferior direito (weg/10)
- Divisor horizontal sutil entre os dois grupos

---

## 8. TeamSection — "Nossa equipe"

### Antes
```
 ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
 │ [Ícone]    │ │ [Ícone]    │ │ [Ícone]    │ │ [Ícone]    │
 │ Título     │ │ Título     │ │ Título     │ │ Título     │  ← Card básico, sem borda
 │ Descrição  │ │ Descrição  │ │ Descrição  │ │ Descrição  │
 └────────────┘ └────────────┘ └────────────┘ └────────────┘
```

### Depois
```
 ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
 ████████████  ███ weg ██████  ████ azul ████  ███ navy ████  ← borda sup. colorida (1px)
 │ [Ícone]    │ │ [Ícone]    │ │ [Ícone]    │ │ [Ícone]    │
 │ Título     │ │ Título     │ │ Título     │ │ Título     │  ← ícone → bg-blue no hover
 │ Descrição  │ │ Descrição  │ │ Descrição  │ │ Descrição  │
 └────────────┘ └────────────┘ └────────────┘ └────────────┘

 ╔═══════════════════════════════════════════════════════════╗
 ║  Precisa orientar sua equipe de manutenção?              ║  ← banner CTA contextual
 ║  Fale diretamente com um especialista...    [Falar] ██ ║
 ╚═══════════════════════════════════════════════════════════╝
```

**Mudanças visuais:**
- Cada card ganhou uma **barra colorida de 4px no topo** — cada um com gradiente diferente (azul, weg, azul-claro, navy) para criar identidade visual por papel
- Ícone muda de bg `navy-900` para `brand-blue` no hover com transição suave
- **Banner CTA** adicionado abaixo do grid: fundo muted + texto contextual + botão "Falar com a equipe"

---

## 9. WhyChooseSection — "Por que escolher a Thecman?"

### Antes
```
 ┌──────────────────────────────────────┐
 │ [Ícone accent] Título                │  ← ícone no acento, sem numeração
 │               Descrição             │
 └──────────────────────────────────────┘
```

### Depois
```
 ┌──────────────────────────────────────┐
 │                                   01 │  ← número decorativo canto dir. (quase invisível)
 │ [Ícone accent] Título                │
 │               Descrição             │
 └──────────────────────────────────────┘
```

**Mudanças visuais:**
- Cada card ganhou um **número decorativo** `01`–`05` no canto superior direito em cor `navy-900/4` — cria sensação de lista priorizada sem poluir o visual
- O hover do ícone (bg accent/10 → bg accent sólido + text white) permanece e fica mais intencionalmente comunicativo

---

## 10. ContentSection — "Conteúdos técnicos"

### Antes
```
 ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
 │ [Tag badge]    │ │ [Tag badge]    │ │ [Tag badge]    │ │ [Tag badge]    │
 │ Título         │ │ Título         │ │ Título         │ │ Título         │
 │ Descrição      │ │ Descrição      │ │ Descrição      │ │ Descrição      │
 │ Ler conteúdo ↗ │ │ Ler conteúdo ↗ │ │ Ler conteúdo ↗ │ │ Ler conteúdo ↗ │
 └────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘
```

### Depois
```
 ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
 █ barra azul ███  █ barra weg ████  █ barra navy ███  █ barra verde ██  ← topo colorido
 │[Tag]  ⏱ 4 min │ │[Tag]  ⏱ 5 min │ │[Tag]  ⏱ 6 min │ │[Tag]  ⏱ 4 min │  ← tempo leitura
 │ Título         │ │ Título         │ │ Título         │ │ Título         │
 │ Descrição      │ │ Descrição      │ │ Descrição      │ │ Descrição      │
 │ Ler conteúdo ↗ │ │ Ler conteúdo ↗ │ │ Ler conteúdo ↗ │ │ Ler conteúdo ↗ │
 └────────────────┘ └────────────────┘ └────────────────┘ └────────────────┘

 ╔═══════════════════════════════════════════════════════════════════════╗
 ║  Tem dúvidas técnicas sobre sua operação?          [Falar] ██████   ║
 ╚═══════════════════════════════════════════════════════════════════════╝
```

**Mudanças visuais:**
- Cada card ganhou uma **barra colorida de 4px no topo** — cor correspondente à categoria (azul para Manutenção, weg para Confiabilidade, etc.)
- **Tempo de leitura estimado** (`4 min`, `5 min`...) adicionado com ícone de relógio ao lado da tag — aumenta credibilidade
- A badge de tag agora usa cores diferenciadas por categoria
- Grid limitado a 4 artigos (o 5º foi retirado do display para manter grid 4-col limpo)
- **Banner CTA** ao final com pergunta contextual + botão "Falar com especialista"

---

## 11. FinalCTASection — "Seção de Conversão Final"

### Antes
```
                    ╔═══════════════════════════════════╗
                    ║ Título grande                      ║
                    ║ Descrição                          ║
                    ║                                    ║
                    ║ [Primário] [Outline] [Outline]     ║  ← 3 botões em fila
                    ║ Texto location pequeno             ║
                    ╚═══════════════════════════════════╝
```

### Depois
```
                    ╔═════════════════════════════════════════╗
                    ║  [ShieldCheck] Autorizada WEG           ║
                    ║  [Clock] +38 anos      [Award] Única   ║  ← badges de confiança
                    ║                                         ║
                    ║  Título grande                          ║
                    ║  Descrição                              ║
                    ║                                         ║
                    ║  [████████ BOTÃO PRIMÁRIO GRANDE ████]  ║  ← botão 1 em destaque max-w-xs
                    ║                                         ║
                    ║     [Outline menor] [Outline menor]     ║  ← botões 2 e 3 secundários
                    ║  Texto location pequeno                 ║
                    ╚═════════════════════════════════════════╝
```

**Mudanças visuais:**
- **3 trust badges** adicionados acima do título: "Autorizada WEG", "+38 anos de experiência", "Única em Salvador" — com ícones, bordas brancas e backdrop blur
- Botão principal separado com **destaque visual claro** (max-w-xs, centralizado, tamanho lg)
- Botões secundários agora ficam em **linha separada** abaixo do principal — hierarquia mais clara
- A progressão visual agora é: Credibilidade → Proposta de valor → Ação primária → Alternativas

---

## 12. Footer

### Antes
```
 ┌─────────────────────────────────────────────────────────────┐
 │  [Logo]           Links rápidos    Contato                  │
 │  Tagline          • Link           • Endereço               │
 │                   • Link           • Telefone               │
 │                   • Link           • Email                  │
 │                                    • WhatsApp               │
 │ ─────────────────────────────────────────────────────────── │
 │ © 2026 Thecman...               Texto SEO                   │
 └─────────────────────────────────────────────────────────────┘
```

### Depois
```
 ═══════════ barra azul → weg → azul-claro (1px gradiente) ═══
 ┌─────────────────────────────────────────────────────────────┐
 │  [Logo]                Links rápidos    Contato             │
 │  Tagline               → Link           • Endereço          │  ← links com traço hover
 │                        → Link           • Telefone          │
 │  ┌─────────────────┐   → Link           • Email             │
 │  │ Seg–Sex 07h30–  │                    • WhatsApp — falar  │  ← "falar agora" adicionado
 │  │ 17h30           │                                        │
 │  └─────────────────┘                                        │
 │ ─────────────────────────────────────────────────────────── │
 │ © 2026 Thecman...               Texto SEO (navy-500)        │
 └─────────────────────────────────────────────────────────────┘
```

**Mudanças visuais:**
- **Barra de acento** no topo do footer: gradiente `brand-blue → weg-light → brand-blue-light` de 4px — delimita visualmente o rodapé
- **Horário de atendimento** em caixa destacada abaixo da tagline — informação de alta importância para B2B
- Links de navegação ganharam **micro-traço azul** que aparece no hover (transição de opacidade)
- Ícones de redes sociais: hover agora usa `brand-blue/20` com borda `brand-blue/50` — mais alinhado com a paleta
- WhatsApp agora tem legenda "falar agora" em vez de apenas "WhatsApp"
- Copyright `text-navy-400` → `text-navy-500` para menor contraste (não precisa de ênfase)

---

## Resumo Executivo das Melhorias

| Seção | Tipo de melhoria | Impacto esperado |
|-------|-----------------|-----------------|
| BusinessPillars | Header escuro + botão primário | ↑ cliques em CTA |
| WegAuthority | Glow no selo + descrições nos blocos | ↑ credibilidade |
| Services | Numeração + CTA no final | ↑ contexto + conversão |
| Store | Grid de chips + faixa de números | ↑ legibilidade + prova social |
| Audience | Cards verticais com descrição | ↑ identificação do visitante |
| Projects | Overlay hover + badges coloridos + CTA | ↑ engajamento |
| Metrics | Dois grupos visuais (destaque vs. qualitativo) | ↑ escaneabilidade |
| Team | Borda colorida top + CTA banner | ↑ humanização + conversão |
| WhyChoose | Numeração decorativa | ↑ senso de prioridade |
| Content | Tempo leitura + barra categoria + CTA | ↑ CTR em conteúdo |
| FinalCTA | Trust badges + hierarquia de botões | ↑ conversão final |
| Footer | Barra de acento + horário + hover nos links | ↑ profissionalismo |
