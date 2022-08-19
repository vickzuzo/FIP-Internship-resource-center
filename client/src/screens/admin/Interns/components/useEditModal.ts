import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { AdminService } from "../../../../network/services";
import { validators } from "../../../../utils/validator";

export const useEditModal = (internId: string) => {
  const initialRegisterFields = {
    learningLevel: "",
  };

  const [fields, setFields] = useState(initialRegisterFields);
  const [errors, setFormError] = useState(initialRegisterFields);

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { learningLevel } = fields;

  // const { user } = useGetCurrentUser();

  const { isLoading, mutate } = useMutation(
    () => AdminService.editUser({ internId, learningLevel }),
    {
      onSuccess: (data: any) => {
        toast.success(data.message, {
          position: "top-right",
        });
      },
      onError: (err: any) => {
        toast.error(err.response.data, {
          position: "top-right",
        });
      },
    }
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  const isDisabled: boolean =
    !learningLevel || !internId || Object.values(errors).some(Boolean) || isLoading;

  return {
    onSubmit,
    handleFieldChange,
    errors,
    fields,
    isDisabled,
    isLoading,
  };
};
