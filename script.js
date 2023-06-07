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

    else if (deger==2){
        title.textContent=data[1].title;
        img.src= data[1].img1;
        ulke.textContent=data[1].ulke;
        ekonomi.textContent=data[1].ekonomi;
        iklim.textContent=data[1].iklim;
        cografya.textContent=data[1].cografya;
        tarih.textContent=data[1].tarih;

        parag1.textContent=data[1].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[1].gezilecekYer1;
        img1.src=data[1].img2;

        parag2.textContent=data[1].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[1].gezilecekYer2;
        img2.src=data[1].img3;

        img3.src=data[1].img4;
        parag3.textContent=data[1].yemekBilgi1;
        yemekBilgi1.textContent=data[1].yemek1;
        
        img4.src=data[1].img5;
        parag4.textContent=data[1].yemekBilgi2;
        yemekBilgi2.textContent=data[1].yemek2;

        img5.src=data[1].img6;
        parag5.textContent=data[1].tatlıBilgi;
        tatlıBilgi1.textContent=data[1].tatlı;
    }

    else if (deger==3){
        title.textContent=data[2].title;
        img.src= data[2].img1;
        ulke.textContent=data[2].ulke;
        ekonomi.textContent=data[2].ekonomi;
        iklim.textContent=data[2].iklim;
        cografya.textContent=data[2].cografya;
        tarih.textContent=data[2].tarih;

        parag1.textContent=data[2].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[2].gezilecekYer1;
        img1.src=data[2].img2;

        parag2.textContent=data[2].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[2].gezilecekYer2;
        img2.src=data[2].img3;

        img3.src=data[2].img4;
        parag3.textContent=data[2].yemekBilgi1;
        yemekBilgi1.textContent=data[2].yemek1;
        
        img4.src=data[2].img5;
        parag4.textContent=data[2].yemekBilgi2;
        yemekBilgi2.textContent=data[2].yemek2;

        img5.src=data[2].img6;
        parag5.textContent=data[2].tatlıBilgi;
        tatlıBilgi1.textContent=data[2].tatlı;
    }

    else if (deger==4){
        title.textContent=data[3].title;
        img.src= data[3].img1;
        ulke.textContent=data[3].ulke;
        ekonomi.textContent=data[3].ekonomi;
        iklim.textContent=data[3].iklim;
        cografya.textContent=data[3].cografya;
        tarih.textContent=data[3].tarih;

        parag1.textContent=data[3].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[3].gezilecekYer1;
        img1.src=data[3].img2;

        parag2.textContent=data[3].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[3].gezilecekYer2;
        img2.src=data[3].img3;

        img3.src=data[3].img4;
        parag3.textContent=data[3].yemekBilgi1;
        yemekBilgi1.textContent=data[3].yemek1;
        
        img4.src=data[3].img5;
        parag4.textContent=data[3].yemekBilgi2;
        yemekBilgi2.textContent=data[3].yemek2;

        img5.src=data[3].img6;
        parag5.textContent=data[3].tatlıBilgi;
        tatlıBilgi1.textContent=data[3].tatlı;
    }

    else if (deger==5){
        title.textContent=data[4].title;
        img.src= data[4].img1;
        ulke.textContent=data[4].ulke;
        ekonomi.textContent=data[4].ekonomi;
        iklim.textContent=data[4].iklim;
        cografya.textContent=data[4].cografya;
        tarih.textContent=data[4].tarih;

        parag1.textContent=data[4].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[4].gezilecekYer1;
        img1.src=data[4].img2;

        parag2.textContent=data[4].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[4].gezilecekYer2;
        img2.src=data[4].img3;

        img3.src=data[4].img4;
        parag3.textContent=data[4].yemekBilgi1;
        yemekBilgi1.textContent=data[4].yemek1;
        
        img4.src=data[4].img5;
        parag4.textContent=data[4].yemekBilgi2;
        yemekBilgi2.textContent=data[4].yemek2;

        img5.src=data[4].img6;
        parag5.textContent=data[4].tatlıBilgi;
        tatlıBilgi1.textContent=data[4].tatlı;
    }

    else if (deger==6){
        title.textContent=data[5].title;
        img.src= data[5].img1;
        ulke.textContent=data[5].ulke;
        ekonomi.textContent=data[5].ekonomi;
        iklim.textContent=data[5].iklim;
        cografya.textContent=data[5].cografya;
        tarih.textContent=data[5].tarih;

        parag1.textContent=data[5].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[5].gezilecekYer1;
        img1.src=data[5].img2;

        parag2.textContent=data[5].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[5].gezilecekYer2;
        img2.src=data[5].img3;

        img3.src=data[5].img4;
        parag3.textContent=data[5].yemekBilgi1;
        yemekBilgi1.textContent=data[5].yemek1;
        
        img4.src=data[5].img5;
        parag4.textContent=data[5].yemekBilgi2;
        yemekBilgi2.textContent=data[5].yemek2;

        img5.src=data[5].img6;
        parag5.textContent=data[5].tatlıBilgi;
        tatlıBilgi1.textContent=data[5].tatlı;
    }

    else if (deger==7){
        title.textContent=data[6].title;
        img.src= data[6].img1;
        ulke.textContent=data[6].ulke;
        ekonomi.textContent=data[6].ekonomi;
        iklim.textContent=data[6].iklim;
        cografya.textContent=data[6].cografya;
        tarih.textContent=data[6].tarih;

        parag1.textContent=data[6].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[6].gezilecekYer1;
        img1.src=data[6].img2;

        parag2.textContent=data[6].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[6].gezilecekYer2;
        img2.src=data[6].img3;

        img3.src=data[6].img4;
        parag3.textContent=data[6].yemekBilgi1;
        yemekBilgi1.textContent=data[6].yemek1;
        
        img4.src=data[6].img5;
        parag4.textContent=data[6].yemekBilgi2;
        yemekBilgi2.textContent=data[6].yemek2;

        img5.src=data[6].img6;
        parag5.textContent=data[6].tatlıBilgi;
        tatlıBilgi1.textContent=data[6].tatlı;
    }

    else if (deger==8){
        title.textContent=data[7].title;
        img.src= data[7].img1;
        ulke.textContent=data[7].ulke;
        ekonomi.textContent=data[7].ekonomi;
        iklim.textContent=data[7].iklim;
        cografya.textContent=data[7].cografya;
        tarih.textContent=data[7].tarih;

        parag1.textContent=data[7].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[7].gezilecekYer1;
        img1.src=data[7].img2;

        parag2.textContent=data[7].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[7].gezilecekYer2;
        img2.src=data[7].img3;

        img3.src=data[7].img4;
        parag3.textContent=data[7].yemekBilgi1;
        yemekBilgi1.textContent=data[7].yemek1;
        
        img4.src=data[7].img5;
        parag4.textContent=data[7].yemekBilgi2;
        yemekBilgi2.textContent=data[7].yemek2;

        img5.src=data[7].img6;
        parag5.textContent=data[7].tatlıBilgi;
        tatlıBilgi1.textContent=data[7].tatlı;
    }

    else if (deger==9){
        title.textContent=data[8].title;
        img.src= data[8].img1;
        ulke.textContent=data[8].ulke;
        ekonomi.textContent=data[8].ekonomi;
        iklim.textContent=data[8].iklim;
        cografya.textContent=data[8].cografya;
        tarih.textContent=data[8].tarih;

        parag1.textContent=data[8].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[8].gezilecekYer1;
        img1.src=data[8].img2;

        parag2.textContent=data[8].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[8].gezilecekYer2;
        img2.src=data[8].img3;

        img3.src=data[8].img4;
        parag3.textContent=data[8].yemekBilgi1;
        yemekBilgi1.textContent=data[8].yemek1;
        
        img4.src=data[8].img5;
        parag4.textContent=data[8].yemekBilgi2;
        yemekBilgi2.textContent=data[8].yemek2;

        img5.src=data[8].img6;
        parag5.textContent=data[8].tatlıBilgi;
        tatlıBilgi1.textContent=data[8].tatlı;
    }

    else if (deger==10){
        title.textContent=data[9].title;
        img.src= data[9].img1;
        ulke.textContent=data[9].ulke;
        ekonomi.textContent=data[9].ekonomi;
        iklim.textContent=data[9].iklim;
        cografya.textContent=data[9].cografya;
        tarih.textContent=data[9].tarih;

        parag1.textContent=data[9].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[9].gezilecekYer1;
        img1.src=data[9].img2;

        parag2.textContent=data[9].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[9].gezilecekYer2;
        img2.src=data[9].img3;

        img3.src=data[9].img4;
        parag3.textContent=data[9].yemekBilgi1;
        yemekBilgi1.textContent=data[9].yemek1;
        
        img4.src=data[9].img5;
        parag4.textContent=data[9].yemekBilgi2;
        yemekBilgi2.textContent=data[9].yemek2;

        img5.src=data[9].img6;
        parag5.textContent=data[9].tatlıBilgi;
        tatlıBilgi1.textContent=data[9].tatlı;
    }

    else if (deger==11){
        title.textContent=data[10].title;
        img.src= data[10].img1;
        ulke.textContent=data[10].ulke;
        ekonomi.textContent=data[10].ekonomi;
        iklim.textContent=data[10].iklim;
        cografya.textContent=data[10].cografya;
        tarih.textContent=data[10].tarih;

        parag1.textContent=data[10].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[10].gezilecekYer1;
        img1.src=data[10].img2;

        parag2.textContent=data[10].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[10].gezilecekYer2;
        img2.src=data[10].img3;

        img3.src=data[10].img4;
        parag3.textContent=data[10].yemekBilgi1;
        yemekBilgi1.textContent=data[10].yemek1;
        
        img4.src=data[10].img5;
        parag4.textContent=data[10].yemekBilgi2;
        yemekBilgi2.textContent=data[10].yemek2;

        img5.src=data[10].img6;
        parag5.textContent=data[10].tatlıBilgi;
        tatlıBilgi1.textContent=data[10].tatlı;
    }

    else if (deger==12){
        title.textContent=data[11].title;
        img.src= data[11].img1;
        ulke.textContent=data[11].ulke;
        ekonomi.textContent=data[11].ekonomi;
        iklim.textContent=data[11].iklim;
        cografya.textContent=data[11].cografya;
        tarih.textContent=data[11].tarih;

        parag1.textContent=data[11].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[11].gezilecekYer1;
        img1.src=data[11].img2;

        parag2.textContent=data[11].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[11].gezilecekYer2;
        img2.src=data[11].img3;

        img3.src=data[11].img4;
        parag3.textContent=data[11].yemekBilgi1;
        yemekBilgi1.textContent=data[11].yemek1;
        
        img4.src=data[11].img5;
        parag4.textContent=data[11].yemekBilgi2;
        yemekBilgi2.textContent=data[11].yemek2;

        img5.src=data[11].img6;
        parag5.textContent=data[11].tatlıBilgi;
        tatlıBilgi1.textContent=data[11].tatlı;
    }

    else if (deger==13){
        title.textContent=data[12].title;
        img.src= data[12].img1;
        ulke.textContent=data[12].ulke;
        ekonomi.textContent=data[12].ekonomi;
        iklim.textContent=data[12].iklim;
        cografya.textContent=data[12].cografya;
        tarih.textContent=data[12].tarih;

        parag1.textContent=data[12].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[12].gezilecekYer1;
        img1.src=data[12].img2;

        parag2.textContent=data[12].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[12].gezilecekYer2;
        img2.src=data[12].img3;

        img3.src=data[12].img4;
        parag3.textContent=data[12].yemekBilgi1;
        yemekBilgi1.textContent=data[12].yemek1;
        
        img4.src=data[12].img5;
        parag4.textContent=data[12].yemekBilgi2;
        yemekBilgi2.textContent=data[12].yemek2;

        img5.src=data[12].img6;
        parag5.textContent=data[12].tatlıBilgi;
        tatlıBilgi1.textContent=data[12].tatlı;
    }

    else if (deger==14){
        title.textContent=data[13].title;
        img.src= data[13].img1;
        ulke.textContent=data[13].ulke;
        ekonomi.textContent=data[13].ekonomi;
        iklim.textContent=data[13].iklim;
        cografya.textContent=data[13].cografya;
        tarih.textContent=data[13].tarih;

        parag1.textContent=data[13].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[13].gezilecekYer1;
        img1.src=data[13].img2;

        parag2.textContent=data[13].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[13].gezilecekYer2;
        img2.src=data[13].img3;

        img3.src=data[13].img4;
        parag3.textContent=data[13].yemekBilgi1;
        yemekBilgi1.textContent=data[13].yemek1;
        
        img4.src=data[13].img5;
        parag4.textContent=data[13].yemekBilgi2;
        yemekBilgi2.textContent=data[13].yemek2;

        img5.src=data[13].img6;
        parag5.textContent=data[13].tatlıBilgi;
        tatlıBilgi1.textContent=data[13].tatlı;
    }

    else if (deger==15){
        title.textContent=data[14].title;
        img.src= data[14].img1;
        ulke.textContent=data[14].ulke;
        ekonomi.textContent=data[14].ekonomi;
        iklim.textContent=data[14].iklim;
        cografya.textContent=data[14].cografya;
        tarih.textContent=data[14].tarih;

        parag1.textContent=data[14].gezilecekYerBilgi1;
        geziBilgi1.textContent=data[14].gezilecekYer1;
        img1.src=data[14].img2;

        parag2.textContent=data[14].gezilecekYerBilgi2;
        geziBilgi2.textContent=data[14].gezilecekYer2;
        img2.src=data[14].img3;

        img3.src=data[14].img4;
        parag3.textContent=data[14].yemekBilgi1;
        yemekBilgi1.textContent=data[14].yemek1;
        
        img4.src=data[14].img5;
        parag4.textContent=data[14].yemekBilgi2;
        yemekBilgi2.textContent=data[14].yemek2;
    }
})