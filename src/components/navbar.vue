<template>
  <nav class=" py-5 px-28">
    <div class=" mx-auto px-2 ">
      <div class="relative flex items-center justify-between h-16">
        <!-- Button with Zoom-out Animation -->
        <button class=" px-4 py-2 rounded-md bg-amber-500 text-2xl hover:scale-105 transition-transform font-bold text-white " @click="handleButtonClick">
          OVERBUFF
        </button>

        <!-- Navigation Links -->
        <div class="flex-grow hidden sm:block md:ml-8">
          <ul class="flex space-x-4">
            <li class="nav-item">
              <a href="#" class="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md  font-medium text-lg">Meta Guide</a>
            </li>
            <li class="nav-item">
              <a href="#" class="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md  font-medium text-lg">Hero Stats</a>
            </li>
            <li class="nav-item">
              <a href="#" class="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md  font-medium text-lg">Role Stats</a>
            </li>
            <li class="nav-item">
              <a href="#" class="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md  font-medium text-lg">PLayer Ranking</a>
            </li>
          </ul>
        </div>

        <select id="countries"  class="appearance-none bg-black dropdown text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled selected >Find Players by Battle Tag </option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
        <div class=" md:ml-16 flex hover:bg-gray-900 hover:p-2 p-2 hover:rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div class="ml-1 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>

export default {
  methods: {
    handleButtonClick() {
      // Handle button click event
    },
  },
};
</script>
<style>
.nav-item {
  display: flex;
  align-items: center;
}
</style>
