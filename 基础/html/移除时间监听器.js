EventTarget.prototype.addEventListener=function (event){console.log(event)}


document.body.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log('Mouse click event intercepted!',event);
}, { capture: true });