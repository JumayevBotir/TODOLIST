let a=document.querySelector('.number');
let body=document.querySelector('body');
let select=document.querySelector('select');
function summ(){
return ((100*a.value)/1270000).toFixed(2);
};
function sum1(){
  return ((1000*a.value)/136000).toFixed(2);
};
let btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
  let selectValue= select.value;
  let rez;
  if(selectValue==='$'){
   body.innerHTML= `Natija:${summ()} $`
  }
  else if(selectValue===`rub`) {
   body.innerHTML=`Natija:${sum1()} rubl`
  }
})
