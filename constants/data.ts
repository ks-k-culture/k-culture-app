import type {
  Banner,
  CommunityBoard,
  CommunityPost,
  Creator,
  DrawerMenuItem,
  FAQItem,
  InquiryType,
  MenuItem,
  WorkItem,
} from "@/types";

export const BANNERS: Banner[] = [
  { id: "1", title: "K-Culture 서비스 1:1 문의하기", color: "#EAB308" },
  { id: "2", title: "새로운 작품 등록하기", color: "#8B5CF6" },
  { id: "3", title: "인기 배우 프로필 보기", color: "#EC4899" },
];

export const MENU_BUTTONS_ROW1: MenuItem[] = [
  { id: "1", title: "배우 찾기", route: "/actor-profiles" },
  { id: "2", title: "팀 찾기", route: "/team-profiles" },
];

export const MENU_BUTTONS_ROW2: MenuItem[] = [
  { id: "1", title: "이벤트", bgColor: "#3D3A1A", borderColor: "#6B6B3D", route: "/events" },
  { id: "2", title: "피드백", bgColor: "#1A3D4D", borderColor: "#2D5A6B", route: "/feedback" },
  { id: "3", title: "구인공고", bgColor: "#2A2A2A", borderColor: "#4A4A4A", route: "/jobs" },
];

export const COMMUNITY_POSTS: CommunityPost[] = [
  { id: "1", category: "자유 게시판", title: "[작업일지] 게시 오류 안내", likes: 1, comments: 1 },
  { id: "2", category: "질문 게시판", title: "봄풀 추천 부탁드립니다!", likes: 2, comments: 0 },
  { id: "3", category: "현장 스토리", title: "나만아는실수", likes: 2, comments: 0 },
  { id: "4", category: "신문고 게시판", title: "아직도 현장에서 군기잡는팀 있다는데...", likes: 4, comments: 0 },
];

export const CREATORS: Creator[] = [
  { id: "1", name: "김민수", image: "https://picsum.photos/100?random=1" },
  { id: "2", name: "이영희", image: "https://picsum.photos/100?random=2" },
  { id: "3", name: "박철수", image: "https://picsum.photos/100?random=3" },
  { id: "4", name: "정수진", image: "https://picsum.photos/100?random=4" },
  { id: "5", name: "최민호", image: "https://picsum.photos/100?random=5" },
  { id: "6", name: "강지은", image: "https://picsum.photos/100?random=6" },
  { id: "7", name: "윤서연", image: "https://picsum.photos/100?random=7" },
  { id: "8", name: "임재현", image: "https://picsum.photos/100?random=8" },
];

export const NEW_WORKS: WorkItem[] = [
  { id: "1", title: "가족계획 시즌2", director: "김정민", participants: 0 },
  { id: "2", title: "소년시대 시즌2", director: "이명우", participants: 0 },
  { id: "3", title: "지금 불륜이 문제가...", director: "이창희", participants: 0 },
];

export const MOVIES: WorkItem[] = [
  { id: "1", title: "새해전야", director: "홍지영", participants: 1, image: "https://picsum.photos/200/300?random=10" },
  {
    id: "2",
    title: "말할 수 없는 비밀",
    director: "서유민",
    participants: 0,
    image: "https://picsum.photos/200/300?random=11",
  },
  {
    id: "3",
    title: "에스퍼의 빛",
    director: "정재훈",
    participants: 1,
    image: "https://picsum.photos/200/300?random=12",
  },
];

