export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  externalUrl?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration?: string;
  tag?: string;
  features: string[];
}

export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  modality: string;
  targetAudience: string;
  techniques: string[];
  enrollmentInfo: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  service?: string;
}

export const RACHEL_DATA = {
  name: "Rachel Caetano",
  role: "Nail Designer",
  fullName: "Rachel Caetano Nail Designer",
  specialty: "Especialista em Unhas Naturais",
  headlinePhrase: "Realçando sua beleza através de unhas impecáveis, delicadas e sofisticadas.",
  city: "Belo Horizonte · MG",
  fullLocation: "Belo Horizonte, MG (Atendimento com Hora Marcada)",

  // Logo oficial
  logoUrl: "/images/rachel/logo.jpg",
  logoExternalUrl: "https://i.postimg.cc/PxGj2rHT/8970b41e-5ef0-46a3-bebd-1ee39a49cc2d.jpg",

  // Foto principal da profissional
  portraitUrl: "/images/rachel/rachel-portrait.jpg",
  portraitExternalUrl: "https://i.postimg.cc/RVRygwXL/803bbe82-7254-4a35-9551-28d886e30dd8.jpg",

  // Links oficiais fornecidos
  links: {
    whatsapp: "https://wa.me/message/3VLZFGNH7M4CL1",
    instagram: "https://www.instagram.com/rachelcaetanonail?stkn=dmwyOXpjOTFpNW0=",
    google: "https://www.google.com.br/search?kgmid=/g/11y_t82hlf&hl=pt-BR&q=Rachel+Caetano+Nail+designer+BH&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m1/3&kgs=bcea51efd37be5eb&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m1/3",
    galleryOriginal: "https://postimg.cc/gallery/srCRj9Q",
  },

  instagramHandle: "@rachelcaetanonail",

  // Seção Sobre Rachel
  about: {
    heading: "Sobre Rachel Caetano",
    subheading: "Dedicação, zelo e amor pela arte de cuidar e valorizar as suas unhas",
    paragraphs: [
      "Bem-vinda ao meu espaço. Como Nail Designer, meu propósito vai muito além de pintar ou transformar o visual: é sobre acolhimento, cuidado genuíno com a saúde da lâmina e a celebração da beleza natural de cada cliente.",
      "Cada atendimento é conduzido com calma, atenção aos detalhes e técnicas precisas para entregar acabamentos finos, simétricos e com a elegância do luxo discreto — valorizando suas mãos no dia a dia ou em ocasiões especiais.",
      "Com protocolos rigorosos de biossegurança, produtos de alta qualidade e um ambiente pensado para o seu conforto, proporciono um momento só seu de renovação, descanso e autoestima em Belo Horizonte."
    ],
    highlights: [
      "Biossegurança e esterilização rigorosa",
      "Foco na integridade e fortalecimento da lâmina natural",
      "Acabamento fino, simétrico e sem excesso de produto",
      "Atendimento exclusivo e acolhedor com hora marcada"
    ]
  },

  // Serviço especializado do estúdio
  services: [
    {
      id: "unhas-naturais-gel",
      name: "Unhas Naturais & Esmaltação em Gel",
      duration: "Aprox. 1h30",
      description: "Preparação não-invasiva da lâmina com cuticulagem alinhada e aplicação de gel de alto brilho e durabilidade impecável por até 21 dias.",
      features: [
        "Preservação integral da lâmina",
        "Brilho espelhado e resistente",
        "Secagem imediata na cabine LED"
      ]
    }
  ] as ServiceItem[],

  // Galeria de Trabalhos com as fotos reais fornecidas
  galleryItems: [
    {
      id: "borgonha-classico",
      title: "Borgonha Clássico",
      subtitle: "Vinho Gloss Intenso em Unha Natural",
      category: "Esmaltação em Gel",
      imageUrl: "/images/gallery/work-1.jpg",
      externalUrl: "https://i.postimg.cc/522GTjRF/54f9e42f-8156-482c-a0b1-b2cf73093712.jpg"
    },
    {
      id: "alongamento-natural",
      title: "Alongamento com Curvatura Suave",
      subtitle: "Estrutura Fina e Acabamento Sem Degrau",
      category: "Alongamento",
      imageUrl: "/images/gallery/work-2.jpg",
      externalUrl: "https://i.postimg.cc/bNTWm13H/6737b588-9d18-4b10-89d3-5583d0664eb4.jpg"
    },
    {
      id: "preto-glossy-almond",
      title: "Preto Glossy Almond",
      subtitle: "Formato Amendoado com Brilho Profundo",
      category: "Unhas Naturais",
      imageUrl: "/images/gallery/work-3.jpg",
      externalUrl: "https://i.postimg.cc/NjjVSLz2/729e763d-5bd5-4d01-8723-8fcf4bf7e00d.jpg"
    },
    {
      id: "cuidado-alto-padrao",
      title: "Cuidado & Precisão nos Detalhes",
      subtitle: "Alinhamento e Cuticulagem Impecável",
      category: "Cuticulagem",
      imageUrl: "/images/gallery/work-4.jpg",
      externalUrl: "https://i.postimg.cc/RVRygwXL/803bbe82-7254-4a35-9551-28d886e30dd8.jpg"
    }
  ] as GalleryItem[],

  // Cursos e Formação
  courses: {
    heading: "Cursos e Formação",
    subheading: "Aprenda as técnicas e a metodologia refinada de Rachel Caetano",
    intro: "Além dos atendimentos no estúdio, Rachel Caetano compartilha seu método de cuidado, alinhamento e biossegurança para quem deseja ingressar ou se destacar no mercado da beleza.",
    items: [
      {
        id: "formacao-unhas-naturais",
        badge: "Mentoria VIP",
        title: "Especialização em Unhas Naturais & Alinhamento",
        subtitle: "Aprenda a valorizar a unha da cliente com alta durabilidade e zero danos",
        modality: "Presencial em Belo Horizonte (Turma reduzida ou VIP individual)",
        targetAudience: "Para iniciantes apaixonadas por unhas ou manicures que buscam se aperfeiçoar com técnicas refinadas.",
        techniques: [
          "Anatomia e preservação da lâmina ungueal",
          "Preparação química e mecânica sem abrasão",
          "Técnica de alinhamento com nivelamento perfeito",
          "Esmaltação rente à cutícula sem encostar na pele",
          "Fotografia e posicionamento para atrair clientes fidelizadas"
        ],
        enrollmentInfo: "Vagas limitadas por turma para garantir acompanhamento prático individualizado de cada aluna."
      },
      {
        id: "aperfeicoamento-cuticulagem",
        badge: "Prático & Focado",
        title: "Workshop de Cuticulagem de Precisão & Biossegurança",
        subtitle: "O segredo do acabamento milimétrico, limpo e seguro",
        modality: "Prática intensiva com modelos reais",
        targetAudience: "Nail designers que desejam acelerar seu tempo sem perder a perfeição nos cantinhos.",
        techniques: [
          "Uso seguro de brocas diamantadas",
          "Técnica de tesoura ou alicate de precisão",
          "Polimento do perióstio para durabilidade prolongada",
          "Protocolos sanitários e de esterilização segundo a ANVISA"
        ],
        enrollmentInfo: "Consulte as próximas datas e disponibilidade de modelos com nossa equipe."
      }
    ] as CourseItem[]
  },

  // Avaliações de clientes
  reviews: {
    averageRating: 5.0,
    totalReviews: "100% de satisfação",
    sourceName: "Google Perfil de Empresa",
    items: [
      {
        id: "rev-1",
        author: "Camila Rodrigues",
        rating: 5,
        date: "Avaliação verificada",
        comment: "O trabalho da Rachel é surreal de tão perfeito! Minhas unhas nunca estiveram tão saudáveis e o acabamento é finíssimo. O estúdio é um charme e o atendimento super acolhedor.",
        service: "Unhas Naturais em Gel"
      },
      {
        id: "rev-2",
        author: "Fernanda Silveira",
        rating: 5,
        date: "Avaliação verificada",
        comment: "Muito detalhista, atenta a cada cantinho e com uma higiene impecável. Dá pra ver o amor que ela tem pelo que faz. Não troco por nada em BH!",
        service: "Blindagem Estruturada"
      },
      {
        id: "rev-3",
        author: "Mariana Alvarenga",
        rating: 5,
        date: "Avaliação verificada",
        comment: "Fiz o atendimento com a Rachel e fiquei encantada com a delicadeza. Fica natural, leve e durou mais de 20 dias intacta. Super recomendo!",
        service: "Alongamento com Acabamento Natural"
      }
    ] as ReviewItem[]
  },

  // Informações de Localização
  location: {
    street: "Rua Sergipe, 1087",
    neighborhood: "Savassi",
    city: "Belo Horizonte · MG",
    addressSummary: "Rua Sergipe, 1087 — Savassi, Belo Horizonte · MG",
    fullAddress: "Rua Sergipe, 1087 - Savassi, Belo Horizonte · MG",
    details: "Studio Rachel Caetano Nail Designer",
    directionsText: "Localizado no coração da Savassi, espaço acolhedor, climatizado e com total privacidade para o seu atendimento.",
    scheduleHours: "Segunda a Sábado · Atendimento com agendamento prévio",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Sergipe+1087+Savassi+Belo+Horizonte"
  },

  // Chamada Final
  finalCta: {
    title: "Agende seu Momento de Cuidado",
    description: "Sinta a confiança de estar com unhas impecáveis, elegantes e tratadas com carinho e qualidade. Escolha o melhor dia e horário para você.",
    button: "AGENDAR MEU HORÁRIO"
  }
};
