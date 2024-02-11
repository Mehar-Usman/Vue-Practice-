<template>
  <div v-cloak>
      <angvo-header/>
  </div>
  <div>
  <AngvoNavbar/>
  </div>
  <div>
    <AngvoCarousel/>
  </div>
<!--  Start Service Part of Angvo-->
  <div class="background-image-container">
    <div class="text-gray-200 lg:text-4xl md:text-2xl text-center md:pt-28">One-Stop-Shop Services</div>
    <div class="flex justify-center mt-3">
      <div class="text-white lg:text-5xl md:text-2xl font-bold">For Amazon </div>&nbsp<span class="lg:text-5xl md:text-2xl text-orange flex items-center "> Sellers </span>
    </div>
    <div class="text-center text-white text-2xl mt-3">Our Services</div>
    <div class=" grid justify-center  lg:grid-cols-4 md:gap-6 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-20 px-12  md:px-24">
      <ServiceCard class="items-center"
          v-for="card in cards"
          :key="card.id"
          :icon="card.icon"
          :mainTitle="card.mainTitle"
          :title="card.title"
      />
    </div>
    <div class="flex justify-center pb-20 mt-10">
      <button class="bg-indigo-600 for-transition px-2 py-1 rounded flex items-center text-white font-bold hover:bg-orange" type="button"> <sup class="text-2xl hover:text-orange  text-white">.</sup> <span class="ml-2 text-white py-2">View All Services <span></span> </span> <sub><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-3 mt-2 text-amber-300">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
      </svg>
      </sub>
      </button>
    </div>
  </div>
  <div>
    <angvo-successfull-history/>
  </div>
  <div>
    <angvo-consultations/>
  </div>
  <div>
    <angvo-customer-review/>
  </div>
  <div class=" bg-blue-950 ">
    <div class="">
      <!-- Your child elements here -->
      <div >
        <angvo-footer />
      </div>
    </div>
<!--    <div class=" flex justify-end fixed">-->
<!--      <i class="bg-orange text-white h-16 w-16 rounded-full flex items-center justify-center text-3xl  ">✆</i>-->
<!--    </div>-->
    <div class="fixed right-4 bottom-4 bg-orange text-white h-16 w-16 rounded-full flex items-center justify-center text-3xl">
      ✆
    </div>
  </div>
<!--  For Create Fixed Whatsapp Icon-->

</template>
<script>
  import AngvoHeader from "../components/AngvoHeader.vue";
  import AngvoNavbar from "../components/AngvoNavbar.vue";
  import AngvoCarousel from "../components/AngvoCarousel.vue";
  import ServiceCard from "../components/ServiceCard.vue";
  import AngvoSuccessfullHistory from "../components/AngvoSuccessfullHistory.vue";
  import AngvoConsultations from "../components/AngvoConsultations.vue";
  import AngvoCustomerReview from "../components/AngvoCustomerReview.vue";
  import AngvoFooter from "../components/AngvoFooter.vue";


  export default {
    components: {
      AngvoFooter,
      AngvoCustomerReview,
      AngvoConsultations,
      AngvoSuccessfullHistory,
      ServiceCard,
      AngvoHeader,
      AngvoNavbar,
      AngvoCarousel
    },
    data() {
      return {
        cards: [
          {
            id: 1,
            icon: '✸',
            mainTitle: 'Amazon Account UK',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 3,
            icon: '✶',
            mainTitle: 'Sale Tax Return USA',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'TransferWise Account Uk',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
          {
            id: 2,
            icon: '✶',
            mainTitle: 'Anual Report Filing',
            title: 'Buy Now',
          },
        ],
      };
    },

  }
</script>
<style scoped>
.background-image-container {
  background-image: url('https://www.angvo.com/public/angvo/assets/images/features-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: auto; /* You can adjust the height according to your requirement */
}

.for-transition{
  transition: background-color 0.34s ease-in-out;
  color: initial;
}
[v-cloak] {
  display: none;
}
</style>