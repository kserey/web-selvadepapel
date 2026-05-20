<template>
  <div class="home-page">

    <section id="portada" class="portada-section d-flex align-items-center text-center text-white">
      <div class="container d-flex flex-column align-items-center justify-content-center h-100">
        <h2 class="mb-2 subtitle-brand">Diseño y Manufactura en Santiago de Chile</h2>
        <h1 class="display-3 fw-bold mb-3 main-brand-title">Selva de Papel</h1>
        <p class="mb-4 lead-brand">Papelería funcional con anillados duraderos, cuadernos de notas y accesorios de
          autor.</p>
        <div class="d-flex gap-3 justify-content-center">
          <a class="btn-instagram px-4 py-2" href="https://www.instagram.com/selvadepapel_/" target="_blank">
            <i class="bx bxl-instagram me-2"></i>SÍGUENOS
          </a>
          <router-link to="/tienda" class="btn-shop-now px-4 py-2">IR A LA TIENDA</router-link>
        </div>
      </div>
    </section>

    <section id="about" class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="about-badge mb-3 d-inline-block px-3 py-1 rounded-pill">Diseño Local</div>
            <h3 class="fw-bold text-dark-brand display-6 mb-4">Creamos papelería práctica para tus ideas</h3>
            <p class="text-muted leading-relaxed">
              En <strong>Selva de Papel</strong> nos dedicamos a confeccionar artículos de papelería creativos,
              funcionales y de primera calidad. Desarrollamos formatos pensados para acompañarte en tu rutina de
              estudio, organización o dibujo, cuidando la resistencia y estética de cada pieza.
            </p>
            <p class="text-muted leading-relaxed">
              Especializados en formatos de lomo anillado y libretas tipo college, combinamos el diseño gráfico con la
              cultura pop y la joyería de autor. Creamos series limitadas pensadas para optimizar tus espacios de
              anotación con objetos duraderos y ligeros.
            </p>
          </div>
          <div class="col-lg-6">
            <div class="row g-3">
              <div class="col-6">
                <div class="p-4 rounded shadow-sm bg-light border-start border-4 border-brand-color">
                  <h5 class="fw-bold mb-2">Anillado Doble Cero</h5>
                  <p class="small text-muted mb-0">Estructuras firmes de tapa dura que permiten una apertura completa y
                    cómoda de 360°.</p>
                </div>
              </div>
              <div class="col-6">
                <div class="p-4 rounded shadow-sm bg-light border-start border-4 border-brand-color">
                  <h5 class="fw-bold mb-2">Estilo College</h5>
                  <p class="small text-muted mb-0">Libretas con costura de corchete simples en tamaños A5 y A6, ideales
                    para notas rápidas.</p>
                </div>
              </div>
              <div class="col-12">
                <div class="p-4 rounded shadow-sm bg-dark-brand text-white">
                  <h5 class="fw-bold mb-2 text-accent">Despachos y Puntos de Entrega</h5>
                  <p class="small opacity-90 mb-0">Coordinamos entregas presenciales en Metro Santa Lucía (Santiago
                    Centro) de lunes a viernes y despachamos a todo el país mediante Starken o Chilexpress por pagar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio" class="py-5 bg-light-section">
      <div class="container">
        <div class="section-title text-center mb-5">
          <span class="text-uppercase text-brand fw-bold tracking-wider">Catálogo General</span>
          <h3 class="fw-bold text-dark-brand mt-1">Explora nuestras <span>Colecciones</span></h3>
          <div class="title-line mx-auto mt-2"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-xl-3 col-md-6">
            <div class="card category-card border-0 shadow-sm h-100 overflow-hidden">
              <div class="category-img-placeholder d-flex align-items-center justify-content-center text-muted">
                <i class="bx bx-book fs-1"></i>
              </div>
              <div class="card-body text-center py-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 class="fw-bold mb-2 fs-6 text-dark-brand">Papelería & Oficio</h5>
                  <p class="card-text text-muted small mb-3">Nuestras libretas cuadradas 10x10, cuadernos anillados A5 y
                    libretas corcheteadas livianas.</p>
                </div>
                <router-link to="/tienda" class="btn btn-outline-brand btn-sm px-3 align-self-center">Ver
                  Productos</router-link>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6">
            <div class="card category-card border-0 shadow-sm h-100 overflow-hidden">
              <div class="category-img-placeholder d-flex align-items-center justify-content-center text-muted">
                <i class="bx bx-purchase-tag-alt fs-1"></i>
              </div>
              <div class="card-body text-center py-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 class="fw-bold mb-2 fs-6 text-dark-brand">Pines Coleccionables</h5>
                  <p class="card-text text-muted small mb-3">Pines metálicos esmaltados inspirados en cultura pop,
                    anime, profesiones y diseños originales.</p>
                </div>
                <router-link to="/tienda" class="btn btn-outline-brand btn-sm px-3 align-self-center">Ver
                  Colección</router-link>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6">
            <div class="card category-card border-0 shadow-sm h-100 overflow-hidden">
              <div class="category-img-placeholder d-flex align-items-center justify-content-center text-muted">
                <i class="bx bx-diamond fs-1"></i>
              </div>
              <div class="card-body text-center py-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 class="fw-bold mb-2 fs-6 text-dark-brand">Joyería de Autor</h5>
                  <p class="card-text text-muted small mb-3">Accesorios tejidos a mano con mostacillas de vidrio
                    calibradas Miyuki, cristales y técnicas de alambrismo.</p>
                </div>
                <router-link to="/tienda" class="btn btn-outline-brand btn-sm px-3 align-self-center">Ver
                  Joyas</router-link>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-md-6">
            <div class="card category-card border-0 shadow-sm h-100 overflow-hidden">
              <div class="category-img-placeholder d-flex align-items-center justify-content-center text-muted">
                <i class="bx bx-smile fs-1"></i>
              </div>
              <div class="card-body text-center py-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 class="fw-bold mb-2 fs-6 text-dark-brand">Accesorios & Detalles</h5>
                  <p class="card-text text-muted small mb-3">Packs de stickers de confección propia e ilustrados en
                    nuestro taller, imanes y detalles únicos.</p>
                </div>
                <router-link to="/tienda" class="btn btn-outline-brand btn-sm px-3 align-self-center">Ver
                  Detalles</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" class="cta-section py-5 text-center text-white">
      <div class="container py-2">
        <h3 class="fw-bold mb-2">¿Quieres ver cómo armamos tus pedidos?</h3>
        <p class="mb-4 opacity-90">Compartimos diariamente bitácoras de empaque, tejido de accesorios y nuevos
          lanzamientos en el taller.</p>
        <a class="cta-btn px-4 py-2 d-inline-block fw-bold" href="https://www.instagram.com/selvadepapel_/"
          target="_blank">@selvadepapel_</a>
      </div>
    </section>

    <section id="faq-section" class="py-5 bg-white">
      <div class="container">
        <div class="text-center mb-5">
          <span class="text-uppercase text-brand fw-bold tracking-wider">Resolvemos tus dudas</span>
          <h3 class="fw-bold text-dark-brand mt-1">Preguntas Frecuentes</h3>
          <div class="title-line mx-auto mt-2"></div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-9">
            <div class="accordion accordion-flush" id="faqAccordion">
              <div class="accordion-item border-bottom py-2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed fw-semibold text-dark-brand" type="button"
                    data-bs-toggle="collapse" data-bs-target="#faq1">
                    ¿Cómo puedo realizar una compra?
                  </button>
                </h2>
                <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-muted small">
                    Puedes armar tu pedido directamente añadiendo tus artículos al carrito de nuestra Tienda Virtual o
                    enviándonos un mensaje directo en Instagram para coordinar la preventa o entrega.
                  </div>
                </div>
              </div>

              <div class="accordion-item border-bottom py-2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed fw-semibold text-dark-brand" type="button"
                    data-bs-toggle="collapse" data-bs-target="#faq2">
                    ¿Cuáles son los métodos de envío y puntos de entrega?
                  </button>
                </h2>
                <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-muted small">
                    <ul class="ps-3 mb-0">
                      <li class="mb-2"><strong>Entregas Presenciales:</strong> Realizamos entregas presenciales sin
                        costo en Santiago, de lunes a viernes en <strong>Metro Santa Lucía</strong> en horario a
                        convenir. De forma esporádica avisamos entregas en el <strong>centro de La Serena</strong> vía
                        Instagram.</li>
                      <li class="mb-2"><strong>Envíos dentro de la RM:</strong> Opción de despachos rápidos mediante
                        aplicaciones de delivery para artículos con stock inmediato.</li>
                      <li><strong>Envíos a Regiones:</strong> Despachamos a todo Chile mediante couriers bajo la
                        modalidad por pagar (encomienda a domicilio o sucursal).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item border-bottom py-2">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed fw-semibold text-dark-brand" type="button"
                    data-bs-toggle="collapse" data-bs-target="#faq3">
                    ¿Cuáles son las condiciones para productos personalizados?
                  </button>
                </h2>
                <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body text-muted small">
                    Los productos personalizados o a pedido requieren un abono inicial equivalente al 50% del valor
                    total cotizado para agendar su fabricación. Una vez confirmado el abono y comenzado el trabajo, no
                    se aceptan modificaciones de diseño y el anticipo no es reembolsable. Los despachos a través de
                    couriers se realizan los días miércoles y sábado de cada semana.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contacto" class="py-5 bg-light-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="text-uppercase text-brand fw-bold tracking-wider">¿Tienes dudas o proyectos especiales?</span>
          <h3 class="fw-bold text-dark-brand mt-1">Contáctanos</h3>
          <div class="title-line mx-auto mt-2"></div>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-lg-4">
            <div class="p-4 bg-white rounded shadow-sm h-100 border-top border-4 border-brand-color">
              <div class="d-flex align-items-center mb-3">
                <i class="bx bx-time-five fs-3 text-brand me-3"></i>
                <div>
                  <h6 class="fw-bold text-dark-brand mb-0">Horarios de Atención</h6>
                  <small class="text-muted">Lunes a Viernes: 09:00 a 18:00 hrs.</small>
                </div>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="bx bx-envelope fs-3 text-brand me-3"></i>
                <div>
                  <h6 class="fw-bold text-dark-brand mb-0">Correo Electrónico</h6>
                  <small class="text-muted">contacto.selvadepapel@gmail.com</small>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <i class="bx bx-map fs-3 text-brand me-3"></i>
                <div>
                  <h6 class="fw-bold text-dark-brand mb-0">Ubicación</h6>
                  <small class="text-muted">Santiago, Chile</small>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="p-4 p-md-5 bg-white shadow-sm rounded-4 h-100">
              <form ref="formRef" @submit.prevent="enviarContacto" action="https://formspree.io/f/TU_ID_AQUÍ"
                method="POST">

                <div style="display:none;">
                  <input type="text" name="username_verification" tabindex="-1" autocomplete="off">
                </div>

                <div class="mb-3">
                  <label for="contact-name" class="form-label small fw-bold text-dark-brand">Nombre</label>
                  <input type="text" id="contact-name" name="name" class="form-control" required>
                </div>

                <div class="mb-3">
                  <label for="contact-email" class="form-label small fw-bold text-dark-brand">Correo Electrónico</label>
                  <input type="email" id="contact-email" name="email" class="form-control" required>
                </div>

                <div class="mb-3">
                  <label for="contact-subject" class="form-label small fw-bold text-dark-brand">Asunto</label>
                  <input type="text" id="contact-subject" name="subject" class="form-control" required>
                </div>

                <div class="mb-3">
                  <label for="contact-message" class="form-label small fw-bold text-dark-brand">Mensaje</label>
                  <textarea id="contact-message" name="message" class="form-control" rows="4" required></textarea>
                </div>

                <button type="submit" class="btn btn-shop-now w-100 py-2 fw-semibold">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1100">
        <div id="contactToast" class="toast align-items-center text-white bg-dark-brand border-0 shadow-lg" role="alert"
          aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body d-flex align-items-center gap-2">
              <i class="bx bx-check-circle fs-5 text-accent"></i>
              <span>¡Gracias por contactarnos! Hemos recibido tu mensaje de forma exitosa.</span>
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
              aria-label="Cerrar"></button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const formRef = ref(null)
