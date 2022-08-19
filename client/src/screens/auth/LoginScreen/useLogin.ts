import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../network/services";
import { validators } from "../../../utils/validator";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const initialLoginFields = {
    email: "",
    password: "",
  };

  const [show, setShow] = useState(false);

  const handleShowToggle = () => {
    setShow(!show);
  };

  const navigate = useNavigate();

  const [fields, setFields] = useState(initialLoginFields);
  const [errors, setFormError] = useState(initialLoginFields);

  const handleFieldChange = (e: any) => {
    const { name, value } = e.target;
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const { email, password } = fields;

  const { isLoading, mutate } = useMutation(
    () => AuthService.loginUser({ email, password }),
    {
      onSuccess: (data: any) => {
        toast.success(data.message, {
          position: "top-right",
          // duration: 5000,
        });

        localStorage.setItem("access_token", data.accessToken);
        localStorage.setItem("userID", data.user._id);
        if (data.user.type !== "intern") {
          navigate("/admin/dashboard", { replace: true });
        } else {
          navigate("/me", { replace: true });
        }
      },
      onError: (err: any) => {
        toast.error(err.response.data, {
          position: "top-right",
          // duration: 5000,
        });
        if (err.response.data === "Please verify your email address.") {
          navigate("/verify-account", { replace: true });
        }
      },
    }
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  const isDisabled =
    !email || !password || Object.values(errors).some(Boolean) || isLoading;

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
