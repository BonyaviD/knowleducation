
 <script setup lang="ts">
 import LoadedCard from '../components/Cards/LoadedCourseCard.vue';
 import LoadingCard from '../components/Cards/LoadingCourseCard.vue';

 import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/cards", () => {
      return {
        cards: [
          { id: 1, image: "IMAGE",
           description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit. 
            dolor sit amet this is consectetur adipisic` },
          { id: 2, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit. 
            dolor sit amet this is consectetur adipisic` },
          { id: 3, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit. 
            dolor sit amet this is consectetur adipisic` },
          { id: 4, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit. 
            dolor sit amet this is consectetur adipisic` },
          { id: 5, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit. 
            dolor sit amet this is consectetur adipisic` },
          { id: 6, image: "IMAGE", description: `Lorem ipsum, dolor sit amet this is consectetur adipisicing elit. 
            dolor sit amet this is consectetur adipisic` },
        ],
      }
    })
  },
})

 import { reactive, onMounted } from 'vue';
 import ref from 'vue'
 const state = reactive({
   cards: [],
   loading: true,
 });
 
 onMounted(async () => {
   try {
     const response = await fetch('/api/cards');
     const data = await response.json();
     state.cards = data.cards;
     state.loading = false;
   } catch (error) {
     console.error('Error fetching cards:', error);
     state.loading = false;
   }
 });

 </script>

<template>
   <div class="py-10 bg-slate-200">
     <div class="custom-container px-16">
       <h2 class="text-2xl text-slate-600 mb-4">Our Courses</h2>
       <ul class="flex items-center flex-wrap gap-5">
        <li class="bg-slate-100 pt-2 px-2.5 pb-4 w-56 rounded-xl" v-if="!state.loading" v-for="card in state.cards" :key="card.id">
          <div class="my-1 rounded flex items-center justify-center h-52 bg-slate-50">
            <span class="text-slate-300 text-4xl">{{ card.image }}</span></div>
          <p class="text-slate-400 text-xs font-sans leading-5">{{card.description}}</p>
        </li>
        <li class="bg-slate-100 pt-2.5 px-2 pb-5 w-56 rounded-md" v-if="state.loading" v-for="card in state.cards" :key="card.id">
          <div class="mb-2 rounded flex items-center justify-center h-52 bg-slate-300"></div>
          <div class="flex flex-wrap gap-1">
            <span class="bg-slate-300 w-36 rounded-full h-4"></span>
            <span class="bg-slate-300 w-12 h-4 rounded-full"></span>
            <span class="bg-slate-300 w-4 h-4 rounded-full"></span>
            <span class="bg-slate-300 w-24 h-4 rounded-full"></span>
            <span class="bg-slate-300 w-4 h-4 rounded-full"></span>
            <span class="bg-slate-300 w-20 h-4 rounded-full"></span>
            <span class="bg-slate-300 w-20 rounded-full h-4"></span>
          </div>
        </li>
       </ul>
     </div>
   </div>
 </template>



  