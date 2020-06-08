let buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", cal));

function cal() {
    var buttonHtml = document.getElementById(this.id).innerHTML;
    var res = document.querySelector('#res');
    console.log(this.value)
    if(this.value === 'C'){
        klear();
    } else if(this.value === "=") {
        ekewl();
    } else{
        res.innerHTML += buttonHtml;
    }
    function klear(){
        res.innerHTML = "";
    }
    function ekewl(){
        var screen = res.innerHTML;
        var digits = /(\d+)/g;
        screen = screen.replace(digits, function(match) {
        return parseInt(match, 2);
        })
        res.innerHTML = eval(screen).toString(2);
    }
}