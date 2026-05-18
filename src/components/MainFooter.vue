<template>
  <footer class="main-footer pt-5 pb-4 mt-5">
    <div class="container text-md-start text-center">
      <div class="row g-4">
        <div class="col-md-4 col-sm-12">
          <h3 class="footer-brand mb-2 d-flex align-items-center gap-2">
            <span>Selva de Papel</span>
            <img
              src="/fonts/hojita.svg"
              alt="Ícono Selva de Papel"
              class="brand-icon-footer"
            />
          </h3>
          <p class="footer-text small">
            Encuadernación de conservación, papelería artesanal y accesorios
            creados a mano en Santiago de Chile. Cada pieza es única y pensada
            para durar.
          </p>
        </div>

        <div class="col-md-4 col-sm-6">
          <h5 class="footer-title mb-3">Navegación</h5>
          <ul class="list-unstyled footer-links">
            <li class="mb-2"><router-link to="/">Inicio</router-link></li>
            <li class="mb-2">
              <router-link to="/tienda">Tienda Virtual</router-link>
            </li>
            <li class="mb-2">
              <a href="#faq-section">Preguntas Frecuentes</a>
            </li>
          </ul>
        </div>

        <div class="col-md-4 col-sm-6">
          <h5 class="footer-title mb-3">Contacto</h5>
          <ul class="list-unstyled footer-text small">
            <li class="mb-2">
              <i class="bx bx-map me-2"></i> Santiago Centro, Chile
            </li>
            <li class="mb-2">
              <i class="bx bx-envelope me-2"></i>
              contacto.selvadepapel@gmail.com
            </li>
          </ul>
          <div
            class="footer-socials mt-3 fs-4 d-flex justify-content-md-start justify-content-center gap-3"
          >
            <a href="#" target="_blank" title="Instagram"
              ><i class="bx bxl-instagram"></i
            ></a>
            <!-- <a href="#" target="_blank" title="Pinterest"><i class="bx bxl-pinterest"></i></a> -->
          </div>
        </div>
      </div>

      <hr class="my-4 border-secondary opacity-25" />

      <div class="row">
        <div class="col text-center">
          <p class="footer-copy mb-0 small">
            &copy; 2026 Selva de Papel. Todos los derechos reservados.
            <br />Desarrollado con ❤️ por ISerey
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Estilos contenidos únicamente para el Footer global */
.main-footer {
  background-color: #1a2421;
  color: #ecf0f1;
}

.footer-brand {
  font-family: "Another", sans-serif;
  color: #ffffff;
  font-size: 26px;
}

/* Regla para tu icono de marca en el footer oscuro */
.brand-icon-footer {
  height: 24px;
  width: auto;
  opacity: 0.9;
  filter: brightness(0) invert(1);
}

.footer-title {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #a3cfbb; /* El verde clarito para destacar títulos cortos */
}

.footer-text {
  color: #adb5bd;
  line-height: 1.6;
}

.footer-links a {
  color: #adb5bd;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #ffffff;
  padding-left: 2px; /* Efecto sutil al pasar el mouse */
}

.footer-socials a {
  color: #a3cfbb;
  transition:
    color 0.2s,
    transform 0.2s;
}

.footer-socials a:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

.footer-copy {
  color: #6c757d;
}
</style>
