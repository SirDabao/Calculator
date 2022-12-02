const MAX=15;
let arg=0; // the argument before pressing an operation button
let oper=false; // is an operation button currently pressed
let lastOper=""; // the operator most recently pressed
let add=(a,b)=>+(a+b).toFixed(fix);
let sub=(a,b)=>+(a-b).toFixed(fix);
let mult=(a,b)=>+(a*b).toFixed(fix);
let div=(a,b)=>b===0?"BRUH":+(a/b).toFixed(fix);
let pow=(a,b)=>+(a**b).toFixed(fix);
function operate(op,a,b)
{
    switch(op)
    {
        case "+": return add(a,b);
        case "-": return sub(a,b);
        case "✕": return mult(a,b);
        case "/": return div(a,b);
        case "^": return pow(a,b);
        default: return disp.textContent;
    }
}

function populate(btn)
{
    if(btn.classList.contains("num"))
    {
    switch (btn.textContent)
    {
   case ".": 
   disp.textContent.includes(".")? null:disp.textContent=disp.textContent+"."; break;
   case "+/-": disp.textContent=-(+disp.textContent); break;
   case "0": oper?disp.textContent=btn.textContent:(disp.textContent==="0"?null:
    disp.textContent= (disp.textContent+btn.textContent)); break;
   default:oper?disp.textContent=btn.textContent:disp.textContent= +(disp.textContent+btn.textContent);
    }
    oper=false;
}
    else if(btn.classList.contains("op"))
    {
        if(!oper && !(lastOper==="")) 
        disp.textContent=operate(lastOper,arg,+disp.textContent);
     arg=+disp.textContent;
     lastOper=btn.textContent;
     oper=true;
    }
    else
    {
        switch(btn.textContent)
        {
            case "=": disp.textContent=operate(lastOper,arg,+disp.textContent);lastOper="" ;oper=true; break;
            case "DEL": disp.textContent.length===1? disp.textContent="0":disp.textContent=disp.textContent.substring(0,disp.textContent.length-1); break;
            case "AC": disp.textContent="0"; arg=0; oper=false; lastOper=""; 
        }
    }

    return disp.textContent;
}
let maxBtn=document.getElementById("max");
let cstmBtn=document.getElementById("current");
let plusFix=document.querySelector(".inc");
let minusFix=document.querySelector(".dec");
let disp=document.querySelector(".display");
let fix=MAX;
maxBtn.addEventListener("click",()=>{
    maxBtn.classList.toggle("on");
    cstmBtn.classList.toggle("on");
    if(maxBtn.classList.contains("on"))
    fix=MAX;
    else fix=+cstmBtn.textContent;
});
cstmBtn.addEventListener("click",()=>{
    maxBtn.classList.toggle("on");
    cstmBtn.classList.toggle("on");
    if(maxBtn.classList.contains("on"))
    fix=MAX;
    else fix=+cstmBtn.textContent;
});
plusFix.addEventListener("click",()=>{
    if( +cstmBtn.textContent<MAX)
    {
    cstmBtn.textContent=(+cstmBtn.textContent)+1;
    if(cstmBtn.classList.contains("on"))
    fix=+cstmBtn.textContent;
    }
})
minusFix.addEventListener("click",()=>{
    if( +cstmBtn.textContent>0)
    {
    cstmBtn.textContent=(+cstmBtn.textContent)-1;
    if(cstmBtn.classList.contains("on"))
    fix=+cstmBtn.textContent;
    }
})
calcBtns=document.querySelectorAll(".buttons button");
calcBtns.forEach(button=>{
   button.addEventListener("click",()=>populate(button))
});

$(document).keydown(function(e) {
if(e.which>47 && e.which<58)
document.getElementById(`${e.which-48}`).click(); 
});
