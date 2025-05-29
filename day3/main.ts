// ------------강의 내용 6

type Product = {
  img: string;
  name: string;
  description: string;
};
type SalesProduct = Product & {
  discountPercent: number;
};

type ApiResponse = {
  products: Product[];
  salesProducts: SalesProduct[];
};

const apiResponse: ApiResponse = {
  products: [
    { img: "pant.png", name: "나팔바지", description: "24년신상" },
    { img: "shirts.png", name: "셔츠", description: "24년 신상" },
  ],
  salesProducts: [
    {
      img: "jacket.png",
      name: "자켓",
      description: "시즌상품",
      discountPercent: 20,
    },
    {
      img: "cap.png",
      name: "모자",
      description: "시즌상품",
      discountPercent: 10,
    },
  ],
};

// ------------강의 내용 7
// type Track = {
//   title: string;
//   releaseDate: string;
// };

// type Artist = {
//   name: string;
//   releaseDate: string;
// };

// type SearchResult = Track | Artist;

// interface SearchResponse {
//   searchResult: Track | Artist;
// }

// let results: SearchResult[] = [
//   { title: "hello", releaseDate: "2024" },
//   { name: "hello", releaseDate: "2024" },
// ];

// function getName(result:Track|Artist){
//     return result.name
// }

// ------------강의 내용 8 타입좁히기
// 1. typeof(원시타입만 잡아낼수 있음)

// type SearchType = number | string;

// function searchByKeyword(keyword: SearchType): string {
//   //넘버로 들어오는 타입은 스트링으로 바꿔주기
//   if (typeof keyword === "number") {
//     return keyword.toString();
//   } else {
//     return keyword;
//   }
// }

// console.log(searchByKeyword(3), typeof searchByKeyword(3));

// 2. instanceof (객체타입 잡을수 있음 단점은 자바스크립트 내에 내장된 것만 잡을수 있음)

// type Period = {
//   start: string;
//   end: string;
// };

// type SearchType = Period | Date;

// function getDate(day: SearchType): Date {
//   if (day instanceof Date) return day;
//   return new Date(day.start);
// }

// getDate({ start: "2024-01-01", end: "2024-01-02" });

// 3. in (자주사용함)
// type Track = {
//   title: string;
//   releaseDate: string;
// };

// type Artist = {
//   name: string;
//   releaseDate: string;
// };

// function getName(result: Track | Artist) {
//   if ("title" in result) return result.title;
//   if ("name" in result) return result.name;
// }

// 4. is (타입 가드 함수를 만들때 쓰임)

// function 타입가드(변수: any):변수 is 특정타입 {
//     return 조건식;
// }

// type Track = {
//   title: string;
//   releaseDate: string;
// };

// type Artist = {
//   name: string;
//   releaseDate: string;
// };

// function isTrack(result: Track | Artist): result is Track {
//   return (result as Track).title !== undefined;
// }
// function isArtist(result: Track | Artist): result is Artist {
//   return (result as Artist).name !== undefined;
// }
// function printInfo(result: Track | Artist) {
//   if (isTrack(result)) {
//     console.log(result.title);
//   } else if (isArtist(result)) {
//     console.log(result.name);
//   }
// }

// ------------강의 내용 9 유니온 타입의 함정

type Track = {
  type: "track"; // 식별할수 있는 식별자 넣어주기
  title: string;
  releaseDate: string;
};

type Artist = {
  type: "artist";
  name: string;
  debutDate: string;
};
interface Radio {
  type: "radio";
  title: string;
  numberOfSongs: number;
}

type SearchResult = Track | Artist | Radio;
// const result: Track | Artist = {
//   type:'track',
//   title: "hey",
//   releaseDate: "2025",
//   // name: "sara",
//   // debutDate: "2024",
// };
// // 같이 작성해도 에러가 안남.

function getTypeName(result: SearchResult) {
  if (result.type === "track") return "트랙";
  else if (result.type === "artist") return "아티스트";
  // radio 타입을 지나친다
  else if (result.type === "radio") return "라디오";
  else {
    exhaustiveCheck(result);
    return "결과";
  }
  // 타입이 늘어날때 케이스처리를 하지않고 지나침을 방지해준다.
}

function exhaustiveCheck(param: never) {
  throw new Error("에러");
}
