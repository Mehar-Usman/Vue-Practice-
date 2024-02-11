<template>
  <div class="relative bg-red-400 p-10">
    <!-- Positioned relative to its normal position -->
    <div class="absolute top-0 left-0">Top Left</div>
    <div class="absolute top-0 right-0">Top Right</div>
    <div class="absolute bottom-0 left-0">Bottom Left</div>
    <div class="bg-blue-950 text-white p-10">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    </div>
    <div class="absolute bottom-0 right-0">Bottom Right</div>
    <div class="fixed bottom-4 right-4">Fixed to bottom right corner</div>

    <div class="sticky top-4 text-center">Sticky at the top</div>
  </div>



  <div class="relative mt-80">
    <div  class="fixed top-0 left-0 right-0 flex justify-center">Fixed To top and center</div>
  </div>



</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>