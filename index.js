document.getElementById("menu-btn").addEventListener("click", function(){
    // document.getElementById("home-headline").classList.add("landpage-headline-container");
    // document.getElementById("demo-btn").classList.add("demo-btn");
    document.getElementById("login-btn").classList.toggle("nav-active");

})

document.getElementById("register-btn").addEventListener("click", function(){
    document.getElementById("register-pg").classList.add("register-activate")
})

document.getElementById("canceal-btn").addEventListener("click", function(){
    document.getElementById("register-pg").classList.remove("register-activate");
    document.getElementById("login-btn").classList.remove("nav-active");
})