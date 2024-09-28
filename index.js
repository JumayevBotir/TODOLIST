let a=document.querySelector('.number');
let nav=document.querySelector('.nav');
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
  btn.disabled = !a.value;
  if(selectValue==='$'){
   nav.innerHTML= `Natija:${summ()} $`
  }
  else if(selectValue===`rub`) {
   nav.innerHTML=`Natija:${sum1()} rubl`
  }
  w.classList.remove('refresh')
  w.classList.add('refresh1')
});

let w=document.querySelector('#e');
w.classList.add('refresh');

w.addEventListener('click',()=>{
  location.reload()
})
