<template>
  <div>
    <about-component/>
  </div>
<!-- Start About Us Page Info -->
<div class="bg-blue-950 pt-6 pb-40 px-14">
  <div class="bg-white py-14 px-10 rounded">
    <div class="font-bold text-2xl">About Us</div>
    <p class="text-grayShade my-6 text-sm leading-6">Angvo Services was founded in 2021, after our CEO and Founder Bilal Sirbuland identified a huge gap in one of the fastest growing markets in Pakistan; a lack of service providers for sellers who wanted to launch their products on Amazon. Angvo Services was launched with the sole purpose of being a one stop solution for Amazon sellers and provides a phenomenal 40+ services under one roof.</p>
    <p class="text-grayShade  text-sm leading-6">At Angvo Services, we aim to empower business owners with the necessary tools and knowledge required to help them thrive in the Amazon market. We provide all the essential services needed for establishing your brand on Amazon, from registering a valid business address and company name, to content writing, photography, and influencer marketing.</p>
    <p class="text-grayShade  text-sm  my-6" >We are currently the only Pakistan based service provider for Amazon sellers. The Angvo Services head office is based in Lahore.</p>
    <div class="font-bold text-2xl">Our Vision</div>
    <p class="text-grayShade  text-sm leading-6 my-6">Keeping in line with the vision of our CEO and Founder, Bilal Sirbuland, Angvo Services aims to teach the younger generations the basics of running a successful business through Amazon. In a rapidly changing world where digitization and e-commerce is the new norm, it is essential for business owners to learn the fundamentals of such platforms and understand how they can make the most out of them. Our goal at Angvo Services is not only to impart such necessary knowledge to business owners but to also facilitate them in achieving their goals and dreams.</p>
    <div class="text-2xl font-bold">Our Mission</div>
    <p class="text-grayShade  text-sm leading-6 my-6">Our mission is to help every e-commerce business achieve their maximum potential in terms of expansion and growth. Angvo Services wants to bring your product to the top of the list on Amazon by providing you with a thorough understanding of the complexities of the Amazon market.</p>
    <div class="text-2xl font-bold ">Why Us?</div>
    <p class="text-grayShade  text-sm leading-6 my-6">Angvo Services prides itself as the ultimate one stop solution for Amazon sellers. We facilitate a wide range of clients, from beginners looking to enter the market to more experienced business owners who want to take the next step in expanding their business. Angvo Services has established itself as a high performance service provider in the global market, with a portfolio of highly satisfied international clients who rely on us for all things related to setting up and running their businesses successfully on Amazon. We prioritize timely, high quality service provision and flawless execution, so that your business can achieve its maximum potential.</p>
  </div>
</div>
<div style="background-color: midnightblue">
  <angvo-footer/>
  <div class="bg-orange w-16 h-16 rounded-full items-center justify-center flex text-white text-3xl fixed right-4 bottom-4">
    ✆
  </div>
</div>

</template>

<script>
    import AngvoHeader from "../components/AngvoHeader.vue";
    import AngvoNavbar from "../components/AngvoNavbar.vue";
    import AngvoFooter from "../components/AngvoFooter.vue";
    import AboutComponent from "../components/AboutComponent.vue";

    export default{
      components: {
        AboutComponent,
        AngvoFooter,
        AngvoHeader,
        AngvoNavbar
      },
      data(){
        return {

        }
      }
    }
</script>