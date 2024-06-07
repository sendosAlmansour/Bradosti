
/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/////////////////////////////////////////////////////////
const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-items')
    }
    else {
      entry.target.classList.remove('show-items')
    }
  })
})

const scrollscale = document.querySelectorAll('.scroll-scale')
scrollscale.forEach((el) => observe.observe(el))



const scrolltop = document.querySelectorAll('.scroll-top')
scrolltop.forEach((el) => observe.observe(el))








///////////////////////////////////////////////////////////////////////////////////

function rotate() {
  var lastChild = $('.sliderP div:last-child').clone();
  $('.sliderP div').removeClass('firstSlide')
  $('.sliderP div:last-child').remove();
  $('.sliderP').prepend(lastChild)
  $(lastChild).addClass('firstSlide')
}

window.setInterval(function () {
  rotate()
}, 4000);




/////////////////////////language////////////////////////////////

let arabic = document.getElementById('arabic')
let english = document.getElementById('English')
let topFont = document.querySelectorAll('.topFont')
let preloadH2 = document.getElementById('preloadH2')
let title = document.getElementById('title')
let navitem = document.querySelectorAll('.navbar1-item')

let home = document.getElementById('home')
let needusDiv = document.getElementById('needusDiv')
let need = document.getElementById('need')
let About = document.getElementById('About')
let Latest = document.getElementById('Latest')
let Partners = document.getElementById('Partners')
let Contact = document.getElementById('Contact')
let Visit = document.getElementById('Visit')
let locat = document.getElementById('locat')
let Available = document.getElementById('Available')
let Relax = document.getElementById('Relax')
let phone = document.getElementById('phone')
let aboutus = document.getElementById('aboutus')
let aboutText = document.getElementById('aboutText')
let forrent = document.getElementById('forrent')
let forSale = document.getElementById('forSale')
let ContactUs1 = document.getElementById('ContactUs1')
let ContactText = document.getElementById('ContactText')


arabic.onclick = () => {
  setLangauge("arabic")
}
english.onclick = () => {
  setLangauge('english')
}



function setLangauge(getlangauge) {
  if (getlangauge === "arabic") {

    for (let i = 0; i < topFont.length; i++) {
      topFont[i].style.fontFamily = "Noto Kufi Arabic, sans-serif"
      
    }
    title.innerHTML = "جد المكان الذي يلامس روحك"
    home.innerHTML = "الصفحة الرئيسية"
    for (let i = 0; i < navitem.length; i++) {
      navitem[i].style.display = "flex";
      navitem[i].style.justifyContent = "end";
      navitem[i].style.paddingRight='7px'
    }
    needusDiv.innerHTML = ` 
<div class="radio-input">
<input value="value-1" name="value-radio" id="value-1" type="radio">
  <label for="value-1"><a id="val1A"
      href="https://api.whatsapp.com/send/?phone=%2B971507004348&text&type=phone_number&app_absent=0">للأجار</a></label>
  <input value="value-2" name="value-radio" id="value-2" type="radio">
  <label for="value-1"><a id="val2A"
      href="https://api.whatsapp.com/send/?phone=%2B971507004348&text&type=phone_number&app_absent=0">للبيع</a></label>
  <input value="value-3" name="value-radio" id="value-3" type="radio">
  <label for="value-1"><a id="val3A"
      href="https://api.whatsapp.com/send/?phone=%2B971507004348&text&type=phone_number&app_absent=0"> ادارة الاملاك</a></label>
  <p style="margin: auto; margin-left: 0;" id="need"> :أنت بحاجتنا من أجل</p>
  
</div>
`

    need.innerHTML = 'أنت بحاجتنا من أجل :'
   
    About.innerHTML = 'من نحن؟'
    Latest.innerHTML = 'أخر العروض'
    Partners.innerHTML = 'شركاءنا'
    Contact.innerHTML = 'التواصل'
    Visit.innerHTML = 'قم بزيارتنا'
    locat.innerHTML = 'الخليج التجاري _ دبي _الإمارات العربية المتحدة '
    Available.innerHTML = 'متاحين : ٢٤/٧ '
    Relax.innerHTML = 'استرخي , أنت تحجز لدى برودستي'
    phone.innerHTML = '+٩٧١٥٠٧٠٠٤٣٤٨'
    aboutus.innerHTML = 'من نحن ؟'
    aboutText.innerHTML = " إذا كنت تبحث عن شقة أو عقار للإجار أو البيع فنحن هنا من أجلك"
    forrent.innerHTML = 'للإيجار'
    forSale.innerHTML = 'للبيع'
    ContactUs1.innerHTML = 'تواصل معنا'
    ContactText.innerHTML = 'لدينا فريق خبير ومتكامل من أجلك'
  }







  else if (getlangauge === "english") {
    for (let i = 0; i < topFont.length; i++) {
      topFont[i].style.fontFamily = 'Forum, cursive'
      
    }
    
    title.innerHTML = " Find a place that touches your soul"
    for (let i = 0; i < navitem.length; i++) {
      navitem[i].style.display = "block";
      navitem[i].style.justifyContent = "none";
    }
    home.innerHTML = "Home"

    needusDiv.innerHTML = ` <div class="radio-input">
  <p style="margin: auto; margin-left: 0;" id="need">Need us for :</p>
  <input value="value-1" name="value-radio" id="value-1" type="radio">
  <label for="value-1"><a id="val1A"
      href="https://api.whatsapp.com/send/?phone=%2B971507004348&text&type=phone_number&app_absent=0">Rent</a></label>
  <input value="value-2" name="value-radio" id="value-2" type="radio">
  <label for="value-1"><a id="val2A"
      href="https://api.whatsapp.com/send/?phone=%2B971507004348&text&type=phone_number&app_absent=0">Sale</a></label>
  <input value="value-3" name="value-radio" id="value-3" type="radio">
  <label for="value-1"><a id="val3A"
      href="https://api.whatsapp.com/send/?phone=%2B971507004348&text&type=phone_number&app_absent=0">Management</a></label>
</div>`

    About.innerHTML = 'About Us'
    Latest.innerHTML = 'Latest Offers'
    Partners.innerHTML = 'Our Partners'
    Contact.innerHTML = 'Contact'
    Visit.innerHTML = 'Visit U'
    locat.innerHTML = ' Business Bay, Dubai, UAE'
    Available.innerHTML = 'Available: 24/7'
    Relax.innerHTML = 'Relax, you are booking a Bradosti'
    phone.innerHTML = ' + 971 50 700 4348'
    aboutus.innerHTML = 'About Us'
    aboutText.innerHTML = 'If you are looking for an apartment or property to buy or rent,We are here for you.'
    forrent.innerHTML = 'For Rent'
    forSale.innerHTML = 'For Sale'
    ContactUs1.innerHTML = 'Contact Us'
    ContactText.innerHTML = ' We have an expert team to help you'
  }
}

