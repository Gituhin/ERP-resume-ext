document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id, allFrames: true},
            files: ['test.js'],
        })
    });
});