 
let bgApplied = false;
     
window.addEventListener("message", function (event) {
 const message = event.data;
 console.log(event.data.data.text)
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
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
      if(state){
        panel.style.backgroundImage = 'url(left.png), url(purebg.jpg)'; 
        panel.style.backgroundRepeat = 'no-repeat';
        panel.style.backgroundPosition = 'center 50%, center top';
        panel.style.backgroundSize = '94% auto, 2300px 1314px';
        bgApplied = 'true'; // prevent reapplying
      }else{
        panel.style.backgroundImage = 'unset'; 
        panel.style.backgroundRepeat = 'no-repeat';
        panel.style.backgroundPosition = 'unset';
        panel.style.backgroundSize = 'unset';
        bgApplied = 'false'; // prevent reapplying
      }
  });
}
