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

        if (currentScrollPos > document.getElementsByClassName('hero-section')[0].offsetHeight - navbar.offsetHeight) {
            document.getElementsByClassName('nav-break')[0].style.backgroundColor = '#014221';
        } else {
            document.getElementsByClassName('nav-break')[0].style.backgroundColor = '#f3aa2c80';
        }
    });

    var modal = document.getElementsByClassName('modal')[0];
    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.top = '100vh';
        }
    });
}

function onMenuClick(x) {
    x.classList.toggle("menu-open");
    x.getElementsByClassName('links')[0].style.display = x.classList.contains('menu-open') ? 'flex' : 'none';
}

function showModal(x) {
    var modal = document.getElementsByClassName('modal')[0];
    modal.getElementsByTagName('iframe')[0].src = x;
    modal.style.top = '0';
}

function closeModal() {
    var modal = document.getElementsByClassName('modal')[0];
    modal.style.top = '100vh';
}