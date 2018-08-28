onReady();

function onReady() {
    const content = document.getElementById('content');
    if (!content) {
        setTimeout(onReady, 100);
        return;
    }
    content.innerHTML = 'Main content here from JS';
}
