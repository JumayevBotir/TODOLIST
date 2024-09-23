let result=document.getElementById('number');
let result1=document.getElementById('btn');
let form=document.getElementById('form')
let f='0<n<999'
let a=['noll','bir','ikki','uch','tort','besh','olti','yetti','sakkiz',`to'qqiz`,`o'n`];
let b=["","",'yegirma',`o'ttiz`,'qirq','ellik','oltmish','yetmish','sakson',`to'qson`];
let c='yuz';
function son(n){
    if(n>999 || n<0     ){
        return (` kiritilgan son 
            meyorlarga mos kelmadi`)
    }
    else if(n<=10) {
        return(a[n])
    }
    else if(n<=99){
        let r=n%10;
        let q=Math.floor(n/10);
        if(q==1){
            return(a[10]+" "+a[r]);
        }
        else{
            return(b[q]+" "+a[r]);
        }
    }
    else if(n<=999) {
        let res=n%100;
        let res4=Math.floor(res/10);
        let res1=Math.floor(n/100);
        let res3=n%10;
        if(res3==0){
            return(a[res1]+' '+c+' '+b[res4])
        }
        else{
            return(a[res1]+' '+c+' '+b[res4]+' '+a[res3])
        }
    }  

}son();

result1.addEventListener('click', (e)=>{
    e.preventDefault();
    let n=parseInt(result.value)
    let otput=son(n);
   if(isNaN(n)){
    result.placeholder='Iltimos sonni kiriting';
   }
   else{
    form.innerHTML=otput;
   }
})






