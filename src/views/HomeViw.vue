<template>
    <NavHeader/>
    <h-1>Good Morning!</h-1>
    <h3 class="text-textLight tracking-wide leading-6 text-sm mt-3">Don't let a bad day make you feel like you have a bad life </h3>


 <div class="flex justify-between mt-6">   <Date>Aug 23</Date>
 
 <Memories> 2 memories</Memories></div>
</template>

<script setup>
import NavHeader from '@/components/NavHeader.vue';
import Date from '@/components/ui/Date.vue';
import Memories from '@/components/ui/Memories.vue';
</script>