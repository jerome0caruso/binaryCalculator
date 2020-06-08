let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", calculate));

function calculate() {
    var buttonHtml = document.getElementById(this.id).innerHTML;
    var base10 = document.getElementById("number");
    var res = document.querySelector('#res');
    if(this.value === 'C'){
        klear();
    } else if(this.value === "=") {
        ekewl();
    } else{
        res.innerHTML += buttonHtml;
    }
    function klear(){
        res.innerHTML = "";
        base10.innerHTML= "Base-10";
    }
    function ekewl(){
        var screen = res.innerHTML;
        var digits = /(\d+)/g;
        screen = screen.replace(digits, function(match) {
            return parseInt(match, 2);
        })
        base10.innerHTML = eval(screen);
        console.log(eval(screen), base10)
        res.innerHTML = eval(screen).toString(2);
    }
}