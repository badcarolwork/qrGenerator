function handleOnScroll(){        
  window.addEventListener("message", function (event) {
    if (event.data) {
      console.log(event.data);
    }
  });
}
