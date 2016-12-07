function stickyHeader() {
    var header = document.getElementById('siteHeader');

    header.style.position = 'fixed';
    header.style.width = '100%';
    header.style.zIndex = '1000000';

    var content = document.getElementById('main');
    content.style.paddingTop = '100px';
}
stickyHeader();