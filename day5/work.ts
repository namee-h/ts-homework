// ---------------------🔥 문제은행 13강 유틸리티 타입 🔥-----------------------//
// ⭐️ 문제 1. 회원가입 폼 데이터의 일부만 채워진 상태를 처리하기 위해, 모든 속성이 선택적인 타입을 생성하는 문제입니다.
type User = {
  name: string;
  email: string;
  password: string;
};

// 함수 작성
function updateUserForm(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

// 테스트 코드
const currentUser = {
  name: "Alice",
  email: "alice@example.com",
  password: "1234",
};
const updatedForm = { email: "new-email@example.com" };

console.log(updateUserForm(currentUser, updatedForm));
// 기대 출력: { name: "Alice", email: "new-email@example.com", password: "1234" }

// ⭐️ 문제 2. 프로필 페이지에 표시할 사용자 정보에서 필요한 속성만 선택하는 문제입니다.
type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
};

// 함수 작성
function getProfileSummary(
  user: Pick<UserProfile, "id" | "name">
): Pick<UserProfile, "id" | "name"> {
  return { id: user.id, name: user.name };
}

// 테스트 코드
const userProfile = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: "123 Main St",
};

console.log(getProfileSummary(userProfile));
// 기대 출력: { id: 1, name: "Alice" }

// ⭐️ 문제 3. 데이터베이스 저장 시 민감한 정보를 제외하는 문제입니다.
type User3 = {
  name: string;
  email: string;
  password: string;
  role: string;
};

// 함수 작성
type SafeUser = Omit<User3, "password">;
function filterSensitiveInfo(user: User3): SafeUser {
  const { password, ...safeData } = user;
  return safeData;
}

// 테스트 코드
const userInfo = {
  name: "Alice",
  email: "alice@example.com",
  password: "1234",
  role: "admin",
};

console.log(filterSensitiveInfo(userInfo));
// 기대 출력: { name: "Alice", email: "alice@example.com", role: "admin" }

// ⭐️ 문제 4. 팀 관리 시스템을 설계하세요. 각 팀은 여러 멤버로 구성되며, 관리자는 특정 역할에 따라 데이터를 조작할 수 있습니다.
type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

// 1. `createTeamMember` 함수 작성
type CreateTeamMemberInput = Partial<Omit<TeamMember, "id">> & { id: number };

function createTeamMember(data: CreateTeamMemberInput): TeamMember {
  const defaultMember: TeamMember = {
    id: data.id,
    name: "",
    email: "",
    role: "developer",
    isActive: true,
  };
  return { ...defaultMember, ...data };
}

// 2. `filterTeamMembers` 함수 작성
function filterTeamMembers(
  members: TeamMember[],
  filter: Pick<TeamMember, "role" | "isActive">
): TeamMember[] {
  return members.filter(
    (member) =>
      member.role === filter.role && member.isActive === filter.isActive
  );
}

// 3. `removeSensitiveInfo` 함수 작성
type SafeTeamMember = Omit<TeamMember, "email">;

function removeSensitiveInfo(members: TeamMember[]): SafeTeamMember[] {
  return members.map(({ email, ...rest }) => rest);
}

// 테스트 코드
const members: TeamMember[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: "developer",
    isActive: true,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role: "designer",
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    role: "manager",
    isActive: true,
  },
];

// 1. 새 팀원 생성
const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
// 기대 출력: { id: 4, name: "Diana", email: "", role: "developer", isActive: true }

// 2. 필터링된 팀원 목록
const activeDesigners = filterTeamMembers(members, {
  role: "designer",
  isActive: true,
});
console.log(activeDesigners);
// 기대 출력: []

// 3. 민감한 정보 제거
const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
// 기대 출력: [{ id: 1, name: "Alice", role: "developer", isActive: true }, ...]

// ---------------------🔥 문제은행 14강 Record 타입 🔥-----------------------//
// ⭐️ 문제 1. 전자상거래 플랫폼에서 지역 코드에 따른 배송비를 계산하는 로직을 작성하세요.
// 지역 코드 타입 정의
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

// 배송비 데이터 정의
const shippingCosts: Record<RegionCode, number> = {
  US: 10,
  EU: 15,
  ASIA: 20,
  AFRICA: 25,
};

// 배송비 계산 함수 작성
function calculateShippingCost(
  region: RegionCode,
  costs: Record<RegionCode, number>
): number {
  if (region in costs) {
    return costs[region];
  } else throw new Error(`지원하지 않는 지역코드: ${region}`);
}

// 테스트 코드
console.log(calculateShippingCost("US", shippingCosts)); // 10
console.log(calculateShippingCost("EU", shippingCosts)); // 15
console.log(calculateShippingCost("ASIA", shippingCosts)); // 20
console.log(calculateShippingCost("AFRICA", shippingCosts)); // 25
// console.log(calculateShippingCost("AUSTRALIA" as any, shippingCosts)); // 에러 발생

// ⭐️ 문제 2. 학생들의 점수를 기록하고 평균 점수를 계산하는 문제입니다.

// 학생 점수 데이터 정의
const scores: Record<string, number> = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
};

// 평균 점수 계산 함수 작성
function calculateAverageScore(scores: Record<string, number>): number {
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
  return total / Object.keys(scores).length;
}

// 테스트 코드
console.log(calculateAverageScore(scores)); // 85

// ⭐️ 문제 3. 쇼핑몰에서 각 제품의 이름과 가격을 매핑하고, 특정 제품의 가격을 업데이트흐는 기능을 구현하세요.
// 제품 가격 데이터 정의
const prices: Record<string, number> = {
  Laptop: 1000,
  Phone: 500,
  Tablet: 300,
};

// 가격 업데이트 함수 작성
function updateProductPrice(
  prices: Record<string, number>,
  product: string,
  newPrice: number
): Record<string, number> {
  return { ...prices, [product]: newPrice };
}

// 테스트 코드
console.log(updateProductPrice(prices, "Phone", 550));
// 기대 출력: { Laptop: 1000, Phone: 550, Tablet: 300 }
