let n = prompt();
if(isNaN(n))
    alert("n Должно быть числом");
else{
    let fn = 1;
    for(let i = 1; i <= n; i++){
        fn *= i;
    }
    alert(fn);
}
