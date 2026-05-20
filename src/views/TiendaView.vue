<template>
  <div class="tienda-page py-5 bg-light-section">
    <div class="container">
      
      <div class="text-center mb-5 mt-4">
        <span class="text-uppercase text-brand fw-bold tracking-wider">Catálogo General</span>
        <h2 class="fw-bold text-dark-brand mt-1">Vitrina Selva de Papel</h2>
        <div class="title-line mx-auto mt-2 mb-3"></div>
      </div>

      <div class="row mb-5">
        <div class="col-12 d-flex flex-wrap justify-content-center gap-2">
          <button 
            v-for="filtro in listaFiltros" 
            :key="filtro.id"
            @click="filtroSeleccionado = filtro.id"
            class="btn filter-btn px-4 py-2"
            :class="{ 'filter-active': filtroSeleccionado === filtro.id }"
          >
            {{ filtro.nombre }}
          </button>
        </div>
      </div>

      <div class="row g-4">
        <div v-for="producto in productosFiltrados" :key="producto.id" class="col-xl-3 col-lg-4 col-md-6">
          <div class="card product-card border-0 shadow-sm h-100 d-flex flex-column justify-content-between">
            <div class="product-img-wrapper bg-white d-flex align-items-center justify-content-center position-relative">
              <div class="img-placeholder text-muted d-flex flex-column align-items-center justify-content-center w-100 h-100">
                <i class="bx bx-book-open fs-1 mb-2"></i>
                <span class="small opacity-75">{{ producto.coleccion }}</span>
              </div>
            </div>
            <div class="card-body p-4 d-flex flex-column justify-content-between flex-grow-1">
              <div>
                <h5 class="fw-bold fs-6 text-dark-brand mb-1">{{ producto.nombre }}</h5>
                <p class="text-muted text-description small mb-3">{{ producto.descripcion }}</p>
              </div>
              <div class="d-flex align-items-center justify-content-between pt-3 border-top mt-3">
                <span class="fs-6 fw-bold text-dark-brand">${{ producto.precio.toLocaleString('es-CL') }}</span>
                <button @click="abrirDetalle(producto)" class="btn btn-ver-mas btn-sm px-3 py-2 fw-semibold">
                  <i class="bx bx-plus me-1"></i> Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="productoActivo" class="modal-backdrop fade show" @click="cerrarDetalle"></div>
      <div v-if="productoActivo" class="modal fade show d-block" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div class="modal-content border-0 shadow-lg">
            
            <div class="modal-header border-0 pb-0">
              <button type="button" class="btn-close m-0" @click="cerrarDetalle" aria-label="Close"></button>
            </div>

            <div class="modal-body p-4 p-md-5">
              <div class="row g-4 align-items-start">
                
                <div class="col-lg-6">
                  <div class="main-preview-box rounded border d-flex align-items-center justify-content-center bg-white shadow-sm mb-3 position-relative">
                    <div class="text-center p-4">
                      <i class="bx bx-image fs-1 text-muted opacity-50 mb-2"></i>
                      <h6 class="text-dark-brand fw-bold mb-1">{{ varianteSeleccionada ? varianteSeleccionada.nombre : productoActivo.nombre }}</h6>
                      <span v-if="varianteSeleccionada" class="badge bg-brand text-white small">Serie: {{ varianteSeleccionada.coleccion }}</span>
                    </div>
                  </div>

                  <div v-if="productoActivo.variantes && productoActivo.variantes.length > 0">
                    <span class="text-uppercase fw-bold text-muted block-label mb-2">Variedades de Portadas Disponibles:</span>
                    <div class="row g-2 thumb-grid">
                      <div 
                        v-for="variante in variantesSubFiltradas" 
                        :key="variante.idVariante" 
                        class="col-3 col-sm-2"
                      >
                        <div 
                          class="thumb-box rounded border p-2 text-center d-flex flex-column align-items-center justify-content-center"
                          :class="{ 'thumb-active': varianteSeleccionada?.idVariante === variante.idVariante }"
                          @click="varianteSeleccionada = variante"
                        >
                          <i class="bx bx-book-bookmark fs-4 mb-1"></i>
                          <span class="thumb-text-micro">{{ variante.nombre }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 portfolio-description">
                  <h3 class="fw-bold text-dark-brand mb-2">{{ productoActivo.nombre }}</h3>
                  <h4 class="fs-4 fw-bold text-brand mb-4">${{ productoActivo.precio.toLocaleString('es-CL') }}</h4>
                  
                  <div class="mb-4">
                    <h6 class="fw-bold text-dark-brand mb-2"><i class="bx bx-align-left me-1"></i> Detalles del Formato</h6>
                    <p class="text-muted small leading-relaxed mb-0">{{ productoActivo.descripcion }}</p>
                  </div>

                  <div v-if="coleccionesDisponibles.length > 1" class="mb-4">
                    <h6 class="fw-bold text-dark-brand mb-2"><i class="bx bx-category me-1"></i> Filtrar Tapas por Colección</h6>
                    <div class="d-flex flex-wrap gap-2">
                      <button 
                        @click="subFiltroColeccion = 'all'" 
                        class="btn btn-sub-filter btn-sm"
                        :class="{ 'sub-filter-active': subFiltroColeccion === 'all' }"
                      >
                        Ver Todas
                      </button>
                      <button 
                        v-for="subCol in coleccionesDisponibles" 
                        :key="subCol"
                        @click="subFiltroColeccion = subCol" 
                        class="btn btn-sub-filter btn-sm"
                        :class="{ 'sub-filter-active': subFiltroColeccion === subCol }"
                      >
                        {{ subCol }}
                      </button>
                    </div>
                  </div>

                  <div class="pt-4 border-top mt-4">
                    <a :href="generarMailtoUrl(productoActivo, varianteSeleccionada)" class="btn btn-cotizar-modal w-100 py-3 fw-bold shadow-sm">
                      <i class="bx bx-envelope me-2 fs-5"></i> 
                      {{ varianteSeleccionada ? `Cotizar diseño: ${varianteSeleccionada.nombre}` : 'Cotizar este formato' }}
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// 1. FILTROS PRINCIPALES
const filtroSeleccionado = ref('all')
const listaFiltros = [
  { id: 'all', nombre: 'Todos' },
  { id: 'filter-papeleria', nombre: 'Papelería & Oficio' },
  { id: 'filter-pins', nombre: 'Pines Coleccionables' },
  { id: 'filter-joyeria', nombre: 'Joyería de Autor' },
  { id: 'filter-varios', nombre: 'Accesorios & Detalles' }
]

// 2. ARREGLO DE CONTROL DE DATOS REALES (Mapeado directo de tu productos.js)
const listaProductos = ref([
  {
    id: "libreta-cuadrada-10x10",
    nombre: "Libreta Cuadrada 10x10",
    coleccion: "Papelería & Oficio",
    filtro: "filter-papeleria",
    precio: 6500,
    descripcion: "Estructura cuadrada compacta de lomo anillado doble cero metálico y tapas duras laminadas. Contiene 80 hojas interiores limpias diseñadas para anotaciones rápidas, croquis o registro diario.",
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
    descripcion: "Cuaderno universitario y profesional estándar de dimensiones A5. Tapa dura resistente al roce, anillado reforzado y hojas interiores estructuradas.",
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
    descripcion: "Estructuras flexibles con encuadernación de doble corchete central. Diseñadas en formatos A5 y A6 tipo college para un transporte ultraligero.",
    variantes: [
      { idVariante: "corcheteada-a6-simple", nombre: "Formato A6 Simple", coleccion: "Formatos" },
      { idVariante: "corcheteada-a5-simple", nombre: "Formato A5 Simple", coleccion: "Formatos" }
    ]
  },
  {
    id: "pines-enamel-generales",
    nombre: "Pines Metálicos Generales",
    coleccion: "Pines Coleccionables",
    filtro: "filter-pins",
    precio: 3500,
    descripcion: "Pines esmaltados rígidos con base metálica y broches de seguridad. Colección de ilustraciones originales de flora, fauna y profesiones.",
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
    descripcion: "Ediciones especiales esmaltadas inspiradas en vectores de cultura pop, series animadas y manga japonés.",
    variantes: [
      { idVariante: "pin-one-piece-luffy", nombre: "Luffy", coleccion: "One Piece" },
      { idVariante: "pin-ghibli-totoro", nombre: "Totoro", coleccion: "Estudio Ghibli" }
    ]
  },
  {
    id: "aros-tejidos-miyuki",
    nombre: "Aros Tejidos en Miyuki",
    coleccion: "Joyería de Autor",
    filtro: "filter-joyeria",
    precio: 18000,
    descripcion: "Piezas de joyería fina tejidas a mano cuenta por cuenta empleando mostacillas de vidrio calibradas Miyuki Delica. Patrones geométricos exclusivos de alta resistencia.",
    variantes: []
  }
])

// 3. ESTADOS REACTIVOS DEL MODAL INTERNO
const productoActivo = ref(null)
const varianteSeleccionada = ref(null)
const subFiltroColeccion = ref('all')

// 4. COMPUTED: FILTRADO PRINCIPAL DE LA VITRINA
const productosFiltrados = computed(() => {
  if (filtroSeleccionado.value === 'all') return listaProductos.value
  return listaProductos.value.filter(p => p.filtro === filtroSeleccionado.value)
})

// 5. COMPUTED: DETECTAR QUÉ SERIES TIENE EL PRODUCTO SELECCIONADO (Para los botones del modal)
const coleccionesDisponibles = computed(() => {
  if (!productoActivo.value || !productoActivo.value.variantes) return []
  const sets = new Set(productoActivo.value.variantes.map(v => v.coleccion))
  return Array.from(sets)
})

// 6. COMPUTED: SUB-FILTRADO DE MINIATURAS DENTRO DEL MODAL (Reduce los cuadraditos del dibujo)
const variantesSubFiltradas = computed(() => {
  if (!productoActivo.value) return []
  if (subFiltroColeccion.value === 'all') return productoActivo.value.variantes
  return productoActivo.value.variantes.filter(v => v.coleccion === subFiltroColeccion.value)
})

// Al cambiar el sub-filtro de series, auto-seleccionar la primera miniatura disponible del nuevo set
watch(subFiltroColeccion, (nuevoFiltro) => {
  if (variantesSubFiltradas.value.length > 0) {
    varianteSeleccionada.value = variantesSubFiltradas.value[0]
  }
})

// LÓGICA DE CONTROL DEL MODAL
const abrirDetalle = (producto) => {
  productoActivo.value = producto
  subFiltroColeccion.value = 'all'
  varianteSeleccionada.value = producto.variantes && producto.variantes.length > 0 ? producto.variantes[0] : null
  document.body.classList.add('modal-open')
}

const cerrarDetalle = () => {
  productoActivo.value = null
  varianteSeleccionada.value = null
  document.body.classList.remove('modal-open')
}

// 7. MOTOR DE CORREO AUTOMÁTICO DE LA VITRINA
const generarMailtoUrl = (producto, variante) => {
  const correoDestino = "contacto.selvadepapel@gmail.com"
  let tituloItem = producto.nombre
  if (variante) tituloItem += ` (Diseño Tapa: ${variante.nombre} - Serie: ${variante.coleccion})`
  
  const asunto = encodeURIComponent(`Cotización Vitrina: ${tituloItem}`)
  const cuerpo = encodeURIComponent(`Hola Selva de Papel,\n\nMe interesa coordinar un pedido o solicitar información sobre el siguiente ítem de tu vitrina:\n\n- Producto Base: ${producto.nombre}\n${variante ? `- Portada/Modelo: ${variante.nombre} (Colección ${variante.coleccion})\n` : ''}- Precio de Referencia: $${producto.precio.toLocaleString('es-CL')}\n\nQuedo atento(a) para coordinar la entrega en Metro Santa Lucía o gestionar el despacho por pagar.\n\nSaludos!`)
  
  return `mailto:${correoDestino}?subject=${asunto}&body=${cuerpo}`
}
</script>

<style scoped>
.bg-light-section { background-color: #fcfbfa; min-height: 90vh; }
.text-brand { color: #294d43; }
.text-dark-brand { color: #1b352f; }
.title-line { width: 50px; height: 3px; background-color: #294d43; border-radius: 2px; }
.tracking-wider { letter-spacing: 1.5px; font-size: 13px; }

/* FILTROS VITRINA */
.filter-btn { background-color: #fff; color: #1b352f; border: 1px solid #eae7e2; font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 600; transition: all 0.3s ease; }
.filter-btn:hover { background-color: #f7f6f3; border-color: #294d43; }
.filter-active { background-color: #294d43 !important; border-color: #294d43 !important; color: #fff !important; }

/* CARDS GENERALES */
.product-card { transition: transform 0.3s ease, box-shadow 0.3s ease; background: #fff; }
.product-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.06) !important; }
.product-img-wrapper { height: 180px; border-bottom: 1px solid #f5f2ed; }
.img-placeholder { background-color: #eeebe6; color: #a5a19a; }
.text-description { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.5; }
.btn-ver-mas { background-color: #294d43; color: #fff; border: none; font-size: 12px; transition: all 0.3s ease; }
.btn-ver-mas:hover { background-color: #1b352f; }

/* ======================================================== */
/* ESTILOS DEL MODAL DE DETALLE (Sincronizado con el dibujo) */
/* ======================================================== */
.modal { background: rgba(0, 0, 0, 0.4); display: none; overflow-x: hidden; overflow-y: auto; position: fixed; top: 0; start: 0; z-index: 1060; width: 100%; height: 100%; }
.modal-backdrop { position: fixed; top: 0; start: 0; z-index: 1050; width: 100vw; height: 100vh; background-color: #000; opacity: 0.5; }
.main-preview-box { height: 260px; background-color: #faf8f5 !important; border-color: #eae7e2 !important; }
.bg-brand { background-color: #294d43; }

/* Grilla de Miniaturas (Cuadraditos del boceto) */
.thumb-grid { max-height: 130px; overflow-y: auto; padding-right: 4px; }
.thumb-box { cursor: pointer; background: #fff; border-color: #eae7e2 !important; transition: all 0.2s ease; min-height: 58px; }
.thumb-box:hover { border-color: #294d43 !important; background-color: #fcfbfa; }
.thumb-active { border-color: #e7a361 !important; background-color: rgba(231, 163, 97, 0.05); color: #e7a361; }
.thumb-text-micro { font-size: 9px; line-height: 1.1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; font-weight: 600; }
.block-label { font-size: 11px; letter-spacing: 0.5px; color: #8c867e !important; }

/* Botones de Sub-filtro de Series */
.btn-sub-filter { background-color: #f4f1eb; color: #4a4a4a; font-size: 12px; font-weight: 600; border: 1px solid transparent; border-radius: 4px; padding: 4px 10px; transition: all 0.2s ease; }
.btn-sub-filter:hover { background-color: #eae5db; }
.sub-filter-active { background-color: #1b352f !important; color: #fff !important; }

/* Botón Cotizar Modal */
.btn-cotizar-modal { background-color: #e7a361; color: #fff; border: none; border-radius: 4px; transition: all 0.3s ease; }
.btn-cotizar-modal:hover { background-color: #f1b375; color: #fff; }
.leading-relaxed { line-height: 1.7; }
</style>