import { Product } from '../types';

export const products: Product[] = [
  // CAMPOTERRA PRODUCTS
  // Pulpas
  {
    id: 1,
    name: "Pulpa de Fresa",
    description: "Pulpa natural de fresa con trozos reales de fruta, perfecta para paletas y helados artesanales con sabor auténtico.",
    image: "/productos/campoterra/pulpa-fresa.jpg",
    category: "Pulpas",
    providerId: 1
  },
  {
    id: 2,
    name: "Pulpa de Frambuesa",
    description: "Pulpa natural de frambuesa con sabor intenso y auténtico, ideal para crear paletas gourmet de alta calidad.",
    image: "/productos/campoterra/pulpa-frambuesa.jpg",
    category: "Pulpas",
    providerId: 1
  },
  {
    id: 3,
    name: "Pulpa de Mango",
    description: "Pulpa 100% natural de mango tropical, perfecta para elaborar paletas y helados con sabor exótico y refrescante.",
    image: "/productos/campoterra/pulpa-mango.jpg",
    category: "Pulpas",
    providerId: 1
  },

  // Cajitas
  {
    id: 4,
    name: "Fresas",
    description: "Fresas naturales en presentación de cajita, seleccionadas cuidadosamente para mantener su frescura y sabor.",
    image: "/productos/campoterra/cajita-fresas.jpg",
    category: "Cajitas",
    providerId: 1
  },
  {
    id: 5,
    name: "Frambuesas",
    description: "Frambuesas frescas en cajita, con su característico sabor dulce y ligeramente ácido, perfectas para paletas gourmet.",
    image: "/productos/campoterra/cajita-frambuesas.jpg",
    category: "Cajitas",
    providerId: 1
  },
  {
    id: 6,
    name: "Mangos",
    description: "Mangos maduros en presentación de cajita, con su dulzura tropical característica para helados y paletas.",
    image: "/productos/campoterra/cajita-mangos.jpg",
    category: "Cajitas",
    providerId: 1
  },
  {
    id: 7,
    name: "Mangos con Chamoy",
    description: "Deliciosa combinación de mangos dulces con el toque picante del chamoy, perfecta para paletas mexicanas tradicionales.",
    image: "/productos/campoterra/cajita-mangos-chamoy.jpg",
    category: "Cajitas",
    providerId: 1
  },

  // Bolsas
  {
    id: 8,
    name: "Fresas",
    description: "Fresas naturales en presentación de bolsa, ideales para uso comercial en la elaboración de helados y paletas.",
    image: "/productos/campoterra/bolsa-fresas.jpg",
    category: "Bolsas",
    providerId: 1
  },
  {
    id: 9,
    name: "Zarzamoras",
    description: "Zarzamoras frescas en bolsa, ricas en antioxidantes y con sabor intenso para productos premium.",
    image: "/productos/campoterra/bolsa-zarzamoras.jpg",
    category: "Bolsas",
    providerId: 1
  },
  {
    id: 10,
    name: "Frambuesas",
    description: "Frambuesas naturales en bolsa, perfectas para producción a gran escala manteniendo su calidad y sabor.",
    image: "/productos/campoterra/bolsa-frambuesas.jpg",
    category: "Bolsas",
    providerId: 1
  },
  {
    id: 11,
    name: "Arándanos",
    description: "Arándanos frescos en bolsa, superfruit rico en antioxidantes con sabor único y propiedades nutritivas excepcionales.",
    image: "/productos/campoterra/bolsa-arandanos.jpg",
    category: "Bolsas",
    providerId: 1
  },
  {
    id: 12,
    name: "Mangos",
    description: "Mangos tropicales en bolsa, ideales para uso comercial con su sabor dulce y textura cremosa característica.",
    image: "/productos/campoterra/bolsa-mangos.jpg",
    category: "Bolsas",
    providerId: 1
  },
  {
    id: 13,
    name: "Mezcla de moras",
    description: "Combinación especial de diferentes moras en bolsa, ofreciendo una variedad de sabores y texturas en un solo producto.",
    image: "/productos/campoterra/bolsa-mezcla-moras.jpg",
    category: "Bolsas",
    providerId: 1
  },

  // LA LOMA PRODUCTS
  // Cremosas
  {
    id: 14,
    name: "Cremosas",
    description: "Mezcla cremosa perfecta para tu negocio. Ofrece una textura suave incomparable y un sabor excepcional a tus helados, paletas y aguas, simplemente las mejores del mercado.",
    image: "/productos/laloma/cremosas.jpg",
    category: "Cremosas",
    providerId: 2
  },

  // Estándar
  {
    id: 15,
    name: "Mezcla Standar",
    description: "Mezcla base estándar de alta calidad, perfecta para helados tradicionales con excelente rendimiento y sabor consistente.",
    image: "/productos/laloma/estandar.jpg",
    category: "Estándar",
    providerId: 2
  },

  // Tersamix
  {
    id: 16,
    name: "Tersamix",
    description: "Mezcla especializada para helado duro con elevado contenido de grasa láctea y textura excepcional, proporciona un equilibrio perfecto de sabor cremoso a tus helados, paletas y aguas frescas para lograr productos de máxima calidad.",
    image: "/productos/laloma/tersamix.jpg",
    category: "Tersamix",
    providerId: 2
  },

  // Helado Suave
  {
    id: 17,
    name: "Helado Suave",
    description: "Sorprende a tus clientes con exquisitos y suaves helados tipo twist, preparados con nuestra mezcla especial que te ofrece un rendimiento excepcional y sabor inigualable.",
    image: "/productos/laloma/helado-suave.jpg",
    category: "Helado suave",
    providerId: 2
  },

  // Nevamix
  {
    id: 18,
    name: "Nevamix",
    description: "Logra sin esfuerzo las mejores nieves, proporcionando una textura excepcional sin agrietarse. Te permite moldear de manera muy fácil, haciendo tus nieves más atractivas al momento de servirlas.",
    image: "/productos/laloma/nevamix.jpg",
    category: "Nevamix",
    providerId: 2
  },

  // Cobertura Chocolate
  {
    id: 19,
    name: "Chococima Cobertura para Helados y Paletas",
    description: "Incorpora a tus productos un toque crujiente y delicioso sabor a chocolate con nuestra Cobertura Chococima®, perfecta para recubrir impecablemente cualquier paleta, helado o fruta, garantizando una experiencia placentera en cada bocado.",
    image: "/productos/laloma/chococima.jpg",
    category: "Cobertura Chocolate",
    providerId: 2
  },

  // ALTESA PRODUCTS
  // Conos
  {
    id: 20,
    name: "Barquillo Plus - ALT 432",
    description: "Cono barquillo premium con textura crujiente y sabor excepcional, ideal para helados artesanales y presentaciones gourmet.",
    image: "/productos/altesa/barquillo-plus-432.jpg",
    category: "Conos",
    providerId: 3
  },
  {
    id: 21,
    name: "Barquillo Estándar Natural - ALT 576",
    description: "Cono barquillo estándar natural, crujiente y resistente, perfecto para helados tradicionales con excelente relación calidad-precio.",
    image: "/productos/altesa/barquillo-estandar-576.jpg",
    category: "Conos",
    providerId: 3
  },
  {
    id: 22,
    name: "Barquillo Oblea No.35 - ALT 1600",
    description: "Cono tipo oblea número 35, ligero y crujiente, ideal para helados suaves y presentaciones elegantes.",
    image: "/productos/altesa/barquillo-oblea-1600.jpg",
    category: "Conos",
    providerId: 3
  },

  // Canastas
  {
    id: 23,
    name: "Canasta Cuadrada - ALT 108 \"A\"",
    description: "Canasta cuadrada crujiente, perfecta para presentaciones especiales de helados y postres con diseño elegante y funcional.",
    image: "/productos/altesa/canasta-cuadrada-108.jpg",
    category: "Canastas",
    providerId: 3
  },
  {
    id: 24,
    name: "Canasta \"A\" - ALT 150",
    description: "Canasta tradicional modelo A, ideal para helados gourmet y presentaciones especiales con acabado profesional.",
    image: "/productos/altesa/canasta-a-150.jpg",
    category: "Canastas",
    providerId: 3
  },

  // Waffle
  {
    id: 25,
    name: "Barquillo Waffle 120",
    description: "Cono tipo waffle con textura característica y sabor distintivo, perfecto para helados premium y experiencias gourmet.",
    image: "/productos/altesa/barquillo-waffle-120.jpg",
    category: "Waffle",
    providerId: 3
  },

  // DEIMAN PRODUCTS
  // Colorantes
  {
    id: 26,
    name: "Verde Limón 170",
    description: "Colorante alimentario verde limón de alta calidad, ideal para dar color vibrante y natural a helados y paletas.",
    image: "/productos/deiman/colorante-verde-limon.jpg",
    category: "Colorantes",
    providerId: 4
  },
  {
    id: 27,
    name: "Café Chocolate Dosicolor",
    description: "Colorante café chocolate Dosicolor, perfecto para lograr tonos chocolate auténticos en tus productos helados.",
    image: "/productos/deiman/colorante-cafe-chocolate.jpg",
    category: "Colorantes",
    providerId: 4
  },
  {
    id: 28,
    name: "Amarillo Canario 370 L",
    description: "Colorante amarillo canario intenso, ideal para crear colores brillantes y atractivos en helados y paletas.",
    image: "/productos/deiman/colorante-amarillo-canario.jpg",
    category: "Colorantes",
    providerId: 4
  },
  {
    id: 29,
    name: "Azul marino 370 L",
    description: "Colorante azul marino profundo, perfecto para crear efectos visuales únicos en tus productos helados.",
    image: "/productos/deiman/colorante-azul-marino.jpg",
    category: "Colorantes",
    providerId: 4
  },
  {
    id: 30,
    name: "Rojo Borgoña 270",
    description: "Colorante rojo borgoña elegante, ideal para productos gourmet y presentaciones sofisticadas.",
    image: "/productos/deiman/colorante-rojo-borgona.jpg",
    category: "Colorantes",
    providerId: 4
  },
  {
    id: 31,
    name: "Rojo Grosella 170",
    description: "Colorante rojo grosella vibrante, perfecto para helados y paletas de frutos rojos con color intenso.",
    image: "/productos/deiman/colorante-rojo-grosella.jpg",
    category: "Colorantes",
    providerId: 4
  },
  {
    id: 32,
    name: "Blanco Gelicolor",
    description: "Colorante blanco Gelicolor, ideal para crear bases neutras y efectos especiales en productos helados.",
    image: "/productos/deiman/colorante-blanco-gelicolor.jpg",
    category: "Colorantes",
    providerId: 4
  },
  {
    id: 33,
    name: "Rojo Fresa 170",
    description: "Colorante rojo fresa natural, perfecto para helados y paletas de fresa con color auténtico y atractivo.",
    image: "/productos/deiman/colorante-rojo-fresa.jpg",
    category: "Colorantes",
    providerId: 4
  },

  // Saborizantes
  {
    id: 34,
    name: "Esencia Melón",
    description: "Esencia concentrada de melón con sabor fresco y natural, ideal para helados y paletas de temporada.",
    image: "/productos/deiman/esencia-melon.jpg",
    category: "Saborizantes",
    providerId: 4
  },
  {
    id: 35,
    name: "Esencia Durazno",
    description: "Esencia de durazno con aroma y sabor auténtico, perfecta para crear helados y paletas con sabor frutal intenso.",
    image: "/productos/deiman/esencia-durazno.jpg",
    category: "Saborizantes",
    providerId: 4
  },
  {
    id: 36,
    name: "Concentrado Blueberry D-15",
    description: "Concentrado de arándano D-15 con sabor intenso y natural, ideal para productos premium y gourmet.",
    image: "/productos/deiman/concentrado-blueberry.jpg",
    category: "Saborizantes",
    providerId: 4
  },
  {
    id: 37,
    name: "Esencia Violeta",
    description: "Esencia de violeta con aroma floral distintivo, perfecta para helados y paletas con sabores únicos y sofisticados.",
    image: "/productos/deiman/esencia-violeta.jpg",
    category: "Saborizantes",
    providerId: 4
  },
  {
    id: 38,
    name: "Concentrado Fresa D-15",
    description: "Concentrado de fresa D-15 con sabor intenso y auténtico, ideal para helados y paletas de alta calidad.",
    image: "/productos/deiman/concentrado-fresa.jpg",
    category: "Saborizantes",
    providerId: 4
  },
  {
    id: 39,
    name: "Concentrado Uva D-15",
    description: "Concentrado de uva D-15 con sabor frutal intenso, perfecto para crear productos con sabor a uva natural.",
    image: "/productos/deiman/concentrado-uva.jpg",
    category: "Saborizantes",
    providerId: 4
  },
  {
    id: 40,
    name: "Concentrado Deiman Natura Coco",
    description: "Concentrado natural de coco Deiman Natura, con sabor tropical auténtico para helados y paletas exóticas.",
    image: "/productos/deiman/concentrado-coco.jpg",
    category: "Saborizantes",
    providerId: 4
  },
  {
    id: 41,
    name: "Concentrado Crema de Rompope D-15",
    description: "Concentrado de crema de rompope D-15, sabor tradicional mexicano perfecto para helados y paletas especiales.",
    image: "/productos/deiman/concentrado-rompope.jpg",
    category: "Saborizantes",
    providerId: 4
  },
  {
    id: 42,
    name: "Concentrado Mango D-15",
    description: "Concentrado de mango D-15 con sabor tropical intenso, ideal para helados y paletas con auténtico sabor a mango.",
    image: "/productos/deiman/concentrado-mango.jpg",
    category: "Saborizantes",
    providerId: 4
  },

  // Coberturas
  {
    id: 43,
    name: "Cobertura Sabor Chocolate",
    description: "Cobertura de chocolate premium con sabor intenso y textura perfecta para recubrir helados y paletas.",
    image: "/productos/deiman/cobertura-chocolate.jpg",
    category: "Coberturas",
    providerId: 4
  },
  {
    id: 44,
    name: "Cobertura Blanca Sabor Chocolate",
    description: "Cobertura blanca con sabor a chocolate, ideal para crear contrastes visuales y sabores únicos en tus productos.",
    image: "/productos/deiman/cobertura-blanca.jpg",
    category: "Coberturas",
    providerId: 4
  },
  {
    id: 45,
    name: "Cobertura Sabor Chocolate Choco Inn",
    description: "Cobertura Choco Inn con sabor a chocolate intenso, perfecta para acabados profesionales en helados y paletas.",
    image: "/productos/deiman/cobertura-choco-inn.jpg",
    category: "Coberturas",
    providerId: 4
  },

  // Vainillas
  {
    id: 46,
    name: "Vainilla Deiman Sin Color",
    description: "Vainilla Deiman sin color, sabor puro y auténtico ideal para mantener el color natural de tus productos.",
    image: "/productos/deiman/vainilla-sin-color.jpg",
    category: "Vainillas",
    providerId: 4
  },
  {
    id: 47,
    name: "Sab. Art. Liq. Vainilla Palapa",
    description: "Saborizante artificial líquido Vainilla Palapa, con aroma y sabor intenso para productos de alta calidad.",
    image: "/productos/deiman/vainilla-palapa.jpg",
    category: "Vainillas",
    providerId: 4
  },
  {
    id: 48,
    name: "Sab. Art. Liq. Vainilla Palapa Roja",
    description: "Saborizante artificial líquido Vainilla Palapa Roja, con color característico y sabor tradicional mexicano.",
    image: "/productos/deiman/vainilla-palapa-roja.jpg",
    category: "Vainillas",
    providerId: 4
  },
  {
    id: 49,
    name: "Sab. Art. Liq. Vainilla Palapa Helados",
    description: "Saborizante artificial líquido Vainilla Palapa especial para helados, formulación optimizada para productos congelados.",
    image: "/productos/deiman/vainilla-palapa-helados.jpg",
    category: "Vainillas",
    providerId: 4
  },
  {
    id: 50,
    name: "Sab. Art. Liq. Vainilla Palapa Exotle Roja",
    description: "Saborizante artificial líquido Vainilla Palapa Exotle Roja, versión premium con sabor exótico y color distintivo.",
    image: "/productos/deiman/vainilla-palapa-exotle-roja.jpg",
    category: "Vainillas",
    providerId: 4
  },
  {
    id: 51,
    name: "vainilla deiman",
    description: " Producto grado alimenticio - Se dosifica fácilmente - Perfil cremoso y dulce - Se incorpora fácilmente",
    image: "/productos/deiman/vainilla-deiman.jpg",
    category: "Vainillas",
    providerId: 4
  }
];