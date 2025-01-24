/* NOTES
    add translation 
    add easter eggs and whene ever someone finds them give them point
 */

const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'dark'){
    document.body.classList.add('dark-theme');
}
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    let theme = 'light';
    if(document.body.classList.contains('dark-theme')){
        theme = 'dark';
    }
    
    localStorage.setItem('theme', theme);
});

if(theme === 'dark'){
     toggleButton.style.color =rgb(255, 255, 255);
}
