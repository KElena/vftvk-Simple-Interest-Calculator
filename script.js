function compute() {
    //Creating the variable "principal" used for the field "Amount"
    var principal = document.getElementById("principal").value;
    //Creating the variable "rate" used for the slider "Rate"
    var rate = document.getElementById("rate").value;
    //Creating the variable "years" used for the field "No. of years"
    var years = document.getElementById("years").value;
    //Creating the variable "interest"
    var interest = principal * years * rate / 100;
    //Creating the variable "year" 
    var year = new Date().getFullYear() + parseInt(years);
    //Creating the variable "result"
    var result = document.getElementById("result");

    //Check for 0 & negative number input
    if (principal <= "0") {
        alert('Please enter a positive number!');
        document.getElementById("principal").focus();

    // Display the result if input is a positive integer    
    } else {
        result.innerHTML = '<br\>' + 'If you deposit ' + '<mark>' + principal + '</mark>' + ',' + '<br\>'
            + 'at an interest rate of ' + '<mark>' + rate + '%' + '</mark>' + ',' + '<br\>'
            + 'You will receive an amount of ' + '<mark>' + interest + '</mark>' + ',' + '<br\>'
            + 'in the year ' + '<mark>' + year + '</mark>'
    }
}
//Update rate slider dinamicaly
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + '%';
}