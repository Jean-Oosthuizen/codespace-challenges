let num = prompt("Enter a number");
if(isNaN(num) == true){
    alert("You may only input numbers.")
}else{
    if((num%2)==1){
        alert("Odd");
    }else{
        alert("even");
    }
}
