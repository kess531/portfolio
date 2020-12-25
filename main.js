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




//2020.12.23 scrollbar 이동

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
    selectNavItem(target);
    
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







// 엣지케이스
const sectionIds= ['#Home','#About','#Skills','#Work','#Contack'];



const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

let selectedNavIndex =0;
let selectedNavItem = navItems[0];
function selectNavItem(seleted){
    selectedNavItem.classList.remove('active');
    selectedNavItem = seleted;
    selectedNavItem.classList.add('active');
}

const observerOption= {
    root: null,
    rootmargin:'0px',
    threshold: 0.3,
}
const observerCallback = (entries, observer)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting && entry.intersectionRatio > 0){
            const index = sectionIds.indexOf(`#${entry.target.id}`);
            
            // y<0 이면 스크롤링이 아래로 내려감
            if(entry.boundingClientRect.y < 0){
                selectedNavIndex = index + 1;
            }else{
                selectedNavIndex = index - 1;
            }
            
        }
    });
};
const observer = new IntersectionObserver(observerCallback,observerOption);

sections.forEach(section =>observer.observe(section));

window.addEventListener('wheel',()=>{ //wheel : 사용자가 스스로 스크롤할때 
    if(window.scrollY===0)
    {
        selectedNavIndex = 0;
    }
    else if(Math.round(window.scrollY + window.innerHeight) >=
    document.body.clientHeight){
        selectedNavIndex = navItems.length - 1;
    }
    selectNavItem(navItems[selectedNavIndex]);
});


//스크롤 이동 함수
function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
};