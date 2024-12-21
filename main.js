let btn=document.querySelector(".generate");
let serial=document.querySelector(".serial");

btn.onclick=function(){
    let arr="123456789abcderfgtuikoW%^&(lp#&*";
    let charcount=10;
    let ranval="";
    for(let i=0;i<charcount;i++){
        ranval+=arr[Math.floor(Math.random()*arr.length)]
    }
    serial.innerHTML=ranval;
        
    
        
    
}
