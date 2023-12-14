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
              <span class="text-red-400 text-xs ml-5">this is Error</span>
            </div>
              <input type="text" id="fullname" class="px-2 border rounded-md focus:border-emerald-500 outline-none">
            </div>
            <div class="flex flex-col">
              <div>
                <label for="email" class="text-slate-400 text-xs">Email</label>
                <span class="text-red-400 text-xs ml-5">Email address is incorrect</span>
              </div>
              <input type="email" id="email" class="px-2 border rounded-md focus:border-emerald-500 outline-none">
            </div>
          </div>
          <div class="flex flex-col">
            <div>
              <label for="message" class="text-slate-400 text-xs">Message</label>
              <span class="text-red-400 text-xs ml-5">Field can not be empty</span>
            </div>
            <textarea name="" id="message" cols="40" rows="5" class="px-2 outline-none border rounded-md"></textarea>
          </div>
          <div class="mt-4">
            <button class="bg-emerald-400 cursor-pointer px-12 py-2 rounded-full text-slate-50 text-xs">Send</button>
          </div>
        </div>
        <div class="phone rounded-md flex items-center justify-center w-72">
          <img class="w-32 " src="../assets/img/phone.png" alt="">
        </div>
      </div>
    </div>
    <div class="footer bg-emerald-400 mt-8 pt-1 h-20 rounded-t-3xl">
      <div class="footer-two group bg-slate-900 h-20 rounded-t-3xl flex items-center justify-center text-slate-400 text-xs">
        <h4 class="test relative">
          <span class="">Give me FIVE</span>
          <img
           class=" test absolute -top-1 -right-6 w-5 cursor-pointer group-hover:w-6 group-hover:-right-7 group-hover:-top-1.5 active:scale-75" 
           src="../assets/img/give-hand.png" 
           alt="">
        </h4>
      </div>
    </div>
  </div>
</template>

<style>
.phone{
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
}
</style>