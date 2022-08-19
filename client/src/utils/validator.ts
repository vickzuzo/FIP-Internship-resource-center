export type ValidationType = Record<
  string,
  (...args: (string | any)[]) => string | undefined
>;

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validators: ValidationType = {
  email: (email: string) => {
    if (email === "") {
      return "E-mail is required";
    }

    if (!EMAIL_PATTERN.test(email)) {
      return "E-mail is invalid";
    }
  },

  password: (password: string) => {
    if (password === "") {
      return "Password is required";
    }
    if (password.length < 6) {
      return "Password is short";
    }
  },
  fullName: (fullName: string) => {
    if (fullName === "") {
      return "Full name is required";
    }
  },
  learningPath: (learningPath: string) => {
    if (learningPath === "") {
      return "Learning path is required";
    }
  },
  learningLevel: (laerningLevel: string) => {
    if (laerningLevel === "") {
      return "Learning Level is required";
    }
  },
  code: (code: string) => {
    if (code === "") {
      return "Code is required";
    }
  },
  date: (date: string) => {
    if (date === "") {
      return "Date is required";
    }
  },
  time: (time: string) => {
    if (time === "") {
      return "Time is required";
    }
  },
  topic: (topic: string) => {
    if (topic === "") {
      return "Topic is required";
    }
  },
  mentorId: (mentorId: string) => {
    if (mentorId === "") {
      return "Mentor is required";
    }
  },
  userId: (userId: string) => {
    if (userId === "") {
      return "User is required";
    }
  },
  internId: (internId: string) => {
    if (internId === "") {
      return "Intern is required";
    }
  },
  role: (role: string) => {
    if (role === "") {
      return "Role is required";
    }
  },
  title: (title: string) => {
    if (title === "") {
      return "Title is required";
    }
  },
  description: (description: string) => {
    if (description === "") {
      return "Description is required";
    }
  },
  topics: (topics: string) => {
    return "";
  },
  duration: (duration: string) => {
    if (duration === "") {
      return "Duration is required";
    }
  },
  type: (type: string) => {
    if (type === "") {
      return "Type is required";
    }
  },
  externalLinks: (externalLinks: string) => {
    return "";
  },
};

const validateFormSubmit = (formData: Record<string, string>) => {
  let errors: any = {};
  let isValid = true;
  Object.keys(formData).forEach((key) => {
    const error = validators[key](formData[key]);
    errors[key] = error;
    if (error) {
      isValid = false;
    }
  });

  return { errors, isValid };
};

export const checkFormData = (
  formData: Record<string, string>,
  setFormError?: any
) => {
  const { isValid, errors } = validateFormSubmit(formData);

  if (setFormError) {
    setFormError(errors);
  }
  return isValid;
};
