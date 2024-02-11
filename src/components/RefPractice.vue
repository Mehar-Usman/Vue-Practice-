<template>
  <div>
    <button @click="refCall">Call A ref Attribute</button>
    <div >Result : {{returnResult}}</div>
  </div>
</template>
<script>
    export default {
      data(){
        return{
          returnResult : null,
        };
      },
      methods:{
        refCall(){
          const  result = this.multiplyNum(3,6);
          this.returnResult = result;
        },
        multiplyNum(a , b){
          return a * b;
        }
      }
    }
</script>