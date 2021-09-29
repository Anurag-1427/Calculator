var body = document.getElementsByTagName("body");
var modes = document.querySelector('modes');
    
const btn = document.querySelector(".modes");
btn.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme");
})





function BMI(){
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w/(h/100*h/100);
    var bmio = (bmi.toFixed(2));

    document.getElementById('result').innerHTML = "Your BMI is " + bmio;
}