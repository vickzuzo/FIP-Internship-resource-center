import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { User } from "../../../interfaces";
import { AdminService } from "../../../network/services";

interface IInternsData {
  interns: User[];
}

interface IMentorsData {
  mentors: User[];
}

interface IAdminsData {
  admins: User[];
}

export const useAdmin = () => {
  const [interns, setInterns] = useState([] as User[]);
  const [mentors, setMentors] = useState([] as User[]);
  const [admins, setAdmins] = useState([] as User[]);

  const { isLoading: isLoadingInterns } = useQuery<IInternsData>(
    ["get_all_interns"],
    () => AdminService.getAllUsers(),
    {
      onSuccess: (data) => {
        setInterns(data.interns);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const { isLoading: isLoadingMentors } = useQuery<IMentorsData>(
    ["get_all_mentors"],
    () => AdminService.getAllMentors(),
    {
      onSuccess: (data) => {
        setMentors(data.mentors);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const { isLoading: isLoadingAdmins } = useQuery<IAdminsData>(
    ["get_all_admins"],
    () => AdminService.getAllMentors(),
    {
      onSuccess: (data) => {
        setAdmins(data.admins);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const isLoading = isLoadingInterns || isLoadingMentors || isLoadingAdmins;

  return { isLoading, interns, mentors, admins };
};
