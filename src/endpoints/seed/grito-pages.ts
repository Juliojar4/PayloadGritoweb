import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

// ── Home page ─────────────────────────────────────────────────────────────────

type HomeArgs = {
  heroImage: Media
  aboutImage: Media
  ctaImage: Media
}

export const gritoHome = ({
  heroImage,
  aboutImage,
  ctaImage,
}: HomeArgs): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'home',
  title: 'Home',
  _status: 'published',
  hero: { type: 'none' },
  layout: [
    {
      blockType: 'homeSectionHero',
      title: 'Sites que *gritam*,\nnegócios que *escalam*.',
      description:
        'Estúdio digital especializado em WordPress, e-commerce e produtos web sob medida. Construímos com leveza, código limpo e atenção a quem importa: o seu cliente.',
      cta1Label: 'Quero um orçamento',
      cta1Href: '/contato',
      cta2Label: 'Ver portfólio',
      cta2Href: '/portfolio',
      image: heroImage.id,
    },
    {
      blockType: 'homeSectionLogoCloud',
      eyebrow: 'Clientes',
      title: 'Empresas que *confiam* na gente',
      description:
        'Marcas que caminham com a gente — do primeiro briefing à manutenção recorrente. Pequenos negócios e times grandes, mesmo cuidado.',
      partners: [
        { name: 'Quintal Bistrô', glyph: 'circle' },
        { name: 'Thrive', glyph: 'triangle' },
        { name: 'Xfive Studio', glyph: 'square' },
        { name: 'Bukuji', glyph: 'diamond' },
        { name: 'Gridl', glyph: 'arc' },
        { name: 'Empório Raízes', glyph: 'plus' },
        { name: 'Bossanova', glyph: 'hexagon' },
        { name: 'Tecnocafé', glyph: 'rings' },
        { name: 'Folha & Pedra', glyph: 'halfcircle' },
        { name: 'Movimento Verde', glyph: 'wave' },
        { name: 'Casa Lila', glyph: 'chevron' },
        { name: 'Norte Estúdio', glyph: 'bars' },
      ],
    },
    {
      blockType: 'homeSectionServices',
      eyebrow: 'Serviços',
      title: 'Soluções *inteligentes*\npara o seu negócio',
      description:
        'Da estratégia ao código. A gente entrega o pacote completo — ou se encaixa onde seu time precisa de reforço.',
      services: [
        {
          name: 'WordPress sob medida',
          variant: 'blue',
          description: 'Tema 100% próprio, painel editável e suporte mensal incluso.',
          iconType: 'globe',
          ctaLabel: 'Conheça',
          ctaHref: '/servicos',
        },
        {
          name: 'E-Commerce',
          variant: 'orange',
          description: 'WooCommerce, integrações com ERP, checkout que converte.',
          iconType: 'cart',
          ctaLabel: 'Conheça',
          ctaHref: '/servicos',
        },
        {
          name: 'Landing Pages',
          variant: 'blue',
          description: 'LPs de conversão com A/B test, copy e analytics ligados.',
          iconType: 'landing',
          ctaLabel: 'Conheça',
          ctaHref: '/servicos',
        },
        {
          name: 'UX/UI Design',
          variant: 'orange',
          description: 'Pesquisa, fluxos, wireframes e protótipos navegáveis.',
          iconType: 'screen',
          ctaLabel: 'Conheça',
          ctaHref: '/servicos',
        },
        {
          name: 'Branding',
          variant: 'blue',
          description: 'Identidade, naming, manual e aplicações da marca.',
          iconType: 'brand',
          ctaLabel: 'Conheça',
          ctaHref: '/servicos',
        },
        {
          name: 'Soluções Digitais',
          variant: 'orange',
          description: 'Sistemas, dashboards e automações sob medida.',
          iconType: 'code',
          ctaLabel: 'Conheça',
          ctaHref: '/servicos',
        },
      ],
    },
    {
      blockType: 'homeSectionAbout',
      eyebrow: 'Sobre nós',
      title: 'Um estúdio *pequeno* com\nentregas *de gente grande*.',
      description:
        'Somos um time enxuto de design e desenvolvimento, baseado em Sorocaba (SP), entregando para clientes do Brasil inteiro desde 2017. Trabalhamos com agendas tranquilas e dedicação real — você fala com o mesmo time do briefing ao go-live.',
      ctaLabel: 'Conheça o time',
      ctaHref: '/sobre',
      features: [
        {
          title: 'Sem terceirização',
          description: 'Quem desenha é quem entrega. Sem caixa-preta, sem repasse.',
        },
        {
          title: 'Cronograma realista',
          description: 'Prazo combinado é prazo cumprido. Sem promessa que não cabe.',
        },
        {
          title: 'Transparência total',
          description: 'Você acompanha o board do projeto em tempo real.',
        },
        {
          title: 'Suporte que responde',
          description: 'Após o go-live a gente continua de plantão por 30 dias.',
        },
      ],
      image: aboutImage.id,
    },
    {
      blockType: 'latestPortfolios',
      eyebrow: 'Trabalhos recentes',
      title: 'Projetos que *colocamos pra rodar*',
      portfolioLabel: 'Ver portfólio completo',
      portfolioHref: '/portfolio',
    },
    {
      blockType: 'homeSectionProcess',
      eyebrow: 'Como trabalhamos',
      title: 'Um *processo claro*, do briefing ao go-live',
      description:
        'Cinco passos que repetimos em todo projeto. Você sabe sempre onde a gente está, o que vem depois e o que precisa de você.',
      highlightIndex: 2,
      steps: [
        { title: 'Descobrir', description: 'Entrevistas, contexto e benchmark.' },
        { title: 'Definir', description: 'Escopo, MVP e prioridades.' },
        { title: 'Desenhar', description: 'UX, UI e protótipo navegável.' },
        { title: 'Desenvolver', description: 'Código, testes e integrações.' },
        { title: 'Decolar', description: 'Go-live, treino e suporte.' },
      ],
    },
    {
      blockType: 'homeSectionStats',
      showDecoration: true,
      stats: [
        { value: '+120', label: 'Projetos entregues' },
        { value: '8 anos', label: 'No digital' },
        { value: '94 NPS', label: 'Média pós-projeto' },
        { value: '+38%', label: 'Conversão média' },
      ],
    },
    {
      blockType: 'homeSectionTestimonials',
      eyebrow: 'Depoimentos',
      title: 'Quem trabalhou com a gente *volta*',
      description:
        '70% do nosso faturamento vem de clientes recorrentes ou indicação direta. Não é por acaso.',
      ratingValue: '4,9 / 5,0',
      reviewCount: '47 avaliações no Google',
      testimonials: [
        {
          quote:
            'O time da GritoWeb entendeu nossa operação antes de abrir o Figma. O painel ficou tão claro que nem precisei treinar a equipe.',
          author: 'Marina Prado',
          role: 'Diretora de Marketing — Quintal Bistrô',
          avatarVariant: 'blue',
          surface: 'paper',
        },
        {
          quote:
            'Em 6 meses triplicamos o MRR do clube de assinatura. O e-commerce não engasga mais e nosso financeiro virou um botão.',
          author: 'Caio Bertoni',
          role: 'CEO — Empório Raízes',
          avatarVariant: 'orange',
          surface: 'card',
        },
      ],
    },
    {
      blockType: 'latestPosts',
      eyebrow: 'Do nosso blog',
      title: 'Ideias que *colocam* seu negócio pra correr',
      blogLabel: 'Ler todos os artigos',
      blogHref: '/blog',
    },
    {
      blockType: 'homeSectionCta',
      variant: 'orange',
      eyebrow: 'Próximo passo',
      titleMain: 'Tem um projeto',
      titleSecondary: 'em mente?',
      titleSecondaryColor: 'blue',
      description:
        'Conta pra gente em duas linhas o que você precisa. Devolvemos uma proposta em 3 dias úteis.',
      cta1Label: 'Agendar uma call',
      cta1Href: '/contato',
      cta1Variant: 'blue',
      cta2Label: 'Baixar portfólio (PDF)',
      cta2Href: '#',
      cta2Variant: 'white',
      image: ctaImage.id,
    },
    {
      blockType: 'homeSectionContact',
      email: 'contato@gritoweb.com.br',
      emailHref: 'mailto:contato@gritoweb.com.br',
      phone: '(15) 99739-4486',
      phoneHref: 'tel:+5515997394486',
    },
  ],
})

