<template>
    <div class="p-20">
<!--   This Is a Two way binding in Vue.js   -->
      <div class="text-4xl text-center font-bold">
            U_Dummy_Lectures_practice
      </div>
      <div class="font-bold text-3xl mt-10">
        {{fullName()}}
      </div>
      <hr>
      <div>
          {{lastName}}
      </div>
      <div>
        <label for="name">Enter Name</label><br>
        <input type="text" v-model="firstName" class="border-2 ">
      </div>
      <div>
        <label for="">Enter Last name</label><br>
        <input type="text" name="" id="" v-model="lastName" class="border-2">
      </div>
      <div>
        <label for="">Middle NAme</label>
        <input type="text" @keyup.enter="updataMiddleName">
      </div>
      <a v-bind:href="url" target="_blank" class="text-black underline hover:underline-offset-2">Google</a>
  <button @click="increment">Increment</button>
  <button @click="age--">Decrement</button>
  <div>
    {{age}}
  </div>
    <div>
      <label for="">Change Class Here</label>
      <input type="checkbox" v-model="isPurple">
    </div>
  <select v-model="selectedColors">
    <option value="text-white">text-white</option>
    <option value="text-red-500">text-red</option>
    <option value="text-green-200">text-green</option>
  </select>
  <label for="">Set_size</label>
  <input type="number" v-model="size" class="border-red-600 border-2">
  <div class="mt-32">
    <div class="bg-amber-500 w-20 h-20 text-3xl rounded-full text-center flex items-center justify-center"  :class="[selectedColors, circle_classes]" :style="{width: size + 'px', height: size + 'px'}">
      HI
    </div>
  </div>
  <div :style="styleObject">Mehar Usman</div>
  <div class="text-3xl" v-if="mode==1">v-if</div>
  <div v-else-if="mode==2">
    <div class="text-3xl " >v-else-if</div>
    <p>usman</p>
  </div>
  <div class="text-3xl" v-else>else-if</div>
  <select name="" id="" v-model="mode" class="mb-40">
    <option value="1">v-if</option>
    <option value="2">v-else-if</option>
    <option value="3">v-else</option>
  </select>
  <ul class="list-disc">
    <li v-for="(bird , index) in birds" :class="bird">{{bird}}-{{index}}</li>
  </ul>
      <ul class="list-disc mt-10">
        <li v-for="person in peoples" >
          <div v-for="(value , key , index) in person" v-if="person.visible">{{key}} : {{value}}-index:{{index}}</div>
        </li>
      </ul>
    </div>
<!--  Benifit Of key Attribute  -->
  <button @click="move">Move</button>
  <div class="p-10 bg-red-200 grid grid-cols-4 gap-4">
    <div v-for="card in cards" :key="card.name" class="col-span-4 sm:col-span-2 md:col-span-1">
      <div :class="card.backgroundColor" class="p-10">
        <h1 class="text-center text-2xl">{{ card.name }}</h1>
        <p>{{ card.description }}</p>
        <input type="text" value="">
      </div>
    </div>
  </div>
  <div class="p-10">
    <label for="">prespective:{{ perspective }}px;</label>
    <input type="range" v-model="perspective">
    <br>
    <label for="">rotateX{{ rotateX }}deg;</label>
    <input type="range" v-model="rotateX">
    <br>
    <label for="">rotateY{{ rotateY }}deg;</label>
    <input type="range" v-model="rotateY">
    <br>
    <label for="">rotateZ{{ rotateZ }}deg;</label>
    <input type="range" v-model="rotateZ">

    <br>
    <button class="bg-red-900 p-2 rounded text-white ml-10" @click.prevent="reset">Reset</button>
    <button class="bg-blue-600 p-2 rounded text-white ml-10">Copy</button>
    <div class="h-40 w-40 bg-pink-300" :style="box"></div>
  </div>


</template>
<script>
    export default {
      data(){
        return{
          perspective:100,
          rotateX:0,
          rotateY:0,
          rotateZ:0,
          birds:['parrot' , 'sparrow', 'Swifts'],
          peoples:[
            {name:'usman', age:'20Years' , visible:true},
            {name:'shakeel', age:'22Years' , visible:true},
            {name:'Abdullah', age:'23Years' , visible:true},
            {name:'Zohiab', age:'24Years' , visible:true}
          ],
          cards: [
            {
              name: 'usman',
              description: 'MY name Is Abu Usman And I am from Lahore Chungi Amar Sidhu',
              backgroundColor: 'bg-red-300', // Add the backgroundColor property for each card
            },
            {
              name: 'shakeel',
              description: 'MY name Is Abu Usman And I am from Lahore Chungi Amar Sidhu',
              backgroundColor: 'bg-blue-300', // Add the backgroundColor property for each card
            },
            {
              name: 'zohaib',
              description: 'MY name Is Abu Usman And I am from Lahore Chungi Amar Sidhu',
              backgroundColor: 'bg-green-300', // Add the backgroundColor property for each card
            },
            {
              name: 'Abdullah',
              description: 'MY name Is Abu Usman And I am from Lahore Chungi Amar Sidhu',
              backgroundColor: 'bg-yellow-300', // Add the backgroundColor property for each card
            },
          ],
          firstName:'usman',
          lastName:'Abdul Ghafoor',
          url:'https://google.com',
          age:20,
          middleName:'',
          isPurple:false,
          selectedColors:'',
          size:150,
              styleObject: {
                color: 'red',
                fontSize: '30px'
          },
          mode:1
        }
      },
      methods:{
        fullName(){
          return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        increment(){
          this.age++
        },
        updataMiddleName(event){
          this.middleName = event.target.value
        },
        move(){
          const first = this.cards.shift()
          this.cards.push(first)
        },
        reset(){
          this.perspective = 100
          this.rotateX = 0
          this.rotateY = 0
          this.rotateZ = 0
        }
      },
      watch:{
        age(newVal , oldVal){
          setTimeout(() => {
            this.age = 100
          }, 3000)
        }
      },
      computed:{
        box(){
          return {
            transform: `
            perspective(${this.perspective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)
            `
          }
        }
      }
    }
</script>
