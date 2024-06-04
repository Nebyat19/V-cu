<template>
  <button 
     @click ="onClick()"
    :class="[
      'flex gap-8 justify-center items-center   text-sm',
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
import { defineProps, ref } from 'vue';

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

  },
  canClick:{
type:Boolean,
default:false
  }
});

const bgOptions = {
  bgGradient: 'bg-gradient-to-r from-gradientStart via-gradientStart to-gradientEnd text-white',
  bgGradient2:'bg-gradient-to-r from-gradientStart via-gradientEnd to-gradientEnd text-white',
  bgBlack: 'bg-textBlack text-white',
  bgWhite: 'text-textBlack bg-white',
  bgOutline: 'border border-textLight text-textLight'
};

const roundedOptions = {
   roundedXl: 'rounded-xl',
  roundedFull: 'rounded-full',
 roundedLg: 'rounded-lg',
 rouded: 'rounded-[15px]',
};

const paddingOption ={
  1: 'px-3 py-1',
  2: 'px-3 py-3',
  3: 'px-7 py-3',
  4: 'px-4 py-4'
}

const clickOption ={
  1:''
}
const bgClass = ref(bgOptions[props.bg] || bgOptions.bgBlack)
const roundedClass = computed(() => roundedOptions[props.rounded] || roundedOptions.roundedFull);
const paddingCalss = computed(()=>paddingOption[props.padding] || paddingOption[3])

const onClick =()=>{
if(props.canClick){

  bgClass.value = bgClass.value ==='border border-textLight text-textLight' ? bgOptions.bgBlack : bgOptions.bgOutline
}

}

</script>
