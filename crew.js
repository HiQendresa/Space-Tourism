const dotsContainer = document.querySelector('[role="dots_container"]');
const dots = dotsContainer.querySelectorAll('[role="dots_btn"]');

var focusDots = 0;

dotsContainer.addEventListener('keydown', changeFocus);

dots.forEach((btn) => {
    btn.addEventListener('click', changePanel)
});


// Change the focus of dots indicatior
function changeFocus(e) {
    const LeftKeyDown = 37;
    const RightKeyDown = 39;

    if (e.keyCode === LeftKeyDown || e.keyCode === RightKeyDown) {
        dots[focusDots].setAttribute('tabindex', -1);

         if (e.keyCode === RightKeyDown) {
             focusDots++;
             if (focusDots >= dots.length) {
                 focusDots = 0;
             }
         } else if (e.keyCode === LeftKeyDown) {
             focusDots--;
              if (focusDots < 0) {
                 focusDots = dots.length-1;
             }
        }
        dots[focusDots].setAttribute("dotindex", 0);
        dots[focusDots].focus();
    }

}

 
// change the Panel

function changePanel(e) {
    
   const targetDot = e.target;
    const targetPanel = targetDot.getAttribute("aria-controls");
    const targetImage = targetDot.getAttribute("data-image");
    
    const dotContainer = targetDot.parentNode;
    const mainContainer = dotContainer.parentNode;
    
    dotContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
    targetDot.setAttribute("aria-selected", true);
    mainContainer
        .querySelectorAll('article')
        .forEach((article) => article.setAttribute("hidden", true));
    
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    mainContainer
        .querySelectorAll('picture')
        .forEach((image) => image.setAttribute("hidden", true));
    
    mainContainer
        .querySelector([`#${targetImage}`])
        .removeAttribute('hidden');

    
}