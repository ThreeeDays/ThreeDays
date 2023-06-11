// Menu JS
const nav= document.querySelector(".nav");
const navMenu= document.querySelector(".nav-menu");

nav.addEventListener("click",()=>{
    nav.classList.toggle("active");
    navMenu.classList.toggle("active");
})
// Menu JS

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

fetch("https://wanderlustapis.onrender.com")
.then(res => res.json())
.then(data => {
    var sayi=deger-1;
    
    title.textContent=data[sayi].title;
    img.src= data[sayi].img1;
    ulke.textContent=data[sayi].ulke;
    ekonomi.textContent=data[sayi].ekonomi;
    iklim.textContent=data[sayi].iklim;
    cografya.textContent=data[sayi].cografya;
    tarih.textContent=data[sayi].tarih;

    parag1.textContent=data[sayi].gezilecekYerBilgi1;
    geziBilgi1.textContent=data[sayi].gezilecekYer1;
    img1.src=data[sayi].img2;

    parag2.textContent=data[sayi].gezilecekYerBilgi2;
    geziBilgi2.textContent=data[sayi].gezilecekYer2;
    img2.src=data[sayi].img3;

    img3.src=data[sayi].img4;
    parag3.textContent=data[sayi].yemekBilgi1;
    yemekBilgi1.textContent=data[sayi].yemek1;
    
    img4.src=data[sayi].img5;
    parag4.textContent=data[sayi].yemekBilgi2;
    yemekBilgi2.textContent=data[sayi].yemek2;

    img5.src=data[sayi].img6;
    parag5.textContent=data[sayi].tatlıBilgi;
    tatlıBilgi1.textContent=data[sayi].tatlı;
})

//About Toggle
$(document).ready(function(){
  $("#AboutToggle").click(function(){
    $("#metin").fadeToggle(1000);
  });
});

//About Toggle


//Earth Toggle
$(document).ready(function(){
    $("#EarthToggle").click(function(){
      $("#metin2").fadeToggle(1000);
    });
  });

//Earth Toggle
