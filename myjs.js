window.onload = function () {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementsByClassName('navbar')[0];
        var links = navbar.getElementsByClassName('content')[0].getElementsByTagName('a');
        var logo = navbar.getElementsByClassName('logo')[0].getElementsByTagName('a')[0];
        links = Array.from(links);
        links.push(logo);

        console.log(window.scrollY);
        if (window.scrollY > 200) {
            navbar.style.transition = 'background-color 0.2s ease-in-out';
            navbar.style.backgroundColor = 'white';
            navbar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
            links.map(link => {
                link.style.color = 'black';
            });
        } else {
            navbar.style.transition = 'background-color 0.2s ease-in-out';
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = '';
            navbar.style.color = '#fff';
            links.map(link => {
                link.style.color = '#fff';
            });
        }
    });
}