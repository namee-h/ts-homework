// interface, type

// interface IStudent { //객체만 가능함
//   name: string;
//   age?: number;
//   isStudent: boolean;
// }

// type TStudent = { //원시타입도 가능, 튜플타입도 가능함
//   name: string;
//   age?: number;
// };

// let d: IStudent = { name: "asd", age: 12, isStudent: true };
// let e: TStudent = { name: "asd", age: 15 };

// interface IPerson {
//   name: string;
//   age: number;
//   gender: string;
// }
// interface IForeigner extends IPerson {
//   //interface를 사용하면 IPerson 에서 확장가능
//   //   name: string;
//   //   age: number;
//   //   gender: string;
//   nationality: string;
// }
// // type 에서 확장하는 방법
// type TForeigner = IPerson & { nationality: string; period: Date };

// let american: IForeigner = {
//   nationality: "american",
//   name: "jacob",
//   age: 23,
//   gender: "F",
// };

// ------------ 🔥 문제은행 3강 🔥 ------------------- //

// ⭐️ 문제 1. 사용자 정보를 나타내는 인터페이스와 타입을 작성하세요. 사용자 정보는 다음과 같은 구조를 가집니다.
// id: 고유 ID(숫자) | name: 이름(문자열) | email:(문자열, 선택 속성)

// 인터페이스 작성
interface IUser {
  id: number;
  name: string;
  email?: string;
}
// 타입 작성
type TUser = {
  id: number;
  name: string;
  email?: string;
};

const user: IUser = {
  id: 1,
  name: "Alice",
};

const userWithEmail: TUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

// ⭐️ 문제 2. 아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하세요
// 사용자(User)는 다음 속성을 가집니다 id: 숫자 | name: 문자열 | address: 객체 ({city:문자열, zipCode:숫자})

// User 타입을 작성하세요.
type TUser2 = {
  id: number;
  name: string;
  address: { city: string; zipCode: number };
};

// User 타입을 사용하여 아래 객체를 작성하세요.
const user2: TUser2 = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};

// ⭐️ 문제 3. 아래 조건에 따라 인터페이스를 확장하세요.
// 1. 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드세요 {id,name,email?}
// 2. 관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하세요. 관리자는 추가적으로 role 속성을 가집니다. 작성한 뒤 사용자와 관리자를 나타내는 객체를 만드세요.
// User 인터페이스 작성
interface INormalUser {
  id: number;
  name: string;
  email?: string;
}
// Admin 인터페이스 작성 (User 확장)
interface IAdminUser extends INormalUser {
  role: string;
}

const normalUser: INormalUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser: IAdminUser = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

// ⭐️ 문제 4. 아래 조건에 따라 type을 확장하세요.
// 1. 기본적으로 상품 정보를 나타내는 Product 타입을 만드세요 (id, name, price)
// 2. 할인 정보를 나타내는 DiscountedProduct 타입을 만드세요. Product를 확장하되, 추가적으로 discount 속성을 가집니다.(discount:숫자,퍼센트값)

// Product 타입 작성
type TProduct = {
  id: number;
  name: string;
  price: number;
};

// DiscountedProduct 타입 작성 (Product 확장)
type TDiscount = TProduct & { discount: number };

const normalProduct: TProduct = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct: TDiscount = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

// ⭐️ 문제 5. 아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요.
// 1. 상품(Product)은 다음 속성을 가집니다. id:숫자 | name:문자열 | price:숫자
// 2. 주문(Order)은 다음 속성을 가집니다. orderId:숫자 | products: Product 타입 배열 | totalPrice: 숫자
// Product 타입 작성
type TProduct2 = {
  id: number;
  name: string;
  price: number;
};

// Order 타입 작성
type TOrder = {
  orderId: number;
  products: TProduct2[];
  totalPrice: number;
};

// Order 타입을 사용하여 아래 객체를 작성하세요.
const order: TOrder = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};

// ⭐️ 문제 6. 아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하세요
// 1. BaseUser라는 인터페이스를 작성하세요 id:숫자 | name:문자열
// 2. AdminUser라는 타입을 작성하세요 BaseUser 확장 role:문자열
// 3. GuestUser라는 타입을 작성하세요 BaseUser 확장 visitCount: 숫자

