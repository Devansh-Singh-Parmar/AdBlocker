setInterval(function() {
    var skipButton = document.querySelector(".ytp-ad-skip-button");
    if (skipButton) {
        console.log("Ad Detected");
        skipButton.click();
    }
}, 3000);
