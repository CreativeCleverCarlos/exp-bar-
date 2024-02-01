
document.getElementById("button1").addEventListener("click", functionButton1);
document.getElementById("button2").addEventListener("click", functionButton2);
document.getElementById("button3").addEventListener("click", functionButton3);
document.getElementById("button4").addEventListener("click", functionButton4);



let TotalExp = 0
let LEVELUP = 20



function functionButton1(){
    let expAdded = 1
    TotalExp = expAdded + TotalExp;
    let percentageToLevel = (TotalExp / LEVELUP) * 100;
    document.getElementById("the-actual-bar").innerHTML = TotalExp;
    document.getElementById("temporary-percentage-value").innerHTML = percentageToLevel.toFixed(2);
    if (TotalExp >= LEVELUP){
        TotalExp = 0
    }

}

function functionButton2(){
    let expAdded = 3
    TotalExp = expAdded + TotalExp;
    let percentageToLevel = (TotalExp / LEVELUP) * 100;
    document.getElementById("the-actual-bar").innerHTML = TotalExp;
    document.getElementById("temporary-percentage-value").innerHTML = percentageToLevel.toFixed(2);
        if (TotalExp >= LEVELUP){
            TotalExp = 0
        }
}

function functionButton3(){
    let expAdded = 4
    TotalExp = expAdded + TotalExp;
    let percentageToLevel = (TotalExp / LEVELUP) * 100;
    document.getElementById("the-actual-bar").innerHTML = TotalExp;
    document.getElementById("temporary-percentage-value").innerHTML = percentageToLevel.toFixed(2);
        if (TotalExp >= LEVELUP){
            TotalExp = 0
        }
    }

function functionButton4(){
    let expAdded = 7
    TotalExp = expAdded + TotalExp;
    let percentageToLevel = (TotalExp / LEVELUP) * 100;
    document.getElementById("the-actual-bar").innerHTML = TotalExp;
    document.getElementById("temporary-percentage-value").innerHTML = percentageToLevel.toFixed(2);
        if (TotalExp >= LEVELUP){
            TotalExp = 0
        }
}













