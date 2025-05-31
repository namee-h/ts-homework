// interface Track {
//   title: string;
//   releaseDate: string;
// }

// interface Artist {
//   name: string;
//   debutDate: number;
// }
// type SearchItem<T extends Track | Artist> = T extends Track ? Track : Artist;

// const result: SearchItem<Track> = {
//   title: "hey",
//   releaseDate: "2024",
//   //   name: "noona",
//   //   debutDate: 2,
// };

// infer 추론해줘

type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

function getUserInfo() {
  return { name: "Alice", age: 25 };
}

type UserInfo = ReturnTypeOfFunction<typeof getUserInfo>;
// getUserInfo 타입을 가져다가 리턴값을 추론해서 UserInfo 에 넣어주세요! 라는 뜻임
// typeof 가 들어가는이유는 함수가 직접적으로 들어갈수 없어서 함수의 타입을 넣어야 하기때문임

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
// 비동기처리를 통해서 들어온 데이터만 들어올수있다.
type PromiseString = Promise<string>;
type Result = UnwrapPromise<PromiseString>;

// 배열안에 들어있는 타입 추론하기

// [{},{},{},]
type ElementType<T> = T extends (infer U)[] ? U : T;
type ArrayOfNumbers = number[];

type SingleNumber = ElementType<ArrayOfNumbers>;

// as

let someValue: unknown = "Hello, world!";

// console.log(someValue.length);

let newValue = someValue as string;
console.log(newValue.length);

const inputElement = document.querySelector("input"); //null element
const input = inputElement as HTMLInputElement;
input.value = "asdf";

// as 남발시 주의사항
let value: any = "I am a string!";

let numberValue = value as number;

numberValue + 1;
// 에러가 안남
