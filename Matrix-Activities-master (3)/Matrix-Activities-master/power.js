const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
    let temp = mtrx;
    for(var i=1; i<p; i++){
      temp = Matrix(temp.prod(mtrx));
    }
    return temp();
}


//testing code
console.log(power(A,10));
