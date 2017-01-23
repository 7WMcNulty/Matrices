const Matrix = require("matrix-js");

let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

/*function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
    let temp = mtrx;
    for(var i=1; i<p; i++){
      temp = Matrix(temp.prod(mtrx));
    }
    return temp();
}*/
function power(mtrx,p){
  if(p%2==0){
    let b = power(mtrx,p/2);
    return Matrix(b.prod(b));
  }
  else if(p%2==1){
    let c = power(mtrx,Math.floor(p/2));
    let d = power(mtrx,Math.ceil(p/2));
    return Matrix(c.prod(d));
  }
  else if(p==1){
    return mtrx;
  }
}

//testing code
console.log(power(A,10));
