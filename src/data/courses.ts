export interface Course {
  id: string;
  slug?: string;
  title: string;
  category: string;
  duration?: string | null;
  level?: string | null;
  image: string;
  instructor: {
    name: string;
    role?: string | null;
    companyOrExperience?: string | null;
    avatar: string;
  };
  summary: string;
  whatYouWillLearn?: string | null;
  modules?: string[] | null;
  featuredHome?: boolean;
}

export interface ApiCourseItem {
  id: number | string;
  slug: string;
  tema: string;
  professor: string;
  cargo: string | null;
  resumo: string;
  o_que_vai_aprender: string | null;
  categoria: string;
  foto_professor: string | null;
  foto_capa: string | null;
  duracao: string | null;
  nivel: string | null;
  experiencia_professor: string | null;
  modulos: string[] | null;
  destaque_home?: boolean;
  ordem?: number;
}

export interface ApiCoursesResponse {
  success: boolean;
  total: number;
  categorias: string[];
  data: ApiCourseItem[];
}

export function getApiBaseUrl(): string {
  const configuredEndpoint = process.env.NEXT_PUBLIC_COURSES_API_URL?.trim();
  if (configuredEndpoint) {
    return configuredEndpoint.replace(/\/courses\.php\/?$/i, '').replace(/\/$/, '');
  }

  const configuredBase = process.env.NEXT_PUBLIC_API_URL?.trim();
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isLocalHost = host === 'localhost' || host === '127.0.0.1';
    if (!isLocalHost) {
      if (configuredBase && !configuredBase.includes('localhost')) {
        return configuredBase.replace(/\/$/, '');
      }
      return `${window.location.origin}/api`;
    }
  }
  return (configuredBase || 'http://localhost:8080').replace(/\/$/, '');
}

export function getCoursesEndpointUrl(): string {
  const configuredEndpoint = process.env.NEXT_PUBLIC_COURSES_API_URL?.trim();
  if (configuredEndpoint) {
    return configuredEndpoint;
  }
  return `${getApiBaseUrl()}/courses.php`;
}

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export function mapApiCourseToCourse(item: ApiCourseItem): Course {
  return {
    id: String(item.id),
    slug: item.slug,
    title: item.tema,
    category: item.categoria,
    duration: item.duracao || null,
    level: item.nivel || null,
    image: item.foto_capa || '/images/course-centricity.jpg',
    instructor: {
      name: item.professor,
      role: item.cargo || null,
      companyOrExperience: item.experiencia_professor || null,
      avatar: item.foto_professor || '/instructors/ricardo-mello.jpg',
    },
    summary: item.resumo,
    whatYouWillLearn: item.o_que_vai_aprender || null,
    modules: Array.isArray(item.modulos) && item.modulos.length > 0 ? item.modulos : null,
    featuredHome: Boolean(item.destaque_home),
  };
}

