<template>
  <div class="py-3 relative px-4 mx-auto h-screen bg-pageBackground">
    <ButtonBack />

    <div
      class="mt-5 p-4 flex justify-center h-32 rounded-xl relative w-full bg-slate-950 bg-opacity-5"
    >
       <h2 v-if="Profile.isPremium" class="text-xl   justify-center text-center text-gray-900 flex"> <CheckIcon class="w-6 h-6"/>
        premium</h2>
      <h2 v-else class="text-2xl text-gray-500">Edit Profile</h2>
      <img
        class="bg-gray-200 border-2 border-white absolute w-28 h-28 -translate-x-1/2 rounded-full -bottom-12 left-1/2"
        :src="updateProfile.avator=='male'? AVATOR_MALE : AVATOR_FEMALE"
        alt=""
      />
      <span
        class="p-1 -bottom-12 left-[56%] text-sm rounded-full border bg-white border-black text-black absolute"
      >
        <svg
          @click="toggleAvator"
          class="w-5 h-5 cursor-pointer"
          data-slot="icon"
          aria-hidden="true"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>
    </div>
    <h2 class="mt-16 text-sm text-textBlack text-center">Access your account outside Telegram.</h2>
    <div class="flex flex-col gap-3 mt-3">
      <div>
        <h2 class="text-md text-textLight mb-1">Username</h2>
        <input
          v-model="updateProfile.username"
        
          class="py-1 w-full px-3 bg-white border border-gray-400 rounded-lg"
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <h2 class="text-md text-textLight mb-1">Password</h2>
        <input
          v-model="updateProfile.password"
         
          class="py-1 px-3 w-full bg-white border border-gray-400 rounded-lg"
          type="password"
          name=""
          id=""
        />
      </div>
    </div>
    <h3 class="text-sm text-2 -mb-2">{{error}}</h3>
    <span class="mt-10 px-1 grid place-items-center">
   
      <VButton @click="handleSubmit" class="w-full" padding="3" rounded="roundedLg" bg="bgGradient"
        >Save And Continue
      </VButton>
    </span>
    <div v-show="!Profile.isPremium" class="flex justify-between text-center items-center mt-6 text-textLight">
      <h3>Get premium access.</h3>
      <button
        class="px-3 py-2 flex items-center gap-2 rounded-2xl bg-black hover:bg-gray-800 text-white"
      >
       <CheckIcon class="w-5 h-5"/>
        premium
      </button>
   
    </div>
  
  </div>
</template>

<script setup>
import ButtonBack from '@/components/ui/ButtonBack.vue'
import { AVATOR_FEMALE, AVATOR_MALE } from '@/data/constants'
import { computed, onBeforeMount, ref } from 'vue'
import VButton from '@/components/ui/VButton.vue'
import { useConfigStore } from '@/stores/module/config'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import { useRouter } from 'vue-router'
const configStore = useConfigStore()
const Profile = computed(()=>configStore.getUser())
const updateProfile = ref({
  username: Profile.value.username,
  password: Profile.value.password,
  avator: Profile.value.avator

})
const error = ref('')
const toggleAvator = () => {
  updateProfile.value.avator = updateProfile.value.avator === "male" ? "female" : "male"

}
const handleSubmit = async () => {

 const {e} = await configStore.updateUser(updateProfile.value)
  if(e){
   error.value = 'Username exists'
  }
}

onBeforeMount(() => {
  if(!Profile.value.id){
    useRouter().push('/change-port')
  }
 
})
</script>
