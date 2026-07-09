var theme = "dark"

function hmcursor_hover() {
    document.getElementById("eye").style.backgroundImage="radial-gradient(rgba(0,0,0,0), rgba(255,248,131,0.5),rgba(255,248,131,0.5),rgba(215,63,68,0));";
}
function hmcursor_unhover() {
    document.getElementById("eye").style.backgroundImage="radial-gradient(rgba(0,0,0,0), rgba(255,248,131,0),rgba(255,248,131,0.5),rgba(215,63,68,0));";
}
function toggle_mode() {
    if (theme == "light") {
        //dark mode
        document.documentElement.style.setProperty('--background-color', '#1f181a');
        document.documentElement.style.setProperty('--text-color','#cfcfbf');
        theme = "dark";
    } else {
        //light mode
        document.documentElement.style.setProperty('--background-color', '#cfcfbf');
        document.documentElement.style.setProperty('--text-color','#1f181a');
        theme = "light";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById("tblock").style.setProperty('left','0vw');
    }, 2000);

    setTimeout(() => {
        document.getElementById("tblock").style.setProperty('left','120vw');
    }, 2000);
    document.getElementById("tblock").style.setProperty('visibility','hidden');
    document.getElementById("tblock").style.setProperty('left','-120vw');

    document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (event) => {

            if (link.hostname === window.location.hostname && link.target !== "_blank") {
                document.getElementById("tblock").style.setProperty('visibility','visible');
                document.getElementById("tblock").style.setProperty('left','0vw');
            }

            setTimeout(() => {
                document.getElementById("tblock").style.setProperty('left','0vw');
            }, 2000);
            setTimeout(() => {
                window.location.href = link.getAttribute("href");
            }, 2000);
            event.preventDefault();
        });
    });

});



const follower = document.getElementById('eye');

document.addEventListener('mousemove', (event) => {
    follower.style.left = `${event.clientX}px`;
    follower.style.top = `${event.clientY}px`;
});
// document.addEventListener("scroll", (event) => {
//     follower.style.left = `${event.pageX}px`;
//     follower.style.top = `${event.pageY}px`;
// });
