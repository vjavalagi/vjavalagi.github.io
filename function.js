
function toggleStyleSheet(){
    var style = document.getElementById("mainStyleSheet");
    var selectedStyleSheet = style.getAttribute("href")
    if (style.getAttribute("href") == "style.css") {
        style.setAttribute("href", "aggiestyle.css");
    } else {
        style.setAttribute("href", "style.css");
    }
    localStorage.setItem('selectedStyleSheet', style.getAttribute("href")); // save updated in the selected local var 

}


window.onload = function(){
    
    var storedStyle = localStorage.getItem('selectedStyleSheet');
    var style = document.getElementById('mainStyleSheet');

    if (storedStyle) { // sets page only if initial design is chosen 
        style.setAttribute("href", storedStyle);
    }
}


