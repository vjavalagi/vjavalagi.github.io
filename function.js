
function toggleStyleSheet(){
    var style = document.getElementById("mainStyleSheet");
    var selectedStyleSheet = style.getAttribute("href")
    if (style.getAttribute("href") == "lighttheme.css") {
        style.setAttribute("href", "style.css");
    } else {
        style.setAttribute("href", "lighttheme.css");
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


