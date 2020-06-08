let buttons = document.querySelectorAll("button");// using forEach to add eventlisteners to each button clicked
buttons.forEach(button => button.addEventListener("click", cal));

function cal() {
    var buttonHtml = document.getElementById(this.id).innerHTML;//sets inner html of button clicked
    var res = document.querySelector('#res');
    if(this.value === 'C'){//seperate functions for equal and clear
        klear();
    } else if(this.value === "=") {
        ekewl();
    } else{
        res.innerHTML += buttonHtml;//displays numbers ONLY that were clicked
    }
    function klear(){
        res.innerHTML = "";
    }
    function ekewl(){
        var screen = res.innerHTML;//all the numbers typed into the calculator
        var digits = /(\d+)/g;//this is a string "number"
        screen = screen.replace(digits, function(match) {//using replace to find matches with a function
            return parseInt(match, 2);//returning the matches(expression that was typed)
                                      // turning them into base 10 type:numbers
                                      //= and C are not appearing because of if/else 
                                      //statement so we only get numbers
        })
        res.innerHTML = eval(screen).toString(2);//change back to binary and add to screen
    }
}