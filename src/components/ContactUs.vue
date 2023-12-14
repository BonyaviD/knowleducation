<script setup lang="ts">

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
    <div class="contact-us custom-container px-10">
      <h4 class="text-2xl text-slate-700 mb-3">Need any help...?</h4>
      <div class="div-one flex justify-between p-5 bg-slate-50 shadow-md rounded-md">
        <div class="inputs flex flex-col">
          <div class="flex mb-3">
            <div class="flex flex-col mr-4">
              <div>
                <label for="fullname" class="text-slate-400 text-xs">Full Name</label>
                <span 
                class="text-xs ml-5"
                :class="form.nameStatus? 'hidden' : ''"
                >Error</span>
              </div>
              <input v-model="form.fullname" type="text" id="fullname" class="px-2 border rounded-md focus:border-emerald-500 outline-none">
            </div>
            <div class="flex flex-col">
              <div>
                <label for="email" class="text-slate-400 text-xs">Email</label>
                <span :class="form.emailCorrect ? 'hidden' : 'text-red-400'" class="text-xs ml-5">Email address is incorrect</span>
              </div>
              <input v-model="form.email" type="email" id="email"
              :class="form.emailCorrect ? 'border focus:border-emerald-500' : 'border-red-400 focus:border-red-400'"
                class="px-2 border rounded-md outline-none">
            </div>
          </div>
          <div class="flex flex-col">
            <div>
              <label for="message" class="text-slate-400 text-xs">Message</label>
              <span :class="form.messageStatus ? ' hidden' : 'text-red-400 '" class=" text-xs ml-5">Field can not be empty</span>
            </div>
            <textarea name="" id="message" cols="40" rows="5" v-model="form.message"
            :class="form.messageStatus ? 'focus:border-emerald-500' : 'border-red-400 focus:border-red-400'"
            class="px-2 outline-none border rounded-md">
          </textarea>
          </div>
          <div class="mt-4">
            <button @click="validateForm"
              class="bg-emerald-400 cursor-pointer px-12 py-2 rounded-full text-slate-50 text-xs">Send</button>
          </div>
        </div>
        <div class="phone rounded-md flex items-center justify-center w-72">
          <img class="w-32 " src="../assets/img/phone.png" alt="">
        </div>
      </div>
    </div>
    <div class="footer bg-emerald-400 mt-8 pt-1 h-20 rounded-t-3xl">
      <div
        class="footer-two group bg-slate-900 h-20 rounded-t-3xl flex items-center justify-center text-slate-400 text-xs">
        <h4 class="test relative">
          <span class="">Give me FIVE</span>
          <img
            class=" test absolute -top-1 -right-6 w-5 cursor-pointer group-hover:w-6 group-hover:-right-7 group-hover:-top-1.5 active:scale-75"
            src="../assets/img/give-hand.png" alt="">
        </h4>
      </div>
    </div>
  </div>
</template>

<style>
.phone {
  background-color: #FEF3C7;
  transform: scaleX(-1);
}

.test {
  transition: all 0.1s ease-in-out;
}

.footer {
  border-radius: 50% 50% 0 0;
}

.footer-two {
  border-radius: 50% 50% 0 0;
}</style>