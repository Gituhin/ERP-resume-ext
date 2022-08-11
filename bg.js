function openTab() {

    var newTab = chrome.tabs.create({
        url: 'https://twitter.com/tuhinsde',
        active: true
    })
}

chrome.browserAction.onClicked.addListener(openTab)