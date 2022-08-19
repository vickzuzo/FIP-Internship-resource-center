export interface User {
  _id: string;
  email: string;
  fullName: string;
  type: string;
  status: string;
  isEmailVerified: boolean;
  verificationCode: string;
  learningPath: string;
  learningLevel: string;
  mentors: Array<User>;
  createdAt: string;
  updatedAt: string;
}
