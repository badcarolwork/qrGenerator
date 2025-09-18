 
let bgApplied = false;
     
window.addEventListener("message", function (event) {
  if (event.data) {
    console.log(event.data);
  }
});


function showKPanelBg(){
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