let toastInstance = null

onMounted(() => {
  const toastEl = document.getElementById("contactToast")
  if (toastEl && typeof bootstrap !== 'undefined') {
    toastInstance = new bootstrap.Toast(toastEl, { delay: 4000 })
  }
})

// MODO SELECCIONADO: WHATSAPP DIRECTO (Cero fallos de CORS, conversión inmediata)
const enviarContacto = () => {
  if (!formRef.value) return

  // Capturamos el formulario nativo igual que en Compad
  const formData = new FormData(formRef.value)

    // 🚨 CONTROL TRAMPA: Si el bot llenó este campo, abortamos silenciosamente
    if (formData.get('username_verification')) {
      console.log("Bot detectado en el Honeypot.");
      formRef.value.reset()
      if (toastInstance) toastInstance.show() // Le mostramos éxito para engañarlo
      return // Se frena la ejecución aquí, no abre WhatsApp ni manda mail
    }

  const name = formData.get('name')
  const email = formData.get('email')
  const subject = formData.get('subject')
  const message = formData.get('message')

  // Tu número corporativo de Selva de Papel (Ej de formato internacional: 569XXXXXXXX)
  const telefonoWhatsApp = "56944932071"

  // Construimos el bloque de texto limpio para abrir la conversación
  const textoMensaje = `Hola Selva de Papel! Me gustaría realizar una consulta desde la web:\n\n*Nombre:* ${name}\n*Correo:* ${email}\n*Asunto:* ${subject}\n*Mensaje:* ${message}`

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${telefonoWhatsApp}&text=${encodeURIComponent(textoMensaje)}`

  // Limpiamos los campos y lanzamos el Toast de confirmación en tu web antes de redirigir
  formRef.value.reset()
  if (toastInstance) toastInstance.show()

  // Abrimos la API de WhatsApp de forma nativa e inmediata
  window.open(urlWhatsApp, '_blank')
}

/* =========================================================================
   CÓDIGO OPCIONAL PARA FORMSPREE (Si decides crear la cuenta allá)
   =========================================================================
   Solo tendrías que cambiar la función de arriba por esta de aquí abajo:

const enviarContacto = async () => {
  if (!formRef.value) return
  const formData = new FormData(formRef.value)

  try {
    const response = await fetch(formRef.value.action, {
      method: formRef.value.method,
      body: formData,
      headers: { "Accept": "application/json" }
    })

    if (response.ok) {
      formRef.value.reset()
      if (toastInstance) toastInstance.show()
    } else {
      alert("Hubo un problema al enviar el mensaje. Intenta nuevamente.")
    }
  } catch (error) {
    alert("Error de conexión. Por favor, inténtalo más tarde.")
  }
}
========================================================================= */
</script>

<style scoped>
/* GENERAL STYLES */
.text-brand {
  color: #294d43;
}

.text-dark-brand {
  color: #1b352f;
}

.bg-light-section {
  background-color: #fcfbfa;
}

.leading-relaxed {
  line-height: 1.8;
}

.tracking-wider {
  letter-spacing: 1.5px;
  font-size: 13px;
}

.title-line {
  width: 50px;
  height: 3px;
  background-color: #294d43;
  border-radius: 2px;
}

/* 1. PORTADA SECTION */
.portada-section {
  background: linear-gradient(rgba(27, 53, 47, 0.88), rgba(41, 77, 67, 0.88));
  min-height: 60vh;
  padding: 100px 0;
}

.subtitle-brand {
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 2px;
  font-weight: 300;
  opacity: 0.9;
  text-transform: uppercase;
}

.main-brand-title {
  font-family: 'Varino', sans-serif;
  letter-spacing: 2px;
}

.lead-brand {
  font-size: 18px;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  opacity: 0.85;
}

.btn-instagram,
.btn-shop-now {
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1px;
  border-radius: 4px;
  transition: all 0.4s ease;
  text-decoration: none;
}

.btn-instagram {
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
}

.btn-instagram:hover {
  background: #fff;
  color: #1b352f;
}

.btn-shop-now {
  background: #e7a361;
  border: 2px solid #e7a361;
  color: #fff;
}

.btn-shop-now:hover {
  background: #f1b375;
  border-color: #f1b375;
  transform: translateY(-1px);
}

/* 2. ABOUT */
.about-badge {
  background-color: rgba(41, 77, 67, 0.08);
  color: #294d43;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.5px;
}

.border-brand-color {
  border-color: #294d43 !important;
}

.bg-dark-brand {
  background-color: #1b352f;
}

.text-accent {
  color: #e7a361;
}

/* 3. CATEGORY CARDS */
.category-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06) !important;
}

.category-img-placeholder {
  height: 140px;
  background-color: #eeebe6;
  color: #a5a19a;
}

.btn-outline-brand {
  border-color: #294d43;
  color: #294d43;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 12px;
}

.btn-outline-brand:hover {
  background-color: #294d43;
  color: #fff;
}

/* 4. CTA SECTION */
.cta-section {
  background: linear-gradient(135deg, #1b352f 0%, #294d43 100%);
}

.cta-btn {
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  border: 2px solid #fff;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  transition: 0.4s;
  letter-spacing: 1px;
}

.cta-btn:hover {
  background: #fff;
  color: #1b352f;
}

/* 5. ACCORDION CUSTOM */
.accordion-button:not(.collapsed) {
  background-color: #fdfdfd;
  color: #294d43;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
}
</style>