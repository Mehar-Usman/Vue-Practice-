<template>
  <nav class="bg-white md:px-0 sm:px-0 lg:px-20  sm:py-0 md:py-6 ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 ">
      <div class="flex items-center justify-between  ">
        <!-- Logo -->
        <div class="flex justify-center items-center">
          <img class="h-25 w-25 text-white sm:hidden md:block" src="https://www.angvo.com/public/angvo/assets/images/logo.png" alt="Logo">

        </div>
        <!-- Menu items -->
        <div class=" lg:space-x-4  md:space-x-0.5 lg:ml- md:ml-0 sm:hidden md:block">
          <a
              v-for="item in navbarItems"
              :key="item.label"
              :href="item.url"
              class="text-black  px-2 py-2 rounded-md md:text-sm lg:text-lg font-medium"
          >
            {{ item.label }}
          </a>
        </div>
        <div class="lg:ml-6 md:ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 sm:hidden  md:block text-black ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
        <div class="lg:ml-8 md:ml-8 hidden lg:block ">
          <button class="bg-orange for-transition px-2 py-1 rounded flex items-center text-white font-bold hover:bg-indigo-700 group" type="button">
            <sup class="text-2xl text-white group-hover:text-orange mb-2">.</sup>
            <span class="ml-2 text-white">LET'S GET STARTED</span>
            <sub>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-3 mt-2 text-amber-300 group-hover:text-blue-500 ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
              </svg>
            </sub>
          </button>

        </div>

        <!-- Buttons (shown on small screens only) -->

<!--        <div class="hidden md:flex sm:items-center">-->

<!--          <div class="">-->
<!--            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 sm:hidden  md:block text-black">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />-->
<!--            </svg>-->

<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
    <div class="md:hidden lg:hidden justify-center flex">

      <!--=========== Toggler button (for mobile) ==============-->
        <div class="">
          <img class="h-25 w-25 sm:h-auto sm:w-auto" src="https://www.angvo.com/public/angvo/assets/images/logo.png" alt="Logo">
        </div>
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 sm:block  md:hidden text-black">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </div>

        <button @click="toggleMenu" type="button"  :class="buttonClasses" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
    </div>

    <!-- ============== Mobile menu (hidden by default)  ==============-->
    <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="lg:hidden">
      <div class="px-2  space-y-1">
        <a v-for="item in navbarItems" :key="item" :href="item.url" class="text-black  block px-3 py-2 rounded-md text-base font-medium ">{{ item.label }}</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      navbarItems: [
        { label: 'Home', url: '/angvoHome' },
        { label: 'About', url: '/aboutAngvo' },
        { label: 'Service', url: '/sevicesAngvo' },
        { label: 'Contact', url: '/contact' },
        { label: 'Login', url: '/angvoLogin' },
        { label: 'Register', url: '/register' },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  computed: {
    buttonClasses() {
      return [
          'text-black',
          'focus:outline-none',
          'bg-orange',
          'px-1',
          'py-1',
          'rounded-lg',
          'mt-5',
          'mb-4',
          'ml-4'
        // 'focus:text-white',
        // 'w-11/12',
        // 'px-6',
        // 'rounded',
        // 'mb-4',
        // 'p-2',
        // this.isMenuOpen ? 'bg-orange' : '',
      ];
    },
  },
};
</script>

<style scoped>
.set-bg-btn {
  background-color: #f5f5f5;
}
.for-transition {
  transition: background-color 0.4s ease-in-out, color 0.3s ease-in-out, transform 0.2s ease-in-out;
}

/* Add the transform scale to create the zoom-in effect when hovering over the button */
.for-transition:hover {
  background-color: #4f46e5; /* Change this color to the desired hover background color */
  color: #ff8c00; /* Change this color to the desired hover text color */
  transform: scale(1.02); /* Adjust the scale value to control the zoom-in effect */
}
</style>