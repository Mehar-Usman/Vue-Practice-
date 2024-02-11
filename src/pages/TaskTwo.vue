  <template>
  <!-- Make A new design in tailwind css  -->
  <div class="grid grid-cols-12 bg-blue-50">
    <!-- First column, spans 3 out of 12 columns -->
    <div class="col-span-12 p-4 md:p-6 lg:p-8 md:col-span-4 lg:col-span-3">
      <div>
        <img src="src/photos/tasktwo.png" alt="">
      </div>
      <div class="mt-14">
        <h2 class="font-bold text-2xl">Their Side</h2>
        <p class="text-[15px] mt-3">Conversion With the most tragically <br> misunderstand people of our time</p>
      </div>
      <div class="mt-14">
        <h2 class=" text-2xl flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 flex items-center justify-center">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
          About
        </h2>
        <p class="text-[15px] mt-3">Conversion With the most tragically <br> misunderstand people of our time Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque cum quia sapiente nam consequatur dignissimos ea</p>
        <button class="text-[15px] mt-3 font-semibold text-fuchsia-500">Show More</button>
      </div>

      <div class="mt-14">
        <h2 class=" text-2xl font-light flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          Listen
        </h2>
        <div class="flex items-center gap-3 mt-6 text-grayShade">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
            <h3 class="font-semibold">Spotify</h3>
        </div>
        <div class="flex items-center gap-3 mt-6 text-grayShade">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
          </svg>

          <h3 class="font-semibold">Apple Podcast</h3>
        </div>
        <div class="flex items-center gap-3 mt-6 text-grayShade">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
          </svg>

          <h3 class="font-semibold">OverCast</h3>
        </div>
        <div class="flex items-center gap-3 mt-6 text-grayShade">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>

          <h3 class="font-semibold">RSS Feed</h3>
        </div>
      </div>

    </div>


    <!-- Second column, spans 9 out of 12 columns -->
    <div class="col-span-12 md:col-span-8 lg:col-span-9">
      <div class="bg-white py-10">
          <div class="px-4 md:px-16 lg:px-28 pb-8">
            <h2 class="font-bold text-2xl pb-4">Episode</h2>
          </div>
        <hr>
        <div class="px-4 md:px-16 lg:px-28 py-10">
            <p class="text-grayShade text-2xl">Febraury 24, 2022</p>
            <h2 class="font-bold text-lg md:text-3xl pt-3">5: Bill Lumbergh</h2>
            <p class="py-6 text-grayShade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe suscipit <br> ducimus quaerat aut blanditiis.</p>
            <div class="flex gap-3 pt-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
              <p class="font-bold text-fuchsia-500">Listen</p>
              <p class="text-grayShade">/</p>
              <p class="font-bold text-fuchsia-500">Show Notes</p>
            </div>
          </div>
        <hr>
        <div class="px-4 md:px-16 lg:px-28 py-10">
          <p class="text-grayShade text-2xl">Febraury 24, 2022</p>
          <h2 class="font-bold text-lg md:text-3xl pt-3">4: Shooter McGavin</h2>
          <p class="py-6 text-grayShade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe suscipit <br> ducimus quaerat aut blanditiis ducimus quaerat aut blanditiis.</p>
          <div class="flex gap-3 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            <p class="font-bold text-fuchsia-500">Listen</p>
            <p class="text-grayShade">/</p>
            <p class="font-bold text-fuchsia-500">Show Notes</p>
          </div>
        </div>
        <hr>
        <div class="px-4 md:px-16 lg:px-28 py-10">
          <p class="text-grayShade text-2xl">April 14, 2022</p>
          <h2 class="font-bold text-lg md:text-3xl pt-3">3: The Wet Bandits</h2>
          <p class="py-6 text-grayShade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe suscipit <br> ducimus quaerat aut blanditiis ducimus quaerat aut blanditiis.</p>
          <div class="flex gap-3 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            <p class="font-bold text-fuchsia-500">Listen</p>
            <p class="text-grayShade">/</p>
            <p class="font-bold text-fuchsia-500">Show Notes</p>
          </div>
        </div>
        <hr>
        <div class="px-4 md:px-16 lg:px-28 py-10">
          <p class="text-grayShade text-2xl">August 10, 2022</p>
          <h2 class="font-bold text-lg md:text-3xl pt-3">2: Hank Scorpio</h2>
          <p class="py-6 text-grayShade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe suscipit <br> ducimus quaerat aut blanditiis ducimus quaerat aut blanditiis.</p>
          <div class="flex gap-3 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            <p class="font-bold text-fuchsia-500">Listen</p>
            <p class="text-grayShade">/</p>
            <p class="font-bold text-fuchsia-500">Show Notes</p>
          </div>
        </div>
        <hr>
        <div class="px-4 md:px-16 lg:px-28 py-10 pb-20">
          <p class="text-grayShade text-2xl">March 27, 2022</p>
          <h2 class="font-bold text-lg md:text-3xl pt-3">1: Skeletor</h2>
          <p class="py-6 text-grayShade">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe suscipit <br> ducimus quaerat aut blanditiis ducimus quaerat aut blanditiis.</p>
          <div class="flex gap-3 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            <p class="font-bold text-fuchsia-500">Listen</p>
            <p class="text-grayShade">/</p>
            <p class="font-bold text-fuchsia-500">Show Notes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    }
  }
}
</script>

<style scoped>
/* Add any custom styling here (if needed) */
</style>
