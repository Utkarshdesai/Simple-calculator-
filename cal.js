let buttons = document.querySelectorAll('button');


let dislayinput =document.querySelector('.screen');


let str  = '';
let arr= Array.from(buttons)
arr.forEach ( button => {
    button.addEventListener('click',(e) => {
        if (e.target.innerHTML == '=') {
            str=eval(str);
            dislayinput.value = str;
        }
        else if(e.target.innerHTML == 'AC') {
            str='';
            dislayinput.value = str;
        }
        else if(e.target.innerHTML == 'DEL') {
            str=str.slice(0,-1);
            dislayinput.value = str;
        }
        else {
            str += e.target.innerHTML;
        dislayinput.value = str;
        }

        
    })
})