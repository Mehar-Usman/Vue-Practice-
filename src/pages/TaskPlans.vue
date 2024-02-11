<template>
  <div class="bg-white md:bg-pink-50">
    <div class="px-0 md:px-10 lg:px-24 py-0 md:py-10 grid grid-cols-12">
      <div class="col-span-4 py-20 hidden md:block">
        <main-side-bar/>
      </div>
      <div class="col-span-12 md:col-span-8 justify-center">
        <div class="bg-white rounded-lg border border-none md:border-gray-200 md:shadow-xl py-6 md:py-12">
          <h2 class="font-bold text-3xl text-center leading-12">Thanks! Tell us, how are you <br> currently managing your plan?</h2>
          <p class="text-md text-center text-grayShade mt-4">
            Select from the options below.
          </p>
          <div class="px-20 lg:px-40 mt-8 lg:mt-12">
            <div
                v-for="(select, index) in selects"
                :key="index"
                @click="forSelect(index)"
            >
              <h3 class="text-[20px] tracking-tighter mt-4 relative">
                {{ select.title }}
                <span class="text-red-400 absolute right-4" v-if="select.selected">✓</span>
              </h3>
              <p class="border-b-[1px] mt-3" :style="{ borderBottom: select.border }"></p>
            </div>
            <div>
              <button @click="ForNextPage" :class="isInputsFilled ? 'bg-red-400 text-white' : 'bg-gray-300'" class="text-grayShade text-xl w-full py-2 mt-10 rounded-md">
                Next
              </button>
            </div>
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
      selects: [
        {
          id:1,
          title: 'New to the NDIS',
          border: '',
          selected: false // Initialize selected state to false
        },
        {
          id:2,
          title: 'Self-managed',
          border: '',
          selected: false
        },
        {
          id:3,
          title: 'Plan-managed',
          border: '',
          selected: false
        },
        {
          id:4,
          title: 'NDIA-managed',
          border: '',
          selected: false
        },
        {
          id:5,
          title: "I don't know",
          border: '',
          selected: false
        }
      ]
    };
  },
  methods: {
    forSelect(index) {
      // Toggle the selected state of the clicked option
      this.selects[index].selected = this.selects[index].selected ? false : true;
    },
    ForNextPage() {
      // Your code for handling the Next button click
      if (this.isInputsFilled) {
        this.$router.push('/kindship');
      } else {
        // Show alert when no option is selected
        alert("Please select at least one option.");
      }    }
  },
  computed: {
    isInputsFilled() {
      // Check if any option is selected (at least one option selected)
      return this.selects.some(select => select.selected);
    },
  }
};
</script>
