function wheel_choose(e) {
    hue = Math.atan2(
        e.layerY - (e.target.offsetHeight / 2),
        e.layerX - (e.target.offsetWidth / 2)
    );
    hue = `${180 * hue / Math.PI + 90}deg`
    document.getElementsByClassName("saturation")[0].style.background = `linear-gradient(180deg, hsl(${hue}, 100%, 50%), hsla(${hue}, 0%, 50%, 0))`;
    document.getElementsByClassName("picker")[0].style.rotate = hue;
}