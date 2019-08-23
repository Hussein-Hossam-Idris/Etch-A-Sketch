//let parentDiv = document.getElementById('main_div');
function deleteChild() { 
    var e = document.getElementById("main_div"); 
    
    //e.firstElementChild can be used. 
    var child = e.lastElementChild;  
    while (child) { 
        e.removeChild(child); 
        child = e.lastElementChild; 
    } 
} 
function makeGrids() {

    for (let i = 0; i < 16 * 16; i++) {

        let divMaker = document.createElement('div');
        divMaker.className = 'container_1_box green';
        divMaker.id = 'board';
        divMaker.textContent += ' ';
        let n = 980 / 16;
        let h = 980 / 16;
        divMaker.style.width = n + 'px';
        divMaker.style.height = h+'px';
        let block1 = document.getElementById('main_div');
        block1.style.width = '980px';
        block1.style.height= '980px';
        block1.style.display = 'flex';
        block1.style.flexWrap = 'wrap';
        block1.style.flexDirection = 'row';
        block1.style.margin = '0 auto';
        block1.appendChild(divMaker);

    }
}



function makeGrids_2(numberOfGrids) {
    for (let i = 0; i < numberOfGrids * numberOfGrids; i++) {
        let divMaker = document.createElement('div');
        divMaker.className = 'container_1_box green';
        divMaker.id = 'board';
        divMaker.textContent += ' ';
        let n = 980/numberOfGrids;
        let h = 980 / numberOfGrids;
        divMaker.style.width = n+'px';
        divMaker.style.height = h+'px';
        let block1 = document.getElementById('main_div');
        block1.appendChild(divMaker);


    }




}



function coloringBlack(){
    let divToBlack = document.querySelectorAll('.container_1_box');
    for (let i = 0; i < divToBlack.length; i++) {
        divToBlack[i].addEventListener("mouseover", function () {
            divToBlack[i].classList.add("black");
            divToBlack[i].classList.remove('green');
        })
    }
    
}


makeGrids();
coloringBlack();

let b = document.getElementById('clear_div');

b.addEventListener('click',function(){
    let p = prompt('how many grids?');
    deleteChild();
    makeGrids_2(p);
    coloringBlack();
});








