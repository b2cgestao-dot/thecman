/**
 * =============================================================================
 *  DADOS CENTRAIS DA LANDING PAGE — THECMAN
 * =============================================================================
 */

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faWrench,
  faGear,
  faBolt,
  faShieldHalved,
  faHeartPulse,
  faGauge,
  faIndustry,
  faClock,
  faUsers,
  faStore,
  faHardHat,
  faHandshake,
  faGears,
  faBoxesStacked,
  faAward,
  faCertificate,
  faHeadset,
  faMicrochip,
} from '@fortawesome/free-solid-svg-icons'

/* -------------------------------------------------------------------------- */
/*  IMAGENS REAIS                                                               */
/* -------------------------------------------------------------------------- */
import imgEquipe from '@/assets/images/equipe-thecman.jpg'
import imgProjetoMotor from '@/assets/images/projeto-motor-01.jpg'
import imgProjetoBobinador from '@/assets/images/projeto-bobinador.jpg'
import imgRedutor from '@/assets/images/redutor.jpg'
import imgAlternador from '@/assets/images/alternador.jpg'
import imgPecasOriginais from '@/assets/images/projeto-equipamento-02.jpg'
import imgSeloWeg from '@/assets/images/selo-weg-qualidade.jpg'

/* -------------------------------------------------------------------------- */
/*  EMPRESA / CONTATOS                                                          */
/* -------------------------------------------------------------------------- */

export const company = {
  name: 'Thecman',
  legalName: 'Thecman Assistência Técnica e Comércio',
  tagline:
    'Assistência técnica e revenda autorizada WEG para empresas que precisam manter sua operação em movimento.',
  shortDescription:
    'Manutenção industrial, motores elétricos, redutores, alternadores, peças e soluções WEG com atendimento técnico especializado em Salvador e na Bahia.',
  foundedYearsLabel: '+38 anos',
  city: 'Salvador',
  state: 'BA',
  phone: '(71) 98133-7243',
  whatsapp: '5571981337243',
  email: 'contato@thecman.com.br',
  address: 'Salvador - Bahia',
  website: 'https://www.thecman.com.br',
} as const

export const socialLinks = {
  instagram: '',
  facebook: '',
  linkedin: '',
} as const

/* -------------------------------------------------------------------------- */
/*  MENSAGENS PADRÃO DE WHATSAPP                                                */
/* -------------------------------------------------------------------------- */

export const whatsappMessages = {
  default:
    'Olá! Vim pelo site da Thecman e gostaria de falar com um especialista.',
  specialist:
    'Olá! Gostaria de falar com um especialista da Thecman sobre uma solução para minha operação.',
  parts:
    'Olá! Gostaria de consultar a disponibilidade de peças e equipamentos WEG.',
  technicalService:
    'Olá! Preciso de atendimento técnico / manutenção. Pode me orientar?',
  quote:
    'Olá! Gostaria de solicitar um orçamento técnico com a Thecman.',
} as const

/* -------------------------------------------------------------------------- */
/*  NAVEGAÇÃO                                                                   */
/* -------------------------------------------------------------------------- */

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Revenda WEG', href: '#revenda-weg' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

/* -------------------------------------------------------------------------- */
/*  HERO                                                                        */
/* -------------------------------------------------------------------------- */

export const hero = {
  headline: 'Assistência Técnica e Revenda Autorizada WEG em Salvador',
  subheadline:
    'Soluções em manutenção eletromecânica, motores, redutores, alternadores e peças WEG para empresas que não podem parar.',
  badges: [
    '+38 anos de experiência',
    'Única autorizada WEG em Salvador',
    'Loja própria com estoque',
    'Atendimento técnico especializado',
  ],
  image: imgEquipe,
  imageAlt: 'Técnico da Thecman realizando manutenção em um motor elétrico WEG',
} as const

/* -------------------------------------------------------------------------- */
/*  DUAS SOLUÇÕES (PILARES DE NEGÓCIO)                                          */
/* -------------------------------------------------------------------------- */