// ── Portfolio page ────────────────────────────────────────────────────────────

type PortfolioArgs = {
  heroImage: Media
}

export const gritoPortfolio = ({
  heroImage,
}: PortfolioArgs): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'portfolio',
  title: 'Portfólio',
  _status: 'published',
  hero: { type: 'none' },
  layout: [
    {
      blockType: 'homeSectionHero',
      title: 'Projetos que *colocamos*\npra *rodar*',
      description:
        'Cada card é um projeto real, com contexto, decisão e resultado. Clique para abrir o estudo de caso completo.',
      cta1Label: 'Falar com a gente',
      cta1Href: '/contato',
      cta2Label: 'Quero um orçamento',
      cta2Href: '/contato',
      image: heroImage.id,
    },
    {
      blockType: 'homeSectionStats',
      showDecoration: false,
      stats: [
        { value: '+120', label: 'Projetos entregues' },
        { value: '8 anos', label: 'De estrada digital' },
        { value: '94 NPS', label: 'Média pós-projeto' },
        { value: '+38%', label: 'Conversão média' },
      ],
    },
    {
      blockType: 'projectGridAsymmetric',
      eyebrow: 'Nossos projetos',
      title: 'Projetos que *colocamos pra rodar*',
      portfolioLabel: '',
      portfolioHref: '#',
      limit: 8,
    },
    {
      blockType: 'homeSectionCta',
      variant: 'blue',
      eyebrow: 'Próximo na fila',
      titleMain: 'Pode ser',
      titleSecondary: 'o seu projeto.',
      titleSecondaryColor: 'orange',
      description:
        'Aceitamos 4 novos projetos por trimestre. Conte o que você precisa; devolvemos uma proposta em 3 dias úteis.',
      cta1Label: 'Agendar uma call',
      cta1Href: '/contato',
      cta1Variant: 'primary',
      cta2Label: 'Ver nossa metodologia',
      cta2Href: '/servicos',
      cta2Variant: 'white',
    },
    {
      blockType: 'homeSectionContact',
      email: 'contato@gritoweb.com.br',
      emailHref: 'mailto:contato@gritoweb.com.br',
      phone: '(15) 99739-4486',
      phoneHref: 'tel:+5515997394486',
    },
  ],
})

