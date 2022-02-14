const hamburger = document.getElementById('hamburger');
const headerItems = document.getElementById('headerItems');

hamburger.addEventListener('click', ()=>{
    headerItems.classList.toggle('show');
    console.log("saf");
});