<template>
  <div class="mb-32">
    <div class="grid grid-cols-1 md:grid-col-1 lg:grid-cols-2 mb-20 px-6" >
      <div class=" flex items-center justify-center">
        <img class="px-6 md:px-32 lg:px-0" src="https://www.angvo.com/public/angvo/assets/images/quote-thumb.jpg">
      </div>
      <div class=" flex flex-col justify-center px-4 md:px-16 lg:px-5">
        <div class="text-grayShade text-2xl md:text-4xl">Get A Quote</div>
        <div class="text-3xl md:text-5xl  font-bold mt-3 ">Free <span class="text-orange font-light">Consultations</span></div>
        <div class="mt-8">
          <div v-for="(field, index) in inputFields" :key="index">
            <label :for="field.name" class="text-black font-bold text-md md:text-lg">{{ field.label }}</label>
            <div class="relative flex items-center">
              <input
                  :type="field.type"
                  :name="field.name"
                  :placeholder="field.placeholder"
                  class="w-full px-8 py-6 mb-10  bg-blue-100  focus:outline-orange focus:border-orange"
              />

              <!--              This Code is for add Padding bottom just last Input filed-->
              <!--              :class="{'pb-20 ': index === inputFields.length - 1}"-->

              <span class="absolute right-4 text-orange " v-html="field.icon"></span>
            </div>
          </div>
          <div>
            <label for="message" class="block mb-2 text-xl font-bold">Your message</label>
            <textarea id="message" rows="5" class="w-full px-8 py-4 mt-2 bg-blue-100 text-grayShade focus:outline-orange focus:border-orange" placeholder="Write your thoughts here..."></textarea>
          </div>
        </div>
        <div class=" mt-6 flex justify-end">
          <button class="bg-orange for-transition px-2 py-1 rounded flex items-center text-white font-bold hover:bg-indigo-700 group" type="button">
            <sup class="text-2xl text-white group-hover:text-orange mb-2">.</sup>
            <span class="ml-2 text-white">Send Message</span>
            <sub>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-3 mt-2 text-amber-300 group-hover:text-blue-500 ml-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
              </svg>
            </sub>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const inputFields = [
  {
    label: 'Full Name Here',
    name: 'name',
    type: 'text',
    placeholder: 'eg. Abu Usman',
    icon: '⍤',
  },
  {
    label: 'Contact Number',
    name: 'email',
    type: 'email',
    placeholder: 'Enter your email address',
    icon: '&#9993;',
  },
  {
    label: 'I Would Like To Discuss',
    name: 'message',
    type: 'text',
    placeholder: "I'm Talking About",
    icon: '✎',
  },
];
</script>

<style scoped>
/* Add your custom styles here if required */


/* Add the transform scale to create the zoom-in effect when hovering over the button */

</style>
