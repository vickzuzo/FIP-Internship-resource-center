import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Curriculum } from "../../../interfaces";
import { AdminService } from "../../../network/services";

interface IData {
  curriculums: Curriculum[];
}

export const useGetCurriculums = () => {
  const [curriculums, setCurriculums] = useState([] as Curriculum[]);

  const { isLoading } = useQuery<IData>(
    ["get_all_curriculums"],
    () => AdminService.getAllCurriculums(),
    {
      onSuccess: (data) => {
        setCurriculums(data.curriculums);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  return { curriculums, isLoading };
};
