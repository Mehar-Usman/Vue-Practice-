<template>
  <div>
    <about-component/>
  </div>
<!--     Add Background Image for Services page  -->
    <div class="background-image-container pb-28">
      <div class="text-center text-3xl md:text-4xl text-white pt-24 pb-10">View All Services</div>
      <div class="grid  lg:grid-cols-4 md:gap-6 md:grid-cols-2 sm:grid-cols-1 text-center gap-4 mt-20 px-12  md:px-24 justify-center" >
        <ServiceCard class="items-center "
                     v-for="servicescard in ServicesCards"
                     :key="servicescard.id"
                     :icon="servicescard.icon"
                     :mainTitle="servicescard.mainTitle"
                     :title="servicescard.title"
        />
      </div>
    </div>
  <div style="background-color: midnightblue">
    <angvo-footer/>
    <div class="text-white bg-orange h-16 w-16 flex items-center justify-center text-3xl rounded-full fixed bottom-4 right-4">
      ✆
    </div>
  </div>
</template>
<script >
import AboutComponent from "../components/AboutComponent.vue";
import ServiceCard from "../components/ServiceCard.vue";
import AngvoFooter from "../components/AngvoFooter.vue";
export default {
  components:{
    AngvoFooter,
    ServiceCard,
    AboutComponent,
  },
  data(){
    return{
      ServicesCards:[
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        }, {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },{
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },{
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },{
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },{
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },
        {
          icon:'✉',
          mainTitle:'Amzazon Account Uk',
          title:'Buy Now'
        },








      ]
    }
  }
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
</style>