export async function fetchCoursesFromApi(): Promise<{
  courses: Course[];
  categories: string[];
}> {
  const endpointUrl = getCoursesEndpointUrl();
  const response = await fetch(endpointUrl, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const json: ApiCoursesResponse = await response.json();
  if (!json.success || !Array.isArray(json.data)) {
    throw new Error('Formato de resposta inválido da API');
  }

  const courses = json.data.map(mapApiCourseToCourse);
  const apiCategories =
    Array.isArray(json.categorias) && json.categorias.length > 0
      ? json.categorias
      : Array.from(new Set(courses.map((c) => c.category).filter(Boolean)));

  return {
    courses,
    categories: ['Todos os Cursos', ...apiCategories],
  };
}

export const COURSES_DATA: Course[] = [
  {
    id: 'customer-centricity',
    title: 'Customer Centricity na Logística: Do Discurso à Prática',
    category: 'Supply Chain Estratégico',
    duration: '12h de aulas',
    level: 'Executivo',
    image: '/images/course-centricity.jpg',
    instructor: {
      name: 'Tania Heck Trotta',
      role: 'Executiva Sênior de Supply Chain',
      companyOrExperience: '+20 anos de FMCG, Pharma e Medical Devices',
      avatar: '/instructors/tania-heck.png',
    },
    summary: 'Como transformar a logística em um diferencial competitivo de fidelização, conectando Supply Chain com Comercial e Finanças.',
    modules: [
      'Alinhamento estratégico entre Operações e Vendas',
      'Métricas de nível de serviço com foco no cliente (OTIF, NPS)',
      'Gestão de crises e recuperação de falhas logísticas',
      'Casos práticos de empresas globais'
    ]
  },
  {
    id: 'reforma-tributaria-transportes',
    title: 'Reforma Tributária: Impactos Práticos no Transporte e Logística',
    category: 'Tributário & Custos',
    duration: '10h de aulas',
    level: 'Avançado',
    image: '/images/course-tax.jpg',
    instructor: {
      name: 'Rafael Brito',
      role: 'CEO & Especialista Tributário',
      companyOrExperience: '+15 anos em estratégia financeira e tributos',
      avatar: '/instructors/rafael-brito.jpg',
    },
    summary: 'Análise minuciosa da nova legislação tributária brasileira (IBS e CBS) e como recalcular custos de frete e margens.',
    modules: [
      'Panorama da Reforma Tributária para o setor de transportes',
      'Substituição de ICMS e ISS: Novo cálculo de fretes',
      'Créditos tributários na cadeia de suprimentos',
      'Planejamento e mitigação de impactos na tabela de preços'
    ]
  },
  {
    id: 'gestao-dados-sop',
    title: 'Gestão Baseada em Dados e S&OP de Alta Performance',
    category: 'Supply Chain Estratégico',
    duration: '16h de aulas',
    level: 'Executivo',
    image: '/images/course-finance.jpg',
    instructor: {
      name: 'Ricardo Mello',
      role: 'COO & Executivo de Operações',
      companyOrExperience: 'Ex-executivo Cargill, Johnson & Johnson e Accenture',
      avatar: '/instructors/ricardo-mello.jpg',
    },
    summary: 'Estruturação de governança de dados para planejamento integrado de vendas e operações (S&OP) com foco em previsibilidade.',
    modules: [
      'Fundamentos e maturidade do processo de S&OP/IBP',
      'Previsão de demanda com dados estatísticos e algoritmos',
      'Equilíbrio entre estoque, capacidade produtiva e faturamento',
      'Dashboards executivos de tomada de decisão'
    ]
  },
  {
    id: 'esg-supply-chain',
    title: 'Práticas ESG em Supply Chain: Muito Além do Discurso',
    category: 'Liderança & ESG',
    duration: '8h de aulas',
    level: 'Intermediário',
    image: '/images/logistics-fleet.jpg',
    instructor: {
      name: 'Danilo Doriguelo de Melo',
      role: 'Diretor Executivo de Supply Chain',
      companyOrExperience: 'Coautor de "Logística Viva" e pós-graduado Oxford',
      avatar: '/instructors/danilo-doriguelo.jpg',
    },
    summary: 'Implementação de rotas descarbonizadas, economia circular e conformidade social na cadeia de fornecedores.',
    modules: [
      'Pegada de carbono na logística de distribuição (Escopos 1, 2 e 3)',
      'Critérios de homologação e auditoria sustentável de transportadores',
      'Embalagens retornáveis e logística reversa na prática',
      'Relatórios e governança ESG para auditorias internacionais'
    ]
  },
  {
    id: 'veiculos-autonomos-frotas',
    title: 'Inovação e Veículos Autônomos na Logística: O Futuro Chegou',
    category: 'Tecnologia & IA',
    duration: '10h de aulas',
    level: 'Avançado',
    image: '/images/warehouse-tech.jpg',
    instructor: {
      name: 'Marilia Ramalho',
      role: 'Americas Supply Chain Director',
      companyOrExperience: 'Fundadora do Women in Logistics, +25 anos de carreira',
      avatar: '/instructors/marilia-ramalho.jpg',
    },
    summary: 'Como as novas tecnologias de telemetria autônoma, drones e inteligência de frotas estão transformando custos de transporte.',
    modules: [
      'Níveis de automação veicular e regulamentação no Brasil',
      'Telemetria preditiva e segurança de ponta a ponta',
      'Automação de pátios e docas inteligentes',
      'Viabilidade econômica e cronograma de transição'
    ]
  },
  {
    id: 'gestao-pessoas-supply-chain',
    title: 'Gestão de Gente: O Diferencial Oculto do Supply Chain',
    category: 'Liderança & ESG',
    duration: '12h de aulas',
    level: 'Executivo',
    image: '/images/team-learning.jpg',
    instructor: {
      name: 'Francisco Tarosso',
      role: 'Diretor Sênior de Operações',
      companyOrExperience: 'Liderança em grandes multinacionais globais',
      avatar: '/instructors/francisco-tarosso.jpg',
    },
    summary: 'Construção de culturas operacionais de alta performance, engajamento e redução drástica do turnover em galpões e estradas.',
    modules: [
      'Retenção de talentos operacionais e técnicos em logística',
      'Comunicação não-violenta no chão de fábrica e galpão',
      'Remuneração variável atrelada a KPIs logísticos',
      'Desenvolvimento de liderança para supervisores'
    ]
  },
  {
    id: 'algoritmos-e-pessoas',
    title: 'Entre Algoritmos e Pessoas: A Nova Liderança Logística',
    category: 'Tecnologia & IA',
    duration: '14h de aulas',
    level: 'Intermediário',
    image: '/images/community-discussion.jpg',
    instructor: {
      name: 'Daiana Nunes',
      role: 'Professora e Executiva de Supply Chain',
      companyOrExperience: 'Ex-Amazon Brasil, Petz e DPSP; Doutoranda FGV',
      avatar: '/instructors/daiana-nunes.jpg',
    },
    summary: 'A convergência entre algoritmos de roteirização, automação e a gestão humana para entrega no mesmo dia (Same Day Delivery).',
    modules: [
      'Desmistificando a IA no dia a dia da logística',
      'Roteirização algorítmica vs. intuição do motorista',
      'Cultura data-driven para equipes de armazém',
      'Adoção tecnológica sem fricção na equipe'
    ]
  },
  {
    id: 'gestao-estoque-wms',
    title: 'Otimização de Armazenagem e Gestão Avançada de WMS',
    category: 'Armazenagem & WMS',
    duration: '15h de aulas',
    level: 'Avançado',
    image: '/images/course-wms.jpg',
    instructor: {
      name: 'Carlos Jardim',
      role: 'Diretor de Supply Chain',
      companyOrExperience: '+22 anos de atuação em indústria farmacêutica e bens de consumo',
      avatar: '/instructors/carlos-jardim.jpg',
    },
    summary: 'Técnicas modernas de layout de centro de distribuição, picking por voz/luz, endereçamento inteligente e acuracidade de 99.8%.',
    modules: [
      'Classificação ABC multicritério e dimensionamento de pulmão',
      'Estratégias de slotting e redução de deslocamento no CD',
      'Integração de WMS com ERP e automações robotizadas',
      'Auditoria contínua e inventários rotativos'
    ]
  },
  {
    id: 'negociacao-fretes-transportes',
    title: 'Engenharia de Custos e Negociação Estratégica de Fretes',
    category: 'Transporte & Frotas',
    duration: '12h de aulas',
    level: 'Intermediário',
    image: '/images/course-multimodal.jpg',
    instructor: {
      name: 'Alberto Rodrigues',
      role: 'Diretor de Logística',
      companyOrExperience: 'Especialista em transporte granel, químicos e carga geral',
      avatar: '/instructors/alberto-rodrigues.jpg',
    },
    summary: 'Planilhas de custo padrão, negociação de tarifas spot e contratuais, gestão de pedágios, diesel e contratos com transportadoras.',
    modules: [
      'Composição real da planilha de custos do transportador',
      'Fórmula paramétrica de reajuste de combustível',
      'SLA e acordos de nível de serviço com penalidades',
      'Bid de transporte: como conduzir licitações eficientes'
    ]
  },
  {
    id: 'ia-generativa-logistica',
    title: 'Inteligência Artificial Aplicada ao Supply Chain 4.0',
    category: 'Tecnologia & IA',
    duration: '18h de aulas',
    level: 'Executivo',
    image: '/images/dashboard-analytics.jpg',
    instructor: {
      name: 'Alexandre Faria',
      role: 'VP de Supply Chain',
      companyOrExperience: 'Líder em e-commerce de grande porte e varejo de moda',
      avatar: '/instructors/alexandre-faria.jpg',
    },
    summary: 'Como aplicar modelos de linguagem (LLMs), machine learning e visão computacional para prever gargalos e automatizar SAC logístico.',
    modules: [
      'Casos de uso comprovados de IA generativa no armazém',
      'Automação de rastreamento com bots e visão computacional',
      'Modelos preditivos para rupturas de estoque',
      'Framework de implementação de IA sem estourar o orçamento'
    ]
  },
  {
    id: 'comex-cadeias-globais',
    title: 'Logística Internacional e Resiliência em Cadeias Globais',
    category: 'Supply Chain Estratégico',
    duration: '14h de aulas',
    level: 'Avançado',
    image: '/images/course-comex.jpg',
    instructor: {
      name: 'Renata Albuquerque',
      role: 'Head de Logística Internacional',
      companyOrExperience: '+18 anos gerenciando importações portuárias e aeroviárias',
      avatar: '/instructors/renata-albuquerque.jpg',
    },
    summary: 'Como contornar crises de frete marítimo, demurrage, desembaraço aduaneiro e riscos geopolíticos em rotas internacionais.',
    modules: [
      'Incoterms 2020 e distribuição de responsabilidades e custos',
      'Gestão de fretes marítimos e aéreos em períodos voláteis',
      'Gestão de riscos geopolíticos e nearshoring',
      'OEA (Operador Econômico Autorizado) e canais rápidos'
    ]
  },
  {
    id: 'logistica-reversa-e-commerce',
    title: 'Logística Reversa e Pós-Venda de Alta Eficiência',
    category: 'Armazenagem & WMS',
    duration: '10h de aulas',
    level: 'Iniciante',
    image: '/images/course-lastmile.jpg',
    instructor: {
      name: 'Eduardo Silveira',
      role: 'Consultor Sênior de E-commerce',
      companyOrExperience: 'Ex-gerente de operações em marketplaces líderes',
      avatar: '/instructors/eduardo-silveira.jpg',
    },
    summary: 'Estratégias para reduzir o custo do retorno de mercadorias, acelerar a triagem e transformar a devolução em recompra.',
    modules: [
      'Mapeamento dos motivos de devolução e prevenção',
      'Centros de triagem reversa e reintegração ao estoque',
      'Pontos de coleta (PUDO) e postagem reversa inteligente',
      'Impacto financeiro da logística reversa no DRE da empresa'
    ]
  }
];

export const CATEGORIES = [
  'Todos os Cursos',
  'Supply Chain Estratégico',
  'Transporte & Frotas',
  'Armazenagem & WMS',
  'Tecnologia & IA',
  'Tributário & Custos',
  'Liderança & ESG'
] as const;
