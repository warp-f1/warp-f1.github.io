import {createCookie, readCookie} from "./cookies.js"

window.onload = function() {
    if (readCookie("cookieConsent") === true) {
        // https://stackoverflow.com/a/70401906/16779014
        let url = new URL(window.location.href);

        let path = url["pathname"];

        if (path === "") {
            path = "index.html";
        }
        else {
            if (path.charAt(path.length-1) != "/" && path.charAt(path.length-1) != "\\") {
                path = path + "/"
            }

            path = path + "index.html"
        }
        console.log("e");
        if (readCookie(path) === null) {
            createCookie(path, 1, 1000)
        }
        else {
            createCookie(path, parseInt(readCookie(path))+1, 1000)
        }
    }
}