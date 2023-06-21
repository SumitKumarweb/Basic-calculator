
document.getElementById("Submit").addEventListener("click", ()=>{
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const sysmbol = document.getElementById("sysmbol").value + "";
    console.log(typeof(num1))
    switch (sysmbol) {
        case "*":  alert(num1*num2);
            break;
        case "/" : alert(num1/num2);
            break;
        case "+" : alert(num1 + num2);
            break;
        case "-" : alert(num1 - num2);
            break;
    
        default: alert("Error");
            break;
    }

    return;
})