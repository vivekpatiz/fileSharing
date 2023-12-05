window.logoutUrl = window.location.href; // Storing the initial path, invoked while logout is triggered

/** Code for preventing browser back and front button navigation */
history.pushState(null, null, location.href);
window.onpopstate = function() {
    history.go(1);
};