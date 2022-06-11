const input = document.querySelector('.input');
const submit = document.querySelector('.submit');
var errorText = document.getElementById('error-message');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener('click', function(event){
    var input_text = input.value;
    if(!(re.test(input_text))){
        event.preventDefault();
        input.classList.add("error");
        input.style.borderColor = "hsl(0, 93%, 68%)";
        errorText.style.display = "block";
    }
});