export interface BusinessPillar {
  icon: IconDefinition
  title: string
  description: string
  ctaLabel: string
  whatsappMessage: string
}

export const businessPillars: BusinessPillar[] = [
  {
    icon: faWrench,
    title: 'Assistência Técnica Industrial',
    description:
      'Manutenção corretiva, preventiva e preditiva em motores elétricos, motorredutores, máquinas elétricas e alternadores.',
    ctaLabel: 'Solicitar atendimento técnico',
    whatsappMessage: whatsappMessages.technicalService,
  },
  {
    icon: faStore,
    title: 'Revenda Autorizada WEG',
    description:
      'Peças, equipamentos e soluções WEG com loja própria, estoque e suporte especializado.',
    ctaLabel: 'Consultar disponibilidade',
    whatsappMessage: whatsappMessages.parts,
  },
]

/* -------------------------------------------------------------------------- */
/*  AUTORIDADE WEG                                                              */
/* -------------------------------------------------------------------------- */

export const wegAuthority = {
  title: 'A segurança de contar com uma autorizada WEG',
  description:
    'A Thecman é assistência técnica e revenda autorizada WEG, oferecendo suporte técnico, manutenção e fornecimento de soluções para empresas que precisam de confiança, agilidade e padrão técnico reconhecido.',
  seal: imgSeloWeg,
  sealAlt: 'Selo WEG Qualidade - autorização técnica reconhecida',
  blocks: [
    { icon: faCertificate, title: 'Autorizada WEG Motores' },
    { icon: faGear,        title: 'Autorizada WEG Redutores / Cestari' },
    { icon: faBolt,        title: 'Autorizada WEG Máquinas / Energia' },
    { icon: faStore,       title: 'Revenda autorizada com loja própria' },
  ] as { icon: IconDefinition; title: string }[],
}

/* -------------------------------------------------------------------------- */
/*  SERVIÇOS                                                                    */
/* -------------------------------------------------------------------------- */

export interface ServiceItem {
  icon: IconDefinition
  title: string
  description: string
}

export const services: ServiceItem[] = [
  {
    icon: faGears,
    title: 'Manutenção de Motores Elétricos',
    description: 'Motores CA, CC, motores especiais e máquinas elétricas.',
  },
  {
    icon: faGear,
    title: 'Manutenção de Motorredutores',
    description:
      'Diagnóstico, manutenção e suporte técnico para redutores e motorredutores.',
  },
  {
    icon: faBolt,
    title: 'Manutenção de Alternadores',
    description:
      'Atendimento especializado para alternadores de geradores e sistemas eletromecânicos.',
  },
  {
    icon: faWrench,
    title: 'Manutenção Preventiva e Corretiva',
    description:
      'Atuação para corrigir falhas, reduzir paradas e manter a operação funcionando.',
  },
  {
    icon: faHeartPulse,
    title: 'Manutenção Preditiva',
    description:
      'Tecnologia e acompanhamento para antecipar falhas e aumentar a confiabilidade dos equipamentos.',
  },
  {
    icon: faMicrochip,
    title: 'Quadros e suporte eletromecânico',
    description:
      'Atendimento técnico dentro do escopo da operação da Thecman.',
  },
]

/* -------------------------------------------------------------------------- */
/*  LOJA / REVENDA WEG                                                          */
/* -------------------------------------------------------------------------- */

export const store = {
  title: 'Peças e soluções WEG com atendimento especializado',
  description:
    'Conte com uma revenda autorizada WEG para consultar peças, equipamentos e soluções com suporte técnico e disponibilidade para sua empresa.',
  highlights: [
    { icon: faCertificate,  text: 'Produtos 100% Originais' },
    { icon: faBoxesStacked, text: 'Estoque a pronta entrega' },
    { icon: faIndustry,     text: 'Atendimento para indústrias, oficinas e empresas de manutenção' },
    { icon: faHeadset,      text: 'Suporte técnico na escolha da solução' },
    { icon: faHandshake,    text: 'Envio e atendimento para diferentes regiões, conforme disponibilidade' },
    { icon: faUsers,        text: '+874 clientes ativos' },
  ] as { icon: IconDefinition; text: string }[],
  ctaLabel: 'Consultar peças WEG no WhatsApp',
  image: imgPecasOriginais,
  imageAlt: 'Peças e equipamentos originais WEG disponíveis na Thecman',
}

