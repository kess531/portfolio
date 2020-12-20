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
})


