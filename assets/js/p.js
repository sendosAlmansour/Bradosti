let slideImages = document.querySelectorAll('img')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

var counter =0;

next.addEventListener('click', slideNext)
function slideNext (){
  slideImages[counter].style.animation='next1 0.5s ease-in forwards';
  if(counter >= slideImages.length-1){
    counter=0;
  }
  else{
    counter++;
  }
  slideImages[counter].style.animation='next2 0.5s ease-in forwards';
}


prev.addEventListener('click', slidePrev)
function slidePrev (){
  slideImages[counter].style.animation='prev1 0.5s ease-in forwards';
  if(counter ==0){
    counter=slideImages.length-1;
  }
  else{
    counter--;
  }
  slideImages[counter].style.animation='prev2 0.5s ease-in forwards';
}


function autoSliding(){
  deletInterval = setInterval(timer ,3000);
  function timer(){
    slideNext();
  }
}
autoSliding();
//////////////////////////////////////////////////

let arabicp1 =document.getElementById('arabicP1')
let englishp1 =document.getElementById('EnglishP1')

let topFontp = document.querySelectorAll('.fonttopP')
let titleP1=document.getElementById('titleP1')
let subtitlep1=document.getElementById('subtitlep1')

let loc=document.getElementById('loc')
let fur=document.getElementById('fur')
let tow=document.getElementById('tow')
let ro=document.getElementById('ro')
let bath=document.getElementById('bath')
let si=document.getElementById('si')
let mo=document.getElementById('mo')
let ye=document.getElementById('ye')
let ser=document.getElementById('ser')
let fea=document.getElementById('fea')

//values p1/////

let locV=document.getElementById('locV')
let furV=document.getElementById('furV')
let towV=document.getElementById('towV')
let roV=document.getElementById('roV')
let bathV=document.getElementById('bathV')
let siV=document.getElementById('siV')
let moV=document.getElementById('moV')
let yeV=document.getElementById('yeV')
let serV=document.getElementById('serV')
let feaV=document.getElementById('feaV')



arabicp1.onclick=()=>{
  setLangaugep1("arabicP1")
}
englishp1.onclick=()=>{
  setLangaugep1('englishp1')
}
function setLangaugep1(getlangauge){
  for (let i = 0; i < topFontp.length; i++) {
    topFontp[i].style.fontFamily = "Noto Kufi Arabic, sans-serif"
    
  }
  if(getlangauge==="arabicP1"){
    titleP1.innerHTML=" شقة للإيجار"
    subtitlep1.innerHTML="هل تبحث عن شقة للاجار باسعار منافسة؟"
    loc.innerHTML="الموقع"
    fur.innerHTML="الأثاث"
    tow.innerHTML="البرج"
    ro.innerHTML="عدد الغرف"
    bath.innerHTML="عدد الحمامات"
    si.innerHTML="المساحة"
    mo.innerHTML="الإيجار الشهري"
    ye.innerHTML="الإيجار السنوي"
    ser.innerHTML="الخدمات"
    fea.innerHTML="الميزات"
    ////////////////////VALUES p1
    locV.innerHTML="وسط المدينة"
    furV.innerHTML="مفروشة بالكامل"
    towV.innerHTML="ابر كريست "
    roV.innerHTML="2BR ماستر "
    bathV.innerHTML=" ٣"
    siV.innerHTML="1219.12 قدم مربع"
    moV.innerHTML="18.000 AED "
    yeV.innerHTML=" 180.000 AED"
    serV.innerHTML="جيم + مسبح + سوبر ماركت + صيدلية "
    feaV.innerHTML="خدمة صف السيارات + فرش فندقي كامل + اطلالة برج خليفة + قرب دبي مول + صالة العاب للاطفال"
   
  }
else if(getlangauge==="englishp1"){
  for (let i = 0; i < topFontp.length; i++) {
    topFontp[i].style.fontFamily = 'Forum, cursive'
    
  }
  titleP1.innerHTML="apartment for Rent"
  subtitlep1.innerHTML=" Are you looking for an apartment for rent at competitive prices?"
  loc.innerHTML="Location:"
  fur.innerHTML="Furniture:"
  tow.innerHTML="Tower:"
  ro.innerHTML="Rooms:"
  bath.innerHTML="Bathroom:"
  si.innerHTML="Size:"
  mo.innerHTML="Rent Per Month:"
  ye.innerHTML="Rent Per Year:"
  ser.innerHTML="Services:"
  fea.innerHTML="Features:"
  //////////////////////VALUES p1
  locV.innerHTML="Downtown"
  furV.innerHTML="full"
  towV.innerHTML="Upper Crest"
  roV.innerHTML="2BR master "
  bathV.innerHTML="3 "
  siV.innerHTML="1219.12 ft²"
  moV.innerHTML="18.000 AED"
  yeV.innerHTML=" 180.000 AED"
  serV.innerHTML="GYM, swimming pool, Supermarket, drugstore"
  feaV.innerHTML="parking, Full hotel furniture, Burj Khalifa view, Near Dubai Mall, Children's play hall"

}

}




/////////////////////////////////////////////////////////////////

