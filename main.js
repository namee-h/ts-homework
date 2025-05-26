// string
// number
// boolean
// null
// undefined
// ------------
// symbol 절대 변경불가능한값
// bigint 큰 숫자
// 타입 선언할때 소문자로 시작해야됨. 대문자로 시작하면 객체임
// 변수에서 사용하는 방법
// let a: boolean = true;
// a = false;
// let b: null = null; //값이 없기 때문에 없는 거야
// let c: undefined = undefined; //값이 정의가되지 않아서 없는 거야
// // 함수에서 사용하는 방법
// function double(n: number): number {
//   return n * 2;
// }
// console.log(double(3));
// 문제 1. 다음 변수들의 타입을 지정해주세요
var userName = "name";
var userAge = 15;
var isAdmin = false;
userName = "Alice";
userAge = 25;
isAdmin = true;
console.log(userName, userAge, isAdmin);
// 문제 2. 아래 변수들에 적절한 타입과 초기값을 지정하세요
var productName = "탐사수";
var productPrice = 1000;
var isAvailable = true;
console.log("\uC0C1\uD488\uBA85:".concat(productName, ", \uAC00\uACA9:").concat(productPrice, ", \uC7AC\uACE0\uC5EC\uBD80:").concat(isAvailable));
// 문제 3. 두 숫자를 더하는 함수를 작성하고, 함수의 매개변수와 변환값에 타입을 지정하세요
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(5, 3)); // 8
// 문제 4. 주어진 값을 받아 문자열로 변환하는 함수를 작성하세요. 값이 null 또는 undefined라면 "값이 없습니다"를 반환합니다
function stringifyValue(value) {
    if (value === null || value === undefined) {
        return "값이 없습니다";
    }
    return value;
}
console.log(stringifyValue("Hello")); // "Hello"
console.log(stringifyValue(null)); // "값이 없습니다"
console.log(stringifyValue(undefined)); // "값이 없습니다"
// 문제 5. 아래 함수는 두 값을 비교하여 결과를 반환합니다. 느슨한 동등성(==)과 엄격 동등성(===)의 차이를 이해하고, 함수의 동작결과를 예측하세요
function compareValues(a, b) {
    if (a === b) {
        return "엄격한 동등성";
    }
    else if (a == b) {
        return "느슨한 동등성";
    }
    else {
        return "동등하지 않음";
    }
}
// 함수 호출 예시
console.log(compareValues(5, "5")); // ? 느슨한 동등성
console.log(compareValues(null, undefined)); // ? 느슨한 동등성
// ===이 false인 이유는 타입이 다르기때문
// null의 타입: object (특이하게 설계됨)
// undefined의 타입: undefined
console.log(compareValues(false, 0)); // ? 동등하지 않음 x 느슨한 동등성
// ** 자바스크립트의 자동 형변환 : 다른 타입의 값들을 비교하거나 연산할때, 자동으로 타입을 바꿔서 계산해주는 것
// (true->1 false->0 이외에도 문자열->숫자 null-> 0(null+1 //1) undefined->NaN(undefined+1 //NaN))
// ** 특이한 비교 **
// false == "0"       // true (false → 0, "0" → 0)
// 0 == ""            // true ("" → 0)
// null == 0          // false (null은 0으로 안 바뀜)
// undefined == 0     // false
// null == undefined  // true (예외적으로 둘은 같다고 판단) **null 과 undefined 는 서로만 같고 다른값(문자열 숫자 등)과는 다르다고 취급됨
// ** Truthy / Falsy란?
// 자바스크립트에서는 어떤 값을 조건문(if)이나 비교에 쓸 때
// 자동으로 Boolean(true/false)로 바꾸는 경우가 많음
// 그때 자바스크립트는: 어떤 값은 true처럼 취급(Truthy), 어떤 값은 false처럼 취급(Falsy)
// Falsy 값 (암기해야함)
// false | 0 | -0 | NaN | null | undefined | '' (빈 문자열)
// 예시
// if (0) {
//   console.log("실행됨");
// } else {
//   console.log("실행 안됨"); // 이게 실행됨
// }
// Truthy 값 (빈 배열 [] | 빈 객체 {} | 문자열 "0")
// 중요하는 이유는 ==(느슨한 비교)를 하는 경우 예상밖의 결과가 나오기 때문
// 예시
// false == 0      // true
// false == ''     // true
// 0 == ''         // true
// false == []     // true  (빈 배열은 Truthy지만 숫자 변환 시 0이 되기 때문)
// 비교 요약
// false == 0	  true	  false → 0
// false == ''	true	  false → 0, '' → 0
// 0 == ''	    true	  '' → 0
// false == []	true	  [] → '' → 0
// false == {}	false	  {} → NaN
// 따라서 조건문에서는 항상 엄격한 비교 (===)을 사용하고 if(value) 전에 꼭 이 값이 Truthy 인지 Falsy 인지 알아야한다.
console.log(compareValues(NaN, NaN)); // ? 엄격한 동등성 x 동등하지 않음
// NaN == NaN // false
// NaN === NaN // false
// 숫자 타입이지만 숫자가 아니라는 뜻을 가진 NaN는 NaN과 비교하면 false 값을 반환하고 데이터타입까지 비교하는 일치연산자 === 로 비교해도 똑같이 false이다
// NaN은 어떤 값과도 같지 않다. 자기자신도 포함해서! 이유는 : NaN은 오류나 잘못된 계산 결과를 나타내기 때문에, **이 값은 비교대상조차 될수 없다**라는 뜻으로 설계되었기 때문
// 결론 NaN은 "숫자타입이지만 이상한 숫자"라서, 자기자신과도 같지 않다.
console.log(compareValues(42, 42)); // ? 엄격한 동등성
// 문제 6. 주어진 값이 원시 타입인지 아닌지 확인하는 함수를 작성하세요.
function isPrimitive(value) {
    // return (
    //   value === null ||
    //   typeof value === "string" ||
    //   typeof value === "number" ||
    //   typeof value === "boolean" ||
    //   typeof value === "undefined" ||
    //   typeof value === "symbol" ||
    //   typeof value === "bigint"
    // );
    return value === null || value !== Object(value);
}
// 함수 호출 예시
console.log(isPrimitive("Hello")); // true
console.log(isPrimitive(42)); // true
console.log(isPrimitive(false)); // true
console.log(isPrimitive(null)); // true
console.log(isPrimitive(undefined)); // true
console.log(isPrimitive({})); // false
console.log(isPrimitive([])); // false