// ── Blog page ─────────────────────────────────────────────────────────────────

export const gritoBlog = (): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'blog',
  title: 'Blog',
  _status: 'published',
  hero: { type: 'none' },
  layout: [
    {
      blockType: 'blogListing',
      eyebrow: 'Arquivo',
      title: '*Últimos posts*',
      postsPerPage: 9,
      showSearch: true,
      showFilters: true,
    },
  ],
})

// ── Services page ─────────────────────────────────────────────────────────────

type ServicesArgs = {
  heroImage: Media
}

export const gritoServices = ({
  heroImage,
}: ServicesArgs): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'servicos',
  title: 'Serviços',
  _status: 'published',
  hero: { type: 'none' },
  layout: [
    {
      blockType: 'homeSectionHero',
      title: 'Soluções *inteligentes*\npara o seu *negócio*',
      description:
        'Construímos sites, lojas e produtos digitais que respiram leveza e conversam direto com quem importa: o seu cliente.',
      cta1Label: 'Falar com a gente',
      cta1Href: '/contato',
      cta2Label: 'Ver portfólio',
      cta2Href: '/portfolio',
      image: heroImage.id,
    },
    {
      blockType: 'homeSectionServices',
      eyebrow: 'O que fazemos',
      title: 'Soluções *inteligentes*\npara o seu negócio',
      description: 'Da estratégia ao código. O pacote completo.',
      services: [
        {
          name: 'WordPress sob medida',
          variant: 'blue',
          description: 'Temas customizados, ACF, treinamento e suporte mensal.',
          iconType: 'globe',
          bullets: [
            { text: 'Tema 100% sob medida' },
            { text: 'Painel editável sem código' },
            { text: 'Performance AA' },
            { text: 'Suporte mensal incluído' },
          ],
          ctaLabel: 'Saiba mais',
          ctaHref: '#',
        },
        {
          name: 'E-Commerce',
          variant: 'orange',
          description: 'WooCommerce, integrações, checkout otimizado e clube de assinaturas.',
          iconType: 'cart',
          bullets: [
            { text: 'Checkout otimizado' },
            { text: 'Integração com ERP/POS' },
            { text: 'Clube de assinatura' },
            { text: 'Logística & fiscal' },
          ],
          ctaLabel: 'Saiba mais',
          ctaHref: '#',
        },
        {
          name: 'Landing Pages',
          variant: 'blue',
          description: 'LPs de conversão com A/B test nativo, copy e analytics.',
          iconType: 'landing',
          bullets: [
            { text: 'Estratégia de copy' },
            { text: 'A/B test nativo' },
            { text: 'Heatmaps & analytics' },
            { text: 'Iterações pós-go-live' },
          ],
          ctaLabel: 'Saiba mais',
          ctaHref: '#',
        },
        {
          name: 'UX/UI',
          variant: 'orange',
          description: 'Pesquisa, fluxos, wireframes, protótipos e design system.',
          iconType: 'screen',
          bullets: [
            { text: 'Entrevistas & testes' },
            { text: 'Wireframes & protótipos' },
            { text: 'Design system' },
            { text: 'Handoff para o time dev' },
          ],
          ctaLabel: 'Saiba mais',
          ctaHref: '#',
        },
        {
          name: 'Branding',
          variant: 'blue',
          description: 'Identidade visual, naming, manual da marca e aplicações.',
          iconType: 'brand',
          bullets: [
            { text: 'Pesquisa & posicionamento' },
            { text: 'Logo & identidade' },
            { text: 'Manual da marca' },
            { text: 'Aplicações principais' },
          ],
          ctaLabel: 'Saiba mais',
          ctaHref: '#',
        },
        {
          name: 'Soluções Digitais',
          variant: 'orange',
          description: 'Sistemas web, dashboards, integrações e automações sob medida.',
          iconType: 'code',
          bullets: [
            { text: 'Dashboards customizados' },
            { text: 'Integrações com APIs' },
            { text: 'Automação de processos' },
            { text: 'Manutenção contínua' },
          ],
          ctaLabel: 'Saiba mais',
          ctaHref: '#',
        },
      ],
    },
    {
      blockType: 'homeSectionProcess',
      eyebrow: 'Como trabalhamos',
      title: 'Um *processo claro*, do briefing ao go-live',
      description: '',
      highlightIndex: 2,
      steps: [
        { title: 'Descobrir', description: 'Entrevistas, contexto e benchmark.' },
        { title: 'Definir', description: 'Escopo, MVP e prioridades.' },
        { title: 'Desenhar', description: 'UX, UI e protótipo navegável.' },
        { title: 'Desenvolver', description: 'Código, testes e integrações.' },
        { title: 'Decolar', description: 'Go-live, treino e suporte.' },
      ],
    },
    {
      blockType: 'latestPortfolios',
      eyebrow: 'Projetos relacionados',
      title: 'Projetos que já *entregamos*',
      portfolioLabel: 'Ver portfólio completo',
      portfolioHref: '/portfolio',
    },
    {
      blockType: 'homeSectionCta',
      variant: 'orange',
      eyebrow: 'Próximo passo',
      titleMain: 'Tem um projeto',
      titleSecondary: 'em mente?',
      titleSecondaryColor: 'blue',
      description:
        'Conta pra gente o que você precisa. Devolvemos uma proposta em 3 dias úteis.',
      cta1Label: 'Agendar uma call',
      cta1Href: '/contato',
      cta1Variant: 'blue',
      cta2Label: 'Baixar portfólio (PDF)',
      cta2Href: '#',
      cta2Variant: 'white',
    },
    {
      blockType: 'homeSectionContact',
      email: 'contato@gritoweb.com.br',
      emailHref: 'mailto:contato@gritoweb.com.br',
      phone: '(15) 99739-4486',
      phoneHref: 'tel:+5515997394486',
    },
  ],
})

// ── Contato page ──────────────────────────────────────────────────────────────

export const gritoContato = (): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'contato',
  title: 'Contato',
  _status: 'published',
  hero: { type: 'none' },
  layout: [
    {
      blockType: 'contactSection',
      eyebrow: 'Contato',
      heading: 'Vamos construir algo incrível juntos?',
      sidebarEyebrow: 'Fale direto',
      successTitle: 'Mensagem enviada',
      successMessage:
        'Recebemos sua mensagem. Em até 3 dias úteis um de nós entra em contato.',
      channels: [
        {
          icon: 'email',
          label: 'E-mail',
          value: 'contato@gritoweb.com.br',
          hint: 'Resposta em até 1 dia útil',
          href: 'mailto:contato@gritoweb.com.br',
        },
        {
          icon: 'whatsapp',
          label: 'WhatsApp',
          value: '(15) 99739-4486',
          hint: 'Seg a Sex · 9h às 18h',
          href: 'https://wa.me/5515997394486',
        },
        {
          icon: 'location',
          label: 'Onde estamos',
          value: 'Sorocaba, SP',
          hint: 'Atendimento 100% remoto',
        },
      ],
    },
  ],
})
