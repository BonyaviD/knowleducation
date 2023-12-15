<script setup lang="ts">
import {onMounted, watch} from 'vue';
import { useWindowScroll } from '@vueuse/core'
import NavbarIcon from './NavbarIcon.vue';
const { y } = useWindowScroll ()

onMounted(()=>{
 
})


  watch(y, (siteHeight)=>{
    const navBar = document.querySelector('.navbar')
  if(siteHeight < 350) {
    navBar?.classList.add('w-8/12')
    navBar?.classList.remove('w-full') 
   
  } else {

    navBar?.classList.remove('w-8/12')
    navBar?.classList.add('w-full') 
  }
})

</script>

<template>
  <nav class="py-10 fixed top-0 z-20 w-full ">
    <div class="custom-container px-10">
      <ul class="navbar flex w-8/12 items-center justify-between bg-gray-50 px-3.5 py-3 rounded-full
       shadow-md transition-all ease-in-out duration-500">
        <NavbarIcon />
        <li class="flex items-center text-gray-400 font-sans">
          <span class="text-xs cursor-pointer mr-4">Courses</span>
          <span class="text-xs cursor-pointer">Contact Us</span>
          <span class="text-xs cursor-pointer ml-4">Lorem</span>
        </li>
        <li class="bg-emerald-400 cursor-pointer ml-8 px-6 py-1.5 rounded-full text-slate-50 text-xs font-sans">Contact Us</li>
      </ul>
    </div>
  </nav>
</template>


<style>
/* .navbar {
  transition: all 0.8s ease-in-out;
} */
</style>