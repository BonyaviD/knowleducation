<script setup lang="ts">
import TheNavbar from '../components/TheNavbar.vue'
import LearnEdgeSection from '../components/LearnEdgeSection.vue'
import HandSection from '../components/HandSection.vue'
import CourseSection from '../components/CourseSection.vue'
</script>

<template>
  <TheNavbar />
  <LearnEdgeSection />
  <HandSection />
  <CourseSection />
  <div class="bg-slate-100 pt-8">
    <div class="contact-us custom-container px-10">
      <h4 class="text-2xl text-slate-700 mb-3">Need any help...?</h4>
      <div class="div-one flex justify-between p-5 bg-slate-50 shadow-md rounded-md">
        <div class="inputs flex flex-col">
          <div class="flex mb-3">
            <div class="flex flex-col mr-4">
              <label for="fullname" class="text-slate-400 text-xs">Full Name</label>
              <input type="text" id="fullname" class="border rounded-md input">
            </div>
            <div class="flex flex-col">
              <label for="email" class="text-slate-400 text-xs">Email</label>
              <input type="email" id="email" class="border rounded-md">
            </div>
          </div>
          <div class="flex flex-col">
            <label for="message" class="text-slate-400 text-xs">Message</label>
            <textarea name="" id="message" cols="40" rows="5" class="border rounded-md"></textarea>
          </div>
          <div class="mt-4">
            <button class="bg-emerald-400 cursor-pointer px-12 py-2 rounded-full text-slate-50 text-xs">Send</button>
          </div>
        </div>
        <div class="bg-orange-200 rounded-md flex items-center justify-center w-72">
          img
        </div>
      </div>
    </div>
    <div class="footer bg-emerald-400 mt-8 pt-1 h-20 rounded-t-3xl">
      <div class="footer-two bg-slate-900 h-20 rounded-t-3xl flex items-center justify-center text-slate-400 text-xs">
        <h4>Give me FIVE</h4>
      </div>
    </div>
  </div>
</template>

<style>


.footer {
  border-radius: 50% 50% 0 0;
}

.footer-two {
  border-radius: 50% 50% 0 0;
}
</style>
