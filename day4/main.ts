// ----------10강 강의내용 generics-type :타입을 변수처럼 사용한다 호출할 때 타입이 정해짐

// type ArrayType<T> = T[];

// const numberArray: ArrayType<number> = [1, 2, 3];
// const stringArray: ArrayType<string> = ["a", "b"];

// 카테고리 정보
// {
//     status:"ok",
//     totalPage:2,
//     totalResult:10,
//     page:1,
//     data:[{name:"action"},{name:"romance"},{name:"family"}]
// }

// // tv 정보
// {
//     status:"ok",
//     totalPage:20,
//     totalResult:300,
//     page:1,
//     data:[{series:"논스톱",runningTime:"120"}]
// }
// type CategoryResponse ={
//     status:string,
//     totalPage:number,
//     page:number,
//     data:{name:string}[]
// }

// type MovieResponse ={
//     status:string,
//     totalPage:number,
//     page:number,
//     data:{title:string,genre:string}[]
// }

// type TApiResponse<T> ={
//       status:string,
//     totalPage:number,
//     totalResult:number,
//     page:number,
//     data:T[]
// }
// type Category={
//     name:string
// }
// type Movie={
//     title:string,
//     genre:string,
// }
// type CategoryResponse = TApiResponse<Category>
// type MovieResponse = TApiResponse<Movie>

// // 영화정보
// let MovieData:MovieResponse={
//     status:"ok",
//     totalPage:20,
//     totalResult:300,
//     page:1,
//     data:[{title:"기생충",genre:"액션"},{title:"파묘",genre:"공포"},{title:"7번방의선물",genre:"가족"}]
// }

// function useState<T>(초기화값:T):[T,함수<T>]{
//     return [값, 함수]
// }

// const [value,setValue] =useState(true)

// const [value2,setValue2] = useState<boolean>(false)

// interface Length {
//   length: number;
// }

// function getValue<T extends Length>(data: T) {
//   console.log(data.length);
// }

// console.log(getValue("hello"))

// 1. 조건부 타입

// type IsString<T> = T extends string ? "yes" : "no";

// type result1 = IsString<number>

// 2. mapped type

// type Movie = {
//   title: string;
//   genre: string;
//   rate: number;
// };
// // 모든걸 옵셔널로 바꾸거나 리드온니로 바꿔야할 때 사용함
// type Subset<T>={
// [K in keyof T]?: T[K]
// }

// const movie1: Subset<Movie> = { title: "기생충", genre: "액션" };
// const movie2: Subset<Movie> = { rate: 2 };

// interface Pair<T, U> {
//   first: T;
//   second: U;
//   display(): void; // 일반함수 선언할때 사용
//   // display:()=>void 화살표함수 선언할때 사용
// }

// const pair: Pair<string, number> = {
//   first: "noona",
//   second: 2,
//   display() {
//     console.log(this.first + "는" + this.second + "살 입니다");
//   },
// };
// pair.display();

// 강의 11 리터럴 타입
// let direction: "left" | "right";
// direction = "left";
// // direction = "up"

// type Direction = "left" | "right";
// type Margin = `margin-${Direction}`;

// let margin: Margin;
// margin = "margin-left";
// margin = "margin-up"
