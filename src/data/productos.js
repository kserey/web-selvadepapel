// Usamos "export" para que pueda ser importado modularmente en cualquier componente Vue
export const productos = [
  // === CATEGORÍA: PAPELERÍA & OFICIO ===
  {
    id: "libreta-cuadrada-10x10",
    nombre: "Libreta Cuadrada 10x10",
    coleccion: "Papelería & Oficio",
    filtro: "filter-papeleria",
    precio: 6500,
    personalizado: false,
    imagen: "assets/img/portfolio/cuadrada-default.jpg",
    descripcion: "Nuestra libreta estrella de formato 10x10 cm. Anillada, tapa dura y 80 hojas blancas.",
    variantes: [
      { idVariante: "cuadrada-patrimonio-baquedano", nombre: "Plaza Baquedano", coleccion: "Patrimonio" },
      { idVariante: "cuadrada-patrimonio-bellas-artes", nombre: "Museo Bellas Artes", coleccion: "Patrimonio" },
      { idVariante: "cuadrada-fauna-pudu", nombre: "Pudú", coleccion: "Fauna Chilena" },
      { idVariante: "cuadrada-fauna-huemul", nombre: "Huemul", coleccion: "Fauna Chilena" },
      { idVariante: "cuadrada-frase-cafecito", nombre: "Primero mi cafecito", coleccion: "Frases" },
      { idVariante: "cuadrada-frase-sarcasmo", nombre: "Mañana lo hago", coleccion: "Frases" },
      { idVariante: "cuadrada-personaje-principito", nombre: "El Principito", coleccion: "Personajes" },
      { idVariante: "cuadrada-personaje-mafalda", nombre: "Mafalda", coleccion: "Personajes" }
    ]
  },
  {
    id: "cuaderno-a5-anillado",
    nombre: "Cuaderno Anillado A5",
    coleccion: "Papelería & Oficio",
    filtro: "filter-papeleria",
    precio: 12000,
    personalizado: false,
    imagen: "assets/img/portfolio/cuaderno-a5-default.jpg",
    descripcion: "Cuaderno tamaño A5, cómodo y resistente para uso universitario o profesional.",
    variantes: [
      { idVariante: "a5-patrimonio-stgo", nombre: "Santiago Centro", coleccion: "Patrimonio" },
      { idVariante: "a5-fauna-condor", nombre: "Cóndor Andino", coleccion: "Fauna Chilena" },
      { idVariante: "a5-frase-cerebro", nombre: "Pensado con el cerebro", coleccion: "Frases" }
    ]
  },
  {
    id: "libreta-corcheteada-simple",
    nombre: "Libreta Corcheteada Simple",
    coleccion: "Papelería & Oficio",
    filtro: "filter-papeleria",
    precio: 3500,
    personalizado: false,
    imagen: "assets/img/portfolio/corcheteada-default.jpg",
    descripcion: "Libreta ligera y flexible con lomo corcheteado. Elige tu formato ideal de nuestra serie básica.",
    variantes: [
      { idVariante: "corcheteada-a6-simple", nombre: "Formato A6 Simple", coleccion: "Formatos" },
      { idVariante: "corcheteada-a5-simple", nombre: "Formato A5 Simple", coleccion: "Formatos" }
    ]
  },

  // === CATEGORÍA: PINES COLECCIONABLES ===
  {
    id: "pines-enamel-generales",
    nombre: "Pines Metálicos Generales",
    coleccion: "Pines Coleccionables",
    filtro: "filter-pins",
    precio: 3500,
    personalizado: false,
    imagen: "assets/img/portfolio/pines-generales-default.jpg",
    descripcion: "Pines metálicos esmaltados de alta calidad. Encuentra tus diseños favoritos.",
    variantes: [
      { idVariante: "pin-gatito", nombre: "Gatito Negro", coleccion: "Gatitos y Perritos" },
      { idVariante: "pin-suculenta", nombre: "Suculenta", coleccion: "Plantas" }
    ]
  },
  {
    id: "pines-enamel-anime",
    nombre: "Pines Colección Animé & Pop",
    coleccion: "Pines Coleccionables",
    filtro: "filter-pins",
    precio: 4000,
    personalizado: false,
    imagen: "assets/img/portfolio/pines-anime-default.jpg",
    descripcion: "Ediciones especiales esmaltadas inspiradas en tus series favoritas de animé.",
    variantes: [
      { idVariante: "pin-one-piece-luffy", nombre: "Luffy", coleccion: "One Piece" },
      { idVariante: "pin-ghibli-totoro", nombre: "Totoro", coleccion: "Estudio Ghibli" }
    ]
  },

  // === CATEGORÍA: JOYERÍA DE AUTOR ===
  {
    id: "aros-tejidos-miyuki",
    nombre: "Aros Tejidos en Miyuki",
    coleccion: "Joyería de Autor",
    filtro: "filter-joyeria",
    precio: 18000,
    personalizado: false,
    imagen: "assets/img/portfolio/aros-miyuki-default.jpg",
    descripcion: "Aros artesanales tejidos a mano con mostacillas japonesas Miyuki de máxima precisión.",
    variantes: []
  },

  // === CATEGORÍA: ACCESORIOS & DETALLES ===
  {
    id: "pack-stickers-ilustrados",
    nombre: "Pack de Stickers Ilustrados",
    coleccion: "Accesorios & Detalles",
    filtro: "filter-varios",
    precio: 2500,
    personalizado: false,
    imagen: "assets/img/portfolio/stickers-default.jpg",
    descripcion: "Colecciones de stickers impresos de confección propia. Ideales para decorar tus objetos.",
    variantes: [
      { idVariante: "stickers-gatos", nombre: "Colección Gatitos", coleccion: "Series" },
      { idVariante: "stickers-flora", nombre: "Colección Flora Silvestre", coleccion: "Series" }
    ]
  }
];