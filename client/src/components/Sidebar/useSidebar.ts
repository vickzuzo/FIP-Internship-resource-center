import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { User } from "../../interfaces";
import { AdminService } from "../../network/services";

interface IInternsData {
  interns: User[];
}

export const useSidebar = () => {
  const [interns, setInterns] = useState([] as User[]);

  const { isLoading: isLoadingInterns } = useQuery<IInternsData>(
    ["get_all_users_with_no_level"],
    () => AdminService.getNoLevelUsers(),
    {
      onSuccess: (data) => {
        setInterns(data.interns);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  return { interns, isLoadingInterns };
};
