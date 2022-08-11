//alert("The new browser extension is working! This is triggered by Main.js")

var img = document.getElementsByTagName('img')

for (i of img){
    i.src = `${chrome.runtime.getURL("rnd_img.png")}`
    i.alt = "Alternate text"
}