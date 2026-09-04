(function () {
    var target = new Date('2025-08-01T00:00:00Z').getTime() / 1000;
    var el = document.getElementById('tenure');
    function update() {
        var now = Math.floor(Date.now() / 1000);
        var diff = Math.max(0, now - target);
        var days = Math.floor(diff / 86400);
        var hours = Math.floor((diff % 86400) / 3600);
        var minutes = Math.floor((diff % 3600) / 60);
        var seconds = Math.floor(diff % 60);
        el.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    }
    update();
    setInterval(update, 1000);
})();

(function () {
    var ua = navigator.userAgent;
    var os = 'Other';
    if (ua.indexOf('Win') !== -1) os = 'Windows';
    else if (ua.indexOf('Mac') !== -1) os = 'macOS';
    else if (ua.indexOf('Linux') !== -1) os = 'Linux';
    else if (ua.indexOf('Android') !== -1) os = 'Android';
    else if (ua.indexOf('iPhone') !== -1 || ua.indexOf('iPad') !== -1) os = 'iOS';

    var browser = 'Other';
    if (ua.indexOf('Chrome') !== -1 && ua.indexOf('Edg') === -1) browser = 'Chrome';
    else if (ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1) browser = 'Safari';
    else if (ua.indexOf('Firefox') !== -1) browser = 'Firefox';
    else if (ua.indexOf('Edg') !== -1) browser = 'Edge';

    document.getElementById('sysinfo').innerHTML =
        'OS: ' + os + '<br>' +
        'Browser: ' + browser + '<br>' +
        'Screen: ' + screen.width + '×' + screen.height + '<br>' +
        'Cookies: ' + (navigator.cookieEnabled ? 'Yes' : 'No');
})();

document.addEventListener('mousemove', function (e) {
    document.getElementById('mx').textContent = e.clientX;
    document.getElementById('my').textContent = e.clientY;
});
