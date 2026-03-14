document.addEventListener("DOMContentLoaded", () => {

gsap.registerPlugin(ScrollTrigger);

////////////////////////////////////////////////////
// LANGUAGE TOGGLE (EN / TELUGU)
////////////////////////////////////////////////////

const langBtn = document.getElementById("lang-toggle");
let currentLang = "en";

const content = {

en:{
nav_story:"Our Story",
nav_gallery:"Gallery",
nav_venues:"Venues",
nav_rsvp:"RSVP",

hero_tagline:"We Are Getting Married",

venues_title:"When & Where",
venue_wedding:"Wedding Ceremony",
venue_wedding_time:"April 12, 2026 | 11:11 AM",

venue_reception:"Reception",
venue_reception_time:"April 14, 2026 | 7:00 PM",

rsvp_title:"RSVP",
rsvp_btn:"Confirm Attendance"
},

te:{
nav_story:"మా కథ",
nav_gallery:"ఫోటోలు",
nav_venues:"వేదికలు",
nav_rsvp:"ఆహ్వానం",

hero_tagline:"మేము ఒక్కటవుతున్నాము",

venues_title:"వేదికలు",
venue_wedding:"వివాహం",
venue_wedding_time:"ఏప్రిల్ 12, 2026 | ఉదయం 11:11",

venue_reception:"రిసెప్షన్",
venue_reception_time:"ఏప్రిల్ 14, 2026 | సాయంత్రం 7:00",

rsvp_title:"ఆహ్వానం",
rsvp_btn:"హాజరు నిర్ధారించండి"
}

};

if(langBtn){

langBtn.addEventListener("click",()=>{

currentLang=currentLang==="en"?"te":"en";

document.querySelectorAll("[data-i18n]").forEach(el=>{

const key=el.getAttribute("data-i18n");

if(content[currentLang][key]){
el.innerHTML=content[currentLang][key];
}

});

langBtn.innerText=currentLang==="en"?"EN / తెలుగు":"తెలుగు / EN";

});

}

////////////////////////////////////////////////////
// HERO ANIMATION
////////////////////////////////////////////////////

gsap.to(".animate-fade-in-up",{
y:0,
opacity:1,
duration:1.2,
stagger:0.2,
ease:"power3.out"
});

////////////////////////////////////////////////////
// SCROLL REVEAL TEXT
////////////////////////////////////////////////////

gsap.utils.toArray(".reveal-text").forEach(text=>{

gsap.to(text,{
scrollTrigger:{
trigger:text,
start:"top 85%"
},
y:0,
opacity:1,
duration:1
});

});

////////////////////////////////////////////////////
// MUSIC CONTROL
////////////////////////////////////////////////////

const musicBtn=document.getElementById("music-control");
const audio=document.getElementById("bg-music");

let isPlaying=true;

if(musicBtn){

musicBtn.addEventListener("click",()=>{

if(isPlaying){
audio.pause();
musicBtn.classList.add("opacity-50");
}else{
audio.play();
musicBtn.classList.remove("opacity-50");
}

isPlaying=!isPlaying;

});

}

////////////////////////////////////////////////////
// COUNTDOWN TIMER
////////////////////////////////////////////////////

// April 12, 2026 11:11 AM IST

const weddingDate=new Date("2026-04-12T11:11:00+05:30").getTime();

function updateTimer(){

const now=new Date().getTime();
const distance=weddingDate-now;

if(distance<0)return;

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
const seconds=Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerText=days;
document.getElementById("hours").innerText=hours;
document.getElementById("minutes").innerText=minutes;
document.getElementById("seconds").innerText=seconds;

}

updateTimer();
setInterval(updateTimer,1000);

////////////////////////////////////////////////////
// VISITOR COUNTER
////////////////////////////////////////////////////

const counter=document.getElementById("visit-count");

if(counter){

let views=localStorage.getItem("wedding_views");

if(!views){
views=842;
}else{
views=parseInt(views)+1;
}

localStorage.setItem("wedding_views",views);

counter.innerText=views;

}

////////////////////////////////////////////////////
// RSVP FORM
////////////////////////////////////////////////////

const rsvpForm=document.getElementById("rsvp-form");

if(rsvpForm){

rsvpForm.addEventListener("submit",(e)=>{

e.preventDefault();

const name=rsvpForm.full_name.value;

const status=document.getElementById("rsvp-status");

status.innerText="Thank you "+name+"! Your response has been recorded.";

rsvpForm.reset();

});

}

////////////////////////////////////////////////////
// GUEST COUNTER
////////////////////////////////////////////////////

let guests=1;

const guestDisplay=document.getElementById("guest-count");
const guestInput=document.getElementById("guests-input");

function updateGuests(){

guestDisplay.innerText=guests;
guestInput.value=guests;

}

const plus=document.getElementById("plus");
const minus=document.getElementById("minus");

if(plus){

plus.onclick=()=>{

if(guests<10){
guests++;
updateGuests();
}

};

}

if(minus){

minus.onclick=()=>{

if(guests>1){
guests--;
updateGuests();
}

};

}

////////////////////////////////////////////////////
// CUSTOM CURSOR
////////////////////////////////////////////////////

const cursor=document.getElementById("cursor-dot");

if(cursor){

window.addEventListener("mousemove",(e)=>{

gsap.to(cursor,{
x:e.clientX,
y:e.clientY,
duration:0.1
});

});

}

});
