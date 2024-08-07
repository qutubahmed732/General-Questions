let image = document.querySelectorAll('i');
let para1 = document.querySelector('.p1');
let para2 = document.querySelector('.p2');
let para3 = document.querySelector('.p3');

function khulja1() {
    if (para1.innerText == '' && para1.style.display == 'none') {
        para1.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque, quis minima et nam provident sit, facilis quas non necessitatibus dolore, commodi maiores fugit a culpa asperiores odit?`
        para1.style.display = 'flex'
    }
    else {
        para1.innerText = ""
        para1.style.display = 'none'
    }
}
function khulja2() {
    if (para2.innerText == '' && para2.style.display == 'none'){
        para2.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque, quis minima et nam provident sit, facilis quas non necessitatibus dolore, commodi maiores fugit a culpa asperiores odit?`
    para2.style.display = 'flex'
    }
    else {
        para2.innerText = ""
        para2.style.display = 'none'
    }
}
function khulja3() {
    if (para3.innerText == '' && para3.style.display == 'none'){
        para3.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloremque, quis minima et nam provident sit, facilis quas non necessitatibus dolore, commodi maiores fugit a culpa asperiores odit?`
    para3.style.display = 'flex'
    }
    else {
        para3.innerText = ""
        para3.style.display = 'none'
    }
}