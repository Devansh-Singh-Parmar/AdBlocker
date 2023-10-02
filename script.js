// Check for ads and click the skip button if available
function checkForAds() {
    const skipButton = document.querySelector(".ytp-ad-skip-button");
    if (skipButton) {
        console.log("Ad Detected. Skipping...");
        skipButton.click();
    }
}

// Run the ad-checking function every second (1000 milliseconds)
setInterval(checkForAds, 1000);
