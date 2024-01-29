const resister_btn = document.getElementById("register-btn")



document.getElementById("menu-btn").addEventListener("click", function(){
    
    document.getElementById("nav-list").classList.toggle("nav-active");

})

document.getElementById("auth").addEventListener("click", function(){
    document.getElementById("home-headline").classList.add("landpage-headline-container");
    document.getElementById("demo").classList.add("demo");
    document.getElementById("login").style.display = "none"
    document.getElementById("login-pg").classList.remove("login-activate");
    document.getElementById("login").classList.remove("nav-active");

})

resister_btn.addEventListener("click", function(){
    document.getElementById("register-pg").classList.add("register-activate")
})



document.getElementById("canceal-btn").addEventListener("click", function(){
    document.getElementById("register-pg").classList.remove("register-activate");
    document.getElementById("login").classList.remove("nav-active");
})


document.getElementById("register-trans").addEventListener("click", function(){
    document.getElementById("register-pg").classList.add("register-activate");
    document.getElementById("login-pg").classList.remove("login-activate");
})



document.getElementById("login-btn").addEventListener("click", function(){
    document.getElementById("login-pg").classList.add("login-activate")
})

document.getElementById("login-x").addEventListener("click", function(){
    document.getElementById("login-pg").classList.remove("login-activate");
    document.getElementById("login").classList.remove("nav-active");
})