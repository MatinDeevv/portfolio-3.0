/* NOTES
    add translation 
    add easter eggs and whene ever someone finds them give them point
    
    use spotify API to get the latest song that you have listined to 
 */
let theme = 'dark';
const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
const IconMoon = document.getElementById('ICONmoon');
const IconSun = document.getElementById('ICONsun');
let darkModePopUp = document.getElementById('darkmode-popup');
const ThemeModeSound = new Audio('themSound.mp3');
const textToType = "Welcome to my portfolio";
let index = 0;

if(theme = 'dark'){
    IconMoon.style.display = 'none';
}
else{
    IconSun.style.display = 'none';
}
if(currentTheme === 'dark'){
    document.body.classList.add('dark-theme');
}
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    let theme = 'light';
    if(document.body.classList.contains('dark-theme')){
        theme = 'dark';
        IconMoon.style.display = 'none';
        IconSun.style.display = 'inline';
        ThemeModeSound.play();
        navigator.vibrate(500); 
    }
    else{
        theme = 'light';
        IconMoon.style.display = 'inline';
        IconSun.style.display = 'none';
    }
    
    //dark mode pop up notif
    if(theme == 'dark'){
        darkModePopUp.classList.add("show")
        localStorage.setItem('theme', theme);
        setTimeout(() => {
            darkModePopUp.classList.remove("show")
        }, 3000);
    }
});


function typeWriter() {
    if (index < textToType.length) {
        document.getElementById("type").innerHTML += textToType.charAt(index);
        index++;
        
        setTimeout(typeWriter, 100);
    }
}


setTimeout(() => {
    let warning = document.createElement("div");
    warning.id = "popUp";
    warning.textContent = "!!This Website has sound effects!!";
    warning.classList.add("show2");

    document.body.appendChild(warning);

    setTimeout(() => {
        warning.classList.remove("show2");
    }, 3000);

}, 500);