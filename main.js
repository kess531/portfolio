'user script';


// 2020.12.07 Navbar 투명
    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar.getBoundingClientRect().height;

    document.addEventListener('scroll',()=>{  //스크롤이 될때마다 등록한 함수를 호출
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark'); //스크롤값이 navbarHeight값 보다 크면 #navbar에 class 추가
    }
    else{
        navbar.classList.remove('navbar--dark'); //스크롤값이 navbarHeight값 보다 작으면 #navbar에 class 제거
    }
});


//2020.12.23 scollbar 이동

const navbarMenu = document.querySelector('.navbar__menu');
const navbarmenuitem = document.querySelector('.navbar__menu__item');
navbarMenu.addEventListener('click',(e)=>{
    const target = e.target;
    const link = e.target.dataset.link;
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
    
});

const contackbtn = document.querySelector('.home__contact');
    contackbtn.addEventListener('click', ()=>{
    scrollIntoView('#Contack');
});

// Navbar toggle button for smaall screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
navbarMenu.classList.toggle('open');
console.log(navbarMenu);
});


//2020.12.23 scollbar 이동시 HOME 투명화
const home = document.querySelector('.home__container');
const homeHeight =  home.getBoundingClientRect().height;
const arrowup = document.querySelector('.arrow-up__btn');


document.addEventListener('scroll',()=>{
    home.style.opacity = 1 -  window.scrollY / homeHeight;
    // arrow-up btn
    if(window.scrollY>homeHeight/2){
        arrowup.classList.add('Visble');
    }
    else{
        arrowup.classList.remove('Visble'); 
    }
});

arrowup.addEventListener('click',()=>{
    scrollIntoView('#Home');
});



//스크롤 이동 함수
function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}