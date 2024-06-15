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

let arabicp2 =document.getElementById('arabicP2')
let englishp2 =document.getElementById('EnglishP2')

let topFontp2 = document.querySelectorAll('.fonttopP2')
let titleP2=document.getElementById('titleP2')
let subtitlep2=document.getElementById('subtitlep2')

let loc2=document.getElementById('loc2')
let fur2=document.getElementById('fur2')
let tow2=document.getElementById('tow2')
let ro2=document.getElementById('ro2')
let bath2=document.getElementById('bath2')
let si2=document.getElementById('si2')
let mo2=document.getElementById('mo2')
let ye2=document.getElementById('ye2')
let ser2=document.getElementById('ser2')
let fea2=document.getElementById('fea2')
let fea21=document.getElementById('fea21')
//values p1/////

let locV2=document.getElementById('locV2')
let furV2=document.getElementById('furV2')
let towV2=document.getElementById('towV2')
let roV2=document.getElementById('roV2')
let bathV2=document.getElementById('bathV2')
let siV2=document.getElementById('siV2')
let moV2=document.getElementById('moV2')
let yeV2=document.getElementById('yeV2')
let serV2=document.getElementById('serV2')
let feaV2=document.getElementById('feaV2')
let feaV21=document.getElementById('feaV21')


arabicp2.onclick=()=>{
  setLangaugep2("arabicP2")
}
englishp2.onclick=()=>{
  setLangaugep2('englishp2')
}
function setLangaugep2(getlangauge){
  for (let i = 0; i < topFontp2.length; i++) {
    topFontp2[i].style.fontFamily = "Noto Kufi Arabic, sans-serif"
    
  }
  if(getlangauge==="arabicP2"){
    titleP2.innerHTML=" شقة للإيجار"
    subtitlep2.innerHTML="فرصة استثمار لا تعوض , هنا افضل الخدمات والعروض"
    loc2.innerHTML="الموقع"
    fur2.innerHTML="الأثاث"
    tow2.innerHTML="البرج"
    ro2.innerHTML="عدد الغرف"
    bath2.innerHTML="عدد الحمامات"
    si2.innerHTML="المساحة"
    ser2.innerHTML="الخدمات"
    fea2.innerHTML="الميزات"
    fea21.innerHTML="الميزات الاضافية"
    ////////////////////VALUES p1
    locV2.innerHTML=" يقع في وسط مدينة دبي، ويوفر الوصول المباشر إلى نوافير دبي وعلى بعد 5 دقائق فقط سيرًا على الأقدام من دبي مول."
    furV2.innerHTML=" مفروشة بالكامل متضمنة اجهزة مطبخ مدمجة ومبرد مجاني  "
    towV2.innerHTML="   طابق مرتفع في ريزيدنس"
    roV2.innerHTML=" غرفة مع شرفة واحدة ومنطقة مطبخ منفصلة  "
    bathV2.innerHTML=" 2"
    siV2.innerHTML="957.67 قدم مربع"
 
    serV2.innerHTML="موقف سيارات مغطى + أمن 24 ساعة +  صالة العاب رياضية مشتركة + حمام سباحة مشترك "
    feaV2.innerHTML=" الوصول المباشر الى نوافير دبي + حديقة مفروشة بأحسن وسائل الراحة   "
   feaV21.innerHTML="النوافذ الممتدة من الأرض حتى السقف والتي تزين مناطق المعيشة وتناول الطعام وغرفة النوم، + تحتوي غرفة النوم على حمام داخلي وخزائن ملابس مجهزة + تم تجهيز المطبخ بالكامل بوسائل الراحة الحديثة، بما في ذلك غسالة وفرن كهربائي وميكروويف، مما يضمن الراحة والأداء الوظيفي "
  }
else if(getlangauge==="englishp2"){
  for (let i = 0; i < topFontp2.length; i++) {
    topFontp2[i].style.fontFamily = 'Forum, cursive'
    
  }
  titleP2.innerHTML="apartment for Rent"
  subtitlep2.innerHTML="Irreplaceable investment opportunities , Here Best Services & Offers "
  loc2.innerHTML="Location:"
  fur2.innerHTML="Furniture:"
  tow2.innerHTML="Tower:"
  ro2.innerHTML="Rooms:"
  bath2.innerHTML="Bathroom:"
  si2.innerHTML="Size:"
  
  ser2.innerHTML="Services:"
  fea2.innerHTML="Features:"
  fea21.innerHTML='Extra Features:'
  //////////////////////VALUES p2
  locV2.innerHTML=" in Downtown Dubai, it offers direct access to the Dubai Fountains and just a 5-minute walk from The Dubai Mall."
  furV2.innerHTML=" Fully furnished with built-in kitchen appliances and free cooler"
  towV2.innerHTML=" High floor in Residences "
  roV2.innerHTML="Room with one balcony and separate kitchen area  "
  bathV2.innerHTML="2 "
  siV2.innerHTML="957.67 ft²"
  serV2.innerHTML=`Covered car park, <br/>
   24-hour security ,<br/> shared gym ,<br/>
    shared swimming pool
    `
  feaV2.innerHTML=` Direct access to Dubai Fountains ,<br/>
   Furnished garden with the best amenities   `
   feaV21.innerHTML=`floor-to-ceiling windows that adorn the living, dining and bedroom areas, <br/>
    The bedroom has an en suite bathroom and fitted wardrobes, <br/>
     The kitchen is fully equipped with modern amenities, including a washing machine, electric oven and microwave, ensuring comfort and functionality `

}

}




/////////////////////////////////////////////////////////////////

