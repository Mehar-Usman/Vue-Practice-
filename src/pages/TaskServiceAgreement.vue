<template>
  <div class="bg-white md:bg-pink-50">
    <div class="px-0 md:px-10 lg:px-24 py-0 md:py-10 grid grid-cols-12">
      <div class="col-span-4 py-20 hidden md:block ">
        <main-side-bar/>
      </div>
      <div class="col-span-12 md:col-span-8 justify-center ">

        <div class="bg-white rounded-lg border border-none md:border-gray-200 md:shadow-xl px-6 py-6  md:py-8">
          <router-link to="/detailPage" ><button @click="backPage" class="text-red-400 text-semibold">  Back</button></router-link>
          <div>
            <h2 class="text-red-400 font-bold text-4xl mt-4">Service Agreement</h2>
          </div>
          <div class=" mt-4 "
          v-for="statement in statements"
          :key="statement"
          >
            <span class="font-light tracking-tight leading-7 text-[15px]"><span class="font-semibold whitespace-nowrap ">{{statement.title}}</span>{{statement.description}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainSideBar from "../components/MainSideBar.vue";
export default {
  components:{
    MainSideBar
  },
  data(){
    return{
      statements:[
        {
          title:'Services:',
          description:'Service Provider agrees to provide the following services to the Client: [Specify the services in detail]'
        },
        {
          title:'Term:',
          description:'The term of this Agreement shall commence on [Start Date] and shall continue until [End Date] unless terminated earlier in accordance with the provisions of this Agreement.'
        },
        {
          title:'Payment:',
          description:' Client agrees to pay Service Provider the agreed-upon fee as follows: [Specify payment terms, including the amount, due date, and acceptable payment methods].'
        },
        {
          title:'Confidentiality:',
          description:'Any intellectual property rights associated with the services provided by Service Provider shall remain the property of Service Provider unless otherwise specified in a separate agreement.'
        },
        {
          title:'Intellectual Property:',
          description:'Both Parties agree to treat any confidential information shared during the course of this Agreement with the utmost confidentiality and not to disclose it to any third parties without prior written consent, except as required by law.'
        },
        {
          title:'Termination:',
          description:'Either Party may terminate this Agreement by providing written notice to the other Party at least [number of days/weeks/months] in advance. In case of early termination, the Client shall be responsible for paying any outstanding fees for the services provided up to the termination date.'
        },
      ]
    }
  },

}
</script>