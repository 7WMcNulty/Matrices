//Imports matrix code from the folder
const Matrix = require("matrix-js");

/*Example code creating two new matricies and then multiplying them.*/
/*let M = Matrix([[1,1],[1,1]]);
let N = Matrix([[2,3],[3,5]]);
console.log(M.prod(N));
*/
//Draft your code below this line to answer the questions.
//You can 'comment out' theexample above by placing double slashes before them.
var a = [[0,1,1,0,0,1],[1,0,1,0,0,1],[1,1,0,1,1,1],[0,0,1,0,0,0],[0,0,1,0,0,0],[1,1,1,0,0,0]];
var A = Matrix(a);
var B = Matrix(A.prod(A));
var C = Matrix(B.prod(B));
var D = Matrix(C.prod(C));
console.log(D());
