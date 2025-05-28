// ---------------------🔥 문제은행 6강 🔥-----------------------//
// ⭐️ 문제 1. 상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하시오.

type TProduct = {
  id: number;
  name: string;
  price: number;
};

type TDiscount = {
  discountPercentage: number;
};

type DiscountProduct = TProduct & TDiscount;

function calculateDiscountedPrice(item: DiscountProduct): number {
  return item.price - (item.price * item.discountPercentage) / 100;
}
// 테스트 코드
const discountedProduct = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct)); // 800

// ⭐️ 문제 2. 아래의 조건에 따라 복합데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하세요.

type ContactInfo = {
  phone: string;
  address: string;
};

type OrderInfo = {
  orderId: number;
  items: string[];
};

type orderDetailsInfo = ContactInfo & OrderInfo;

function printOrderSummary(order: orderDetailsInfo): string {
  return `Order ${order.orderId} (Phone: ${order.phone})`;
}

// 테스트 코드
const orderDetails = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails)); // "Order 2023 (Phone: 123-456-7890)"

// ⭐️ 문제 3. 사용자 프로필과 활동 기록 병합
type Profile = {
  id: number;
  name: string;
  email: string;
};
type Activity = {
  lastLogin: Date;
  actions: string[];
};
type MergedData = Profile & Activity;

// 사용자 데이터를 병합하는 함수
function mergeUserData(profile: Profile, activity: Activity): MergedData {
  return { ...profile, ...activity };
}

// 사용자 요약 정보를 반환하는 함수
function getUserSummary(user: MergedData): string {
  return `사용자 ${user.id} - ${user.name} (${
    user.email
  }) - 마지막 로그인: ${user.lastLogin.toISOString()}`;
}

// 테스트 코드
const profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
// 출력 예시: "사용자 1 - Alice (alice@example.com) - 마지막 로그인: 2024-01-01T10:00:00Z"

// ---------------------🔥 문제은행 9강 🔥-----------------------//

// ⭐️ 문제 1. 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하세요
// 매개변수, 리턴타입 정의필요
type InputType = number[] | string[] | { message: string };

function processInput(input: InputType): string | number {
  if (Array.isArray(input)) {
    if (input.every((item) => typeof item === "number")) {
      return input.reduce((sum, val) => sum + val, 0);
    } else if (input.every((item) => typeof item === "string")) {
      return input.join("");
    } else {
      throw new Error("배열의 요소 타입이 올바르지 않습니다.");
    }
  } else if (
    typeof input === "object" &&
    input !== null &&
    "message" in input
  ) {
    return input.message.toUpperCase();
  } else {
    throw new Error("에러: 해당 타입은 지원하지 않습니다.");
  }
}

// 테스트 코드
console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"])); // "helloworld"
console.log(processInput({ message: "TypeScript" })); // "TYPESCRIPT"
// console.log(processInput(42 as any)); // 에러 발생

// ⭐️ 문제 2. 다음 조건을 만족하는 코드를 작성하세요.
class Car {
  public brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
}
class Bike {
  constructor(public type: string) {
    this.type = type;
  }
}

type vehicle = Car | Bike;
function processVehicle(vehicle: vehicle): string {
  if (vehicle instanceof Car) {
    return vehicle.brand.toUpperCase();
  } else if (vehicle instanceof Bike) {
    return `Bike: ${vehicle.type}`;
  } else {
    throw new Error("유효하지 않은 Vehicle 타입입니다.");
  }
}

// 테스트 코드
const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
// console.log(processVehicle("unknown" as any)); // 에러 발생

// ⭐️ 문제 3. in을 활용한 사용자 관리
type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
  if ("permissions" in user) return user.permissions.join(",");
  else if ("email" in user) return user.email;
  else throw new Error("에러 발생");
}

// 테스트 코드
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"
console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"
// console.log(processUser({ type: "guest" } as any)); // 에러 발생

// ⭐️ 문제 4. 아래와 같은 유니온 타입을 처리하는 함수를 작성하세요
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

// 사용자 정의 타입 가드
function isRectangle(shape: unknown): shape is Rectangle {
  return (shape as Rectangle).height !== undefined;
}

function calculateArea(shape: Rectangle | Circle): number {
  if (isRectangle(shape)) {
    return shape.height * shape.width;
  } else {
    return Math.PI * shape.radius * shape.radius;
  }
}

// 테스트 코드
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // 153.93804002589985 (대략 π * 7²)

// ⭐️ 문제 5. 유니온 타입의 문제점과 해결 방법
type Shape =
  | { type: "square"; side: number }
  | { type: "circle"; radius: number };

// 넓이를 계산하는 함수
function calculateArea2(shape: Shape): number {
  if (shape.type === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.type === "square") {
    return shape.side ** 2;
  } else {
    const _exhaustiveCheck: never = shape;
    throw new Error(`알수 없는 도형 타입: ${_exhaustiveCheck}`);
  }
}

// 테스트 코드
console.log(calculateArea2({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea2({ type: "circle", radius: 7 })); // 기대 출력: 153.93804002589985
