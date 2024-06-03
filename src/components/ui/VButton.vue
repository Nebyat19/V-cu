<template>
  <button 
    :class="[
      'flex gap-5 justify-center items-center   text-sm',
      bgClass,
      roundedClass,
      paddingCalss
    ]"
  >
    <slot>Next <IconNext/></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import IconNext from '../icons/IconNext.vue';
import { defineProps } from 'vue';

const props = defineProps({
  bg: {
    type: String,
    default: 'bgBlack'  
  },
  rounded: {
    type: String,
    default: 'roundedFull'  
  },
  padding :{
    type:Number,
    default:2

  }
});

const bgOptions = {
  bgGradient: 'bg-gradient-to-r from-gradientStart via-gradientStart to-gradientEnd text-white',
  bgBlack: 'bg-textBlack text-white',
  bgWhite: 'text-textBlack bg-white',
  bgOutline: 'border border-textLight text-textLight'
};

const roundedOptions = {
  roundedFull: 'rounded-full',
  roundedLg: 'rounded-lg'
};

const paddingOption ={
  1: 'px-3 py-1',
  2: 'px-3 py-3',
  3: 'px-7 py-3'
}

const bgClass = computed(() => bgOptions[props.bg] || bgOptions.bgBlack);
const roundedClass = computed(() => roundedOptions[props.rounded] || roundedOptions.roundedFull);
const paddingCalss = computed(()=>paddingOption[props.padding] || paddingOption[3])

</script>
