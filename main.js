const a=document.getElementById('show-btn');
const b=document.getElementById('modal');
const x=document.getElementById('x-btn');
const o=document.getElementById('overly');
a.addEventListener('click',()=>{
    b.classList.remove('event');
    o.classList.remove('event')
    
});
x.addEventListener('click',()=>{
    b.classList.add('event');
    o.classList.add('event')
})