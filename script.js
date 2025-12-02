document.getElementById("item1").scrollIntoView({block: 'center', inline: 'center'});

function side_open() {
    document.getElementById("side-text").style.display = "block";
    document.getElementById("sidebar").classList.add("active");
}
function side_toggle() {
    if (document.getElementById("sidebar").classList.contains("active")) {
        document.getElementById("sidebar").classList.remove("active");
        document.getElementById("side-text").style.display = "none";
    } else {
        document.getElementById("sidebar").classList.add("active");
        document.getElementById("side-text").style.display = "flex";
    }
}
//idk javascript ok...
function top_toggle() {
    if (document.getElementById("l1topbut").classList.contains("visible")) {
        document.getElementById("l1topbut").classList.remove("visible");
    } else {
        document.getElementById("l1topbut").classList.add("visible");
    }
    if (document.getElementById("l2topbut").classList.contains("visible")) {
        document.getElementById("l2topbut").classList.remove("visible");
    } else {
        document.getElementById("l2topbut").classList.add("visible");
    }
    if (document.getElementById("r1topbut").classList.contains("visible")) {
        document.getElementById("r1topbut").classList.remove("visible");
    } else {
        document.getElementById("r1topbut").classList.add("visible");
    }
    if (document.getElementById("r2topbut").classList.contains("visible")) {
        document.getElementById("r2topbut").classList.remove("visible");
    } else {
        document.getElementById("r2topbut").classList.add("visible");
    }
}
function side_close() {
    document.getElementById("side-text").style.display = "none";
    document.getElementById("sidebar").classList.remove("active");
}

const follower = document.getElementById('eye');

document.addEventListener('mousemove', (event) => {
    follower.style.left = `${event.pageX}px`;
    follower.style.top = `${event.pageY}px`;
});
let trail = [{x: 500, y: 0}];
const lag = 10;
const light = document.getElementById('light');

// function followMouse() {
//     light.style.left = `${trail[0].x}px`;
//     light.style.top = `${trail[0].y}px`;
//     trail.push({x: event.pageX, y: event.pageY});
//     if (trail.length > lag) {
//         trail.shift();
//     }
// } 
// const intervalID = setInterval(followMouse, 5);
document.addEventListener('mousemove', (event) => {
    light.style.left = `${event.pageX}px`;
    light.style.top = `${event.pageY}px`;
});
// document.addEventListener('click', (event) => {
//     follower.style.backgroundImage = "radial-gradient(rgba(200,255,131,0.75), rgba(0,0,0,0),rgba(200,255,131,0.5),rgba(160,208,91,0))"
// }
