window.onload = function() {
    var bgImg = new Image();
    bgImg.onload = function() {
        document.body.style.height = bgImg.height + 'px';
        document.documentElement.style.height = bgImg.height + 'px';
    };
    bgImg.src = '../images/background.png';
};