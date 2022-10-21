document.getElementById("CV1").addEventListener('click', () => {
    chrome.tabs.query({ currentWindow: true, active: true, url: "https://erp.iitkgp.ac.in/IIT_ERP3/showmenu.htm" },
        (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id, allFrames: false },
                //world:"ISOLATED",
                files: ['renderer.js'],
            })
        }
    );
});