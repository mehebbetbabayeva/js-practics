
const calculate =()=>{
  let  a=Number(prompt("birinci ededi daxil edin"));
  let  b=Number(prompt("ikinci ededi daxil edin"));
  let  c=prompt("emeli qeyd edin" , "vur , bol , topla, cix");
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