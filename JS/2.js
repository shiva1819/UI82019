var a = undefined/100;

// console.log(typeof(a));
// console.log(a);
// console.log(typeof(a));


// length

var arr = [1,2,3];
// console.log(arr);
// console.log(arr.length);

// slice, indexOf, lastIndexOf, search, substr, substring, replace, trim;

    var str = '                      Lorem ipsum dolor sit amet Lorem                    consectetur adipisicing elit. Maxime quidem, explicabo repudiandae illum voluptatibus Lorem corrupti cum eum praesentium inventore maiores?         ';
// console.log(str.search('Lorem'));
var rec = 'Lorem';
var test = str.substring(11, 17);
var test1 = str.substr(11, 6);
// console.log(test, test1);

str = str.replace(/ /g,'');

console.log(str.trim().toLowerCase());

var str1 = 'shvia * Prasad * aluri';

str1 = str1.split('*');
console.log(typeof(str1));


