
const setDraggable = (container,content) => {
let isDragging = false;
let startY;
let scrollTop;
let h =29;
const startDragging = (y) => {
    isDragging = true;
    startY = y - content.offsetTop;
    scrollTop = container.scrollTop;
    content.style.cursor = 'grabbing';
};

const stopDragging = () => {
    isDragging = false;
    content.style.cursor = 'grab';
};

const onDrag = (y) => {
    if (!isDragging) return;
    const walk = y - startY;
    container.scrollTop = scrollTop - walk;
    h =  mapWalkToH(walk)
    content.style.setProperty('--dynamic-height', `${h}rem`)
    
    
};
function mapWalkToH(walk) {
    let h;
    if (walk < 0) {
        h = 30;
    } else if (walk > 900) {
        h = 10;
    } else {
        h = 30 - (walk / 40);
    }
    
    if(h<1) h=10
    if(h>31) h=31
    return h;
}
content.addEventListener('mousedown', (e) => {
    startDragging(e.pageY);
});

content.addEventListener('mouseleave', stopDragging);
content.addEventListener('mouseup', stopDragging);

content.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    onDrag(e.pageY);
});


content.addEventListener('touchstart', (e) => {
    startDragging(e.touches[0].pageY);
});

content.addEventListener('touchend', stopDragging);

content.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    onDrag(e.touches[0].pageY);
})
}

export default setDraggable;