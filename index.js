
let btn=document.querySelector('.btn');
let km=document.querySelector('.number')
let m1=document.querySelector('.masofa1')
let m2=document.querySelector('.masofa2')
let m3=document.querySelector('.masofa3')
let m4=document.querySelector('.masofa4')
function piyoda(){
  return Math.floor((km.value/3.6))
}
function piyoda1(){
  return Math.floor(((km.value%3.6)*60)/3.6)
}
function velo(){
  return (km.value/20.1).toFixed()
}
function velo1(){
  return (((km.value%20.1)*60)/20.1).toFixed()
}
function car() {
  return (km.value/70).toFixed()
}
function car1() {
  return (((km.value%70)*60)/70).toFixed()
}
function sam(){
  return (km.value/800).toFixed()
}
function sam1(){
  return (((km.value%800)*60)/800).toFixed()
}
btn.addEventListener('click',()=>{
  let valu=km.value.trim();
  if(valu===''||isNaN(valu)){
    km.placeholder  ='Msofani kiriting'
    return;
  }
  else{
    w.classList.remove('refresh')
    w.classList.add('refresh1')
    
  }
 m1.innerHTML=`${piyoda()} soat ${piyoda1() } daqiqa`;
 m2.innerHTML=`${velo()} soat ${velo1()} daqiqa`;
 m3.innerHTML=`${car()} soat ${car1()} daqiqa `;
 m4.innerHTML=`${sam()} soat ${sam1()} daqiqa`
 km.value="";


})






let w=document.querySelector('#e');
w.classList.add('refresh');

w.addEventListener('click',()=>{
  location.reload()
})
