 
let bgApplied = false;
     
window.addEventListener("message", function (event) {
  if (event.data) {
    console.log(event);
    console.log(event.data.type);
   console.log(event.data);
    console.log(event.data?.type);
    if(event.data === "kscrollReveal"){
     if(!bgApplied){
       showKPanelBg(true);
     } 
    }
   if(event.data === "kscrollTop"){
      showKPanelBg(false);
    }
  }
});


function showKPanelBg(state){
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
      if(state){
        panel.style.backgroundImage = 'url("purebg.jpg")'; 
        panel.style.backgroundRepeat = 'no-repeat';
        panel.style.backgroundPosition = 'center top';
        panel.style.backgroundSize = '2300px 1314px';
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