// BaseUser 인터페이스 작성
interface BaseUser {
  id: number;
  name: string;
}

// AdminUser 타입 작성
type AdminUser = BaseUser & { role: string };

// GuestUser 타입 작성
type GuestUser = BaseUser & { visitCount: number };

// 아래 객체를 작성하세요.
const admin: AdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: GuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};

// // Female Male
// const enum Gender {
//   FEMALE = "Female",
//   MALE = "Male",
// }
// let gender: Gender = Gender.FEMALE;

// const enum SearchType {
//   Date = "Date", //0
//   KEYWORD = "Keyword", //1
//   ORDER = "Order", //2
// }
// console.log("hey", SearchType.KEYWORD);

// // void return type이 없음
// function double(a, b) {
//   console.log(a, b);
// }
// interface NewType {
//   name: string;
//   age: number;
//   double: (a: number, b: number) => void; // 함수 타입 지정할때는 void를 적어줘야함
//   getAge: (age: number) => void;
// }
// //  never return type이 있을 수가 없음
// function infinite(): never {
//   while (true) {
//     // 무한굴레일때 리턴값이 존재할 수 없음 === for(;;)
//   }
// }

// function throwError(): never {
//   throw new Error("항상 에러를 던집니다");
// }
// // type AorB = { a: number } | { b: number }; // |(또는) 유니온 타입은 a도 올수 있고 b 도 올수있고 a,b 도 올수 있음
// type AorB = { a: number; b?: never } | { a?: never; b: number }; //따라서 a,b 둘다 오는 경우를 방지하기위해 never 타입 지정함
// let c: AorB = {
//   //   a: 2,
//   b: 4,
// };

// ------------ 🔥 문제은행 4강 🔥 ------------------- //
// ⭐️ 문제 1. 작업의 상태를 나타네는 enum을 작성하고, 상태에 따라 다른 메세지를 반환하는 함수를 작성하세요.
// 작업의 상태는 다음과 같습니다:
// Pending: 대기 중
// InProgress: 진행 중
// Completed: 완료됨
// 상태에 따라 다음 메시지를 반환하세요:
// Pending: "작업이 대기 중입니다."
// InProgress: "작업이 진행 중입니다."
// Completed: "작업이 완료되었습니다."

// 작업 상태를 나타내는 enum을 작성하세요.
enum TaskStatus {
  Pending = "대기 중",
  InProgress = "진행 중",
  Completed = "완료됨",
}

function getStatusMessage(status: TaskStatus): string {
  switch (status) {
    case TaskStatus.Pending:
      return "작업이 대기 중입니다.";
    case TaskStatus.InProgress:
      return "작업이 진행 중입니다.";
    case TaskStatus.Completed:
      return "작업이 완료되었습니다.";
    default:
      return "알 수 없는 상태입니다.";
  }
}

// 테스트 코드
console.log(getStatusMessage(TaskStatus.Pending)); // "작업이 대기 중입니다."
console.log(getStatusMessage(TaskStatus.InProgress)); // "작업이 진행 중입니다."
console.log(getStatusMessage(TaskStatus.Completed)); // "작업이 완료되었습니다."

// ⭐️ 문제 2. 아래 조건에 따라 함수를 작성하세요.
// 1. 작업 상태를 나타내는 enum: Pending:작업대기중 | InProgress:작업진행중 | Completed:작업완료 | Failed:작업실패
// 2. 함수의 요구사항:
// 함수는 작업상태와 입력값(unknown)을 받습니다.
// input은 문자열이어야 합니다.
// Pending: 문자열을 모두 대문자로 변환.
// InProgress: 문자열을 소문자로 변환.
// Completed: 문자열 앞에 "완료: "를 추가.
// Failed: 에러를 발생시킵니다.
// 작업 상태가 Failed면 에러를 발생시켜야 합니다.
// 최종 결과로 가공된 문자열 배열을 반환합니다.

// 작업 상태를 나타내는 enum 작성
enum TaskStatus2 {
  Pending = "작업 대기 중",
  InProgress = "작업 진행 중",
  Completed = "작업 완료",
  Failed = "작업 실패",
}

