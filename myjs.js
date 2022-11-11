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

        var links = navbar.getElementsByClassName('content')[0].getElementsByTagName('a');
        var logo = navbar.getElementsByClassName('logo')[0].getElementsByTagName('a')[0];
        links = Array.from(links);
        links.push(logo);

        var bars = Array.from([document.getElementsByClassName('bar1')[0], document.getElementsByClassName('bar2')[0], document.getElementsByClassName('bar3')[0]]);

        if (window.pageYOffset > 150) {
            navbar.classList.add('navbar-scrolled');
            links.map(link => {
                link.style.color = 'black';
            });

            bars.map(bar => {
                bar.style.backgroundColor = 'black';
            });
        } else {
            navbar.classList.remove('navbar-scrolled');
            links.map(link => {
                link.style.color = '#fff';
            });

            bars.map(bar => {
                bar.style.backgroundColor = '#fff';
            });
        }
    });
}

function onMenuClick(x) {
    x.classList.toggle("menu-open");
    x.getElementsByClassName('content')[0].style.display = x.classList.contains('menu-open') ? 'flex' : 'none';
}

function showModal() {
    var modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';

    // when escape is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.visibility = 'hidden';
        }
    });
}

function onModalClick(x) {
    x.style.visibility = 'hidden';
}