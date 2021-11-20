imgToggle(0);

var box0 = document.querySelector('.slide_box_1');
var box1 = document.querySelector('.slide_box_2');
var box2 = document.querySelector('.slide_box_3');
var box3 = document.querySelector('.slide_box_4');
var box4 = document.querySelector('.slide_box_5');

var boxA0 = document.querySelector('.slide1');
var boxA1 = document.querySelector('.slide2');
var boxA2 = document.querySelector('.slide3');
var boxA3 = document.querySelector('.slide4');
var boxA4 = document.querySelector('.slide5');

var boxImg0 = document.querySelector('.box_img');
var boxImg1 = document.querySelector('.box_img2');
var boxImg2 = document.querySelector('.box_img3');
var boxImg3 = document.querySelector('.box_img4');
var boxImg4 = document.querySelector('.box_img5');

var box0 = 0;
var box1 = 1;
var box2 = 2;
var box3 = 3;
var box4 = 4;

var box = [box0, box1, box2, box3, box4];


function imgToggle(box) {
    var boxImg0 = document.querySelector('.box_img');
    var boxImg1 = document.querySelector('.box_img2');
    var boxImg2 = document.querySelector('.box_img3');
    var boxImg3 = document.querySelector('.box_img4');
    var boxImg4 = document.querySelector('.box_img5');

    var boxA0 = document.querySelector('.slide1');
var boxA1 = document.querySelector('.slide2');
var boxA2 = document.querySelector('.slide3');
var boxA3 = document.querySelector('.slide4');
var boxA4 = document.querySelector('.slide5');

    if(box == 0 ) {
        boxImg0.style.opacity = 1;
        boxImg1.style.opacity = 0;
        boxImg2.style.opacity = 0;
        boxImg3.style.opacity = 0;
        boxImg4.style.opacity = 0;
        sum = 0;
    }

    if(box == 1 ) {
        boxImg0.style.opacity = 0;
        boxImg1.style.opacity = 1;
        boxImg2.style.opacity = 0;
        boxImg3.style.opacity = 0;
        boxImg4.style.opacity = 0;
        sum = 0;
    } 

    if(box == 2) {
        boxImg0.style.opacity = 0;
        boxImg1.style.opacity = 0;
        boxImg2.style.opacity = 1;
        boxImg3.style.opacity = 0;
        boxImg4.style.opacity = 0;
        sum = 0;
    } 

    if(box == 3) {
        boxImg0.style.opacity = 0;
        boxImg1.style.opacity = 0;
        boxImg2.style.opacity = 0;
        boxImg3.style.opacity = 1;
        boxImg4.style.opacity = 0;
        sum = 0;
    } 

    if(box == 4) {
        boxImg0.style.opacity = 0;
        boxImg1.style.opacity = 0;
        boxImg2.style.opacity = 0;
        boxImg3.style.opacity = 0;
        boxImg4.style.opacity = 1;
        sum = 0;
    } 


    
    if (boxImg0.style.opacity == 1) {
        boxA0.style.color = "white";
        boxA1.style.color = "";
        boxA2.style.color = "";
        boxA3.style.color = "";
        boxA4.style.color = "";
    } else
    
    if (boxImg1.style.opacity == 1) {
        boxA0.style.color = "";
        boxA1.style.color = "white";
        boxA2.style.color = "";
        boxA3.style.color = "";
        boxA4.style.color = "";
    } else
    if (boxImg2.style.opacity == 1) {
        boxA0.style.color = "";
        boxA1.style.color = "";
        boxA2.style.color = "white";
        boxA3.style.color = "";
        boxA4.style.color = "";
    } else
    if (boxImg3.style.opacity == 1) {
        boxA0.style.color = "";
        boxA1.style.color = "";
        boxA2.style.color = "";
        boxA3.style.color = "white";
        boxA4.style.color = "";
    } else
    if (boxImg4.style.opacity == 1) {
        boxA0.style.color = "";
        boxA1.style.color = "";
        boxA2.style.color = "";
        boxA3.style.color = "";
        boxA4.style.color = "white";
    }
}
function btnPrev() {

    if(boxImg0.style.opacity == 1) {
        imgToggle(4);
    } else
    if(boxImg1.style.opacity == 1) {
        imgToggle(0);
    } else
    if(boxImg2.style.opacity == 1) {
        imgToggle(1);
    } else
    if(boxImg3.style.opacity == 1) {
        imgToggle(2);
    } else
    if(boxImg4.style.opacity == 1) {
        imgToggle(3);
    }
}

function btnNext() {

    if(boxImg0.style.opacity == 1) {
        imgToggle(1);
    } else
    if(boxImg1.style.opacity == 1) {
        imgToggle(2);
    } else
    if(boxImg2.style.opacity == 1) {
        imgToggle(3);
    } else
    if(boxImg3.style.opacity == 1) {
        imgToggle(4);
    } else
    if(boxImg4.style.opacity == 1) {
        imgToggle(0);
    }
}

var sum = 0;
setInterval(function() {

    sum += 1; // 1초마다 숫자 1을 sum 변수에 더함 setTimeout과 잘 비교해두기
        if (sum == 5) {
            sum = 0;
            btnNext();
        }
    }, 1000);
