//  ==, ===, >=,<=,!=,!==

console.log(1 != "1");

// &&, ||

// if(1 === 1 || "one" != "two"){
//     console.log('true..');
// }else{
//     console.log('false..')
// }


var name = "asdas";
name = name.length;
console.log(name);
// debugger
// switch(name){
//     case '0':
//         alert('pelase fill your name....')
//     break;
//     case "5":
//         alert('name is fine....')
//     break;
//     default:
//         alert('name is too long....')
// }


// for, forin,  while..
var info = [{ mail: "test@tes.com" }, { mail: 'somex@som.com' }, { mail: 'somy@som.com' }, { mail: "test@tes.com" }];
var info1 = [{ mail: "tester@tes.com" }, { mail: 'demot@som.com' }, { mail: 'demoz@som.com' }, { mail: "somz@tes.com" }];
// for(var i = 0; i < info.length; i++){
//     // console.log(info[i].mail);

//     if(info[i].mail.indexOf('test') > -1){
//         console.log("test is at " + i + " index ");
//     }else{
//         console.log(info[i].mail);
//     }
// }
// console.log(i);


// for (var i in info) {
//     // console.log(info[i].mail);

//     if (info[i].mail.indexOf('test') > -1) {
//         console.log("test is at " + i + " index ");
//     } else {
//         console.log(info[i].mail);
//     }
// }

// var j = 0;
// while(j < info.length){

//     console.log(info[j].mail);
//     j++;
// }

demo(info1);
function demo(dummy) {
    var j = 0;
    while (j < dummy.length) {

        console.log(dummy[j].mail);
        j++;
    }
}