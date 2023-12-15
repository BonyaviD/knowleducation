<script setup lang="ts">
import {reactive, onMounted, ref, watch} from 'vue';
import LoadedCard from './Cards/LoadedCourseCard.vue';
import initServer from "@/mock";
import {useIntersectionObserver} from "@vueuse/core";

initServer();

const state = reactive({
  cards: [],
  loading: true,
});

const loading = ref(false)

const getCards = async () => {
  try {
    loading.value = true
    const response = await fetch('/api/cards');
    console.log(response)
    const data = await response.json();
    state.cards = data.cards;
  } catch (error) {
    console.error('Error fetching cards:', error);
  } finally {
    loading.value = false
  }
}

const target = ref(null)
const targetIsVisible = ref(false)

const {isActive} = useIntersectionObserver(
    target,
    ([{isIntersecting}], observerElement) => {
      targetIsVisible.value = isIntersecting
    },
    {
      rootMargin: '-100px'
    }
)

watch(targetIsVisible, (val) => {
  console.log(val)
  if (val)
    getCards()
})
</script>

<template>
  <div class="py-10 bg-slate-200" ref="target">
    <div class="custom-container px-16">
      <h2 class="text-2xl text-slate-600 mb-4">Our Courses</h2>
      <ul class="flex items-center flex-wrap gap-5">
        <LoadedCard/>
        <LoadedCard />
        <LoadedCard />
        <LoadedCard />
        <LoadedCard />
        <LoadedCard />
        <li class="bg-slate-100 pt-2 px-2.5 pb-4 w-56 rounded-xl cursor-pointer 
  transition-all ease-in-out duration-400 relative top-0 hover:relative hover:-top-2.5" 
        v-if="!loading" v-for="card in state.cards"
            :key="card['id']">
          <div class="my-1 rounded flex items-center justify-center h-52 bg-slate-50">
            <span class="text-slate-300 text-4xl">{{ card['image'] }}</span></div>
          <p class="text-slate-400 text-xs font-sans leading-5">{{ card['description'] }}</p>
        </li>
        <li class="bg-slate-100 pt-2.5 px-2 pb-5 w-56 rounded-md" v-if="loading" v-for="(card, index) in new Array(6)"
            :key="index">
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



  