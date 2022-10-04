define(["jquery"], ($) => {

    Cookie
    Logger = (label) => {
        const api = {
            log(content) {
                console.log(`[ %cLOG: %c${label}]%c > ${content}`,);
            },
            warn(content) {
                console.log(`[${label}] > ${content}`);
            }
        }
    }
})