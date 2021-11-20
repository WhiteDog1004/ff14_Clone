var snsbar = document.getElementById('fixed');
var docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;
// 문서 전체를 가져옴 

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);
scrollPos = docElem.scrollTop;


//docHeight = docElem.scrollHeight;
// scrollHeight 말고 offsetHeight도 있음 docElem 문서전체의 . scrollHeight 전체 height값을 구해옴
// 브라우저마다 높이 구하는 방식이 다름

//console.log(docHeight);
// 총 스크롤 height값

//console.log(scrollPos);
// 현재 스크롤 위치값을 찾아옴

window.addEventListener('scroll', function(){
    scrollPos = docElem.scrollTop;
    //console.log(scrollPos);

    if(scrollPos > 540) {
        snsbar.className = 'ff14_sns_fixed';
        //console.log(scrollPos);


    } else {
        snsbar.className = 'ff14_sns';
    }

});

