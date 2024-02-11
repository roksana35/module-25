// option-1
function eventclick (){
    const dfault = document.getElementById('d-text');
    dfault.innerText ='Event add by onclick';

}
// option-2 
document.getElementById('event-listner').addEventListener('click',function(){
    const dfault = document.getElementById('d-text');
    dfault.innerText = 'Events added by addeventlistener';
})

// option-2 recap
document.getElementById('update-btn').addEventListener('click',function(){
    const text = document.getElementById('input-text');
    const inputfeild = text.value;
     const p=document.getElementById('default-input-text');
     p.innerText =inputfeild;
     text.value='';

    

})
// option-2 practice
// document.getElementById('click-me').addEventListener('click',function(){
//     const input =document.getElementById('input-t');
//     const inputfield=input.value;
//     const p = document.getElementById('text-default');
//     p.innerText = inputfield;
//     input.value ='';

// })