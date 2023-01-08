
const calculate =(a,b,c)=>{
    a=Number(prompt("birinci ededi daxil edin"));
    b=Number(prompt("ikinci ededi daxil edin"));
    c=prompt("emeli qeyd edin" , "vur , bol , topla, cix");
    if(c=="vur"){
      console.log(a*b);
    }
     else if(c=="bol"){
        console.log(a/b);
    }
    else if(c=="topla"){
        console.log(a+b);
    }
    else if(c=="cix"){
        console.log(a-b);
    }
    else{
        console.log("emeli duzgun qeyd edin");
    }

}
calculate();