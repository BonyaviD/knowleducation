<script setup lang="ts">

import { defineProps, onMounted } from 'vue';

const props =  defineProps({
  card: Object
})

onMounted(async ()=>{
  console.log(props)
})
</script>

<template>
       <li class="bg-slate-100 pt-2 px-2.5 pb-4 w-56 rounded-xl">
          <div class="my-1 rounded flex items-center justify-center h-52 bg-slate-50">
            <span class="text-slate-300 text-4xl"></span></div>
          <p class="text-slate-400 text-xs font-sans leading-5">
            Lorem ipsum, dolor sit amet this is consectetur adipisicing elit. 
            dolor sit amet this is consectetur adipisic
          </p>
        </li>
</template>

<style>


</style>