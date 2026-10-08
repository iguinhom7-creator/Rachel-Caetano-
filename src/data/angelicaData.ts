export interface WorkPhoto {
  id: string;
  title: string;
  category: string;
  localUrl: string;
  fallbackUrl: string;
  objectPosition?: string;
}

export const ANGELICA_DATA = {
  name: "Angélica Souza Nails",
  shortName: "Angélica Souza",
  specialty: "Especialista em Alongamento Natural",
  badge: "Nail Designer Premium",

  // Profile photo
  profilePhoto: "/images/angelica/perfil.jpg",
  fallbackProfilePhoto: "https://i.postimg.cc/xjkf7BnT/IMG-1849.jpg",

  links: {
    whatsapp: "https://wa.me/5531990969136",
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
    description: "Cada atendimento é desenvolvido buscando harmonia perfeita entre comprimento, formato, estrutura e o estilo pessoal de cada cliente, garantindo resistência com acabamento fino e imperceptível.",
    concepts: [
      { id: "acabamento", label: "Acabamento natural", desc: "Estrutura fina e curvatura delicada que respeita a estética original." },
      { id: "formatos", label: "Formatos personalizados", desc: "Harmonia desenhada para valorizar a anatomia única das suas mãos." },
      { id: "delicadeza", label: "Delicadeza", desc: "Elegância discreta e sofisticação em cada detalhe." },
      { id: "durabilidade", label: "Durabilidade", desc: "Estrutura resistente preparada para acompanhar o seu dia a dia." },
      { id: "cuidado", label: "Cuidado com as unhas", desc: "Preservação absoluta da integridade e saúde da lâmina natural." },
      { id: "detalhes", label: "Atenção aos detalhes", desc: "Precisão artesanal desde o alinhamento até o acabamento final." }
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
        fallbackUrl: "https://i.postimg.cc/7LCtD1h8/IMG-1852.png",
        objectPosition: "object-[center_60%]"
      },
      {
        id: "trabalho-2",
        title: "Estrutura Fina & Simetria",
        category: "Alongamento Natural",
        localUrl: "/images/angelica/trabalho_2.jpg",
        fallbackUrl: "https://i.postimg.cc/YS4DkN95/IMG-1854.jpg",
        objectPosition: "object-center"
      },
      {
        id: "trabalho-3",
        title: "Acabamento Delicado & Durabilidade",
        category: "Alongamento Natural",
        localUrl: "/images/angelica/trabalho_3.jpg",
        fallbackUrl: "https://i.postimg.cc/tg1vydTS/IMG-1847.jpg",
        objectPosition: "object-[45%_72%]"
      },
      {
        id: "trabalho-4",
        title: "Harmonia & Brilho Natural",
        category: "Alongamento Natural",
        localUrl: "/images/angelica/trabalho_4.jpg",
        fallbackUrl: "https://i.postimg.cc/zfL25wB9/IMG-1848.jpg",
        objectPosition: "object-center"
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
