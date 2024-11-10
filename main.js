navigator.serviceWorker
.register("/serviceWorker.js")
.then((registration) => {
    console.log("Service Worker Registered");
    if (registration.installing) {
    registration.installing.postMessage(
        "Your page is istalling, please wait until it finished!"
    );
    } else {
    (err) => {
        console.error("Worker instalation failed!", err);
    };
    }
});
if ("serviceWorker" in navigator) {
window.addEventListener("load", function () {
    navigator.serviceWorker
    .register("/serviceWorker.js")
    .then((res) => console.log("Service Worker registered!"))
    .catch((err) => console.log("Service Worker not registered!", err));
});
}