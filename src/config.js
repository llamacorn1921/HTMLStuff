requirejs.config({
    baseUrl: "build/",
    paths: {
        main: "main.min",
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min'
    }
});
requirejs(["main"]);