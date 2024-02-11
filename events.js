console.log('this is a new ja file');
// option-1
function makered(){
    document.body.style.backgroundColor='red';
}
// option-2
const makeblue = document.getElementById('make-blue');
makeblue.onclick=makeb;
function makeb (){
    document.body.style.backgroundColor = 'blue';
}
// option-3
const makepurple = document.getElementById('make-purple');
makepurple.onclick = function makepur(){
    document.body.style.backgroundColor = 'purple';
}
// option-4
const makegreen = document.getElementById('make-green');
makegreen.addEventListener('click',makeg);
function makeg (){
    document.body.style.backgroundColor='green';
}
// option-4 another
const makepink = document.getElementById('make-pink');
makepink.addEventListener('click',function(){
    document.body.style.backgroundColor='pink';
})
// option -5 final
document.getElementById('btn').addEventListener('click',function(){
    document.body.style.backgroundColor='darkred';
})
