import httpClient from "../api/httpclient";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token") ?? ""}`,
  },
};

export default class UserSrvice {
  static async scheduleMeetings({
    userId,
    mentorId,
    date,
    time,
  }: {
    userId: string;
    mentorId: string;
    time: string;
    date: string;
  }) {
    const { data } = await httpClient.post(
      "/user/schedule_meeting",
      {
        userId,
        mentorId,
        time,
        date,
      },
      config
    );
    return data;
  }

  static async getUserCurriculums() {
    const { data } = await httpClient.get("/user/get_curriculums", config);
    return data;
  }

  static async getUserChallenges() {
    const { data } = await httpClient.get("/user/get_challenges", config);
    return data;
  }
}
