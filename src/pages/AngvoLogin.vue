<template>
  <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 lg:px-40 py-10 lg:py-32 h-screen flex justify-center items-center">
    <div class="bg-white grid grid-cols-1 md:grid-cols-2 px-10 md:px-10 lg:px-20 py-10 rounded ">
      <div class="hidden md:block">
        <img src="https://www.angvo.com/public/login_assets/images/logo_login.jpg" alt="">
      </div>
      <div class="px-4 lg:px-14">
        <div class="text-2xl text-center font-bold">Angvo Login</div>
        <div class="relative flex items-center  mt-8">
          <div class="absolute left-0 pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-gray-600" :class="{'text-green-500': inputFocused}">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </div>
          <input
              @focus="inputFocused = true"
              @blur="inputFocused = false"
              type="text"
              class="w-full py-4 px-10 bg-grayshade2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500 focus:border-blue-500"
              placeholder=" Email"
          />
        </div>
        <div class="relative flex items-center  mt-8">
          <div class="absolute left-0 pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-gray-600" :class="{'text-green-500': inputFocused2}">
              <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
            </svg>

          </div>
          <input
              @focus="inputFocused2 = true"
              @blur="inputFocused2 = false"
              type="text"
              class="w-full py-4 px-10 bg-grayshade2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500 focus:border-blue-500"
              placeholder=" Password"
          />
        </div>
        <div class="mt-6">
          <button class="text-center text-white bg-orange w-full py-4 rounded-full font-bold text-sm ">LOGIN</button>
        </div>
        <div class="text-center pt-4">
          <p class="text-grayShade font-light">Forgot <a class="text-black hover:text-green-700" href="#">Password</a> </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputFocused: false,
      inputFocused2:false
    };
  },
};
</script>

<style scoped>
/* Add the focus styles for the input field */
.focus\:ring-blue-500:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  animation: zoomOut 0.6s ease-in-out;
}
@keyframes zoomOut {
  100% {
    box-shadow: 0 0 0 8px rgba(59, 130, 246, 0);
  }
}
</style>
