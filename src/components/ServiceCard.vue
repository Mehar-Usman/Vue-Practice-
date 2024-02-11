<template>
  <div class="bg-white rounded-2xl py-12  hover:bg-orange group ">
    <div class="justify-center items-center flex">
      <div
          class="bg-orange group-hover:bg-white group-hover:text-orange w-16 text-white p-4 items-center justify-center flex text-4xl sm:text-2xl"
          style="border-radius: 60px"
      >
        {{ icon }}
      </div>
    </div>
    <div class="text-4xl text-center mt-4 group-hover:text-white font-bold sm:text-3xl">
      {{ mainTitle }}
    </div>    <div class="text-orange text-center mt-4 group-hover:text-white text-xl sm:text-lg">
    {{ title }}
  </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    mainTitle: String,
    title: String,
  },
};
</script>

<style>
/* Add your component-specific styles here */

/* Transition properties for smooth color change */
.bg-white {
  transition: background-color 0.4s ease-in-out;
  color: initial; /* Resetting the color to initial */
}

.group-hover\:bg-orange:hover,
.group-hover\:text-orange:hover {
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}
</style>
