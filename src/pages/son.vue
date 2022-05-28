<script setup>
// core version + navigation, pagination modules:
import { mount } from '@vue/test-utils'
import Swiper, { Navigation, Pagination } from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

onMounted(() => {
  // init Swiper:
  const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
    modules: [Navigation, Pagination],
  })
})
</script>

<template>
  <div class="container">
    <!-- Slider main container -->
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          Slide 1
        </div>
        <div class="swiper-slide">
          Slide 2
        </div>
        <div class="swiper-slide">
          Slide 3
        </div>
        ...
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination" />

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev" />
      <div class="swiper-button-next" />

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar" />
    </div>
  </div>
</template>

<style scoped>
.swiper {
  background: #ff9595;
  width: 600px;
  height: 300px;
}
</style>

