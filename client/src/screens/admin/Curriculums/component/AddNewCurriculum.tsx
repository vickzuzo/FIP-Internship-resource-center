import { Button, Input, Modal, Select } from "../../../../components";
import { ModalFormWrapper } from "../../Interns/components/styles";
import { StyledInputFlex } from "../styles";
import { useAddCurriculum } from "./useAddCurriculum";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddNewCurriculum = ({ isOpen, onClose }: IProps) => {
  const {
    handleFieldChange,
    isLoading,
    isDisabled,
    onSubmit,
    errors,
    fields,
    topicsArr,
    onAddTopic,
  } = useAddCurriculum(onClose);
console.log(topicsArr)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalFormWrapper onSubmit={onSubmit}>
        <Select
          label="Curriculum Type"
          name="type"
          options={[
            { value: "course", label: "course" },
            { value: "project", label: "project" },
          ]}
          onChange={handleFieldChange}
          error={errors.type}
        />
        <Input
          placeholder={`Enter ${fields.type} title`}
          label={`${fields.type} title`}
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
          // onChange={handleFieldChange}
          // value={fields.date}
          error={errors.title}
        />
        <Input
          placeholder="Enter course description"
          value={fields.description}
          name="description"
          onChange={handleFieldChange}
          error={errors.description}
        />
        <Select
          placeholder="select learning path"
          label="Select learning path"
          name="learningPath"
          options={[
            { label: "Front-End", value: "Front-End" },
            { label: "Back-End", value: "Back-End" },
            { label: "UI/UX", value: "UI/UX" },
          ]}
          onChange={handleFieldChange}
          // onChange={handleFieldChange}
          // value={fields.date}
          // error={errors.role}
        />
        <Select
          placeholder={`Enter Learning Level`}
          label={`Learning Level`}
          name="learningLevel"
          onChange={handleFieldChange}
          options={[
            { label: "beginner", value: "beginner" },
            { label: "intermediate", value: "intermediate" },
            { label: "advanced", value: "advanced" },
          ]}
          // onChange={handleFieldChange}
          // value={fields.date}
          error={errors.learningLevel}
        />
        <Input
          placeholder={`Enter ${fields.type} duration`}
          label={`${fields.type} duration`}
          name="duration"
          value={fields.duration}
          onChange={handleFieldChange}
          // onChange={handleFieldChange}
          // value={fields.date}
          error={errors.duration}
        />
        {topicsArr.length > 0 && <p>{topicsArr.length} topics added</p>}
        <StyledInputFlex>
          <Input
            placeholder={`Enter ${fields.type} topics`}
            label={`${fields.type} topics`}
            name="topic"
            value={fields.topic}
            onChange={handleFieldChange}
            // onChange={handleFieldChange}
            // value={fields.date}
            error={errors.duration}
          />
          <Button onClick={onAddTopic} type="button">
            Add Topic
          </Button>
        </StyledInputFlex>

        <Button isLoading={isLoading} disabled={isDisabled} type="submit">
          Add Curriculum
        </Button>
      </ModalFormWrapper>
    </Modal>
  );
};

export default AddNewCurriculum;
