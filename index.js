let btn=document.querySelector('.btn');
let modal=document.querySelector('#modal');
let dal=document.querySelector('.dal');
let canel=document.querySelector('.canel');
btn.addEventListener('click',(e)=>{
    modal.classList.add('modalone')
    modal.classList.remove('modal')
})
dal.addEventListener('click',()=>{
    modal.classList.remove('modalone')
    modal.classList.add('modal')
});
canel.addEventListener('click', ()=>{
    modal.classList.remove('modalone')
    modal.classList.add('modal')
});
let modalBtn=document.querySelector('#add');
let modText=document.querySelector('.mod-text');


modalBtn.addEventListener('click',()=>{
    var text=document.querySelector('.text');
var div =document.createElement('div');
var dalete=document.createElement('button');
var newText=document.createElement('p');
let ref= document.createElement('button');
let divOne=document.createElement('div');
let chekBox=document.createElement('input');
let divtwo=document.createElement('div');
    if(modText.value.trim() !==""){
        dalete.innerHTML='🗑️';
        ref.innerHTML='🖋️';
        newText.textContent=modText.value
        document.querySelector('.nav-bottom').appendChild(div);
        divtwo.appendChild(chekBox)
        divtwo.appendChild(newText);
        divOne.appendChild(dalete);
        divOne.appendChild(ref);
        div.appendChild(divtwo)
        div.appendChild(divOne);
        chekBox.classList.add('chek')
        divOne.classList.add('One');
        ref.classList.add('dalete')
        div.classList.add('yangi')
        dalete.classList.add('dalete')
        chekBox.type = 'checkbox';
        
        text.style.display = 'none';
        divtwo.classList.add('One')
    }
    modText.value='';
    modal.classList.remove('modalone')
    modal.classList.add('modal')
    dalete.addEventListener('click',()=>{
        div.remove();
        if(document.querySelector('.nav-bottom').children.length===1){
             text.style.display='block';
        }
     })
     ref.addEventListener('click', () => {
        modal.classList.add('modalone');
        modal.classList.remove('modal');
        modText.value = newText.textContent;
        modalBtn.addEventListener('click', () => {
           div.remove()
        });
    });
});
