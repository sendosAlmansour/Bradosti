const slides = document.querySelectorAll(" .slide")
var counter =0;
slides.forEach(
    (slide ,index)=>{
        slide.style.left =`${index * 100}%`
    }
)

const goNext=()=>{
    counter++
    slideImage()
}
const goPrev=()=>{
    counter--
    slideImage()
}

const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform =`translateX(-${counter *100}%)`
        }
    )
}


//////////////////////////////////////////////////

let arabicp1 =document.getElementById('arabicP1')
let englishp1 =document.getElementById('EnglishP1')

let topFontp = document.querySelectorAll('.fonttopP')
let titleP1=document.getElementById('titleP1')
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

//values/////

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
    topFontp[i].style.fontFamily = "Marhey, sans-serif"
    
  }
  if(getlangauge==="arabicP1"){
    titleP1.innerHTML=" شقة للإيجار"
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
    ////////////////////VALUES
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
  //////////////////////VALUES
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