<template>
    <div class="grid px-28 grid-cols-12">
      <div class="text-4xl text-white py-4 col-span-12">Player Ranking</div>

        <div class="text-white col-span-2">Platform</div>
        <div class="text-white col-span-3">Game Mode</div>
      <div class="text-white col-span-3">Hero</div>
      <div class="text-white col-span-2">Skill tier</div>
    </div>
  <div class="grid px-28 grid-cols-12 ">
    <div class="col-span-2">
      <div class="inline-flex rounded-md ">
        <button  aria-current="page" class="px-4 py-2 text-sm font-medium text-white bg-blue-950  border-gray-200 rounded-l-lg  ">
          PC
        </button>
        <button  class="px-4 py-2 rounded-r-md text-sm font-medium text-white bg-gray-700  hover:bg-gray-900  hover:text-white ">
          Console
        </button>
      </div>
    </div>
    <div class="col-span-3">
      <div class="inline-flex rounded-md ">
        <button  aria-current="page" class="px-4 py-2 text-sm font-medium text-white bg-blue-950  border-gray-200 rounded-l-lg  ">
          Quick play
        </button>
        <button  class="px-4 py-2 rounded-r-md text-sm font-medium text-white bg-gray-700  hover:bg-gray-900  hover:text-white ">
          Competative
        </button>
      </div>
    </div>
    <div class="col-span-3">
    <button class="w-44 bg-gray-700 flex items-center p-2 rounded hover:bg-blue-950">
      <img class="h-6 rounded " src="https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbaptiste.6737fd59.png&w=256&q=100" >
      <label class="text-white mx-2">Baptiste</label>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white ml-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
      </svg>
    </button>
  </div>
    <div class="col-span-3">
      <button class="w-44 bg-gray-700 flex items-center p-2 rounded hover:bg-blue-950">
        <label class="text-white mx-2">All</label>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white ml-24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </button>
    </div>
  </div>
  <div class="grid px-28">
    <div class="col-span-12 bg-gray-950 py-1 px-1 rounded-t">
      <div class="flex gap-3">
        <button class="bg-amber-500 px-3 py-2 rounded text-white ">Overview</button>
        <button class="bg-blue-950 px-3 py-2 rounded text-white hover:bg-blue-900">Primary</button>
        <button class="bg-blue-950 px-4 py-2 rounded text-white hover:bg-blue-900">Eliminations</button>
      </div>
    </div>
    <div class="col-span-12">
      <div class="col-span-12 bg-gray-900 py-1 px-1 rounded-t">

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class=" text-sm text-left text-white w-full">
            <thead class="text-xs  uppercase ">
            <tr>
              <th scope="col" class="px-6 py-3 flex">
              <span class="text-lg mr-2">#</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white bg-gray-800 rounded-2xl items-center hover:bg-gray-700">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
            </thead>
            <tbody>
            <tr class=" dark:bg-gray-900 dark:border-gray-700">

            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
</script>