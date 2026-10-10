export interface WorkPhoto {
  id: string;
  title: string;
  category: string;
  localUrl: string;
  fallbackUrl: string;
}

export const ANGELICA_DATA = {
  name: "Angélica Souza Nails",
  shortName: "Angélica Souza",
  specialty: "Especialista em Alongamento Natural",
  badge: "Nail Designer Premium",

  // Profile photo provided
  profilePhoto: "/images/angelica/perfil.jpg",
  fallbackProfilePhoto: "https://i.postimg.cc/xjkf7BnT/IMG-1849.jpg",

  links: {
    whatsapp: "https://wa.me/5531990969136",
    vimeo: "https://vimeo.com/1234661450?share=copy&fl=sv&fe=ci",
    vimeoEmbed: "https://player.vimeo.com/video/1234661450?autoplay=1&title=0&byline=0&portrait=0&badge=0&texttrack=&transcript=0&cc=0&app_id=122963",
    instagram: "https://www.instagram.com/angelica_souzanails?stkn=YTJlYWVqbjMydDM5",
    instagramDirect: "https://ig.me/m/angelica_souzanails",
    googleMaps: "https://share.google/JbGDdMfH4LNgpmwoX",
    gallery: "https://postimg.cc/gallery/bGB1S9q"
  },
  phone: "(31) 99096-9136",

  instagramHandle: "@angelica_souzanails",
  address: "Rua Joaquim de Paula, 369 – Inconfidência",
  city: "Belo Horizonte · MG",

  hero: {
    title: "Angélica Souza Nails",
    subtitle: "Especialista em Alongamento Natural",
    description: "Unhas delicadas, elegantes e personalizadas para realçar a beleza das suas mãos.",
    primaryCta: "Agendar meu horário",
    secondaryCta: "Conhecer meu trabalho"
  },

  about: {
    heading: "Prazer, eu sou a Angélica! 🤍",
    paragraphs: [
      "Olá, eu sou a Angélica! 🤍",
      "Sou Nail Designer e especialista em alongamentos naturais. Meu propósito é realçar a beleza das suas mãos através de unhas delicadas, elegantes, duradouras e feitas de forma personalizada, respeitando sempre o formato e a saúde das unhas.",
      "Cada atendimento é pensado com carinho, cuidado e atenção aos detalhes."
    ]
  },

  specialtySection: {
    title: "Especialista em Alongamento Natural",
    subtitle: "Beleza que respeita a naturalidade das suas unhas.",
    description: "Cada procedimento é desenvolvido buscando a harmonia perfeita entre comprimento, formato, estrutura e o estilo pessoal de cada cliente, garantindo resistência sem perder a leveza.",
    concepts: [
      { id: "acabamento", label: "Acabamento natural", desc: "Estrutura fina, curvatura sutil e aparência imperceptível." },
      { id: "formatos", label: "Formatos personalizados", desc: "Adequação perfeita à anatomia e formato das suas mãos." },
      { id: "delicadeza", label: "Delicadeza", desc: "Leveza visual que transmite sofisticação e elegância." },
      { id: "durabilidade", label: "Durabilidade", desc: "Resistência planejada para o seu ritmo e dia a dia." },
      { id: "cuidado", label: "Cuidado com as unhas", desc: "Preservação integral da saúde e integridade da lâmina." },
      { id: "detalhes", label: "Atenção aos detalhes", desc: "Precisão em cada etapa, do alinhamento ao brilho final." }
    ]
  },

  gallery: {
    title: "Meu trabalho",
    subtitle: "Detalhes que fazem toda a diferença.",
    items: [
      {
        id: "trabalho-1",
        title: "Alongamento Natural & Alinhamento",
        category: "Alongamento Natural",
        localUrl: "/images/angelica/trabalho_1.png",
        fallbackUrl: "https://i.postimg.cc/7LCtD1h8/IMG-1852.png"
      },
      {
        id: "trabalho-2",
        title: "Estrutura Delicada & Brilho Gloss",
        category: "Alongamento Natural",
        localUrl: "/images/angelica/trabalho_2.jpg",
        fallbackUrl: "https://i.postimg.cc/zfL25wB9/IMG-1848.jpg"
      },
      {
        id: "trabalho-3",
        title: "Acabamento Sofisticado & Simetria",
        category: "Alongamento Natural",
        localUrl: "/images/angelica/trabalho_3.jpg",
        fallbackUrl: "https://i.postimg.cc/YS4DkN95/IMG-1854.jpg"
      },
      {
        id: "trabalho-4",
        title: "Harmonia & Resistência Fina",
        category: "Alongamento Natural",
        localUrl: "/images/angelica/trabalho_4.jpg",
        fallbackUrl: "https://i.postimg.cc/tg1vydTS/IMG-1847.jpg"
      }
    ] as WorkPhoto[]
  },

  differentials: {
    title: "Por que escolher a Angélica?",
    items: [
      {
        title: "Alongamento Natural",
        description: "Resultado sofisticado e harmonioso, valorizando a beleza das mãos."
      },
      {
        title: "Atendimento Personalizado",
        description: "Cada unha e cada cliente possuem características diferentes. O trabalho é adaptado para cada pessoa."
      },
      {
        title: "Cuidado nos Detalhes",
        description: "Precisão, acabamento e delicadeza em cada etapa do procedimento."
      },
      {
        title: "Beleza e Durabilidade",
        description: "Unhas pensadas para unir estética, conforto e resistência."
      }
    ]
  },

  experience: {
    title: "Um momento pensado para você.",
    quote: "Cada atendimento é realizado com atenção, cuidado e dedicação para que você tenha uma experiência especial do início ao fim.",
    steps: [
      {
        number: "01",
        title: "Avaliação",
        description: "Entender suas preferências e características das unhas."
      },
      {
        number: "02",
        title: "Personalização",
        description: "Escolher o formato e estilo que mais combinam com você."
      },
      {
        number: "03",
        title: "Alongamento",
        description: "Realizar o procedimento com precisão e cuidado."
      },
      {
        number: "04",
        title: "Finalização",
        description: "Entregar um acabamento delicado, elegante e profissional."
      }
    ]
  },

  instagramSection: {
    title: "Acompanhe meu trabalho",
    description: "Veja mais resultados, novidades e trabalhos realizados no meu Instagram.",
    handle: "@angelica_souzanails",
    cta: "Seguir no Instagram"
  },

  location: {
    title: "Onde me encontrar",
    address: "Rua Joaquim de Paula, 369 – Inconfidência",
    cta: "Ver localização no Google"
  },

  finalCta: {
    title: "Pronta para transformar suas unhas?",
    description: "Agende seu horário e venha conhecer um atendimento feito especialmente para você.",
    button: "Agendar horário"
  }
};
