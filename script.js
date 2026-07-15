function hmcursor_hover() {
    document.getElementById("eye").style.backgroundImage="radial-gradient(rgba(0,0,0,0), rgba(255,248,131,0.5),rgba(255,248,131,0.5),rgba(215,63,68,0));";
}
function hmcursor_unhover() {
    document.getElementById("eye").style.backgroundImage="radial-gradient(rgba(0,0,0,0), rgba(255,248,131,0),rgba(255,248,131,0.5),rgba(215,63,68,0));";
}
function toggle_mode() {
    if (sessionStorage.getItem("theme") === "light") {
        //dark mode
        document.documentElement.style.setProperty('--background-color', '#1f181a');
        document.documentElement.style.setProperty('--text-color','#fbfcf4');
        sessionStorage.setItem("theme", "dark");
    } else {
        //light mode
        document.documentElement.style.setProperty('--background-color', '#fbfcf4');
        document.documentElement.style.setProperty('--text-color','#1f181a');
        sessionStorage.setItem("theme", "light");
    }
}
async function text_show() {
    const sections = document.querySelectorAll('.section_text');
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    for (const section of sections) {
        section.style.opacity = "1";
        await sleep(100);
    }
}
async function text_hide() {
    const sections = document.querySelectorAll('.section_text');
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    for (const section of sections) {
        section.style.opacity = "0";
        await sleep(100);
    }
}
function search_pop() {
    const searchpop = document.getElementById("search_pop");
    const popfade = document.getElementById("pop_fade");
    popfade.style.visibility="visible";
    popfade.style.opacity="1";
    searchpop.style.visibility="visible"
    searchpop.style.top="50%"
}
function search_close() {
    const searchpop = document.getElementById("search_pop");
    const popfade = document.getElementById("pop_fade");
    popfade.style.opacity="0";
    popfade.style.visibility="hidden";
    searchpop.style.top="-100vh"
    searchpop.style.visibility="hidden"
}
document.addEventListener('DOMContentLoaded', () => {
    //Keep the theme the same
    if (sessionStorage.getItem("theme") === "dark") {
        //dark mode
        document.documentElement.style.setProperty('--background-color', '#1f181a');
        document.documentElement.style.setProperty('--text-color','#fbfcf4');
    } else if (sessionStorage.getItem("theme") === "light") {
        //light mode
        document.documentElement.style.setProperty('--background-color', '#fbfcf4');
        document.documentElement.style.setProperty('--text-color','#1f181a');
    } else {
        sessionStorage.setItem("theme", "dark");
    }

     
    setTimeout(() => {
        document.getElementById("tblock").style.setProperty('left','0vw');
    }, 10);

    setTimeout(() => {
        document.getElementById("tblock").style.setProperty('left','120vw');
    }, 300);
    setTimeout(() => {
        document.getElementById("tblock").style.setProperty('visibility','hidden');
        document.getElementById("tblock").style.setProperty('left','-120vw');
    }, 1300);

    document.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", (event) => {

            if (link.hostname !== window.location.hostname || link.target === "_blank") return;

            document.getElementById("tblock").style.setProperty('visibility','visible');
            setTimeout(() => {
                document.getElementById("tblock").style.setProperty('left','0vw');
            }, 10);
            setTimeout(() => {
                window.location.href = link.getAttribute("href");
            }, 1000);
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
