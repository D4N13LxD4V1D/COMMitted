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