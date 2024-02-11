<!--Home Page Of overBUff Website-->
<template>
<!--Create A Parent div For Add Bg color-->
    <div class="bg-gray-800">
      <div >
        <navbar />
      </div>
      <div>
        <player-ranking/>
      </div>

    </div>
</template>
<script>
  import Navbar from "../components/navbar.vue";
  import PlayerRanking from "../components/PlayerRanking.vue";

  export default {
    components: {PlayerRanking, Navbar}
  }
</script>