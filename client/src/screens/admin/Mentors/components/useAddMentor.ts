import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { AdminService } from "../../../../network/services";
import { validators } from "../../../../utils/validator";
import { useAdmin } from "./../../helpers/useAdmin";

export const useAddMentor = () => {
  const initialRegisterFields = {
    internId: "",
    role: "",
  };

  const [fields, setFields] = useState(initialRegisterFields);
  const [errors, setFormError] = useState(initialRegisterFields);

  const { interns } = useAdmin();

  const options = interns.map((intern) => ({
    label: intern.fullName,
    value: intern._id,
  }));
  const { internId, role } = fields;

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    console.log(name);
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { isLoading, mutate } = useMutation(
    () => AdminService.addNewMentor({ internId, role }),
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

  console.log(fields);

  const isDisabled: boolean =
    !role || !internId || Object.values(errors).some(Boolean) || isLoading;

  return {
    options,
    fields,
    errors,
    handleFieldChange,
    isDisabled,
    isLoading,
    onSubmit,
  };
};
