import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { Challenge, Curriculum, User } from "../../interfaces";
import { AuthService, UserService } from "../services";

interface IUserData {
  user: User;
}

interface ICurriculumData {
  curriculums: Curriculum[];
}

export const useGetCurrentUser = () => {
  const [user, setUser] = useState({} as User);

  const userId = localStorage.getItem("userID") ?? "";

  const { isLoading } = useQuery<IUserData>(
    ["getCurrentUser", userId],
    () => AuthService.getCurrentUser({ userId }),
    {
      onSuccess: (data) => {
        setUser(data.user);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  return { isLoading, user };
};

export const useGetUserCurriculum = () => {
  const [curriculums, setCurriculums] = useState([] as Curriculum[]);

  const { isLoading } = useQuery<ICurriculumData>(
    ["getUserCurriculums"],
    () => UserService.getUserCurriculums(),
    {
      onSuccess: (data) => {
        setCurriculums(data.curriculums);
      },
      onError: (err: any) => {
        console.log(err);
        toast.error(err.response.data, {
          position: "top-right",
        });
      },
    }
  );
  return {
    isLoading,
    curriculums,
  };
};

export const useGetUserChallenges = () => {
  const [challenges, setChallenges] = useState([] as Challenge[]);

  const { isLoading } = useQuery<any>(
    ["getUserChallenges"],
    () => UserService.getUserChallenges(),
    {
      onSuccess: (data) => {
        setChallenges(data.challenges);
      },
    }
  );
  return {
    isLoading,
    challenges,
  };
};
