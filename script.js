let add=(a,b)=>(a+b);
let sub=(a,b)=>(a-b);
let mult=(a,b)=>(a*b);
let div=(a,b)=>(a/b);
let pow=(a,b)=>(a**b);
function operate(op,a,b)
{
    switch(op)
    {
        case "+": return add(a,b);
        case "-": return sub(a,b);
        case "*": return mult(a,b);
        case "/": return div(a,b);
        case "^": return pow(a,b);
        default: return null;
    }
}
