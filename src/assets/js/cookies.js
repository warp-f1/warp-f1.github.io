export function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; SameSite=Lax; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

export function readCookie(name) {
    var nameEQ = escape(name) + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return unescape(c.substring(nameEQ.length, c.length));
    }
    return null;
}

export function eraseCookie(name) {
    createCookie(name, "", -1);
}

if(readCookie("cookieConsent") != "true" && readCookie("cookieConsent") != "false"){
    document.getElementById("cookie-consent-banner").style.display="block";
}

document.getElementById("cookies-accept").onclick = function() {
  createCookie("cookieConsent", "true", 1000);
  document.getElementById("cookie-consent-banner").style.display="none";
};

document.getElementById("cookies-decline").onclick = function() {
    createCookie("cookieConsent", "false", 1000);
    document.getElementById("cookie-consent-banner").style.display="none";
};