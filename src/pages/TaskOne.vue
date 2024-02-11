<template>
<!---------  Task One IN tailwind CSS   -------------->
  <div class="bg-white md:bg-pink-50">
        <div class="px-0 md:px-10 lg:px-20 py-0 md:py-10 grid grid-cols-12 ">
          <div class="col-span-4 py-20 hidden md:block ">
            <main-side-bar/>
          </div>
          <div class="col-span-12 md:col-span-8 bg-white rounded px-10 py-6 md:py-12 justify-center border border-none md:border-gray-200 md:shadow-xl">
            <!-------------------- Add Three Static Images in this div --------------->
            <div class="flex gap-4 justify-center">
              <img src="src/photos/pic_1.avif" class="h-64 rounded w-60 opacity-60 hidden lg:block my-12" alt="">
              <div class="relative">
                <img src="src/photos/pic_2.avif" class=" h-68 rounded md:w-98 w-60 opacity-60" alt="">
                <div class="absolute mx-auto right-0 left-10 bottom-6">
                  <p class="font-bold text-white">Tara Thompson</p>
                  <p class="text-white">Coach</p>
                </div>
              </div>
              <img src="src/photos/pic_3.avif" class="h-60 rounded w-60 opacity-60 my-12 hidden lg:block" alt="">
            </div>
            <div class="pt-20">
              <p class="text-red-400 text-3xl font-bold text-center">
                You were never meant <br> to do this alone!
              </p>
              <p class="text-center mt-6 text-xl">
                Let's make the most of your NDIS journey. Choose <br> Kindship as your Plan Manager and we'll walk with you<br>
                every step of the way.
              </p>
              <div class="px-0 md:px-36 mt-10">
                <button  @click="showPopup"  class="text-white font-bold bg-red-400 rounded w-full py-4 tracking-wide">
                  Learn More
                </button>
              </div>
              <div>
                <p class="text-gray-400 text-center mt-6">
                  Kindship Premium fees are <br> fully funded by NDIS life choices.
                </p>
              </div>
            </div>
          </div>
        </div>
    <div class="bg-pink-50 px-10 pt-10 sm:block md:hidden hidden" >
      <p class="text-sm mb-2">© 2023 Kindship</p>
      <a href="#" class="text-gray-400 flex gap-3">
        <p>About App <br> Terms </p>
        <p>Privacy Policy <br></p>
      </a>
    </div>
  </div>
  <div>
    <taskModal ref="popup" />
  </div>
</template>
<script>
import taskModal from "../components/taskModal.vue"
import MainSideBar from "../components/MainSideBar.vue";
  export default {
  components:{
    MainSideBar,
    taskModal
  },
    data() {
      return {

      };
    },
    methods: {
      showPopup() {
        this.$refs.popup.openPopup();
      },
    }
  }
</script>
<style scoped>

</style>