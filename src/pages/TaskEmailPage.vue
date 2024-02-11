<template>
  <div class="bg-white md:bg-pink-50">
    <div class="px-0 md:px-10 lg:px-24 py-0 md:py-10 grid grid-cols-12">
      <div class="col-span-4 py-20 hidden md:block ">
        <main-side-bar/>
      </div>
      <div class="col-span-12 md:col-span-8 justify-center ">

        <div class="bg-white rounded-lg border border-none md:border-gray-200 md:shadow-xl px-4 py-6  md:py-12">
          <h2 class="font-bold text-3xl text-center ">What's your email?</h2>
          <p class="text-md text-center text-grayShade mt-2">
            We'll send you a copy of the service <br> agreement. (And important emails now and <br> then)</p>
          <form action="">
            <div class="px-36">
              <div class=" flex gap-4 border-b-2 py-2 mt-10">
                <span  class="text-black ">Email</span>
                <input  v-model="inputValue" type="email" class="outline-none" title="Please Fill Out the Input Field " required>
              </div>
              <button  @click="navigateToDetailPage" :class="inputValue  ? 'bg-red-400 text-white' : 'bg-gray-300'" class=" text-grayShade text-xl  w-full py-2 mt-10 rounded-md ">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainSideBar from "../components/MainSideBar.vue";

export default {
  components: {
    MainSideBar
  },
  data() {
    return {
      inputValue: '',
      msg: '' // Change this line from msg: [] to msg: ''
    };
  },
  watch: {
    inputValue(value) {
      this.validateEmail(value);
    }
  },
  methods: {
    navigateToDetailPage() {
      if (this.validateEmail(this.inputValue)) {
        this.$router.push('/detailPage');
      } else {
        this.msg = 'Invalid Email Address';
      }
    },
    validateEmail(email) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    },
  },
};
</script>