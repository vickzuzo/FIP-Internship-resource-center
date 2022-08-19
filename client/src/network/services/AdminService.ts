import httpClient from "../api/httpclient";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token") ?? ""}`,
  },
};

export default class AdminService {
  static async getAllUsers() {
    const { data } = await httpClient.get("/admin/get_all_users", config);
    return data;
  }
  static async getAllMentors() {
    const { data } = await httpClient.get("/admin/get_all_mentors", config);
    return data;
  }

  static async assignMentor(input: {
    mentorId: string;
    internId: string;
    learningLevel: string;
  }) {
    const { data } = await httpClient.post(
      "/admin/assign_mentor",
      input,
      config
    );
    return data;
  }

  static async editUser(input: { learningLevel: string; internId: string }) {
    const { data } = await httpClient.post("/admin/edit_user", input, config);
    return data;
  }

  static async addNewMentor(input: { internId: string; role: string }) {
    const { data } = await httpClient.post("/admin/add_new_mentor", input, config);
    return data;
  }
}
