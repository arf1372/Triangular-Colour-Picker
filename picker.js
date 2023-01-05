function wheel_choose(e) {
    hue = Math.atan2(
        e.layerY - (e.target.offsetHeight / 2),
        e.layerX - (e.target.offsetWidth / 2)
    );
    console.log(hue);
    document.getElementsByClassName("saturation")[0].style.background = `linear-gradient(180deg, hsl(${180 * hue / Math.PI + 90}deg, 100%, 50%), hsla(${180 * hue / Math.PI + 90}deg, 0%, 50%, 0))`
}