<template>
  <div class="py-3 relative px-4 mx-auto h-screen bg-pageBackground">

     <ButtonBack />
    <div class="flex items-center mt-3 justify-between">
      <h3 class="text-slate-800">save</h3>
      <IconSave />
    </div>
    <RoundedCardContainer bgColor="bg-white" class="flex mt-5 items-center justify-between">
      <div class="flex p-1 items-baseline gap-3 justify-between"><H1>24</H1>Agust</div>

      <h1 class="text-3xl">😊</h1>
    </RoundedCardContainer>

    <input class="w-full  mt-10 text-md text-textBlack font-bold placeholder:text-lg capitalize bg-inherit outline-none" placeholder="A Day in the Life" type="text">
  <div class="relative h-[50%] my-5 scrollbar-hidden"> 
      <textarea placeholder="Today was an amazing day! I started with a refreshing morning run, followed by a productive work session. In the evening, I caught up with friends over a cozy dinner. Looking forward to more such days!" class="mt-6 leading-relaxed scrollbar-hidden resize-none bg-inherit outline-none text-slate-700 w-full h-full" name="" id="" ></textarea>
  </div>
<div class="flex justify-between mt-8">
     <div class="flex justify-start gap-3 mt-3">
  <VButton bg="bgBlack" padding="1" rounded="rounded"><h3>family</h3></VButton>
  <VButton bg="bgBlack" padding="1" rounded="rounded"><h3>work</h3></VButton>
  </div>  
  <VButton padding="3" bg="bgWhite">save</VButton>
</div>
</div>

</template>

<script setup>
import { useRoute } from 'vue-router'
import IconSave from '@/components/icons/IconSave.vue'
import VButton from '@/components/ui/VButton.vue'
import RoundedCardContainer from '@/components/ui/RoundedCardContainer.vue'
import H1 from '@/components/ui/H1.vue'
import ButtonBack from '@/components/ui/ButtonBack.vue'

const route = useRoute()
const props = defineProps({
  foo: {
    // day, month, year, mood, about
    type: Object,
    required: true
  }
})
console.log(route.params)
</script>
