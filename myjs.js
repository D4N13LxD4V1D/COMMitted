window.onload = function () {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementsByClassName('navbar')[0];
        var links = navbar.getElementsByClassName('content')[0].getElementsByTagName('a');
        var logo = navbar.getElementsByClassName('logo')[0].getElementsByTagName('a')[0];
        links = Array.from(links);
        links.push(logo);

        var bars = Array.from([document.getElementsByClassName('bar1')[0], document.getElementsByClassName('bar2')[0], document.getElementsByClassName('bar3')[0]]);

        console.log(window.scrollY);
        if (window.scrollY > window.innerHeight / 3) {
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