/* -------------------------------------------------------------------------- */
/*  PÚBLICO ATENDIDO                                                            */
/* -------------------------------------------------------------------------- */

export interface AudienceItem {
  icon: IconDefinition
  title: string
}

export const audience: AudienceItem[] = [
  { icon: faIndustry,  title: 'Indústrias' },
  { icon: faClock,     title: 'Empresas com operação contínua' },
  { icon: faUsers,     title: 'Compradores técnicos' },
  { icon: faWrench,    title: 'Setores de manutenção' },
  { icon: faHandshake, title: 'Oficinas e empresas parceiras' },
  { icon: faGear,      title: 'Geradores, motores, redutores e equipamentos eletromecânicos' },
]

/* -------------------------------------------------------------------------- */
/*  PROJETOS / ATENDIMENTOS                                                     */
/* -------------------------------------------------------------------------- */

export interface ProjectItem {
  category: string
  title: string
  description: string
  accent: 'navy' | 'weg' | 'accent'
  icon: IconDefinition
  image?: string
}

export const projects: ProjectItem[] = [
  {
    category: 'Motor elétrico industrial',
    title: 'Motor elétrico industrial',
    description:
      'Manutenção corretiva para recuperação de desempenho e retorno à operação.',
    accent: 'navy',
    icon: faGears,
    image: imgProjetoMotor,
  },
  {
    category: 'Alternador de gerador',
    title: 'Alternador de gerador',
    description:
      'Diagnóstico e manutenção eletromecânica em equipamento essencial para fornecimento de energia.',
    accent: 'weg',
    icon: faBolt,
    image: imgProjetoBobinador,
  },
  {
    category: 'Motorredutor',
    title: 'Motorredutor',
    description:
      'Atendimento técnico especializado para redução de falhas e aumento da confiabilidade.',
    accent: 'navy',
    icon: faGear,
    image: imgRedutor,
  },
  {
    category: 'Fornecimento de peça WEG',
    title: 'Fornecimento de peça WEG',
    description:
      'Solução com pronta entrega para reduzir tempo de espera e parada operacional.',
    accent: 'accent',
    icon: faBoxesStacked,
    image: imgAlternador,
  },
]

/* -------------------------------------------------------------------------- */
/*  MÉTRICAS / NÚMEROS                                                          */
/* -------------------------------------------------------------------------- */

export interface MetricItem {
  icon: IconDefinition
  value: string
  label: string
}

export const metrics: MetricItem[] = [
  { icon: faClock,     value: '+38',          label: 'anos de experiência' },
  { icon: faGauge,     value: '+34.560',       label: 'projetos realizados' },
  { icon: faUsers,     value: '+874',          label: 'clientes satisfeitos' },
  { icon: faAward,     value: 'Autorizada WEG', label: 'em Salvador' },
  { icon: faStore,     value: 'Loja própria',  label: 'com estoque' },
  { icon: faHardHat,   value: 'Equipe técnica', label: 'especializada' },
]

/* -------------------------------------------------------------------------- */
/*  EQUIPE / ESPECIALISTAS                                                      */
/* -------------------------------------------------------------------------- */

export const team = {
  title: 'Especialistas prontos para orientar sua empresa',
  description:
    'Da identificação da necessidade ao atendimento técnico, a Thecman conta com uma equipe preparada para orientar sua empresa na escolha da melhor solução em manutenção, peças e equipamentos WEG.',
  cards: [
    {
      icon: faHeadset,
      title: 'Atendimento comercial técnico',
      description:
        'Orientação consultiva para entender a necessidade e indicar a solução certa.',
    },
    {
      icon: faWrench,
      title: 'Equipe de manutenção',
      description:
        'Profissionais técnicos para diagnóstico e execução dos serviços.',
    },
    {
      icon: faUsers,
      title: 'Suporte para compradores',
      description:
        'Apoio na especificação e na consulta de peças e equipamentos WEG.',
    },
    {
      icon: faHandshake,
      title: 'Orientação para oficinas e parceiros',
      description:
        'Suporte para oficinas e empresas parceiras de manutenção.',
    },
  ] as { icon: IconDefinition; title: string; description: string }[],
}

