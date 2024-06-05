<template>
    <h1 :class="color" class="text-4xl font-h1">
    
        <slot></slot>
    </h1>
 
</template>

<script setup> 

defineProps({
    color:{
        type:String,
        default:'text-textBlack'
    }
})

</script>