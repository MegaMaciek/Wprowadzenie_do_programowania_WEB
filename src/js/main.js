const toggleEl = document.getElementById('abc');
console.log(document);

toggleEl.addEventListener('click', () => {
    console.log('clicked');
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
});


const breakpointMatch = window.matchMedia('(min-width: 1028px)');
breakpointMatch.addEventListener('change', (event) => {
    if (event.matches) {
        const menu = document.getElementById('menu');
        menu?.classList.remove('active');
    }
})