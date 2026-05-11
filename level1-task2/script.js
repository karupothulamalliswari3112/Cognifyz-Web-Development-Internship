function changeColor(){

    const colors = [
        "#fca5a5",
        "#bfdbfe",
        "#bbf7d0",
        "#fde68a",
        "#ddd6fe"
    ];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}

function showGreeting(){

    let hour = new Date().getHours();

    if(hour < 12){
        alert("Good Morning!");
    }
    else if(hour < 18){
        alert("Good Afternoon!");
    }
    else{
        alert("Good Evening!");
    }
}

function addNumbers(){

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let total = num1 + num2;

    document.getElementById("result").innerHTML =
    "Result: " + total;
}