function processTask(status: TaskStatus2, input: unknown): string {
  if (typeof input !== "string") {
    throw new Error("입력값은 문자열이어야 합니다.");
  }

  switch (status) {
    case TaskStatus2.Pending:
      return input.toUpperCase();
    case TaskStatus2.InProgress:
      return input.toLowerCase();
    case TaskStatus2.Completed:
      return `완료: ${input}`;
    case TaskStatus2.Failed:
      throw new Error("작업이 실패했습니다.");
    default:
      throw new Error("알 수 없는 상태입니다.");
  }
}
// 테스트 코드
function TestCode(label: string, fn: () => void) {
  try {
    console.log(`[${label}]`);
    fn();
  } catch (err) {
    console.error("에러:", (err as Error).message);
  }
}

TestCode("1.Pending test", () =>
  console.log(processTask(TaskStatus2.Pending, "task1"))
);
TestCode("2.InProgress test", () =>
  console.log(processTask(TaskStatus2.InProgress, "TaskA"))
);
TestCode("3.Completed test", () =>
  console.log(processTask(TaskStatus2.Completed, "Report1"))
);
TestCode("4.Failed test", () =>
  console.log(processTask(TaskStatus2.Failed, "TaskX"))
);
TestCode("5.Type mismatch test", () =>
  console.log(processTask(TaskStatus2.Pending, 42 as any))
);

// ⭐️ 문제 3. 아래 조건에 따라 코드를 작성하세요.
// 1. 로그 수준을 나타내는 enum을 작성하세요 :Info | Error | Debug
// 2. 로그함수 타입을 정의하세요. 이 함수는 다음과 같은 특징을 가집니다 : message:로그메세지(문자열) | level:로그 수준(enum 값) | 반환값이 없습니다.(void 타입)
// 3. 작성한 타입과 enum을 사용해 함수를 구현하세요: 로그수준에 따라 다른 메세지를 출력합니다.
// Info: 메세지 앞에 [INFO] 출력 | Error: 메세지 앞에 [Error] 출력 | Debug: 메세지 앞에 [DEBUG] 출력
// 로그 수준을 나타내는 enum 작성
enum LogLevel {
  Info = "INFO",
  Error = "ERROR",
  Debug = "DEBUG",
}

// 로그 함수 타입을 정의하세요.
type LogFunction = (message: string, level: LogLevel) => void;

// 로그 함수 구현
const logMessage: LogFunction = (message, level) => {
  switch (level) {
    case LogLevel.Info:
      console.log(`[INFO]${message}`);
      break;
    case LogLevel.Error:
      console.log(`[ERROR]${message}`);
      break;
    case LogLevel.Debug:
      console.log(`[DEBUG]${message}`);
      break;
    default:
      throw new Error("알 수 없는 상태입니다.");
  }
};

// 테스트 코드
logMessage("시스템이 시작되었습니다.", LogLevel.Info);
logMessage("네트워크 연결 실패!", LogLevel.Error);
logMessage("디버깅 모드 활성화", LogLevel.Debug);

// ⭐️ 문제 4. 아래 조건을 만족하는 함수를 작성하세요.
// 1. 두개의 함수(processAny와 processUnknown)를 작성합니다:
// processAny: 매개변수로 any 타입을 받습니다. 입력값의 타입에 관게없이 문자열로 변환하여 반환합니다.
// processUnknown: 매개변수로 unknown 타입을 받습니다. 입력값이 문자열이면 대문자로 변환하여 반환하고, 숫자라면 10을 곱해 반환합니다. 다른타입의 경우 에러를 발생시킵니다.

function processAny(input: any): string {
  return input.toString();
}

function processUnknown(input: unknown): string | number {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input * 10;
  } else {
    throw new Error("에러 발생");
  }
}

// 테스트 코드
console.log(processAny("hello")); // 기대 출력: "hello"
console.log(processAny(42)); // 기대 출력: "42"
console.log(processAny(true)); // 기대 출력: "true"

console.log(processUnknown("hello")); // 기대 출력: "HELLO"
console.log(processUnknown(42)); // 기대 출력: 420
console.log(processUnknown(true)); // 에러 발생
