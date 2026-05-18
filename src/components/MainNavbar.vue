<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
    <div class="container">
      <router-link class="navbar-brand fw-bold text-success d-flex align-items-center gap-2" to="/">
        <span class="brand-text">Selva de Papel</span>
        <img src="/fonts/hojita.svg" alt="Ícono Selva de Papel" class="brand-icon-navbar">
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto gap-2 align-items-center">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/tienda">Tienda</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="#faq-section">Preguntas Frecuentes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link px-3" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Estilos específicos para el Navbar */
.navbar-brand {
  font-family: "Another", sans-serif;
  font-size: 28px;
  color: #004a34 !important;
}

/* Regla icono de marca */
.brand-icon-navbar {
  height: 26px;
  width: auto;
  opacity: 0.9;
}

.nav-link {
  /* Los enlaces del menú siguen usando Open Sans de forma ultra legible */
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  color: #555555 !important;
  transition: color 0.2s;
}

/* Vue Router añade automáticamente esta clase al link que coincide con la URL actual */
.router-link-active:not(.navbar-brand) {
  color: #004a34 !important;
  font-weight: 700;
}

.nav-link:hover {
  color: #004a34 !important;
}
</style>