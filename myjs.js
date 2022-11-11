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
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0)';

            var frame = modal.getElementsByClassName('frame')[0];
            frame.style.top = '100vh';
        }
    });
}

function onMenuClick(x) {
    x.classList.toggle("menu-open");
    x.getElementsByClassName('links')[0].style.display = x.classList.contains('menu-open') ? 'flex' : 'none';
}

function showModal(x) {
    var modal = document.getElementsByClassName('modal')[0];
    var frame = modal.getElementsByClassName('frame')[0];
    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

        frame.getElementsByTagName('iframe')[0].src = x;
        frame.style.top = '0';
    }, 0);
}

function closeModal() {
    var modal = document.getElementsByClassName('modal')[0];
    var frame = modal.getElementsByClassName('frame')[0];

    modal.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    frame.style.top = '100vh';

    setTimeout(() => {
        modal.style.display = 'none';
    }, 500);
}

function filterBlogs(x) {
    var blogs = document.getElementsByClassName('blog-post');
    for (var i = 0; i < blogs.length; i++) {
        var tags = blogs[i]
            .getElementsByClassName('content')[0]
            .getElementsByClassName('category')[0]
            .getElementsByTagName('a');

        var show = false;
        for (var j = 0; j < tags.length; j++) {
            console.log(tags[j]);
            if (tags[j].innerHTML == x) {
                show = true;
                break;
            }
        }

        if (x == 'all') {
            show = true;
        }

        if (show) {
            blogs[i].style.display = 'block';
        }
        else {
            blogs[i].style.display = 'none';
        }
    }
}