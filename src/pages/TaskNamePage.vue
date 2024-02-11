<template>
  <div class="bg-white md:bg-pink-50">
    <div class="px-0 md:px-10 lg:px-24 py-0 md:py-10 grid grid-cols-12">
      <div class="col-span-4 py-20 hidden md:block ">
        <main-side-bar/>
      </div>
      <div class="col-span-12 md:col-span-8 justify-center ">

        <div class="bg-white rounded-lg border border-none md:border-gray-200 md:shadow-xl px-4 py-6  md:py-12">
          <h2 class="font-bold text-3xl text-center ">Welcome! We're so happy you're here.</h2>
          <p class="text-md text-center text-grayShade mt-2">
            What should we call you?</p>
          <div class="px-36">
            <div class=" flex gap-4 border-b-2 py-2 mt-10">
              <span  class="text-black ">Frist Name</span>
              <input v-model="inputValue" class="outline-none" title="Please fill out this filed" >
            </div>
            <div class=" flex gap-4 border-b-2 py-2 mt-10">
              <span  class="text-black ">Frist Name</span>
              <input v-model="inputValue2" class="outline-none" title="Please fill out this filed" >
            </div>
            <p class="text-grayShade text-[12px]">Last Name Is Optionanl</p>
            <button @click="ForNextPage" :class="isInputsFilled  ? 'bg-red-400 text-white' : 'bg-gray-300'" class=" text-grayShade text-xl  w-full py-2 mt-10 rounded-md ">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainSideBar from "../components/MainSideBar.vue";

export default {
  components: {MainSideBar},
  data(){
    return{
     inputValue: '',
      inputValue2:''
    };
  },
  methods:{
    ForNextPage(){
      if(this.inputValue !== '' && this.inputValue2 !== ''){
          this.$router.push('/emailPage')
      }
      else {
        window.alert('Please Fill Out All the Fields')
      }
    }
  },
  computed:{
    isInputsFilled(){
      return this.inputValue.trim() !=='' && this.inputValue2.trim() !== '';
    }
  }
}
</script>