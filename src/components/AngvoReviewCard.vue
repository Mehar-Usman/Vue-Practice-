<template>
  <div class="bg-white   pt-16 rounded-sm relative ">
     <div class="justify-center text-2xl text-orange flex gap-2">
      {{icons}}
     </div>
    <div class="px-6 text-center mt-3 text-grayShade">
      {{description }}
    </div>
    <div class="font-bold  text-center mt-2">
      {{name}}
    </div>
  <div class="bg-orange text-white text-3xl rounded-full p-4 w-14 h-14 flex items-center justify-center mx-auto -mb-5 mt-5">
    {{ circle }}
  </div>
  </div>

</template>
<script>
    export default {
      props: {
        // 'icons','description','name', 'circle'
        icons: String,
        description: String,
        name: String,
        circle: String
      }

    }
</script>