<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold text-success" style="color: #004a34 !important;">Vitrina de Productos</h2>
      <p class="text-muted">Explora la variedad de portadas, series y joyería artesanal hecha con amor.</p>
      <router-link to="/" class="btn btn-outline-secondary btn-sm mb-4">← Volver al Home</router-link>
    </div>

    <div class="row g-4">
      <div v-for="prod in listaProductos" :key="prod.id" class="col-lg-4 col-md-6">
        <div class="portfolio-wrap">
          <img :src="prod.imagen" class="img-fluid w-100" :alt="prod.nombre" style="height: 250px; object-fit: cover;">
          <div class="portfolio-info-box">
            <h4>{{ prod.nombre }}</h4>
            <p>{{ prod.coleccion }}</p>
            <div class="portfolio-links-box">
              <span class="price-tag">${{ prod.precio.toLocaleString('es-CL') }}</span>
              <div class="d-flex align-items-center gap-2">
                <span v-if="prod.variantes.length > 0" class="badge-v">{{ prod.variantes.length }} series</span>
                <a href="#" title="Ver Detalles"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { productos as listaProductos } from '../data/productos.js'
</script>