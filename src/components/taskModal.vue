<template>
  <!-- The outer wrapper for the popup -->
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute inset-0 bg-gray-900 opacity-50 transition-opacity"></div>
    <!-- The popup content -->
    <div class="bg-white p-10 rounded-lg shadow-xl transform scale-100 transition-transform">
      <div>
        <div class="flex justify-center ">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#DC734C" fill-opacity="0.11"></circle><path fill="#DC734C" d="M21.937 48.93c-2.046 0-2.95-1.934-1.806-3.459.579-.776 1.496-2.215 2.046-3.217-4.346-2.3-7.112-6.506-7.112-11.135 0-7.593 7.536-13.704 16.935-13.704 9.4 0 16.935 6.11 16.935 13.704 0 7.79-7.522 13.703-17.697 13.675-3.176 2.272-7.254 4.135-9.3 4.135zm2.047-3.769c1.213-.494 3.782-2.16 5.42-3.415.606-.494 1.058-.65 1.679-.65.38.015.691.015.917.015 7.353 0 13.224-4.488 13.224-9.992 0-5.518-5.871-10.006-13.224-10.006S18.776 25.6 18.776 31.119c0 3.556 2.428 6.675 6.52 8.623.918.437 1.158 1.171.678 2.046-.579 1.073-1.567 2.357-2.174 3.119-.197.24-.084.353.184.254z"></path></svg>
        </div>
      </div>
      <h2 class="text-3xl mt-3 font-semibold text-center  ">Premium Supports </h2>
      <p class="text-center text-xl mt-2 mb-4 text-grayShade font-sans tracking-tight">Our support team (AKA "coaches") are parents <br> who live and breathe disability. We'll help you <br> make the most of the NDIS!</p>
      <button @click="openNextPopup" class="mt-4 px-4 py-2 bg-red-400 text-white rounded w-full font-semibold">
        NEXT
      </button>
    </div>
  </div>
  <!-- The Second Outer wrapper for the popup -->
  <div v-if="openNext" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute inset-0 bg-gray-900 opacity-50 transition-opacity"></div>
    <div class="bg-white p-10 rounded-lg shadow-xl transform scale-100 transition-transform">
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="#DC734C" fill-opacity="0.11"></circle><path fill="#DC734C" d="M25.468 47.67c-3.204 0-4.954-1.75-4.954-4.981V21.59c0-3.218 1.75-4.982 4.954-4.982h6.972c2.088 0 3.231.353 4.6 1.736l6.775 6.845c1.397 1.411 1.721 2.512 1.721 4.714v12.786c0 3.218-1.75 4.982-4.953 4.982H25.468zm.437-3.64h14.24c1.2 0 1.75-.607 1.75-1.736V30.778h-6.83c-2.442 0-3.613-1.157-3.613-3.613V20.25h-5.547c-1.2 0-1.75.62-1.75 1.75v20.294c0 1.129.55 1.736 1.75 1.736zm9.428-16.244h6.28l-7.17-7.24v6.35c0 .608.283.89.89.89zm2.441 6.365c.536 0 .946.395.946.917 0 .536-.41.946-.946.946h-9.667c-.565 0-.96-.41-.96-.946 0-.522.395-.917.96-.917h9.667zm0 4.389a.94.94 0 01.946.96c0 .522-.41.917-.946.917h-9.667c-.565 0-.96-.395-.96-.918 0-.536.395-.96.96-.96h9.667z"></path><path fill="#DC734C" d="M22.71 48.309c-3.21 0-5.855-2.645-5.855-5.86 0-3.21 2.64-5.855 5.855-5.855 3.21 0 5.855 2.644 5.855 5.854 0 3.216-2.64 5.86-5.855 5.86zm-2.634-5.012h2.634a.53.53 0 00.532-.538V39.31c0-.3-.233-.532-.532-.532a.53.53 0 00-.538.532v2.917h-2.096c-.3 0-.532.232-.532.532 0 .3.233.538.532.538z"></path><path fill="#FBF0EB" fill-rule="evenodd" d="M22.71 43.297a.53.53 0 00.532-.538V39.31c0-.3-.233-.532-.532-.532a.53.53 0 00-.538.532v2.917h-2.096c-.3 0-.532.233-.532.532 0 .3.233.538.532.538h2.634zm0 7.076c-4.352 0-7.92-3.57-7.92-7.925 0-4.349 3.563-7.919 7.92-7.919 4.35 0 7.92 3.569 7.92 7.92 0 4.353-3.562 7.924-7.92 7.924zm-5.855-7.925c0 3.216 2.645 5.86 5.855 5.86 3.216 0 5.855-2.644 5.855-5.86 0-3.21-2.645-5.854-5.855-5.854-3.216 0-5.855 2.644-5.855 5.854z" clip-rule="evenodd"></path></svg>
      </div>
      <h2 class="text-3xl text-center font-semibold mb-4 mt-6">Fast Payments</h2>
      <p class="text-center text-lg  text-grayShade tracking-tight">We're all about fast painless plan management <br> because we know you've got more important <br> things to do.</p>
      <button @click="closeNextPopup" class="mt-6 px-4 py-2 bg-red-400  text-white rounded font-semibold w-full">
        Next
      </button>
    </div>
  </div>
  <div v-if="openThird" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute inset-0 bg-gray-900 opacity-50 transition-opacity"></div>
    <div class="bg-white p-10 rounded-lg shadow-xl transform scale-100 transition-transform">
      <div class="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="79" height="76" fill="none" viewBox="0 0 79 76"><circle cx="32" cy="44" r="32" fill="#DC734C" fill-opacity="0.11"></circle><path fill="#DC734C" d="M20.71 58.402c-3.217 0-4.982-1.75-4.982-4.954V39.843c0-3.062.58-3.67 2.611-5.109l10.077-7.409c1.397-1.002 2.286-1.524 3.585-1.524 1.312 0 2.201.522 3.599 1.524l10.076 7.41c2.046 1.453 2.597 2.046 2.597 5.108v13.605c0 3.204-1.764 4.954-4.982 4.954h-22.58zm14.466-14.664l.621.621 7.423-7.38-9.568-7.128c-.621-.465-1.03-.706-1.651-.706s-1.03.24-1.651.706l-9.668 7.198 7.339 7.296.62-.607c1.073-1.044 2.132-1.524 3.275-1.524 1.143 0 2.202.48 3.26 1.524zm9.738-4.078v-.184l-7 6.958 7 6.887V39.66zm-25.827 0v13.478l6.831-6.718-6.83-6.775v.015zm11.375 6.407l-9.018 8.905h20.944l-9.018-8.905c-.565-.565-.988-.776-1.454-.776-.466 0-.89.226-1.454.776zM63.485 16.17l-1.233 1.752a.923.923 0 01-1.668-.341l-.446-2.095a7.56 7.56 0 00-2.99-4.59l-2.1-1.499c-.668-.476-.45-1.545.351-1.721l2.442-.537a7.566 7.566 0 004.63-3.167l1.27-1.877a.924.924 0 011.682.344l.431 2.224a7.565 7.565 0 003.017 4.73l2.036 1.45c.668.477.45 1.546-.352 1.723l-2.52.554a7.56 7.56 0 00-4.55 3.05zM70.343 28.594l-1.149.582a.555.555 0 01-.789-.652l.355-1.238a4.545 4.545 0 00-.29-3.28l-.692-1.388c-.22-.441.197-.947.672-.814l1.447.404a4.548 4.548 0 003.351-.373l1.204-.637a.555.555 0 01.795.657l-.399 1.302a4.547 4.547 0 00.266 3.361l.67 1.345c.22.441-.197.947-.672.814l-1.494-.417a4.544 4.544 0 00-3.275.334z"></path></svg>      </div>
      <h2 class="text-3xl text-center font-semibold mb-4 mt-6">Free Resources</h2>
      <p class="text-center text-xl tracking-tight text-grayShade leading-8">Become the best advocate you can be! We've <br> crowdsourced the very best advice and support
        <br> tools from families kicking NDIS goals.</p>
      <router-link to="/numberPage"> <button class="mt-6 px-4 py-2 bg-red-400 text-white rounded font-semibold w-full ">
        Next
      </button></router-link>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      openNext: false,
      openThird:false,
    };
  },
  methods: {
    openPopup() {
      this.isOpen = true;
    },
    openNextPopup() {
      this.isOpen = false;
      this.openNext = true; // Open the second popup when the "NEXT" button is clicked
    },
    closeNextPopup() {
      this.openNext = false;
      this.openThird = true
    },
  },
};
</script>

<style>
/* Customize the appearance of the popup */

/* Define the zoom-out animation */
@keyframes zoom-out {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.99);
  }
}

/* Apply the zoom-out animation to the popup */
.scale-100 {
  animation: zoom-out 0.5s;
}
</style>
