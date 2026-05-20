<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-3">
    <div class="container">
      <router-link class="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
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
            <router-link class="nav-link px-3" :to="{ path: '/', hash: '#faq-section' }">
              Preguntas Frecuentes
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" :to="{ path: '/', hash: '#contacto' }">
              Contacto
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* 1. TIPOGRAFÍA CORPORATIVA DEL LOGO */
.navbar-brand {
  font-family: "Another", sans-serif;
  font-size: 28px;
  color: #004a34 !important;
}

.brand-icon-navbar {
  height: 26px;
  width: auto;
  opacity: 0.9;
}

/* 2. ESTADO BASE DE TODOS LOS LINKS DEL MENÚ */
.navbar .nav-link {
  font-family: 'Nunito', sans-serif !important;
  color: #1b352f !important;
  /* Tu verde oscuro corporativo */
  font-weight: 600 !important;
  transition: color 0.2s ease;
}

/* 3. EFECTO HOVER (PASAR EL MOUSE) */
.navbar .nav-link:hover {
  color: #294d43 !important;
  /* Tu verde de destaque */
}

/* 4. REGLA PARA EL LINK ACTIVO (OBLIGA A UNIFICAR TONOS) */
/* Usamos la clase exacta de Vue Router con mayor especificidad para que "Tienda" cambie de color igual que el resto al seleccionarse */
.navbar .router-link-active:not(.navbar-brand) {
  color: #294d43 !important;
  /* Mismo verde de destaque cuando estás parada en esa página */
  font-weight: 700 !important;
}
</style>