/* -------------------------------------------------------------------------- */
/*  POR QUE ESCOLHER                                                            */
/* -------------------------------------------------------------------------- */

export interface DifferentialItem {
  icon: IconDefinition
  title: string
  description: string
}

export const differentials: DifferentialItem[] = [
  {
    icon: faShieldHalved,
    title: 'Autorizada WEG',
    description:
      'Padrão técnico, confiança e acesso a soluções reconhecidas no mercado.',
  },
  {
    icon: faHeadset,
    title: 'Atendimento especializado',
    description:
      'Equipe preparada para entender a necessidade da sua operação.',
  },
  {
    icon: faBoxesStacked,
    title: 'Estoque próprio',
    description: 'Mais agilidade para peças e soluções disponíveis.',
  },
  {
    icon: faClock,
    title: 'Experiência industrial',
    description: 'Mais de 38 anos atendendo empresas e operações técnicas.',
  },
  {
    icon: faHandshake,
    title: 'Manutenção e revenda em um só lugar',
    description:
      'Apoio tanto para quem precisa de serviço quanto para quem precisa comprar peças e equipamentos.',
  },
]

/* -------------------------------------------------------------------------- */
/*  CONTEÚDOS TÉCNICOS                                                          */
/* -------------------------------------------------------------------------- */

export interface ContentItem {
  title: string
  description: string
  href: string
  tag: string
}

export const contents: ContentItem[] = [
  {
    title: 'Quando fazer manutenção preventiva em motores elétricos?',
    description:
      'Sinais e periodicidade para planejar a manutenção e evitar paradas inesperadas.',
    href: '#',
    tag: 'Manutenção',
  },
  {
    title: 'Como reduzir paradas inesperadas na indústria?',
    description:
      'Práticas de manutenção preditiva e planejamento para aumentar a disponibilidade.',
    href: '#',
    tag: 'Confiabilidade',
  },
  {
    title: 'Quando reparar ou substituir um motor?',
    description:
      'Critérios técnicos e econômicos para decidir entre reparo e substituição.',
    href: '#',
    tag: 'Motores',
  },
  {
    title: 'Como comprar peças WEG com mais segurança?',
    description:
      'A importância de uma revenda autorizada na escolha de peças e equipamentos.',
    href: '#',
    tag: 'Revenda',
  },
  {
    title: 'O que observar em alternadores de geradores?',
    description:
      'Pontos de atenção e diagnóstico para manter alternadores confiáveis em operação.',
    href: '#',
    tag: 'Alternadores',
  },
]

/* -------------------------------------------------------------------------- */
/*  CTA FINAL                                                                   */
/* -------------------------------------------------------------------------- */

export const finalCta = {
  title: 'Sua indústria precisa de manutenção, peças ou suporte WEG?',
  description:
    'Fale com um especialista da Thecman e receba orientação para encontrar a melhor solução para sua operação.',
  buttons: [
    { label: 'Falar com especialista',      message: whatsappMessages.specialist },
    { label: 'Consultar peças WEG',         message: whatsappMessages.parts },
    { label: 'Solicitar orçamento técnico', message: whatsappMessages.quote },
  ],
}

/* -------------------------------------------------------------------------- */
/*  SEO                                                                         */
/* -------------------------------------------------------------------------- */

export const seo = {
  title:
    'Thecman | Assistência Técnica e Revenda Autorizada WEG em Salvador',
  description:
    'Manutenção industrial, motores elétricos, redutores, alternadores, peças e soluções WEG com atendimento técnico especializado em Salvador e Bahia.',
  ogImage: '/og-image.svg',
  url: company.website,
}
