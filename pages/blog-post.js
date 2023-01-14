function readMore() {
    var summary = document.getElementsByClassName('summary')[0];
    var readMore = document.getElementsByClassName('read-more')[0];

    if (summary.style.height == '90px') {
        summary.style.height = 'auto';
        readMore.innerHTML = '<a onclick="readMore()">close</a>';
        readMore.style.bottom = 'auto';
        readMore.style.right = 'auto';
    } else {
        summary.style.height = '90px';
        readMore.innerHTML = '... <a onclick="readMore()">more</a>';
        readMore.style.bottom = '0';
        readMore.style.right = '0';
    }
}

function filterBlogs(x) {
    parent.filterBlogs(x);
    parent.closeModal();
}


window.onload = function () {
    // get all galleries
    var galleries = document.getElementsByClassName('gallery');

    // add scroll function to each gallery
    for (var i = 0; i < galleries.length; i++) {
        addScrollFunction(galleries[i]);
    }
}

function addScrollFunction(gallery) {
    var images = gallery.getElementsByTagName('img');

    // add auto scroll to gallery
    var scrollInterval = setInterval(() => {
        // check if last image
        if (gallery.scrollLeft >= images[0].width * (images.length - 1)) {
            gallery.scrollLeft = 1;
        } else {
            if (gallery.querySelector(':hover') == null)
                gallery.scrollLeft += images[0].width;
        }
    }, 5000);
}

function gotoAuthor(x) {
    parent.gotoAuthor(x);
    parent.closeModal();
}