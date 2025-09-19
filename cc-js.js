 
let bgApplied = false;
     
window.addEventListener("message", function (event) {
  const message = event.data;
  if (message && message.data && typeof message.data.text === "string") {
    if(message.data.text === "kscrollReveal"){
       showKPanelBg(true); 
    }
   if(message.data.text === "kscrollTop"){
      showKPanelBg(false);
    }
  }
});


function showKPanelBg(state){
  const panel = document.querySelector('.panel.top');
     if(state && !bgApplied){
       panel.classList.add("topPanelScroll");
       // panel.style.backgroundImage = 'url(https://cdn.flashtalking.com/225135/5623249/purebg.jpg)'; 
       // panel.style.backgroundRepeat = 'no-repeat';
       // panel.style.backgroundPosition = 'center top';
       // panel.style.backgroundSize = '100% 100vh';
       bgApplied = true;// prevent reapplying
     }else if(!state && bgApplied){
       panel.classList.remove("topPanelScroll");
       // panel.style.backgroundImage = 'unset'; 
       // panel.style.backgroundRepeat = 'no-repeat';
       // panel.style.backgroundPosition = 'unset';
       // panel.style.backgroundSize = 'unset';
       bgApplied = false; // prevent reapplying
     }

}
