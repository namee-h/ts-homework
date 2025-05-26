// // 객체
// let b: { /** readonly **/ name: string; age?: number } = {
//   name: "noona",
//   age: 34,
// };
// let c: { name: string; age: number } = { name: "sara", age: 23 };
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// b.name = "coding";
// // 배열
// let fruits: string[] = ["banana", "apple"];
// let numbers: number[] = [1, 2, 3, 4];
// let students: { name: string; age?: number }[] = [
//   { name: "sara" /**isStudent:false**/ },
//   { name: "berry", age: 8 },
// ];
// //  key?: ? 선택적 속성 있어도 ok 없어도 ok
// // 튜플
// let tuple: [string | number, number];
// // |을 사용하여 두가지 이상의 타입설정도 가능함 (유니온타입)
// tuple = [45, 2];
// // 순서가 바껴도 에러남
// 문제 1. 아래 객체를 보고 user의 타입을 작성하세요
var user = {
    name: "Alice",
    isAdmin: true,
};
user = {
    name: "Bob",
    age: 40,
    isAdmin: false,
};
// 문제 2. 읽기전용(readonly) 배열을 생성하고, 배열에 직접 값을 추가하거나 변경하려고 하면 오류가 발생해야합니다.
// 숫자만 담을 수 있는 읽기 전용 배열을 작성하세요.
var numbers = [1, 2, 3, 4];
// 아래 코드는 오류가 발생해야 합니다.
// numbers.push(4);
// numbers[0] = 42;
// 문제 3. 주어진 문제 1,2 번을 푸시오
var products = [
    ["Laptop", 1000, true],
    ["Shoes", 50, false],
    ["Book", 20, true],
];
// 1. 상품 이름과 가격만 반환,리턴타입 정의필요
function getProductNamesAndPrices(products) {
    return products.map(function (_a) {
        var name = _a[0], price = _a[1];
        return [name, price];
    });
}
// 2. 재고가 있는 상품만 반환,리턴타입 정의필요
function getAvailableProducts(products) {
    return products.filter(function (_a) {
        var name = _a[0], productPrice = _a[1], isStock = _a[2];
        return isStock;
    });
}
// 테스트 코드
console.log(getProductNamesAndPrices(products));
// 기대 출력: [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]
console.log(getAvailableProducts(products));
// 기대 출력: [["Laptop", 1000, true], ["Book", 20, true]]
// 문제 4 사용자 정보를 업데이트하는 함수를 작성하세요. 나이가 제공되지 않으면 기본값 18을 사용하세요
//매개변수, 리턴 타입 정의 필요
function updateUser(user) {
    var _a;
    // 나이가 제공되지 않으면 18로 설정
    return __assign(__assign({}, user), { age: (_a = user.age) !== null && _a !== void 0 ? _a : 18 });
}
// ** 널 병합 연산자 (??)
// a ?? b 에서 a 가 null 또는 undefined 이면 b 를 사용해라 라는 뜻임
// || 연산자와 차이점은 ||의 경우 Falsy 한 값도 다 무시함
// 예를 들어
// console.log(0 || 18);    // 18  (0도 false로 봄)
// console.log("" || "hi"); // "hi"
// || 연산자는 값이 0이거나 빈문자열의 경우에도 18 을 반환하기때문에 null 과 undefined 일 때만 기본값을 지정하고 싶으면 ?? 연산자를 사용함
// 테스트 코드
console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }
// 문제 5. 아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성하세요.
// proudcts 타입정의  필요
var products2 = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shoes", price: 50, category: "Fashion" },
    { name: "Book", price: 20 },
];
//매개변수, 리턴 타입 정의 필요
function getProductsByCategory(category) {
    //   return products2.reduce((result: string[], product) => {
    //     if (product.category === category) {
    //       result.push(product.name);
    //     }
    //     return result;
    //   }, []);
    return products2
        .filter(function (product) { return product.category === category; })
        .map(function (product) { return product.name; });
}
// 테스트 코드
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
