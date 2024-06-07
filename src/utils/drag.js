
const setDraggable = (container,content,h) => {
let isDragging = false;
let startY;
let scrollTop;
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


    let newh;
    if (walk < 0) {
        newh = 30;
    } else if (walk > 900) {
        newh = 10;
    } else {
        newh = 30 - (walk / 500); //30 500
        console.log(newh)
    }
    
    if(newh<1) newh=10
    if(newh>31) newh=31
    return newh;
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