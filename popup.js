document.getElementById("CV1").addEventListener('click', () => {

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id, allFrames: true},
            files: ['renderer.js'],
        })
    });
});