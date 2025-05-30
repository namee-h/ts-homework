// ---------------------🔥 문제은행 11강 제네릭 타입🔥-----------------------//
// ⭐️ 문제 1. 배열의 첫 번째 요소를 반환하는 함수를 작성하세요. 배열의 요소타입에 관계없이 작동해야합니다.
// 매개변수, 리턴타입 정의 필요
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

// 테스트 코드
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined

// ⭐️ 문제 2. 숫자 배열인지 문자열 배열인지 확인하는 함수를 작성하세요.

// 매개변수, 리턴타입 정의 필요
function isNumberArray<T>(array: T[]): boolean {
  return array.every((item) => typeof item === "number");
}

// 테스트 코드
console.log(isNumberArray([1, 2, 3])); // true
console.log(isNumberArray(["a", "b", "c"])); // false
console.log(isNumberArray([])); // true (빈 배열은 숫자 배열로 간주)

// ⭐️ 문제 3. 다음 조건을 만족하는 조건부 타입과 함수를 작성하세요.
// 조건부 타입 정의
type IsArray<T> = T extends Array<any> ? true : false;

// 조건부 타입을 활용한 함수
function checkArrayType<T>(value: T): string {
  if (Array.isArray(value)) {
    return "This is an array";
  } else {
    return "This is not an array";
  }
}

// 테스트 코드
console.log(checkArrayType([1, 2, 3])); // "This is an array."
console.log(checkArrayType("Hello")); // "This is not an array."
console.log(checkArrayType({ key: "value" })); // "This is not an array."

// ⭐️ 문제 4. 객채의 모든 속성에 대해 기본값을 추가하는 타입을 작성하세요.
// Mapped Type 정의
type WithDefault<T> = {
  [K in keyof T]: [T[K], T[K]];
};

// 테스트 코드
type Original = { id: number; name: string; isActive: boolean };
type WithDefaults = WithDefault<Original>;

// 기대 결과:
// type WithDefaults = {
//   id: [number, number];
//   name: [string, string];
//   isActive: [boolean, boolean];
// }

// ⭐️ 문제 5. 키와 값을 받아 객체를 생성하는 함수를 작성하세요.
function createObject<K extends string | number | symbol, V>(
  key: K,
  value: V
): { [P in K]: V } {
  return { [key]: value } as { [P in K]: V };
}

// 테스트 코드
console.log(createObject("id", 123)); // { id: 123 }
console.log(createObject("name", "Alice")); // { name: "Alice" }

// ⭐️ 문제 6. 사용자 정보를 나타내는 객체 배열에서 특정 속성만 추출하는 함수를 작성하세요.
// 매개변수, 리턴 타입 정의 필요
function pluck<T, K extends keyof T>(array: T[], key: K): T[K][] {
  return array.map((item) => item[key]);
}

// 테스트 코드
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id")); // [1, 2]
console.log(pluck(users, "name")); // ["Alice", "Bob"]

// ---------------------🔥 문제은행 12강 리터럴 타입🔥-----------------------//
// ⭐️ 문제 1. 웹 애플리케이션에서 사용할 버튼의 스타일을 선택하는 함수를 작성하세요.

type BtnStyle = "primary" | "secondary" | "danger";
function getButtonClass(style: BtnStyle): string {
  switch (style) {
    case "primary":
      return "btn-primary";
    case "secondary":
      return "btn-secondary";
    case "danger":
      return "btn-danger";
    default:
      const _exhaustiveCheck: never = style;
      throw new Error(`지원하지 않는 스타일 : ${_exhaustiveCheck}`);
  }
}

// 테스트 코드
console.log(getButtonClass("primary")); // "btn-primary"
console.log(getButtonClass("secondary")); // "btn-secondary"
console.log(getButtonClass("danger")); // "btn-danger"
// console.log(getButtonClass("unknown" as any)); // 오류 발생

// ⭐️ 문제 2. 서버에서 데이터를 요청할때 발생하는 상태를 처리하는 함수를 작성하세요.
type ResponseStatus = "loading" | "success" | "error";

function handleRequestState(state: ResponseStatus): string {
  switch (state) {
    case "loading":
      return "Loading, please wait...";
    case "success":
      return "Request successful!";
    case "error":
      return "There was an error processing your request.";
    default:
      const _exhaustiveCheck: never = state;
      throw new Error(`지원하지 않는 상태: ${_exhaustiveCheck}`);
  }
}

// 테스트 코드
console.log(handleRequestState("loading")); // "Loading, please wait..."
console.log(handleRequestState("success")); // "Request successful!"
console.log(handleRequestState("error")); // "There was an error processing your request."
// console.log(handleRequestState("unknown" as any)); // 오류 발생
