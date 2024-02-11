<template>
  <div class="bg-white md:bg-pink-50">
    <div class="px-0 md:px-10 lg:px-24 py-0 md:py-10 grid grid-cols-12">
      <div class="col-span-4 py-20 hidden md:block ">
        <main-side-bar/>
      </div>
      <div class="col-span-12 md:col-span-8 justify-center ">

        <div class="bg-white rounded-lg border border-none md:border-gray-200 md:shadow-xl px-4 py-6  md:py-12">
          <!-- Add Three Static Images in this div -->
          <h2 class="font-bold text-3xl text-center ">Hey there! What's your number?</h2>
          <p class="text-md text-center text-grayShade mt-2">Yep, we ask for it straight away. This helps us weed out the weirdos and <br> keep you and your data safe. We'll send you an SMS message to double
            <br> check we've got it right.</p>
          <div class="px-36">
            <div class=" flex gap-4 border-b-2 py-2 mt-10">
              <span  class="text-black ">au</span>
              <span class="text-black">+98</span>
              <input v-model="inputValue" placeholder="Mobile Number " class="outline-none" title="Please fill out this filed" >
            </div>
            <button @click="NamePage" :class="inputValue ? 'bg-red-400 text-white' : 'bg-gray-300'" class=" text-grayShade text-xl  w-full py-2 mt-10 rounded-md ">Next</button>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>
<script >
import MainSideBar from "../components/MainSideBar.vue";
export default {
  components:{
    MainSideBar
  },
  data(){
    return {
        inputValue: '', // Initialize the input value
    }
  },
  methods:{
    NamePage(){
      if(this.inputValue !== ''){
        this.$router.push('/namePage')
      }
      else{
        window.alert('PLease fill out the Field')
      }
    }
  }
}
</script>