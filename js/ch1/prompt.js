// // 함수 
// // alert("사용자에게 메세지 전달");

// // // 입력 
// // let input = prompt("숫자 입력");
// // console.log("사용자 입력 값",input);

// // let isBoss = confirm("당신이 주입입니까?");
// // console.log(isBoss ? "주인":"주인아님");

// // 게임 의사 물어보기
// if(confirm("게임 한판 하실래요?")){
//     document.writeln("좋습니다. 게임 한 판 하시죠");
// }else{
//     document.writeln("나중에 한 판 하시죠");
// }

// 사용자에게 숫자를 입력받아 양수,음수,0 인지 판별
// prompt()

// let num1 = Number(prompt("숫자를 입력해주세요"));

// if(num1 > 0){
//     document.writeln("양수");
// }else if(num1 < 0){
//     document.writeln("음수");
// }else if(num1 == 0 ){
//     document.writeln("0");
// }else if(isNaN(num1)){
//     document.writeln("숫자가 아님");
// }

// // 숫자를 입력받아 짝,홀 구분
// let num1 = Number(prompt("숫자를 입력해주세요"));

// if(num1 % 2 == 0 ){
//     document.writeln("짝수");
// }else if(num1 % 2 == 1){
//     document.writeln("홀수");
// }else{
//     document.writeln("숫자를 확인해 주세요");
// }

// 숫자 3개를 입력받아 평균이 >= 90 A , >= 80 B, >=70 C >= 60 D,F

let num1 = Number(prompt("숫자를 입력해주세요"));
let num2 = Number(prompt("숫자를 입력해주세요"));
let num3 = Number(prompt("숫자를 입력해주세요"));

switch(avg){
    case 10:
    case 9:
        document.writeln("A");
        break;
    default:
            break;
}