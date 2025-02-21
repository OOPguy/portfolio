const themetoggle=document.getElementById("theme-toggle");
const body=document.body;

themetoggle.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        themetoggle.textContent="☀️ Light Mode";
    }
    else{
        themetoggle.textContent="🌙 Dark Mode";
    }
});

document.querySelectorAll("nav a").forEach(link =>{
    link.addEventListener("click", function(e){
        e.preventDefault();

        const targetID=this.getAttribute("href").substring(1);
        const targetselection=document.getElementById(targetID);

        window.scrollTo({
            top: targetselection.offsetTop-50,
            behavior:"smooth"
        });
    });
});
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("contact-form").addEventListener("submit", function(e){
        e.preventDefault();

        let name=document.getElementById("name").value.trim();
        let email=document.getElementById("email").value.trim();
        let message=document.getElementById("message").value.trim();
        let formMessage=document.getElementById("form-message");

        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!name||!email||!message){
            formMessage.textContent="❌ Please fill in all fields!";
            formMessage.style.color="red";
        }else if(!emailPattern.test(email)){
            formMessage.textContent="Enter a valid email!";
            formMessage.style.color="red";
        }else{
            formMessage.textContent="✅ Message sent successfully!";
            formMessage.style.color="green";

            this.reset();

            setTimeout(()=>{
                formMessage.textContent=""
            },3000);
        }

    });
});
const scrollTopDown=document.getElementById("scroll-top");

window.addEventListener("scroll",()=>{
    if(window.scrollY>300){
        scrollTopDown.style.display="block";
    }else{
        scrollTopDown.style.display="none";
    }
});
scrollTopDown.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
const typingText=document.getElementById("typing-text");
const texttotype="Hein Lin Zaw";
let index=0;

function typeEffect(){
    if(index<texttotype.length){
        typingText.innerHTML +=texttotype.charAt(index);
        index++;
        setTimeout(typeEffect,150);
    }
};
window.onload=()=>{
    setTimeout(typeEffect,500);
};