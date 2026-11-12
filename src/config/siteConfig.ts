/**
 * AUTO PEÇAS LTDA — Especialistas em Motores Automotivos
 * Configuração comercial focada 100% em motores automotivos novos, parciais e revisados com Nota Fiscal.
 */

export interface EngineCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  popularModels: string[];
  image: string;
  specs: string[];
  tag: string;
}

export interface SiteConfiguration {
  company: {
    displayName: string;
    tradeNameReceipt: string;
    legalName: string;
    cnpj: string;
    stateRegistration: string;
    address: {
      street: string;
      number: string;
      neighborhood: string;
      city: string;
      state: string;
      cep: string;
      fullFormatted: string;
    };
    contact: {
      phone: string;
      phoneRaw: string;
      whatsapp: string;
      whatsappRaw: string;
      email: string;
    };
    businessHours: {
      weekdays: string;
      saturday: string;
      sundayAndHolidays: string;
      note: string;
    };
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCtaText: string;
    secondaryCtaText: string;
  };
  engineCategories: EngineCategory[];
}

export const siteConfig: SiteConfiguration = {
  company: {
    displayName: 'AUTO MOTORES LTDA',
    tradeNameReceipt: 'AUTO MOTORES LTDA',
    legalName: 'PERIM COMERCIO ATACADISTA E VAREJISTA DE AUTO PECAS LTDA',
    cnpj: '51.195.790/0001-49',
    stateRegistration: 'Inscrição Estadual ativa e regular',
    address: {
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      cep: '',
      fullFormatted: '',
    },
    contact: {
      phone: '(11) 99243-4631',
      phoneRaw: '11992434631',
      whatsapp: '(11) 99243-4631',
      whatsappRaw: '5511992434631',
      email: 'contato@autopecasltda.com',
    },
    businessHours: {
      weekdays: 'Segunda a Sexta: 08:00 às 18:00',
      saturday: 'Sábado: 08:00 às 13:00',
      sundayAndHolidays: 'Domingos e Feriados: Fechado',
      note: 'Atendimento comercial via WhatsApp e canais digitais com envio para todo o Brasil.',
    },
  },
  hero: {
    title: 'Motores Automotivos com Nota Fiscal e Garantia',
    subtitle:
      'Motores completos, parciais e cabeçotes revisados e testados para carros de passeio, picapes, SUVs e utilitários. Consulte a disponibilidade do motor para o seu veículo pelo WhatsApp.',
    primaryCtaText: 'Consulte a disponibilidade do seu motor',
    secondaryCtaText: 'Ver motores em estoque',
  },
  engineCategories: [
    {
      id: 'motores-completos',
      title: 'Motores Completos',
      subtitle: 'Prontos para instalação imediata',
      description:
        'Motor fechado montado com bloco, cabeçote, carter, bomba de óleo e componentes internos. Ideal para troca rápida sem necessidade de retífica de peças antigas.',
      popularModels: [
        'Motor EA111 1.0 e 1.6 (Gol, Fox, Voyage)',
        'Motor Fire / Firefly 1.0 e 1.3 (Uno, Mobi, Argo, Strada)',
        'Motor GM Família I 1.0 e 1.4 (Onix, Prisma, Celta, Corsa)',
        'Motor Sigma 1.5 e 1.6 (Ka, Fiesta, EcoSport)',
      ],
      image: '/src/assets/images/hero_car_engine_1794367042904.jpg',
      specs: ['Nota Fiscal Eletrônica com numeração', 'Garantia de 90 dias conforme CDC', 'Testado em bancada e verificado'],
      tag: 'Alta Procura',
    },
    {
      id: 'motores-parciais',
      title: 'Motores Parciais (Short Block)',
      subtitle: 'Bloco montado com nota para Detran',
      description:
        'Composto por bloco usinado com virabrequim, bielas, bronzinas e pistões montados e ajustados. Permite manter o cabeçote e os periféricos do seu carro economizando no custo final.',
      popularModels: [
        'Bloco Parcial GM 1.4 e 1.8 Flex',
        'Bloco Parcial VW EA211 1.0 3 Cilindros e 1.6 16V',
        'Bloco Parcial Renault 1.0 16V / 1.6 SCe',
        'Bloco Parcial Hyundai Kappa 1.0 e Gamma 1.6 (HB20)',
      ],
      image: '/src/assets/images/engine_block_head_1794367043863.jpg',
      specs: ['Numeração virgem ou com baixa legal', 'Declaração e Nota Fiscal para Detran', 'Bronzinas e anéis de primeira linha'],
      tag: 'Melhor Custo-Benefício',
    },
    {
      id: 'motores-diesel-suv',
      title: 'Motores Diesel para Pickups & SUVs',
      subtitle: 'Potência e durabilidade para utilitários',
      description:
        'Motores diesel turbo e bi-turbo para caminhonetes, utilitários pesados e SUVs. Teste de compressão, vedação e bicos injetores para alta quilometragem.',
      popularModels: [
        'Toyota Hilux 2.8 e 3.0 D-4D',
        'Ford Ranger 2.2 e 3.2 TDCi Duratorq',
        'Chevrolet S10 / Trailblazer 2.8 CTDI',
        'Fiat Toro / Jeep Compass 2.0 Multijet Diesel',
        'VW Amarok 2.0 TDI Bi-turbo e V6 3.0',
      ],
      image: '/src/assets/images/diesel_suv_engine_1794367044689.jpg',
      specs: ['Teste de compressão dos cilindros', 'Nota Fiscal para regularização veicular', 'Envio em engradado reforçado'],
      tag: 'Linha Pesada & Pickups',
    },
    {
      id: 'motores-vans-carga',
      title: 'Motores para Vans e Frotas de Carga',
      subtitle: 'Agilidade para não deixar o veículo parado',
      description:
        'Soluções rápidas de motorização para veículos de trabalho urbano e transporte escolar/executivo. Menor tempo de parada da sua frota com pronta entrega.',
      popularModels: [
        'Renault Master 2.3 e 2.5 dCi',
        'Fiat Ducato / Boxer / Jumper 2.3 e 2.8 Multijet',
        'Mercedes-Benz Sprinter 311, 415 e 515 CDI',
        'Hyundai HR 2.5 16V / Kia Bongo K2500',
      ],
      image: '/src/assets/images/engine_bench_test_1794367045239.jpg',
      specs: ['Condição especial para frotistas e oficinas', 'Entrega ágil ou retirada presencial', 'Nota Fiscal completa'],
      tag: 'Linha Comercial',
    },
  ],
};
