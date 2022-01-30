
function GetValues()
{
    //start values
    let start = document.getElementById("startvalue").value;
    let end = document.getElementById("endtvalue").value; 

    //call validation methosd
    let isValidValue = ValidateUserEntry(start, end);
    if(!isValidValue)
    {
        alert("You must enter intergers only");
        return;
    }

    //call generate numbers methosd
    let generatedNumbers = GenerateNumbers(start, end);

    //call display numbers method
    DisplayNumbers(generatedNumbers);
    
}
function GenerateNumbers(startValue, endValue)
{
    let numbers = [];
    let counter = 0;

    while(startValue <= endValue)
    {
        numbers[counter]=startValue;
        startValue++;
        counter++;
    }

    return numbers;
}
function DisplayNumbers(startValue)
{
    let numTemplate="";
    startValue.forEach(number=>
    {
        if(IsEvent(number))
        {
            numTemplate += `<tr><td><b>${number}</b></td></tr>`;
            return;
        }

        numTemplate += `<tr><td>${number}</td></tr>`;

    });

    document.getElementById("tableresult").innerHTML= numTemplate;
}
function IsEvent(number)
{
    if(number%2==0)
    {
        return true;
    }
    return false;
}
function ValidateUserEntry(startValue, endValue)
{
    var svalue = parseInt(startValue);
    var evalue = parseInt(endValue);

    if(!Number.isInteger(svalue) || !Number.isInteger(evalue))
    {
        return false;
    }

    return true;
}
