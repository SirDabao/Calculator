const MAX=15;
let arg=0; // the argument before pressing an operation button
let oper=false; // is an operation button currently pressed
let lastOper=""; // the operator most recently pressed
let currOpRef="";
let modify=true;
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
   if(oper)
   disp.textContent=0;
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
            case "=": disp.textContent=operate(lastOper,arg,+disp.textContent);lastOper="=" ;oper=!modify; break;
            case "DEL": disp.textContent.length===1? disp.textContent="0":disp.textContent=disp.textContent.substring(0,disp.textContent.length-1); break;
            case "AC": disp.textContent="0"; arg=0; oper=false; lastOper="AC";
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
   button.addEventListener("click",()=>{populate(button); if(button.textContent===lastOper)
{
    currOpRef===""? null: currOpRef.classList.remove("op-on");
    if(button.classList.contains("op"))
    {
    button.classList.add("op-on");
    currOpRef=button;
    }
}
})
});

$(document).keydown(function(e) {
    if(e.shiftKey)
    switch (e.which)
    {
        case 54: document.getElementById(`pow`).click(); break;
        case 56: document.getElementById(`mul`).click(); break;
        case 187: document.getElementById(`add`).click();
    }
    else{
if(e.which>47 && e.which<58)
document.getElementById(`${e.which-48}`).click();
else switch(e.which)
{
    case 8: document.getElementById(`del`).click(); break;
    case 13: document.getElementById(`eq`).click(); break;
    case 37: document.getElementById(`current`).click(); break;
    case 38: document.getElementById(`inc`).click(); break;
    case 39:document.getElementById(`max`).click(); break;
    case 40: document.getElementById(`dec`).click(); break;
    case 46:  document.getElementById(`clr`).click(); break;
    case 187: document.getElementById(`eq`).click(); break;
    case 189: document.getElementById(`sub`).click(); break;
    case 190: document.getElementById(`dot`).click(); break;
    case 191: document.getElementById(`div`).click(); break;
    case 192: document.getElementById(`sign`).click();
} 
    }
});
modBtn=document.querySelector(".modify");
modBtn.addEventListener("click",()=>{modBtn.classList.toggle("on");
 modify=!modify
 modify? modBtn.textContent="on": modBtn.textContent="off";
});