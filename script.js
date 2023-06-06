const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sharp fa-solid fa-moon')){
        body.styl.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.styl.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})











// let Icon = document.getElementById("Icon");
// 
// Icon.onclick = function(){
    // document.body.classList.toggle("dark-theme");
    // if(document.body.classList.contains("dark-theme")){
        // moonIcon.src = "./img/moon-removebg-preview (1).png"
    // }
// }
// 