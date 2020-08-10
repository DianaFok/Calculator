var output = document.querySelector('.output');
var btns = document.querySelectorAll('.btn') ;
var equal = document.querySelector('.equal') ;
var del = document.querySelector('.del') ;
var allclear = document.querySelector('.allclear');

btns.forEach(btn => {
    btn.addEventListener('click' , () => {
        let content = btn.getAttribute('num');
        output.innerHTML += content ;
    })
})
allclear.addEventListener('click' , () => {
    output.innerHTML = '' ;
})
equal.addEventListener('click' , () => {
    let expression = output.innerHTML ;
    output.innerHTML = eval(expression);
})
del.addEventListener('click', ()=>{
    let str = output.innerHTML ;
    let arr = str.split('') ;
    arr.pop();
    output.innerHTML = arr.join('') ;
})
