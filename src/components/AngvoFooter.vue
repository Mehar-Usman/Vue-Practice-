<template>
  <div>
    <!--Start Footer Part Of Angvo -->
    <div class="">
      <div class="flex justify-center pt-10">
        <img src="https://www.angvo.com/public/angvo/assets/images/footer-logo.png" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-5 px-6 md:px-20 gap-6  pt-20">
        <div class="col-span-1 md:col-span-2">
          <div class="text-grayshade2 pr-4 text-sm leading-6 mt-8">
            We are here to start your business on Amazon and make your efforts as profitable as possible. We do this by
            providing great Services at an affordable price and backed up by the best customer service and support
            available.
          </div>
          <div class="mt-6 flex gap-3">
            <div
                class="bg-blue-900 w-6 h-6 text-grayshade2 rounded flex items-center justify-center p-5 text-2xl hover:bg-orange hover:text-white"
            >
              <span class="">✆</span>
            </div>
            <div
                class="bg-blue-900 w-6 h-6 text-grayshade2 rounded flex items-center justify-center p-5 text-2xl hover:bg-orange hover:text-white"
            >
              <span class="">✉</span>
            </div>
            <div
                class="bg-blue-900 w-6 h-6 text-grayshade2 rounded flex items-center justify-center p-5 text-2xl hover:bg-orange hover:text-white"
            >
              <span class="">♥️</span>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="text-white font-bold text-center">Quick Links</div>
          <div class="text-center text-grayshade2 mt-6">
            <div>Services</div>
            <div class="mt-2 font-light">About Us</div>
            <div class="mt-2 font-light">Contact Us</div>
            <div class="mt-2 font-light">General Complaint</div>
          </div>
        </div>
        <div class="col-span-1 md:col-span-2">
          <div class="text-white font-bold">Subscribe Now</div>
          <div class="text-grayshade2 mt-6 font-light text-md">Please subscribe now for special notifications and offers</div>
          <div class="flex mt-4">
            <input
                type="text"
                placeholder="Enter your text..."
                class="w-full px-4 py-4 pr-12 outline-none"
            />
            <button type="button" class="px-4 py-2 w-16 text-white" style="background-color: #fc5546">
              ➤
            </button>
          </div>
        </div>
      </div>
        <div class="grid grid-cols-1 md:grid-cols-4 px-8 md:px-20 py-10">
          <div v-for="contact in contacts" :key="contact.title" class=" my-8">
            <div class="flex items-center">
              <div
                  class="h-14 w-14 bg-blue-900 rounded-full p-4 text-grayShade text-2xl hover:bg-orange hover:text-white"
              >
                {{ contact.icon }}
              </div>
              <div class="ml-4">
                <div class="font-bold text-white">{{ contact.title }}</div>
                <div class="whitespace-pre-wrap text-grayshade2 text-sm">
                  {{ contact.description }}
                </div>
              </div>
            </div>
          </div>
        </div>

<!--        <div class="border" style="width: 1200px; border-color: #aeb7ca"></div>-->
      </div>
    <div class=" border-b-2 mt-10 mb-6 opacity-5 mx-8 md:mx-20"></div>
    <div class="text-grayshade2 text-center py-8">Copyright ©2021. All Rights Reserved By Angvo</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          icon: '✉',
          title: 'Address',
          description: '5th Floor Al Hafeez Heights Gulberg III, Lahore',
        },
        {
          icon: '✉',
          title: 'Email Us',
          description: 'info@angvo.com',
        },
        {
          icon: '☏',
          title: 'Contact Us',
          description: '+92324 - 4448940',
        },
        {
          icon: '✉',
          title: 'Opening Hour',
          description: 'Mon - Friday , 9 am - 6 pm',
        },
      ],
    };
  },
};
</script>

<style scoped>

/* Add the hover styles for the contact icons */
.hover\:bg-orange:hover {
  background-color: #fc5546;
}

.hover\:text-white:hover {
  color: white;
}
</style>
