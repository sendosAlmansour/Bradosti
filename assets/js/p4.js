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
/////////////////////////////////////////////////////////////////////////////////////////////////////////

let arabicp4=document.getElementById('arabicP4')
let englishp4 =document.getElementById('EnglishP4')

let topFontp4 = document.querySelectorAll('.fonttopP4')

let titleP4=document.getElementById('titleP4')
let subtitlep4=document.getElementById('subtitlep4')
let loc4=document.getElementById('loc4')
let fur4=document.getElementById('fur4')
let tow4=document.getElementById('tow4')
let ro4=document.getElementById('ro4')
let bath4=document.getElementById('bath4')
let si4=document.getElementById('si4')
let mo4=document.getElementById('mo4')
let ser4=document.getElementById('ser4')
let fea4=document.getElementById('fea4')



//values p3/////
let locV4=document.getElementById('locV4')
let furV4=document.getElementById('furV4')
let towV4=document.getElementById('towV4')
let roV4=document.getElementById('roV4')
let bathV4=document.getElementById('bathV4')
let siV4=document.getElementById('siV4')
let moV4=document.getElementById('moV4')
let yeV4=document.getElementById('yeV4')
let serV4=document.getElementById('serV4')
let feaV4=document.getElementById('feaV4')
///////////////////////////////////////////////

arabicp4.onclick=()=>{
  setLangaugep4("arabicP4")
}
englishp4.onclick=()=>{
  setLangaugep4('englishp4')
}
function setLangaugep4(getlangauge){
  for (let i = 0; i < topFontp4.length; i++) {
    topFontp4[i].style.fontFamily = "Noto Kufi Arabic, sans-serif"
    
  }
  if(getlangauge==="arabicP4"){
    titleP4.innerHTML=" شقة للبيع"
    subtitlep4.innerHTML="هل تبحث عن شقة تمتاز بأعلى معايير الجمال المعماري؟"
    loc4.innerHTML="الموقع"
    tow4.innerHTML="البرج"
    ro4.innerHTML="عدد الغرف"
    bath4.innerHTML="عدد الحمامات"
    ser4.innerHTML="الخدمات"
    fea4.innerHTML="الميزات"
     ////////////////////VALUES p3
     locV4.innerHTML=" في الخليج التجاري اطلالة مباشرة على القناة المائية و مسبح"
     towV4.innerHTML="نورة"
     roV4.innerHTML=" غرفتين مع صالة واسعة "
     bathV4.innerHTML="3"
     serV4.innerHTML=" مسبح +  جميع المطاعم والمقاهي + سوبرماركت +اكادمية تنس "
     feaV4.innerHTML="خدمة صف السيارات +اطلالة على القناة المائية+  صالة رياضية "
  }
else if(getlangauge==="englishp4"){
  for (let i = 0; i < topFontp4.length; i++) {
    topFontp4[i].style.fontFamily = 'Forum, cursive'
    
  }
  titleP4.innerHTML="apartment for Sale"
  subtitlep4.innerHTML="Are you looking for an apartment with the highest standards of architectural beauty ?  "
  loc4.innerHTML="Location:"
  tow4.innerHTML="Tower:"
  ro4.innerHTML="Rooms:"
  bath4.innerHTML="Bathroom:"
  ser4.innerHTML="Services:"
  fea4.innerHTML="Features:"
  //////////////////////VALUES p3
  locV4.innerHTML="Business Bay with direct view of the Water Canal"

  towV4.innerHTML="Noora"
  roV4.innerHTML="2 rooms & a spacious hall  "
  bathV4.innerHTML="3"
  serV4.innerHTML=`Swimming pool,<br/>
  super Market,<br/>
    All restaurants and cafes,<br/>
     fitness centre`
  feaV4.innerHTML=`Car parking,<br/>
  Water Canal view, <br/>
   GYM`

}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
