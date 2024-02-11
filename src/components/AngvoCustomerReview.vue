<template>
<!--  Customer Reviews Component -->
  <div class="bg-blue-100 py-32">
    <div class="text-4xl text-grayShade text-center">How We Works</div>
    <div class="text-3xl md:text-6xl font-bold text-center ">Customer <span class="text-orange font-light">Reviews</span> </div>
    <div class="text-center text-grayShade text-lg mt-3">knows About Our Customer Say</div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-32 mt-24">
      <angvo-review-card
      v-for="card in cards"
      :key="card.id"
      :icons="card.icons"
      :description="card.description"
      :name="card.name"
      :circle="card.circle"
      />
    </div>
    <div class="text-center mt-12  text-4xl text-grayShade"><span class="cursor-pointer">_____</span></div>
  </div>
</template>
<script>
    import AngvoReviewCard from "./AngvoReviewCard.vue";

    export default {
      components: {AngvoReviewCard},
    data(){
      return{
      cards:[
        {
          icons:'★★★★★',
          description:'In difficult times, when you find someone who can get you out of the problem and shows you the clear path to explore then there you find the opportunity. I found the one when I came to know about the services and the reputation of Angvo.',
          name:'Abu Usman',
          circle:'❞'
        },
        {
          icons:'★★★★★',
          description:'In difficult times, when you find someone who can get you out of the problem and shows you the clear path to explore then there you find the opportunity. I found the one when I came to know about the services and the reputation of Angvo.',
          name:'Areeb Mehar',
          circle:'❞'
        },
        {
          icons:'★★★★★',
          description:'In difficult times, when you find someone who can get you out of the problem and shows you the clear path to explore then there you find the opportunity. I found the one when I came to know about the services and the reputation of Angvo.',
          name:'Shakeel',
          circle:'❞'
        }
      ]
      }
    }
    }
</script>