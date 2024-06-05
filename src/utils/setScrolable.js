export  const setScrollable = (element) => {
  let prevScrollPos = 0
  let oldDynamicHeight = 0
  let scrollableContainer = element
  scrollableContainer.addEventListener('scroll', () => {
    const currentScroll = scrollableContainer.scrollTop

    const scrollDirection = currentScroll > prevScrollPos ? 'down' : 'up'
    const scrollDelta = Math.abs(currentScroll - prevScrollPos)

    let dynamicHeight = parseFloat(element.style.getPropertyValue('--dynamic-height')) || 0
    if (scrollDirection === 'up') {
      dynamicHeight -= 0.1 * scrollDelta
    } else {
      dynamicHeight += 0.1 * scrollDelta
    }

    dynamicHeight = Math.max(10.5, Math.min(30, dynamicHeight))
    if (Math.abs(oldDynamicHeight - dynamicHeight) > 1.5) {
      element.style.setProperty('--dynamic-height', `${dynamicHeight}rem`)
      oldDynamicHeight = dynamicHeight
      console.log(dynamicHeight)
    }

    prevScrollPos = currentScroll
  })
}
