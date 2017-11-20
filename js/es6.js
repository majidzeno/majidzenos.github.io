Arrow Function Varations
() => 3;
x => 3;
(...x) => 3;
(x,y) => 3;
x => {try { 3 ;} catch(e) {} } // because try catch is a statement not an expression 
x => {return 3;}
x => ({ y : x });//to return an object you have to surround it by round parenties
// Arrow Functions are anonymous functions
