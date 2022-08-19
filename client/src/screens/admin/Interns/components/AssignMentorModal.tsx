import React from "react";
import { Button, Modal, Select } from "../../../../components";
import { ModalFormWrapper } from "./styles";
import { useAssignMentor } from "./useAssignMentor";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const AssignMentorModal = ({ isOpen, onClose, id }: IProps) => {
  const {
    errors,
    fields,
    mentors,
    isLoading,
    isDisabled,
    handleFieldChange,
    onSubmit,
  } = useAssignMentor(id);

  const options = [
    { label: "beginner", value: "beginner" },
    { label: "intermediate", value: "intermediate" },
    { label: "advanced", value: "advanced" },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalFormWrapper onSubmit={onSubmit}>
        <Select
          placeholder="select a mentor"
          label="Select Mentor"
          name="mentorId"
          options={mentors}
          onChange={handleFieldChange}
          // onChange={handleFieldChange}
          // value={fields.mentorId}
          error={errors.mentorId}
        />
        <Select
          placeholder="select a mentor"
          label="Select User Learning Level"
          name="learningLevel"
          options={options}
          onChange={handleFieldChange}
          // onChange={handleFieldChange}
          // value={fields.mentorId}
          error={errors.mentorId}
        />

        <Button isLoading={isLoading} disabled={isDisabled} type="submit">
          Schedule Metting
        </Button>
      </ModalFormWrapper>
    </Modal>
  );
};

export default AssignMentorModal;
