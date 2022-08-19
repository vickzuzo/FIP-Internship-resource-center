import { Button, Modal, Select } from "../../../../components";
import { ModalFormWrapper } from "./styles";
import { useAddMentor } from "./useAddMentor";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewMentorModal = ({ isOpen, onClose }: IProps) => {
  const {
    options,
    handleFieldChange,
    isLoading,
    isDisabled,
    onSubmit,
    errors,
  } = useAddMentor();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalFormWrapper onSubmit={onSubmit}>
        <Select
          placeholder="select a user"
          label="Select user"
          name="internId"
          options={options}
          onChange={handleFieldChange}
          // onChange={handleFieldChange}
          // value={fields.date}
          error={errors.internId}
        />
        <Select
          placeholder="select a role"
          label="Select user"
          name="role"
          options={[
            { label: "admin", value: "admin" },
            { label: "mentor", value: "mentor" },
          ]}
          onChange={handleFieldChange}
          // onChange={handleFieldChange}
          // value={fields.date}
          error={errors.role}
        />

        {/* <Button isLoading={isLoading} disabled={isDisabled} type="submit"> */}
        <Button isLoading={isLoading} disabled={isDisabled} type="submit">
          Add Mentor
        </Button>
      </ModalFormWrapper>
    </Modal>
  );
};

export default AddNewMentorModal;