export const DRAMAS: WorkItem[] = [
  {
    id: "1",
    title: "펜트하우스 3",
    director: "주동민",
    participants: 2,
    image: "https://picsum.photos/200/300?random=20",
  },
  { id: "2", title: "넥오프", director: "박현석", participants: 4, image: "https://picsum.photos/200/300?random=21" },
  {
    id: "3",
    title: "버터플라이",
    director: "키타오 사쿠라이",
    participants: 5,
    image: "https://picsum.photos/200/300?random=22",
  },
  {
    id: "4",
    title: "LTNS",
    director: "임대형, 전고운",
    participants: 3,
    image: "https://picsum.photos/200/300?random=23",
  },
  {
    id: "5",
    title: "너와 나의 경찰수업",
    director: "김병수",
    participants: 2,
    image: "https://picsum.photos/200/300?random=24",
  },
  {
    id: "6",
    title: "마이 네임",
    director: "김진민",
    participants: 2,
    image: "https://picsum.photos/200/300?random=25",
  },
];

export const SHORT_FILMS: WorkItem[] = [
  { id: "1", title: "절규", director: "김은성", participants: 1, image: null },
  { id: "2", title: "갈비", director: "송에스더", participants: 1, image: null },
  {
    id: "3",
    title: "우라까이 하루키",
    director: "김초희",
    participants: 1,
    image: "https://picsum.photos/200/300?random=30",
  },
  { id: "4", title: "거울: 비춰진 진실", director: "박경서", participants: 2, image: null },
  { id: "5", title: "복숭아", director: "박경서", participants: 1, image: null },
  { id: "6", title: "울고싶은 날", director: "안찬우", participants: 1, image: null },
];

export const WEB_DRAMAS: WorkItem[] = [
  { id: "1", title: "카페인 로맨스", director: "", participants: 2, image: "https://picsum.photos/200/300?random=40" },
  { id: "2", title: "짧은대본 망한소개팅", director: "짧은대본", participants: 1, image: null },
  { id: "3", title: "정글기획 생존기", director: "", participants: 1, image: null },
  {
    id: "4",
    title: "무장해제 로맨스",
    director: "정다미",
    participants: 1,
    image: "https://picsum.photos/200/300?random=41",
  },
  { id: "5", title: "하트웨이", director: "이예진", participants: 1, image: "https://picsum.photos/200/300?random=42" },
  {
    id: "6",
    title: "러브 인 블랙홀",
    director: "홍충기",
    participants: 1,
    image: "https://picsum.photos/200/300?random=43",
  },
  {
    id: "7",
    title: "시간을 담은 카페",
    director: "김민수",
    participants: 2,
    image: "https://picsum.photos/200/300?random=44",
  },
];

export const SHORT_FORM_DRAMAS: WorkItem[] = [
  {
    id: "1",
    title: "러브웨이브",
    director: "이남철",
    participants: 1,
    image: "https://picsum.photos/200/300?random=50",
  },
  {
    id: "2",
    title: "죽느니 퇴사하겠습니다",
    director: "안소희",
    participants: 0,
    image: "https://picsum.photos/200/300?random=51",
  },
  {
    id: "3",
    title: "로미오와 로미오와 줄리엣",
    director: "전보람",
    participants: 1,
    image: "https://picsum.photos/200/300?random=52",
  },
  { id: "4", title: "악센트", director: "박태민", participants: 1, image: "https://picsum.photos/200/300?random=53" },
  {
    id: "5",
    title: "더블 플레이",
    director: "박태민",
    participants: 1,
    image: "https://picsum.photos/200/300?random=54",
  },
  {
    id: "6",
    title: "폭풍같은 결혼생활",
    director: "이창우",
    participants: 1,
    image: "https://picsum.photos/200/300?random=55",
  },
  {
    id: "7",
    title: "첫사랑 시즌2",
    director: "김지훈",
    participants: 3,
    image: "https://picsum.photos/200/300?random=56",
  },
];

