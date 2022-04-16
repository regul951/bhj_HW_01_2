const img = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

img.onclick = () => {
    if (Number(clickerCounter.textContent) % 2 === 1) {
        img.width -= 50;
        img.height -= 50;
    } else {
        img.width += 50;
        img.height += 50;
    }
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
}  