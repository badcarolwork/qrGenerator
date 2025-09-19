 
let bgApplied = false;
     
window.addEventListener("message", function (event) {
 const message = event.data;
 console.log(message)
  if (message) {
    if(event.data.data.text === "kscrollReveal"){
       showKPanelBg(true); 
    }
   if(event.data.data.text === "kscrollTop"){
      showKPanelBg(false);
    }
  }
});


function showKPanelBg(state){
  const panels = document.querySelector('.panel.top');
     if(state && !bgApplied){
       panel.style.backgroundImage = 'url(purebg.jpg)'; 
       panel.style.backgroundRepeat = 'no-repeat';
       panel.style.backgroundPosition = '183% 47%';
       panel.style.backgroundSize = '100% 100vh';
       bgApplied = 'true'; // prevent reapplying
     }else if(!state && bgApplied){
       panel.style.backgroundImage = 'unset'; 
       panel.style.backgroundRepeat = 'no-repeat';
       panel.style.backgroundPosition = 'unset';
       panel.style.backgroundSize = 'unset';
       bgApplied = 'false'; // prevent reapplying
     }

}
