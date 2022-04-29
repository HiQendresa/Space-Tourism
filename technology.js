const tabsContainer = document.querySelector('[role="numbersPanel"]');
const tabs = tabsContainer.querySelectorAll('[role="numbers_btn"]');

var focustabs = 0;

tabsContainer.addEventListener('keydown', changeFocus);

tabs.forEach((btn) => {
    btn.addEventListener('click', changePanel)
});


// Change the focus of tabs indicatior
function changeFocus(e) {
    const LeftKeyDown = 37;
    const RightKeyDown = 39;

    if (e.keyCode === LeftKeyDown || e.keyCode === RightKeyDown) {
        tabs[focustabs].setAttribute('tabindex', -1);

         if (e.keyCode === RightKeyDown) {
             focustabs++;
             if (focustabs >= tabs.length) {
                 focustabs = 0;
             }
         } else if (e.keyCode === LeftKeyDown) {
             focustabs--;
              if (focustabs < 0) {
                 focustabs = tabs.length-1;
             }
        }
        tabs[focustabs].setAttribute("dotindex", 0);
        tabs[focustabs].focus();
    }

}

 
// change the Panel

function changePanel(e) {
    
   const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
   
    

    const TabContainer = targetTab.parentNode;
     const content = TabContainer.parentNode
    const mainContainer = content.parentNode;
    
    content
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", true);
    content
        .querySelectorAll('article')
        .forEach((article) => article.setAttribute("hidden", true));
    
     content.querySelector([`#${targetPanel}`]).removeAttribute('hidden');

    mainContainer
        .querySelectorAll('picture')
        .forEach((gg) => gg.setAttribute("hidden", true));
    
    mainContainer
        .querySelector([`#${targetImage}`])
        .removeAttribute('hidden');

    
}