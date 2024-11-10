const javaCourseFc = "CursoProfissionalDeProgramaçãoEmJava-FC";
const assets = [
    "/",
    "/images/",
    "/index.html",
    "/style.css",
    "/serviceWorker.js",
    "/css/about.css",
    "css/contact.css",
    "/css/courses.css",
    "/css/style.css",
    "/pages/about.html",
    "/pages/contact.html",
    "/pages/courses.html"
]
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(javaCourseFc).then((Cache) => {
            return Cache.addAll(assets);
        })
    );
});
this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.resquest).then((Response) => {
            return Response || fetch(event.resquest).then((Response) => {
                let responseClone = Response.clone();
                caches.open(javaCourseFc).then((Cache) => {
                    Cache.put(event.resquest, responseClone);
                    return Response;
                });
            });
        })
    );
});