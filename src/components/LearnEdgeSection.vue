<script setup lang="ts">
import CircleShape from './CircleShape.vue';
</script>

<template>
  <div class="bg-slate-200 pt-32 pb-5">
    <div class="flex justify-between custom-container px-16">
      <div class="">
        <h2 class="text-5xl text-slate-600 mb-5 flex">Learn
          <div class="relative px-2">EDGE
            <div class="absolute top-13 left-0">
              <span
              class="flex justify-center items-center inner bg-gradient-to-r from-red-400 via-yellow-400 to-emerald-400 w-36 h-4 relative rounded-full before:block before:absolute before:bg-slate-200 before:rotate-2 before:translate-y-2 before:w-full before:h-2 after:block after:absolute after:bg-slate-200 after:-rotate-2 after:-translate-y-2 after:w-full after:h-2">
            </span>
            </div>
            
          </div> Cases
        </h2>
        <p class="text-xs text-slate-400 font-sans w-96 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos eos voluptate aliquam nesciunt
          hic iste laborum velit optio. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos eos voluptate aliquam nesciunt
          hic iste laborum velit optio.
          Lorem ipsum
         
        </p>
        <div class="bg-slate-50 shadow-md pl-4 pr-2 py-1.5 mt-4 text-xs
           text-slate-400 font-sans w-80 flex items-center justify-between rounded-full">
          <input class="bg-slate-50 outline-none border-none" type="text" placeholder="What do you want to learn?">
          <span class="bg-emerald-400 cursor-pointer px-6 py-1.5 rounded-full text-slate-50 text-xs">search</span>
        </div>
      </div>
      <CircleShape />
   
    </div>
  </div>
</template>
