var boxs = document.querySelectorAll('.slide_box');
var boxA = document.querySelectorAll('.slide');
var boxImg = document.querySelectorAll('.box_img');

imgToggle(0);

function imgToggle(box) {
    for (i = 0; i < boxImg.length; i++) {
        boxImg[i].style.opacity = 0;
        boxA[i].style.color = "";
    }
    boxImg[box].style.opacity = 1;
    boxA[box].style.color = "white";
    sum = 0;
}

function btnPrev() {
    for (i = 0; i < boxImg.length; i++) {
        if (boxImg[i].style.opacity == 1) {
            if (i === 0) {
                imgToggle(4);
            } else {
                imgToggle(i - 1);
            }
        }
    }
}

function btnNext() {
    for (i = 0; i < boxImg.length; i++) {
        if (boxImg[i].style.opacity == 1) {
            if (i === 4) {
                imgToggle(0);
            } else {
                imgToggle(i + 1);
            }
        }
    }
}

var sum = 0;
setInterval(function () {

    sum += 1; // 1초마다 숫자 1을 sum 변수에 더함 setTimeout과 잘 비교해두기
    if (sum == 5) {
        sum = 0;
        btnNext();
    }
}, 1000);