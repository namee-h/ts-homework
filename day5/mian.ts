// ------------강의 내용 13
// 1. Omit (뺀다)

interface User2 {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number; //추가되는 내용이 있으면 각각 추가해줘야함
}

// interface PublicUser {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }

// 이렇게 사용하면 문제는 없으나 서로 관계성이 잘 보이지 않음. 또한 추가되는 값이 있으면 각각 추가해줘야하는 번거로움이 있음

type PublicUser = Omit<User2, "password" | "age">;

let userProfile1: PublicUser = {
  id: 1,
  name: "dk",
  email: "dk",
  //   password: "dk",
  //   age: 15,
};

// 2. Pick (선택)
// interface BasicUserInfo {
//   id: number;
//   name: string;
// }

type BasicUserInfo = Pick<User2, "id" | "name">;

// 3. Partial ? (부분) 옵셔널로 만들어줌
interface Address {
  street: string;
  city: string;
  country: string;
}
// Partial<Address> === type Partial<T> ={[P in keyof T]?:T[P] | undefined;} 제네릭 옵셔널타입 만드는 것과 같다
const updateAddress = (address: Partial<Address>) => {
  console.log(address);
};

updateAddress({ street: "12124", city: "seoul" });

// ------------강의 내용 14

type StringNumberMap = Record<string, number>;

const example: StringNumberMap = {
  //   apple: "asdf",
  orange: 5,
  mango: 5,
};

type FruitColor = Record<"apple" | "orange" | "mango", string>;

const fruitColor: FruitColor = {
  apple: "red",
  orange: "orange",
  mango: "green",
};

type UserRole = "admin" | "user" | "guest";
// 값이 동적으로 변할 확률이 높을 때 Record type을 사용함

type RolePermission = {
  admin: string;
  user: string;
  guest: string;
};

type RolePermission2 = Record<UserRole, string>;

type Product = { id: string; name: string; price: number };

type ProductInventory = Record<string, Product>;

const inventoryResponse: ProductInventory = {
  apple: { id: "2", name: "apple", price: 2000 },
  orange: { id: "1", name: "orange", price: 2000 },
};
// 정확한 필드명을 모르지만 데이터가 오는 타입을 알고 있을때
