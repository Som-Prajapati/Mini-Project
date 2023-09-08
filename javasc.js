let body = document.body;
let sideBar = document.getElementById("sside-bar");
let profile = document.getElementById("pprofile");
let searchForm = document.getElementById("ssearch-form");
let shadow=document.getElementById("shadow");

document.getElementById("user-btn").addEventListener("click", () => {
    profile.classList.toggle("active");
    searchForm.classList.remove("activee");


})


document.getElementById("search-btn").addEventListener("click", () => {
    profile.classList.remove("active");
    searchForm.classList.toggle("activee");

})


document.getElementById("menu-btn").addEventListener("click", () => {
    sideBar.classList.add("activeee");
    shadow.classList.add("shadow");

    body.classList.add("activeee");
})


document.getElementById("cclose").addEventListener("click", () => {
    shadow.classList.remove("shadow");

    sideBar.classList.remove("activeee");
    body.classList.remove("activeee");

})


window.onscroll = () => {
    profile.classList.remove("active");
    searchForm.classList.remove("activee");

}


if (window.innerWidth < 1200){

    document.getElementById("menu-btn").addEventListener("click", () => {
       
        sideBar.classList.add("activeee");
        body.classList.add("activeee");
    })

    document.getElementById("cclose").addEventListener("click", () => {
    sideBar.classList.remove("activeee");
    body.classList.remove("activeee");
})

}
let toggleBtn = document.getElementById('toggle-btn');
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');

   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}
