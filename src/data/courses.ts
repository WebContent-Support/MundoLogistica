export interface Course {
  id: string;
  title: string;
  category: 'Transporte & Frotas' | 'Armazenagem & WMS' | 'Supply Chain Estratégico' | 'Tecnologia & IA' | 'Tributário & Custos' | 'Liderança & ESG';
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Executivo';
  instructor: {
    name: string;
    role: string;
    companyOrExperience: string;
    avatar: string;
  };
  summary: string;
  modules: string[];
}

export const COURSES_DATA: Course[] = [
  {
    id: 'customer-centricity',
    title: 'Customer Centricity na Logística: Do Discurso à Prática',
    category: 'Supply Chain Estratégico',
    duration: '12h de aulas',
    level: 'Executivo',
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
    instructor: {
      name: 'Carlos Jardim',
      role: 'Diretor de Supply Chain',
      companyOrExperience: '+22 anos de atuação em indústria farmacêutica e bens de consumo',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
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
    instructor: {
      name: 'Alberto Rodrigues',
      role: 'Diretor de Logística',
      companyOrExperience: 'Especialista em transporte granel, químicos e carga geral',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80',
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
    instructor: {
      name: 'Alexandre Faria',
      role: 'VP de Supply Chain',
      companyOrExperience: 'Líder em e-commerce de grande porte e varejo de moda',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80',
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
    instructor: {
      name: 'Renata Albuquerque',
      role: 'Head de Logística Internacional',
      companyOrExperience: '+18 anos gerenciando importações portuárias e aeroviárias',
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80',
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
    instructor: {
      name: 'Eduardo Silveira',
      role: 'Consultor Sênior de E-commerce',
      companyOrExperience: 'Ex-gerente de operações em marketplaces líderes',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
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
