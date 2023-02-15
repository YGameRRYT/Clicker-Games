eventTarget.addEventListener("keydown", (event) => {
  if (event.isComposing || event.keyCode === 13) {
    return;
  }
  bakeCookie();
});
