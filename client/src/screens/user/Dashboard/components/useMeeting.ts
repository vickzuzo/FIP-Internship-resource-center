import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { UserService } from "../../../../network/services";
import { validators } from "./../../../../utils/validator";
import moment from "moment";

export const useMeeting = (mentorId: string, onClose: () => void) => {
  const initialData = {
    date: "",
    time: "",
  };

  const [fields, setFields] = useState(initialData);
  const [errors, setFormError] = useState(initialData);

  console.log(fields);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { date, time } = fields;

  const userId = localStorage.getItem("userID") ?? "";

  const input = {
    date: moment(date).format("DD of MMMM YYYY"),
    time,
    mentorId,
    userId,
  };

  // const { data, isLoading } = useQuery(
  //   ["schedule_meeting", { userId, mentorId }],
  //   () => UserService.scheduleMeetings(input)
  // );
  const { isLoading, mutate } = useMutation(
    () => UserService.scheduleMeetings(input),
    {
      onSuccess: (data: any) => {
        toast.success(data.message, {
          position: "top-right",
          // duration: 5000,
        });
        onClose();
      },
      onError: (err: any) => {
        toast.error(err.response.data, {
          position: "top-right",
          // duration: 5000,
        });
      },
    }
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  const isDisabled =
    !date || !time || Object.values(errors).some(Boolean) || isLoading;

  return { onSubmit, isLoading, isDisabled, fields, handleFieldChange, errors };
};