export const BROADCASTS: WorkItem[] = [
  {
    id: "1",
    title: "펜트하우스",
    director: "김남호",
    participants: 1,
    image: "https://picsum.photos/200/300?random=60",
  },
  { id: "2", title: "슈퍼액션", director: "김종기", participants: 1, image: "https://picsum.photos/200/300?random=61" },
  {
    id: "3",
    title: "인더숲 BTS편",
    director: "박준수, 기항미",
    participants: 2,
    image: "https://picsum.photos/200/300?random=62",
  },
  { id: "4", title: "EBS 다큐프라임", director: "", participants: 1, image: "https://picsum.photos/200/300?random=63" },
  {
    id: "5",
    title: "무엇이든 물어보세요",
    director: "",
    participants: 1,
    image: "https://picsum.photos/200/300?random=64",
  },
  {
    id: "6",
    title: "그것이 알고싶다",
    director: "",
    participants: 1,
    image: "https://picsum.photos/200/300?random=65",
  },
];

export const MUSIC_VIDEOS: WorkItem[] = [
  { id: "1", title: "안녕멜로디", director: "비안", participants: 1, image: "https://picsum.photos/200/300?random=70" },
  {
    id: "2",
    title: "forbidden midnight",
    director: "공승현",
    participants: 1,
    image: "https://picsum.photos/200/300?random=71",
  },
  {
    id: "3",
    title: "입술에 걸린 말",
    director: "류수(공승현)",
    participants: 1,
    image: "https://picsum.photos/200/300?random=72",
  },
  {
    id: "4",
    title: "haedache",
    director: "류수(공승현)",
    participants: 1,
    image: "https://picsum.photos/200/300?random=73",
  },
  {
    id: "5",
    title: "기상청",
    director: "류수(공승현)",
    participants: 1,
    image: "https://picsum.photos/200/300?random=74",
  },
  { id: "6", title: "마크툽-시작의아이", director: "김경선", participants: 1, image: null },
];

export const ADVERTISEMENTS: WorkItem[] = [
  { id: "1", title: "농심 보노스프", director: "", participants: 1, image: "https://picsum.photos/200/300?random=80" },
  { id: "2", title: "유니세프", director: "", participants: 1, image: null },
  {
    id: "3",
    title: "77인의 써보고 유플추천드림",
    director: "",
    participants: 1,
    image: "https://picsum.photos/200/300?random=81",
  },
  { id: "4", title: "sk하이닉스", director: "방준영", participants: 1, image: null },
  { id: "5", title: "북두의 권", director: "", participants: 1, image: null },
  { id: "6", title: "LG에너지솔루션", director: "유승엽", participants: 1, image: null },
  { id: "7", title: "삼성전자", director: "이민호", participants: 2, image: "https://picsum.photos/200/300?random=82" },
];

export const PERFORMANCES: WorkItem[] = [
  {
    id: "1",
    title: "쉬어매드니스",
    director: "이레아, 김서현",
    participants: 1,
    image: "https://picsum.photos/200/300?random=90",
  },
  { id: "2", title: "응답하라썬니", director: "", participants: 1, image: null },
  { id: "3", title: "택시드리벌", director: "", participants: 1, image: null },
  { id: "4", title: "칼레야 부탈소로", director: "김재청 연출", participants: 1, image: null },
  { id: "5", title: "프리즌 더 라스트", director: "", participants: 1, image: null },
  { id: "6", title: "반쪽이전", director: "권호성 연출", participants: 1, image: null },
  { id: "7", title: "태양의 꽃", director: "추정화 연출", participants: 1, image: null },
  { id: "8", title: "졸풍목우", director: "구태한 연출", participants: 1, image: null },
  {
    id: "9",
    title: "지우는 선",
    director: "한은성",
    participants: 1,
    image: "https://picsum.photos/200/300?random=91",
  },
];

export const DRAWER_MENU_ITEMS: DrawerMenuItem[] = [
  { icon: "information-circle-outline", title: "토이드 가이드", route: "/guide" },
  { icon: "megaphone-outline", title: "공지사항", route: "/notices" },
  { icon: "help-circle-outline", title: "자주묻는질문", route: "/faq" },
  { icon: "chatbox-outline", title: "문의하기", route: "/inquiry" },
  { icon: "settings-outline", title: "설정", route: "/settings" },
];

