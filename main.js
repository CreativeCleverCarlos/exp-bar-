
document.getElementById("button1").addEventListener("click", functionButton1);
document.getElementById("button2").addEventListener("click", functionButton2);
document.getElementById("button3").addEventListener("click", functionButton3);
document.getElementById("button4").addEventListener("click", functionButton4);



let TotalExp = 0


function functionButton1(){
    let expAdded = 1
    let LEVELUP = 20;
    let percentageToLevel = (TotalExp / LEVELUP) * 100
    TotalExp = expAdded + TotalExp
    document.getElementById("the-actual-bar").innerHTML = TotalExp;
    document.getElementById("temporary-percentage-value").innerHTML = percentageToLevel;
}
function functionButton2(){
    let expAdded = 3
    let LEVELUP = 20;
    let percentageToLevel = (TotalExp / LEVELUP) * 100
    TotalExp = expAdded + TotalExp
    document.getElementById("the-actual-bar").innerHTML = TotalExp;
    document.getElementById("temporary-percentage-value").innerHTML = percentageToLevel;
}

function functionButton3(){
    let expAdded = 4
    let LEVELUP = 20;
    let percentageToLevel = (TotalExp / LEVELUP) * 100
    TotalExp = expAdded + TotalExp
    document.getElementById("the-actual-bar").innerHTML = TotalExp;
    document.getElementById("temporary-percentage-value").innerHTML = percentageToLevel;
}

function functionButton4(){
    let expAdded = 7
    let LEVELUP = 20;
    let percentageToLevel = (TotalExp / LEVELUP) * 100
    TotalExp = expAdded + TotalExp
    document.getElementById("the-actual-bar").innerHTML = TotalExp;
    document.getElementById("temporary-percentage-value").innerHTML = percentageToLevel;
}












