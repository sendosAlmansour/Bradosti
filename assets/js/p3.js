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

let arabicp3 =document.getElementById('arabicP3')
let englishp3 =document.getElementById('EnglishP3')

let topFontp3 = document.querySelectorAll('.fonttopP3')

let titleP3=document.getElementById('titleP3')
let subtitlep3=document.getElementById('subtitlep3')
let loc3=document.getElementById('loc3')
let fur3=document.getElementById('fur3')
let tow3=document.getElementById('tow3')
let ro3=document.getElementById('ro3')
let bath3=document.getElementById('bath3')
let si3=document.getElementById('si3')
let mo3=document.getElementById('mo3')
let ser3=document.getElementById('ser3')
let fea3=document.getElementById('fea3')



//values p3/////
let locV3=document.getElementById('locV3')
let furV3=document.getElementById('furV3')
let towV3=document.getElementById('towV3')
let roV3=document.getElementById('roV3')
let bathV3=document.getElementById('bathV3')
let siV3=document.getElementById('siV3')
let moV3=document.getElementById('moV3')
let yeV3=document.getElementById('yeV3')
let serV3=document.getElementById('serV3')
let feaV3=document.getElementById('feaV3')
///////////////////////////////////////////////

arabicp3.onclick=()=>{
  setLangaugep3("arabicP3")
}
englishp3.onclick=()=>{
  setLangaugep3('englishp3')
}
function setLangaugep3(getlangauge){
  for (let i = 0; i < topFontp3.length; i++) {
    topFontp3[i].style.fontFamily = "Noto Kufi Arabic, sans-serif"
    
  }
  if(getlangauge==="arabicP3"){
    titleP3.innerHTML=" شقة للبيع"
    subtitlep3.innerHTML="هل انت من محبي الجمال؟ لديك فرصة ذهبية حقيقية هنا"
    loc3.innerHTML="الموقع"
    fur3.innerHTML="الأثاث"
    tow3.innerHTML="البرج"
    ro3.innerHTML="عدد الغرف"
    bath3.innerHTML="عدد الحمامات"
    si3.innerHTML="المساحة"
    mo3.innerHTML=" المبيع"
    ser3.innerHTML="الخدمات"
    fea3.innerHTML="الميزات"
     ////////////////////VALUES p3
     locV3.innerHTML="في الخليج التجاري اطلالة مباشرة على القناة المائية"
     furV3.innerHTML="مفروشة جزئيا"
     towV3.innerHTML="فيرا"
     roV3.innerHTML=" غرفتين نوم واحدة منهم ماستر مع صالون مفتوح"
     bathV3.innerHTML="2"
     siV3.innerHTML="900.08 قدم مربع"
     moV3.innerHTML="قابلة للتفاوض  "
     serV3.innerHTML=" مسبح +  جميع المطاعم والمقاهي + حديقة "
     feaV3.innerHTML="خدمة صف السيارات +اطلالة مباشرة على القناة المائية+ خمس دقائق  إلى دبي مول + صالة العاب للاطفال"
  }
else if(getlangauge==="englishp3"){
  for (let i = 0; i < topFontp3.length; i++) {
    topFontp3[i].style.fontFamily = 'Forum, cursive'
    
  }
  titleP3.innerHTML="apartment for Sale"
  subtitlep3.innerHTML="Are you a beauty lover? You have a real golden opportunity here!"
  loc3.innerHTML="Location:"
  fur3.innerHTML="Furniture:"
  tow3.innerHTML="Tower:"
  ro3.innerHTML="Rooms:"
  bath3.innerHTML="Bathroom:"
  si3.innerHTML="Size:"
  mo3.innerHTML="Sale:"
  ser3.innerHTML="Services:"
  fea3.innerHTML="Features:"
  //////////////////////VALUES p3
  locV3.innerHTML="Business Bay with direct view of the Water Canal"
  furV3.innerHTML="Partially"
  towV3.innerHTML="Vera"
  roV3.innerHTML="1 & 1BR master  "
  bathV3.innerHTML="2"
  siV3.innerHTML="900.08 ft²"
  moV3.innerHTML="Negotiable"
  serV3.innerHTML=`Swimming pool,<br/>
  All restaurants and cafes,<br/>
   Garden`
  feaV3.innerHTML=`Covered car parking,<br/>
  Water Canal view, <br/>
   Near Dubai Mall(5 Minutes),<br/>
    Children's play hall`

}

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
