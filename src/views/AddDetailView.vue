<template>
     <div  class="py-3 relative px-4 mx-auto h-screen bg-pageBackground">

hi
{{ newMood }}

     </div>
</template>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()
const props=   defineProps({
 foo:{ // day, month, year, mood, about
    type:Object,
    required:true
 }
})
console.log(route.params)
</script>
