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


// Function to hide the ad container with the id "player-ads"
function hidePlayerAds() {
    const playerAds = document.getElementById('player-ads');
    if (playerAds) {
        playerAds.style.display = 'none';
    }
}

// Function to hide ad slots with the class "yt-ad-slot-renderer"
function hideAdSlotRenderers() {
    const adSlotRenderers = document.querySelectorAll('.yt-ad-slot-renderer');
    adSlotRenderers.forEach((adSlotRenderer) => {
        adSlotRenderer.style.display = 'none';
    });
}

// Function to run both ad-blocking functions
function blockAds() {
    hidePlayerAds();
    hideAdSlotRenderers();
}

// Run the blockAds function every second
setInterval(blockAds, 1000);
