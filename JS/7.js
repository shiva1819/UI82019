// DOM

// id, class, elementName.


var Btn = document.getElementById('one');
var Btnc = document.getElementsByClassName('one');
var Btne = document.getElementsByTagName('button');

console.log(Btnc[1]);


Btn.onclick = function(){
    alert('some demo....');
};

