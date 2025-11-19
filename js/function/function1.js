// 함수(단독) == 메소드(객체 내에 포함)
// function name(params){}
// const func = function (){};
// const func1 = () => {};

// 1. 파라메터 없는경우 
function showMsg(){
    console.log("안녕하세요");
}

showMsg(); 

// 2. 파라메터 있는 경우 
function multiplay(a,b) {
    return a * b ;
}

const result = multiplay(5);
console.log(result);

function showDialog(greeting, name) {
    console.log(`${greeting} || ${name}`)
}

showDialog("hello","kim");

function multiplay1(a,b){
    console.log(a,b);
    b = b||5;
    return a*b;
}

// 4. 함수안에 함수 작성 
function a() {
    function b(){
        console.log("b function")
    }
    if(true){
        function c(){}
    }
}

a();
b();