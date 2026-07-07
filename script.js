function hmcursor_hover() {
    document.getElementById("eye").style.backgroundImage="radial-gradient(rgba(0,0,0,0), rgba(255,248,131,0.5),rgba(255,248,131,0.5),rgba(215,63,68,0));";
}
function hmcursor_unhover() {
    document.getElementById("eye").style.backgroundImage="radial-gradient(rgba(0,0,0,0), rgba(255,248,131,0),rgba(255,248,131,0.5),rgba(215,63,68,0));";
}

const follower = document.getElementById('eye');

document.addEventListener('mousemove', (event) => {
    follower.style.left = `${event.pageX}px`;
    follower.style.top = `${event.pageY}px`;
});
document.addEventListener("scroll", (event) => {
    follower.style.left = `${event.pageX}px`;
    follower.style.top = `${event.pageY}px`;
});
