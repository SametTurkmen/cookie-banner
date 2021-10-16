function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + escape(value) + '; expires=' + date.toUTCString();
    console.log('cookie ' + name + ' created');
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function showCookieBanner(id){
    if(!getCookie(id)){
        document.getElementById(id).classList.add('active');
    }
}

function hideCookieBanner(id){
    document.getElementById(id).classList.remove('active');
    setCookie(id, true, 3);
}

showCookieBanner('banner-1');
showCookieBanner('banner-2');
showCookieBanner('banner-3');



// console.log( getCookie('samet'));
// setCookie('samet',true, 3 );