export const COMMUNITY_BOARDS: CommunityBoard[] = [
  { id: "free", title: "자유 게시판", icon: "chatbubbles-outline" },
  { id: "question", title: "질문 게시판", icon: "help-circle-outline" },
  { id: "story", title: "현장 스토리", icon: "book-outline" },
  { id: "report", title: "신문고 게시판", icon: "megaphone-outline" },
  { id: "review", title: "작품 후기", icon: "star-outline" },
  { id: "job", title: "구인/구직", icon: "briefcase-outline" },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "1",
    question: "등록한 작품을 삭제하고 싶어요. 어떻게 해야 하나요?",
    answer:
      "두드림에서는 누구나 자유롭게 자신의 필모그래피를 등록할 수 있습니다.\n다만, 등록한 작품을 삭제할 경우에는 서비스 안정성과 정확한 기록 관리를 위해 고객센터를 통해 별도로 요청해주셔야합니다.\n확인 절차를 거친 뒤 신속하게 처리해드리고 있습니다.\n(※ 불편을 드려 죄송하지만, 보다 신뢰할 수 있는 필모그래피 환경을 만들기 위함이니 양해 부탁드립니다.)",
  },
  {
    id: "2",
    question: "두드림에 없는 직군이나 파트가 있어요. 추가 요청이 가능한가요?",
    answer: "물론입니다! 앱 내 문의하기를 통해 제안해주시면, 검토 후 반영하도록 하겠습니다.",
  },
  {
    id: "3",
    question: "두드림 이용은 무료인가요?",
    answer:
      "기본적인 서비스(필모그래피 관리, 일촌 맺기 등)는 무료로 제공됩니다. 일부 고급 기능(광고 노출, 비일촌 메시지 보내기 등)은 유료로 제공됩니다.",
  },
  {
    id: "4",
    question: "내 필모그래피를 수정하거나 삭제할 수 있나요?",
    answer: "네, 가능합니다. 마이페이지에서 본인이 등록한 필모그래피를 자유롭게 수정하거나 삭제할 수 있습니다.",
  },
  {
    id: "5",
    question: "일촌이 아닌 사람에게 메시지를 보내려면 어떻게 하나요?",
    answer: "일촌이 아닌 사용자에게 메시지를 보내기 위해서는 유료 플랜을 통해 별도로 메시지 전송권을 구매해야 합니다.",
  },
  {
    id: "6",
    question: "일촌은 무엇인가요?",
    answer:
      "일촌은 서로 연결되어 직접 메시지를 주고받을 수 있는 관계를 의미합니다. 일촌을 맺으면 상대방의 경력 변동이나 활동 소식도 쉽게 확인할 수 있습니다.",
  },
  {
    id: "7",
    question: "두드림에 가입하려면 어떤 자격이 필요한가요?",
    answer:
      "영화, 드라마, 광고, 방송 등 영상 산업에 참여한 이력이 있다면 누구나 가입할 수 있습니다. 분야별 신입도 환영합니다.",
  },
  {
    id: "8",
    question: "필모그래피 인증은 어떻게 이루어지나요?",
    answer:
      "프로젝트에 참여한 증빙 자료(예: 엔딩크레딧 사진)를 업로드하면, 관리자가 확인 후 인증해드립니다. 작품에 크레딧이 보이는 상업 작품의 경우 이름과 역할만 입력해도 자동 인증 절차가 진행됩니다.",
  },
  {
    id: "9",
    question: "두드림은 어떤 서비스인가요?",
    answer:
      "두드림은 영화, 드라마, 광고 등 영상 산업 종사자들이 자신의 필모그래피를 정리하고, 동료들과 네트워킹하며, 경력을 인증할 수 있는 플랫폼입니다.",
  },
];

export const INQUIRY_TYPES: InquiryType[] = ["일반문의", "제휴문의", "버그신고", "기능제안"];

