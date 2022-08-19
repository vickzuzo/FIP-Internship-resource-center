import React from "react";
import { Button, Modal, Select } from "../../../../components";
import { ModalFormWrapper } from "./styles";
import { useEditModal } from './useEditModal';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  id: string;
}

const EditUserModal = ({ isOpen, onClose, id }: IProps) => {
  const {
    errors,
    fields,
    isLoading,
    isDisabled,
    handleFieldChange,
    onSubmit,
  } = useEditModal(id);

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
          name="learningLevel"
          options={options}
          onChange={handleFieldChange}
          // onChange={handleFieldChange}
          // value={fields.mentorId}
          error={errors.learningLevel}
        />

        <Button isLoading={isLoading} disabled={isDisabled} type="submit">
          Update User
        </Button>
      </ModalFormWrapper>
    </Modal>
  );
};

export default EditUserModal;
