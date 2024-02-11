<template>
<!--  <div class="flex grid flex-wrap">-->
<!--    &lt;!&ndash; First Column (col-md-3) &ndash;&gt;-->
<!--    <div class="w-full col-span-6  px-4">-->
<!--      <div class="bg-white p-4 rounded-lg shadow-md">-->
<!--        &lt;!&ndash; Content for the first column goes here &ndash;&gt;-->
<!--        First Column (col-md-3)-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Second Column (col-md-4) &ndash;&gt;-->
<!--    <div class="w-full md:w-1/2 px-4 mt-4 md:mt-0">-->
<!--      <div class="bg-white p-4 rounded-lg shadow-md">-->
<!--        &lt;!&ndash; Content for the second column goes here &ndash;&gt;-->
<!--        Second Column (col-md-4)-->
<!--      </div>-->
<!--    </div>-->

<!--    &lt;!&ndash; Third Column (col-md-5) &ndash;&gt;-->
<!--    <div class="w-full md:w-1/2 lg:w-1/3 px-4 mt-4 md:mt-0">-->
<!--      <div class="bg-white p-4 rounded-lg shadow-md">-->
<!--        &lt;!&ndash; Content for the third column goes here &ndash;&gt;-->
<!--        Third Column (col-md-5)-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="grid grid-cols-12 gap-2">
    <div class="md:col-span-2 sm:text-red-600 sm:col-span-6 bg-black md:text-white   h-48 flex items-center justify-center " >
      Abu Usman
    </div>
      <div class="md:col-span-4  sm:col-span-6 bg-indigo-700 text-white flex items-end justify-end p-2">
        Logo
      </div>
    <div class="md:col-span-4 sm:col-span-6 bg-amber-200 text-fuchsia-500 font-bold flex justify-end p-2 items-start">
      Logo
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  }
};
</script>

<style>
/* Add any additional styling here if needed */
</style>
