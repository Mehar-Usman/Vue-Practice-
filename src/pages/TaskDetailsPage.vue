<template>
  <div class="bg-white md:bg-pink-50">
    <div class="px-0 md:px-10 lg:px-24 py-0 md:py-10 grid grid-cols-12">
      <div class="col-span-4 py-20 hidden md:block ">
        <main-side-bar />
      </div>
      <div class="col-span-12 md:col-span-8 justify-center ">

        <div class="bg-white rounded-lg border border-none md:border-gray-200 md:shadow-xl px-4 py-6  md:py-12">
          <h2 class="font-bold text-3xl text-center ">This'll just take a minute.</h2>
          <p class="text-md text-center text-grayShade mt-2">
            We need a couple of details to get you started.
          </p>
          <div class="px-32">
            <div class=" flex gap-4 border-b-2 py-2 mt-10 px-4">
              <label class="text-black ">Last Name</label>
              <input v-model="inputValue" placeholder="Your Child Last Name" class="outline-none"
                title="Please fill out this filed" required>
            </div>
            <div class=" flex  border-b-2 py-2 mt-6 px-4">
              <label class="text-black whitespace-nowrap">Date of birth</label>
              <input v-model="inputValue2" type="date" class="outline-none w-full ml-2 lg:ml-4"
                title="Please fill out this filed" required>
            </div>

            <div class=" flex gap-4 border-b-2 py-2 mt-6 px-4">
              <label class="text-black whitespace-nowrap ">NDS Number</label>
              <input v-model="inputValue3" type="number" class="outline-none w-full " title="Please fill out this filed"
                required>
            </div>
            <p class="text-grayShade text-sm tracking-tight mt-4">Your child's NDIS number (this should be 9 digits).
              You'll be able to add <br> more children later.</p>
            <button @click="ForNextPage" :class="isInputsFilled ? 'bg-red-400 text-white' : 'bg-gray-300'"
              class=" text-grayShade text-xl  w-full py-2 mt-10 rounded-md ">Agree And Countinue</button>
          </div>
          <div class="mt-4">
            <p class="text-center tracking-tight text-[12px]">By tapping "Agree and continue" you agree to our</p>
          </div>
          <div class="text-center mt-2">
            <router-link to="/serviceAgreement"><button class="text-red-400  font-light ">Service
                Agreement</button></router-link>
          </div>
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
      inputValue2: '',
      inputValue3: '',
    }
  },
  methods: {
    ForNextPage() {
      if (this.inputValue !== '' && this.inputValue2 !== '' && this.inputValue3 !== '') {
        this.$router.push('/plans')
      } else {
        window.alert('PLease Fill Out The email Field')
      }
    },
  },
  computed: {
    isInputsFilled() {
      return this.inputValue !== '' && this.inputValue2 !== '' && this.inputValue3 !== '';
    }
  }
}
</script>