const e=require("readline-sync"),
    r=require("gradient-string")("#001E71","#0244FD"),
    o=require("gradient-string")("#7D0000","#FF0000");
let s=0,
    l=0;
if (1==Number(process.argv[2])?s=10:2==Number(process.argv[2])||3==Number(process.argv[2])||(s=!1),s=1==Number(process.argv[2])?10:2==Number(process.argv[2])?100:3==Number(process.argv[2])&&1e3,s){
    for (let o=0; o < 10; o++){
        let o=Math.floor(Math.random()*s),
            a=Math.floor(Math.random()*s),
            n=o+a;
        e.question(r(o+"+"+a+"="))==n?(console.log(!0),l++):console.log(!1)
    }
    console.log(r("Your score is "+l+"/10"))
} else console.log(o("The level must be between 1 and 3")),process.exit(0);