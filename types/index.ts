export type RootStackParamList = {
  index: undefined;
  "(tabs)": undefined;
  onboarding: undefined;
  guide: undefined;
  notifications: undefined;
  messages: undefined;
  inquiry: undefined;
  settings: undefined;
  "partner-connect": undefined;
  faq: undefined;
  "connection-requests": undefined;
  "add-profile": undefined;
  "add-work": undefined;
  "edit-profile": undefined;
  "community-board": { boardId: string; boardTitle: string };
  "community-settings": undefined;
  "community-messages": undefined;
  "community-search": undefined;
  "actor-profiles": undefined;
  "actor-detail": { actorId: string };
  "team-profiles": undefined;
  "team-search": undefined;
  "team-register": undefined;
  "team-favorites": undefined;
  events: undefined;
  feedback: undefined;
  "feedback-request": undefined;
  "feedback-history": undefined;
  jobs: undefined;
  "job-create": undefined;
  spark: undefined;
  "spark-ranking": undefined;
  credits: undefined;
  notices: undefined;
};

export interface User {
  id: string;
  name: string;
  nickname?: string;
  profileImage?: string;
  role?: string;
  verified?: boolean;
  connectionCount?: number;
  sparkCount?: number;
  level?: number;
}

export interface Connection {
  id: string;
  user: User;
  connectedAt: string;
  status: "pending" | "accepted" | "rejected";
}

export interface WorkItem {
  id: string;
  title: string;
  director: string;
  participants: number;
  image?: string | null;
}

export type WorkCategory =
  | "movie"
  | "drama"
  | "shortFilm"
  | "webDrama"
  | "shortFormDrama"
  | "broadcast"
  | "musicVideo"
  | "advertisement"
  | "performance";

export interface WorkSection {
  category: WorkCategory;
  title: string;
  emoji: string;
  data: WorkItem[];
  columns?: 2 | 3;
  titleColor?: string;
  lineColor?: string;
}

export interface CommunityPost {
  id: string;
  category: string;
  title: string;
  content?: string;
  author?: User;
  likes: number;
  comments: number;
  createdAt?: string;
  isAnonymous?: boolean;
}

export interface CommunityBoard {
  id: string;
  title: string;
  icon: string;
  description?: string;
}

export interface Banner {
  id: string;
  title: string;
  color: string;
  route?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  icon?: string;
  route?: string | null;
  bgColor?: string;
  borderColor?: string;
}

export interface DrawerMenuItem {
  icon: string;
  title: string;
  route: string | null;
}

export interface Creator {
  id: string;
  name: string;
  image: string;
  role?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export type InquiryType = "일반문의" | "제휴문의" | "버그신고" | "기능제안";

export interface Inquiry {
  type: InquiryType;
  title: string;
  content: string;
}

export interface Profile {
  id: string;
  userId: string;
  name: string;
  bio?: string;
  gender?: "male" | "female" | "other";
  birthDate?: string;
  roles: string[];
  contactVisible?: boolean;
  phoneVisible?: boolean;
  emailVisible?: boolean;
  isActive?: boolean;
}

export interface JobPosting {
  id: string;
  title: string;
  company?: string;
  location?: string;
  category: string;
  salary?: string;
  deadline?: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  image?: string;
}

export interface Notification {
  id: string;
  type: "connection" | "message" | "like" | "comment" | "system";
  title: string;
  body?: string;
  read: boolean;
  createdAt: string;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  read: boolean;
  createdAt: string;
}
