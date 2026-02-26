export const BRAND = {
  companyName: "IN Soluções Digitais",
  domain: "insolucoesdigitais.com.br",
  email: "contato@insolucoesdigitais.com.br",
  whatsappNumber: "5573999523614",
  instagram: "https://www.instagram.com/in_solucoes_digitais/",
  founderName: "Ivan",
};

export const LINKS = {
  whatsapp: `https://wa.me/${BRAND.whatsappNumber}`,
  incontrolInstaller:
    "https://www.mediafire.com/file/49npms33214cclk/InControl_Installer_v1.6.exe/file",
};

export const NAV = [
  { label: "Empresa", to: "/empresa" },
  { label: "Produtos", to: "/produtos" },
  { label: "Serviços", to: "/servicos" },
  { label: "Portfólio", to: "/portfolio" },
  { label: "Contato", to: "/contato" },
];

export const SERVICES = [
  {
    title: "Automações & Integrações",
    desc: "Automatize processos e conecte sistemas. Menos retrabalho, mais consistência e rastreabilidade.",
    bullets: [
      "Integrações e APIs",
      "Rotinas automatizadas",
      "Auditoria e logs",
      "Dados organizados",
    ],
  },
  {
    title: "Apps & Sistemas Web",
    desc: "Sistemas sob medida com arquitetura modular, segurança e experiência premium.",
    bullets: [
      "Painéis e dashboards",
      "Multiusuário / multigrupo",
      "Permissões e papéis",
      "Deploy e suporte",
    ],
  },
  {
    title: "Sites de Alta Conversão",
    desc: "Presença profissional com design clean, performance e copy para transformar visitas em conversa.",
    bullets: [
      "Institucional premium",
      "Landing pages",
      "SEO básico",
      "Formulário/WhatsApp",
    ],
  },
];

export const PRODUCTS = [
  {
    slug: "incontrol",
    name: "InControl",
    tagline: "Sistema integrado de gestão operacional",
    summary:
      "Centralize, organize e automatize processos críticos em um único painel — com isolamento total por grupo, histórico e rastreabilidade.",
    highlights: [
      "Arquitetura modular",
      "Isolamento por grupo (multi-tenant)",
      "Logs, auditoria e rastreabilidade",
      "Alertas por módulo",
      "Base pronta + personalização",
    ],
  },
  {
    slug: "remote-order",
    name: "Remote Order",
    tagline: "Automação sob medida + acionamento remoto",
    summary:
      "Aplicação única por cliente: automações específicas, acionamento remoto e status — para executar tarefas à distância com controle e segurança.",
    highlights: [
      "Projeto exclusivo por cliente",
      "Ações remotas com status",
      "Automações específicas (sob demanda)",
      "Foco em eficiência e manutenção",
      "Entrega com documentação",
    ],
  },
];

export const PRICING = {
  maintenance: {
    title: "Manutenção Mensal",
    subtitle: "Evolução contínua, suporte e melhorias.",
    items: [
      "Correções e ajustes",
      "Evoluções mensais (escopo acordado)",
      "Performance e segurança",
      "Backup e monitoramento (opcional)",
    ],
    note: "O valor final depende do escopo e da criticidade do sistema.",
  },
  incontrol: {
    title: "InControl",
    plans: [
      {
        name: "Padrão",
        price: "Mensalidade",
        desc: "Base completa pronta para operação.",
        bullets: [
          "Acesso por grupo",
          "Módulos essenciais",
          "Logs/alertas",
          "Suporte",
        ],
        cta: "Quero o padrão",
      },
      {
        name: "Personalizado",
        price: "Setup + Mensalidade",
        desc: "Versão própria, fluxo e módulos sob medida.",
        bullets: [
          "Customização de módulos",
          "Integrações",
          "Regras específicas",
          "Roadmap evolutivo",
        ],
        cta: "Quero personalizar",
      },
    ],
  },
};

export const FAQ = [
  {
    q: "Você atende empresas além do FiveM?",
    a: "Sim. Hoje há forte atuação no FiveM, mas a base é modular e pode ser adaptada para operações reais (comércio/serviços) com personalização.",
  },
  {
    q: "Você oferece manutenção mensal?",
    a: "Sim. É o modelo ideal para evoluir com previsibilidade: correções, melhorias e suporte contínuo.",
  },
  {
    q: "Como funciona um projeto sob medida?",
    a: "Briefing → protótipo/design → desenvolvimento por etapas → testes → deploy. Tudo com comunicação direta e prazos claros.",
  },
];