export const PROFILE_ROLES = [
  "배우",
  "감독",
  "프로듀서",
  "작가",
  "촬영감독",
  "조명감독",
  "미술감독",
  "의상",
  "분장",
  "편집",
  "음향",
  "VFX",
  "스턴트",
  "매니저",
  "스태프",
  "기타",
];

export const FILMOGRAPHY_CATEGORIES = [
  { name: "장편영화", count: 0 },
  { name: "단편영화", count: 0 },
  { name: "드라마/OTT", count: 0 },
  { name: "웹드라마", count: 0 },
  { name: "숏폼 드라마", count: 0 },
  { name: "방송", count: 0 },
  { name: "M/V", count: 0 },
  { name: "광고", count: 0 },
  { name: "공연", count: 0 },
];

export const SEARCH_USERS = [
  { id: "1", name: "박소영", username: "sjsy8356", image: null },
  { id: "2", name: "박소영희", username: "soyoung123", image: null },
];

export const SEARCH_WORKS = [
  { id: "1", title: "귀울음", director: "박소영", image: null },
  {
    id: "2",
    title: "범죄도시",
    director: "강윤성",
    image:
      "https://i.namu.wiki/i/lTypMqs0MnVWMJYTdQ53PB6TNdwc7IcIhY4Nc9SQwsMLZH7n1H9qiLYVT8p2c_qD60r4g-c3WgZOH20DGmjBhw.webp",
  },
  {
    id: "3",
    title: "범죄도시2",
    director: "이상용",
    image:
      "https://i.namu.wiki/i/v00I9E5N5hwU-A2BtmWNMPxLxOG2pBtqh1kH53e6T7hVOK9Q-5iSPG4xMiRgGQUNy1lSNl4x5G3nXLZ9_hWAZg.webp",
  },
  {
    id: "4",
    title: "범죄도시3",
    director: "이상용",
    image:
      "https://i.namu.wiki/i/0cN8tWHtlIR5dBQGHNcMI4ZGpUCwsijBdUP0QKdYejKCyJfcXFYiIZvqRlJJXlb_ZXMQNZ2eEz47SLwGg8r2Xw.webp",
  },
  {
    id: "5",
    title: "범죄도시4",
    director: "허명행",
    image:
      "https://i.namu.wiki/i/W7nbrA5d6G8jLpB3XiNMJGvGmBZzjGM3U0w2lBfKcG8Y1L8p1lZfD8yKjKv2L8G8mT2kLhGq7R8bMnZ9_KKKKA.webp",
  },
];

export const COMMUNITY_BOARD_LIST = [
  { id: "free", icon: "chatbox-outline", title: "자유 게시판" },
  { id: "field", icon: "grid-outline", title: "현장 스토리" },
  { id: "student", icon: "school-outline", title: "학생 게시판" },
  { id: "question", icon: "help-circle-outline", title: "질문 게시판" },
  { id: "report", icon: "megaphone-outline", title: "신문고 게시판" },
  { id: "market", icon: "storefront-outline", title: "판매/나눔 게시판" },
];

export const COMMUNITY_POSTS_DETAIL = [
  {
    id: "1",
    author: "동동이",
    role: "연출",
    color: "#F472B6",
    board: "자유 게시판",
    title: "새해복 많이 받으세요~!",
    content: "2026년도 무탈히 행복한 한해 되세요!",
    likes: 2,
    comments: 0,
    time: "15시간 전",
  },
  {
    id: "2",
    author: "산책하는 코알라 362",
    role: "조명",
    color: "#FB923C",
    board: "현장 스토리",
    title: "나만아는실수",
    content:
      "팀 형들이랑 밥먹는데 점심 미리 먹었는데\n혼자만 먹었다고 뭐라할까봐 또 먹었어요;\n\n왜 실수냐.. 조명팀 단체활동 너무 심해서 실수로 생각 한번 해봤어용",
    likes: 0,
    comments: 0,
    time: "1시간 전",
  },
];

export const PARTNERS = ["두드림 공식 파트너"];
