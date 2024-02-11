<template>
  <div class="bg-blue-100">
  <div>
    <task-three-navbar/>
  </div>
  <div class="set_linear_gradient pt-24 md:pt-32 lg:pt-40 pb-20 ">
    <div>
    <h1 class="font-bold text-2xl md:text-3xl lg:text-5xl text-center leading-tight">
      Pakistan’s Largest <br>
      Online Learning Platform
    </h1>
      <p class="text-center py-2 md:py-6 tracking-[1px]">
        98% of the attendees finish the course thanks to our unique <br>
        adaptive and personlized learning platform.
      </p>
      <div class="flex justify-center">
        <button class="flex items-center bg-blue-950 text-white px-4 rounded gap-2 " >Select Courses <span class="text-3xl ">›</span> </button>
      </div>
    </div>
    <div>
      <picture-part-task-three/>
    </div>
  </div>
  </div>
  <div>
    <whylearn-task-three/>
  </div>
  <div >
    <StudentTalkTaskThree/>
  </div>
  <div>
    <courses-offers-task-three/>
  </div>
  <div>
    <experiencep-platform-task-three/>
  </div>
  <div>
    <trending-streams-task-three/>
  </div>
  <div>
    <suitable-package-task-three/>
  </div>
  <div>
    <footer-task-three/>
  </div>
</template>
<script>
import TaskThreeNavbar from "../components/TaskThreeNavbar.vue";
import PicturePartTaskThree from "../components/PicturePartTaskThree.vue";
import WhylearnTaskThree from "../components/WhylearnTaskThree.vue";
import StudentTalkTaskThree from "../components/StudentTalkTaskThree.vue";
import CoursesOffersTaskThree from "../components/CoursesOffersTaskThree.vue";
import ExperiencepPlatformTaskThree from "../components/ExperiencepPlatformTaskThree.vue";
import TrendingStreamsTaskThree from "../components/TrendingStreamsTaskThree.vue";
import SuitablePackageTaskThree from "../components/SuitablePackageTaskThree.vue";
import FooterTaskThree from "../components/FooterTaskThree.vue";

export default {
  components: {
    FooterTaskThree,
    SuitablePackageTaskThree,
    TrendingStreamsTaskThree,
    ExperiencepPlatformTaskThree,
    CoursesOffersTaskThree, StudentTalkTaskThree, WhylearnTaskThree, PicturePartTaskThree, TaskThreeNavbar}
}
</script>
<style scoped>
.set_linear_gradient{
  background-image: linear-gradient(to left , rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0)
  ,rgba(255, 255, 255, 0.1));
}
</style>