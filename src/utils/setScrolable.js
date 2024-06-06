// let prevScrollPos = 0
// let oldDynamicHeight = 0
// export  const setScrollable = (element) => {
//   let scrollableContainer = element
//   scrollableContainer.addEventListener('scroll', () => {
//     const currentScroll = scrollableContainer.scrollTop

//     const scrollDirection = currentScroll > prevScrollPos ? 'down' : 'up'
//     const scrollDelta = Math.abs(currentScroll - prevScrollPos)

//     let dynamicHeight = parseFloat(element.style.getPropertyValue('--dynamic-height')) || 0
//     if (scrollDirection === 'up') {
      
//       scrollUp(dynamicHeight,scrollDelta,element)
//     } else {
//       scrollDown(dynamicHeight,scrollDelta,element)
//     }


//     prevScrollPos = currentScroll
//   })
// }
// function scrollUp(dynamicHeight,scrollDelta,element){
//   dynamicHeight -= 0.1 * scrollDelta
//   dynamicHeight = Math.max(1, Math.min(30, dynamicHeight))
//   if (Math.abs(oldDynamicHeight - dynamicHeight) > 1.5) {
//    // element.style.setProperty('--dynamic-height', `${dynamicHeight}rem`)
//     oldDynamicHeight = dynamicHeight
//     console.log("fffffffffffffffffffffffffffffff")
//   }

// }

// function scrollDown(dynamicHeight,scrollDelta,element){
//   dynamicHeight += 0.1 * scrollDelta
//   dynamicHeight = Math.max(1, Math.min(30, dynamicHeight))
//   if (Math.abs(oldDynamicHeight - dynamicHeight) > 1.5) {
//    // element.style.setProperty('--dynamic-height', `${dynamicHeight}rem`)
//     oldDynamicHeight = dynamicHeight
//     console.log(dynamicHeight)
//   }
// }
