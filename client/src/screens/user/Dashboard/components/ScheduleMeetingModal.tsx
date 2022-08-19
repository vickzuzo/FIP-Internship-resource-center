import React from "react";
import { Button, Input, Modal } from "../../../../components";
import { ModalFormWrapper } from './styles';
import { useMeeting } from "./useMeeting";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  mentorId: string;
}

const ScheduleMeetingModal = ({ isOpen, onClose, mentorId }: IProps) => {
  const { onSubmit, isLoading, isDisabled, fields, handleFieldChange, errors } =
    useMeeting(mentorId);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalFormWrapper onSubmit={onSubmit}>
        <Input
          placeholder="select available date"
          label="Available date"
          name="date"
          onChange={handleFieldChange}
          value={fields.date}
          type="date"
          error={errors.date}
        />
        <Input
          placeholder="select available time"
          label="Available time"
          name="time"
          onChange={handleFieldChange}
          value={fields.time}
          type="time"
          error={errors.time}
        />
        <Button isLoading={isLoading} disabled={isDisabled} type="submit">
          Schedule Metting
        </Button>
      </ModalFormWrapper>
    </Modal>
  );
};

export default ScheduleMeetingModal;
