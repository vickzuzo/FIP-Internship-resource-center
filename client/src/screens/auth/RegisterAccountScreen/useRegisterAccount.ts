import { validators } from "./../../../utils/validator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../../network/services";

export const useRegisterAccount = () => {
  const initialRegisterFields = {
    email: "",
    password: "",
    fullName: "",
    learningPath: "",
  };

  const [show, setShow] = useState(false);

  const handleShowToggle = () => {
    setShow(!show);
  };

  const navigate = useNavigate();

  const [fields, setFields] = useState(initialRegisterFields);
  const [errors, setFormError] = useState(initialRegisterFields);

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { email, password, learningPath, fullName } = fields;

  const { isLoading, mutate } = useMutation(
    () => AuthService.registerUser({ email, password, learningPath, fullName }),
    {
      onSuccess: (data: any) => {
        toast.success(data.message, {
          position: "top-right",
        });
        localStorage.setItem("userID", data.user._id);
        navigate("/verify-account", { replace: true });
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
    !email ||
    !password ||
    !learningPath ||
    !fullName ||
    Object.values(errors).some(Boolean) ||
    isLoading;

  return {
    show,
    handleShowToggle,
    onSubmit,
    handleFieldChange,
    errors,
    fields,
    isDisabled,
    isLoading,
  };
};
