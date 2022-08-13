function execute() {
    texts = document.getElementsByClassName("vsc-initialized cke_editable");
    Array.prototype.forEach.call(texts, function(text) {
        paras = text.children;
        if(paras.length > 1) {
            var content = "";
            for(let i = 0; i < paras.length; i++) {
                content += paras[i].innerText + "\n";
            }
            console.log(content)
        }
    });
}

execute();
document.addEventListener('keyup', () => {
    execute();
});