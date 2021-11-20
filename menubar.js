var header = document.querySelector('.ff14_nav_box'),
    nav = document.querySelector('.nav');

    var fake = document.querySelector('.ff14_mainbox');

    fake.style.top = '380px';

    nav.addEventListener('mouseover', function() {
        header.style.height = '280px';
        nav.style.height = '280px';
        fake.style.top = '170px';
    });
    nav.addEventListener('mouseout', function() {
        header.style.height = '70px';
        nav.style.height = '70px';
        fake.style.top = '380px';
    });