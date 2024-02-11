<template>
  <div>
<!--    <my-component ref="myComponentRef"></my-component>-->
    <my-component ref="myComponentRef"/>
    <button @click="callMethodOnComponent" class="bg-amber-200 rounded-3xl p-2 font-bold text-red-600">Ref() Call</button>
  </div>
  <RefPractice ref="newComponentRef"/>
  <button @click="CallNewMethodOnComponent" class="bg-indigo-700 rounded-lg text-white p-2 font-extrabold  "> Ref2() Call</button>

</template>

<script>
// import MyComponent from "./MyComponent.vue";

import MyComponent from "../components/MyComponent.vue";
import RefPractice from "../components/RefPractice.vue";


export default {
  components: {
    MyComponent,
    RefPractice
  },
  methods: {
    callMethodOnComponent() {
      this.$refs.myComponentRef.someMethod();
    },
    CallNewMethodOnComponent() {
      this.$refs.newComponentRef.refCall();
    }
  },
};
</script>
