var arr = [];
arr[0] = 1;
arr[2] = 2;
delete arr[0];
// console.log(arr);


// push, pop, shift, unshift, splice, slice
var company = [];

// 1 - 2 - 3 -4
company.push(3);
company.push(1);
company.push(2);
company.unshift(0);
company.unshift(-1);

// company.pop();
// company.shift();

console.log(company);
// company.splice(2,1);
var arr1 = company.slice(2,3);

console.log(company);