import { useGetCurrentUser } from "./../../../network";
import { validators } from "./../../../utils/validator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../../network/services";

export const useVerifyAccount = () => {
  const initialRegisterFields = {
    code: "",
  };

  const navigate = useNavigate();

  const [fields, setFields] = useState(initialRegisterFields);
  const [errors, setFormError] = useState(initialRegisterFields);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { code } = fields;

  const { user } = useGetCurrentUser();

  const { isLoading, mutate } = useMutation(
    () => AuthService.verifyAccount({ email: user.email, code }),
    {
      onSuccess: (data: any) => {
        toast.success(data.message, {
          position: "top-right",
        });
        navigate("/login", { replace: true });
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

  const isDisabled = !code || Object.values(errors).some(Boolean) || isLoading;

  return {
    onSubmit,
    handleFieldChange,
    errors,
    fields,
    isDisabled,
    isLoading,
  };
};
