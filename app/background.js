
const button = document.getElementById("color_a");
button.addEventListener("click", checkTect);
function checkTect(){
    (function() {

        const clockContainer = document.getElementById('myClock');
    
        function updateClock() {
            clockContainer.innerText = new Date().toLocaleTimeString();
        }
    
        setInterval(updateClock, 1000);
    
    })();
   return button.style.background = "white"
}
