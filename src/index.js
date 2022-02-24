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
    let el = document.getElementById('modal_wrapper');
    el.classList.toggle('inactive');
}
// * Theme swap function!
// First, grab the button so we can work with it
const theme_button = document.getElementById('theme');
// Then, if the button isn't currently active, activate it and swap the themes.
const swap_theme = () => {
    if(theme_button.classList.contains('active') === false){
        activate(theme_button);
        var element = document.getElementById('theme_wrapper');
        element.classList.toggle("dark");
        element.classList.toggle("light");
        pulse(theme_button);
    }
}
// Run the animation, and then once it's finished, remove the animate and active classes from the button
const pulse = (el) =>{
    animate(el);
    anime({
        targets: el,
        scale: 3,
        direction: 'alternate',
        easing: 'easeOutQuad',
        duration: 500,
        complete: function(anime){
            animate(el);
            activate(el);
        }
    })
}

// * Modal functions!
// First, grab the buttons
const resume_open_button = document.getElementById("resume_button");
// Acivate the modal layer
const activate_modal = () => {
    let el = document.getElementById('modal_wrapper');
    let back_el = document.getElementById('modal_background');
    el.classList.toggle('inactive');
    
    anime({
        targets: el,
        translateY: "100%",
        easing: 'easeOutQuad',
        duration: 500,
        complete: function(anim){
            back_el.addEventListener('click', deactivate_modal);
        }
    })
}
const deactivate_modal = () => {
    let el = document.getElementById('modal_wrapper');
    let back_el = document.getElementById('modal_background');
    animate(el);
    anime({
        targets: el,
        translateY: 0,
        easing: 'easeOutQuad',
        duration: 500,
        complete: function(anim){
            el.classList.toggle('inactive');
            animate(el);
            back_el.removeEventListener('click', deactivate_modal);
        }
    })
}

// Toggles a class that gives an element the "will change: all" attribute, for smoother animations!
const animate = (el) => {
    el.classList.toggle("animate");
}
// Toggles a class for active buttons, so they can't be pressed again mid-activation
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
resume_open_button.addEventListener('click', activate_modal);



// A bit of code I found on stackoverflow that makes buttons unfocus after you press them. Handy!
document.addEventListener('click', function(e) { if(document.activeElement.toString() == '[object HTMLButtonElement]'){ document.activeElement.blur(); } });