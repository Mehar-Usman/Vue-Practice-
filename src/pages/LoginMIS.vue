<template>
  <div class="set-bg-img flex justify-center items-center px-48 py-36 ">
    <div class="grid grid-cols-12  justify-center " >
      <div class="col-span-6 ">
        <div class="">
          <img src="src/photos/pyramidLogin.png" alt="" class="shadow-2xl rounded-l-lg py-6">
        </div>
      </div>
      <div class="col-span-6 bg-white px-6 py-8">
        <h2 class="text-center font-semibold text-2xl">Login</h2>
        <div class="mt-4">
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email Adress</label>
          <input type="email" v-model="email" id="email" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none" title='Please Fiil out the Field' placeholder="Email"  required>
        </div>
        <div class="mt-4">
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-300 w-full block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 outline-none" title='Please Fiil out the Field' placeholder="Password"  required>
        </div>
        <div class="mt-6">
          <button @click="validateLogin" class="set-btn-bg text-white py-1 w-full rounded">Login</button>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-200 py-6">
    <p class="text-center text-grayShade text-sm">2023 © SOFTPYRAMID MIS</p>
  </div>
</template>
<script >
    export default {
      data(){
        return{
          email:'',
          password:''
        }
      },
      methods:{
          validateLogin(){

          }
      }
    }
</script>
<style scoped>
  .set-bg-img{
    background-image: url("https://mis.softpyramid.com/login-bg.png ");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: auto;
  }
  .set-btn-bg{
    background-color: #007bff;
  }
</style>