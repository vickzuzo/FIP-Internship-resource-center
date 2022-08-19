import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { AdminService } from "../../../../network/services";
import { validators } from "../../../../utils/validator";

export const useAddCurriculum = (onClose: () => void) => {
  const [topicsArr, setTopicsArr] = useState([] as string[]);

  const initialRegisterFields = {
    title: "",
    description: "",
    topic: "",
    learningPath: "",
    duration: "",
    type: "course",
    externalLinks: "",
    learningLevel: "",
  };

  const [fields, setFields] = useState(initialRegisterFields);
  const [errors, setFormError] = useState(initialRegisterFields);

  const {
    title,
    description,
    learningPath,
    duration,
    type,
    topic,
    externalLinks,
    learningLevel,
  } = fields;

  const onAddTopic = (e: any) => {
    e.preventDefault();
    if (topic === "") {
      toast.error("Please enter a title to add!!", {
        position: "top-right",
      });
    } else {
      setTopicsArr([...topicsArr, topic]);
      setFields({ ...fields, topic: "" });
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validators[name](value);
    setFields((prevState) => ({ ...prevState, [name]: value }));
    setFormError((formError) => ({ ...formError, [name]: error }));
  };

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(
    () =>
      AdminService.addCurriculum({
        title,
        description,
        learningPath,
        topics: topicsArr,
        duration,
        type,
        externalLinks,
        learningLevel,
      }),
    {
      onSuccess: (data: any) => {
        toast.success(data.message, {
          position: "top-right",
        });
        queryClient.invalidateQueries(["get_all_curriculums"], {});
        onClose();
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

  const isDisabled: boolean = Object.values(errors).some(Boolean) || isLoading;

  return {
    fields,
    errors,
    handleFieldChange,
    isDisabled,
    isLoading,
    onSubmit,
    topicsArr,
    onAddTopic,
  };
};
