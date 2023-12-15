<script setup lang="ts">
import TheFooter from '../components/TheFooter.vue'
import { ref } from 'vue';
const form = ref({
  fullname: '',
  nameStatus: true,
  email: '',
  emailCorrect: true,
  message: '',
  messageStatus: true,

})


const isEmailValid = (email: string): boolean => {
  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

const validateForm = () => {
  if(form.value.fullname !== '') {
    form.value.nameStatus = true
  } else {
    form.value.nameStatus = false
  }

  if(form.value.message !== '') {
form.value.messageStatus = true;
  } else {
    form.value.messageStatus = false;
  }
  if (isEmailValid(form.value.email)) {
    console.log(form.value.emailCorrect)
    form.value.emailCorrect = true;
    console.log(form.value.emailCorrect)
  } else {
    form.value.emailCorrect = false;
  }
}

</script>


<template>
  <div class="bg-slate-100 pt-8">
    <div class="contact-us custom-container px-16">
      <h4 class="text-2xl text-slate-600 mb-4">Need any help...?</h4>
      <div class="div-one flex justify-between p-5 bg-slate-50 shadow-md rounded-md">
        <div class="inputs flex flex-col">
          <div class="flex mb-3">
            <div class="flex flex-col mr-4">
              <div>
                <label for="fullname" class="text-slate-400 text-xs font-sans">Full Name</label>
                <span 
                class="text-xs ml-5 font-sans"
                :class="form.nameStatus? 'hidden' : 'text-red-400'"
                >Error</span>
              </div>
              <input v-model="form.fullname" type="text" id="fullname"
               class="bg-slate-50 px-2 py-1 border rounded-md focus:border-emerald-500 outline-none text-slate-400">
            </div>
            <div class="flex flex-col">
              <div>
                <label for="email" class="text-slate-400 text-xs font-sans">Email</label>
                <span :class="form.emailCorrect ? 'hidden' : 'text-red-400'" class="text-xs ml-5 font-sans">Email address is incorrect</span>
              </div>
              <input v-model="form.email" type="email" id="email"
              :class="form.emailCorrect ? 'border focus:border-emerald-500' : 'border-red-400 focus:border-red-400'"
                class="bg-slate-50 px-2 py-1 border rounded-md outline-none  text-slate-400">
            </div>
          </div>
          <div class="flex flex-col">
            <div>
              <label for="message" class="text-slate-400 text-xs font-sans">Message</label>
              <span :class="form.messageStatus ? ' hidden' : 'text-red-400 '" class=" text-xs ml-5 font-sans">Field can not be empty</span>
            </div>
            <textarea name="message" id="message" cols="40" rows="5" v-model="form.message"
            :class="form.messageStatus ? 'focus:border-emerald-500' : 'border-red-400 focus:border-red-400'"
            class="bg-slate-50 px-2 outline-none border rounded-md font-sans text-slate-500">
          </textarea>
          </div>
          <div class="mt-4">
            <button @click="validateForm"
              class="bg-emerald-400 cursor-pointer px-12 py-2 rounded-full text-slate-50 text-xs">Send</button>
          </div>
        </div>
        <div class="bg-background -scale-x-100 rounded-md flex items-center justify-center w-72">
          <img class="w-32 " src="../assets/img/phone.png" alt="">
        </div>
      </div>
    </div>
    
    <TheFooter />
 
  </div>
</template>

<style>

input {
  width: 200px;
  font-size: 0.8rem;
  font-weight: 100;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>