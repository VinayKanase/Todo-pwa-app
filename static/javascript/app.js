window.addEventListener("load",()=>{
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register('static/sw.js');
    }
})