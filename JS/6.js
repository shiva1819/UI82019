'use strict'

var somex = 20;
// console.log(somex);

function demo(){
    var somex = 30;
    console.log(somex);
}
console.log(somex);
demo();
console.log(somex);


var ddemo = function(){
    console.log('asdasd');
}
// ddemo();


function one(){
    var obj = []
        obj[0] = 10;
    return obj;
}



// console.log(one()[0]);
// console.log(one()[0] + 10);


// two(one());

function two(a){
    console.log(a + 20);
}

var obj111 = {
    name:'siva',
    getName:function(){
        console.log(this);
        return this.name;
    }
}


console.log(obj111.getName());


function tester(){
    console.log('this is been clicked....');
}