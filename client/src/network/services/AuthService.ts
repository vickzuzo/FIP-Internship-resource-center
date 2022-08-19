import httpClient from "../api/httpclient";

export default class AuthService {
  static async loginUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const { data } = await httpClient.post("/auth/login", {
      email,
      password,
    });
    return data;
  }

  static async registerUser(input: {
    email: string;
    fullName: string;
    password: string;
    learningPath: string;
  }) {
    const { data } = await httpClient.post("/auth/register", {
      email: input.email,
      password: input.password,
      fullName: input.fullName,
      learningPath: input.learningPath,
    });
    return data;
  }

  static async verifyAccount(input: { email: string; code: string }) {
    const { data } = await httpClient.post("/auth/verify_account", {
      email: input.email,
      code: input.code,
    });
    return data;
  }

  static async getCurrentUser(input: { userId: string }) {
    const { data } = await httpClient.post("/auth/get_current_user", {
      id: input.userId,
    });
    return data;
  }
}
