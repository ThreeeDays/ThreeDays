// Menu JS
const nav= document.querySelector(".nav");
const navMenu= document.querySelector(".nav-menu");

nav.addEventListener("click",()=>{
    nav.classList.toggle("active");
    navMenu.classList.toggle("active");
})
// Menu JS

//BG
const possibleVideos =["./img/pyramid.mp4" , "./img/DenizVid.mp4" , "./img/GünBatımı.mp4" , "./img/GünIşığı.mp4" , "./img/KuzeyIşıkları.mp4"];

const randomNum = Math.floor( Math.random() * (possibleVideos.length-1) )
const randomVideo = possibleVideos[ randomNum ];

const myVid = document.getElementById("background-video");

myVid.src = randomVideo;
myVid.load();
myVid.play();
//BG

// Ulke
const Parametre = new URLSearchParams(window.location.search);
const deger = Parametre.get('id');

var title= document.getElementById("title");
var img= document.getElementById("imgs");
var ulke= document.getElementById("ulke");
var ekonomi= document.getElementById("ekonomi");
var iklim= document.getElementById("iklim");
var cografya= document.getElementById("cografya");
var tarih= document.getElementById("tarih");
var parag1= document.getElementById("parag1");
var geziBilgi1= document.getElementById("geziBilgi1");
var img1= document.getElementById("img1");
var parag2= document.getElementById("parag2");
var geziBilgi2= document.getElementById("geziBilgi2");
var img2= document.getElementById("img2");
var img3= document.getElementById("img3");
var parag3= document.getElementById("parag3");
var yemekBilgi1= document.getElementById("yemekBilgi1");
var img4= document.getElementById("img4");
var parag4= document.getElementById("parag4");
var yemekBilgi2= document.getElementById("yemekBilgi2");
var img5= document.getElementById("img5");
var parag5= document.getElementById("parag5");
var tatlıBilgi1= document.getElementById("tatlıBilgi1");

fetch("api/ulkeler.json")
.then(res => res.json())
.then(data => {
    if (deger==1){
        title.textContent=data[0].title;
        img.src= data[0].img1;
        ulke.textContent=data[0].ulke;
        ekonomi.textContent=data[0].ekonomi;
        iklim.textContent=data[0].iklim;
        cografya.textContent=data[0].cografya;
        tarih.textContent=data[0].tarih;

        parag1.textContent=data[0].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[0].gezilecekYer1;
        img1.src=data[0].img2;

        parag2.textContent=data[0].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[0].gezilecekYer2;
        img2.src=data[0].img3;

        img3.src=data[0].img4;
        parag3.textContent=data[0].yemekBilgi1;
        yemekBilgi1.textContent=data[0].yemek1;
        
        img4.src=data[0].img5;
        parag4.textContent=data[0].yemekBilgi2;
        yemekBilgi2.textContent=data[0].yemek2;

        img5.src=data[0].img6;
        parag5.textContent=data[0].tatlıBilgi;
        tatlıBilgi1.textContent=data[0].tatlı;
    }
})