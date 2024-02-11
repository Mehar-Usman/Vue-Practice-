<template>
  <carousel :autoplay="5000" wrapAround :itemsToShow="1" class="carousel-root">
    <slide v-for="slide in images" :key="slide.src" class="carousel-slide">
      <div>
        <img :src="slide.src" :alt="slide.alt" class="w-full h-auto p-0 m-0" />
      </div>
    </slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation,Pagination } from 'vue3-carousel';

export default {
  data() {
    return {
      images: [
        { src: 'https://www.angvo.com/public/angvo/assets/images/slider_images/slider_1.jpg', alt: 'Image 2' },
        { src: 'https://www.angvo.com/public/angvo/assets/images/slider_images/slider_2.jpg', alt: 'Image 1' },
        { src: 'https://www.angvo.com/public/angvo/assets/images/slider_images/slider_3.jpg', alt: 'Image 2' },
        { src: 'https://www.angvo.com/public/angvo/assets/images/slider_images/slider_4.jpg', alt: 'Image 2' },
      ],
    };
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style scoped>

</style>
