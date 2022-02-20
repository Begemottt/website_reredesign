import anime from 'animejs';
import '../scss/styles.scss';

const test_1 = () => {
    var element = document.getElementById("block1");
    animate(element);
    anime({
        targets: "#block1",
        translateY: '-200px',
        scale: '2',
        easing: 'easeInQuad',
        direction: 'alternate',
        duration: 500,
        complete: function(anim){
            animate(element);
        }
    })
}

const test_2 = () => {
    anime({
        targets: '#block2',
        rotate: 1080,
        left: '500px',
        easing: 'linear',
        direction: 'alternate',
        duration: 1000
    })
}
// Theme swap function!
const theme_button = document.getElementById('theme');
const swap_theme = () => {
    if(theme_button.classList.contains('active') === false){
        activate(theme_button);
        var element = document.getElementById('theme_wrapper');
        element.classList.toggle("dark");
        element.classList.toggle("light");
        pulse(theme_button);
    }
}
const pulse = (el) =>{
    animate(el);
    anime({
        targets: el,
        scale: 3,
        direction: 'alternate',
        duration: 400,
        easing: 'easeOutQuad',
        complete: function(anime){
            animate(el);
            activate(theme_button);
        }
    })
}

// Adds a class that gives an element the "will change: all" attribute, for smoother animations!
const animate = (el) => {
    el.classList.toggle("animate");
}
const activate = (el) => {
    el.classList.toggle("active");
}

// * [ Event Listeners ]
// Test buttons
document.getElementById('test1').addEventListener('click', test_1);
document.getElementById('test2').addEventListener('click', test_2);
document.getElementById('test3').addEventListener('click', swap_theme);

// Function buttons
theme_button.addEventListener('click', swap_theme);