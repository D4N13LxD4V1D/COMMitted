window.onload = function () {
    var prevScrollpos = window.pageYOffset;
    window.addEventListener('scroll', () => {
        var currentScrollPos = window.pageYOffset;

        const navbar = document.getElementsByClassName('navbar')[0];

        if (prevScrollpos > currentScrollPos || currentScrollPos < 400) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-200px";
        }

        prevScrollpos = currentScrollPos;
    });
}

function onMenuClick(x) {
    x.classList.toggle("menu-open");
    x.getElementsByClassName('content')[0].style.display = x.classList.contains('menu-open') ? 'flex' : 'none';
}

function readMore() {
    var summary = document.getElementsByClassName('summary')[0];
    var readMore = document.getElementsByClassName('read-more')[0];
    var readMoreBtn = readMore.getElementsByTagName('a')[0];

    if (summary.style.height == '90px') {
        summary.style.height = 'auto';
        readMoreBtn.innerHTML = 'close';
        readMore.style.bottom = 'auto';
        readMore.style.right = 'auto';
    } else {
        summary.style.height = '90px';
        readMoreBtn.innerHTML = 'more';
        readMore.style.bottom = '0';
        readMore.style.right = '0';
    }
}