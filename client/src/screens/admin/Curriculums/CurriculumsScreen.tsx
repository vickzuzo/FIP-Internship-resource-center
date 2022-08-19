import React from "react";
import {
  AdminSubSectionHeader,
  Button,
  CurriculumTable,
  Spinner,
} from "../../../components";
import { useDisclosure } from "../../../hooks";
import { StyledButtonContainer } from "../Mentors/styles";
import AddNewCurriculum from "./component/AddNewCurriculum";
import { useGetCurriculums } from "./useGetCurriculums";

const CurriculumsScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { curriculums, isLoading } = useGetCurriculums();

  return (
    <div>
      {/* opens a modal with all users in a select dropdown and after selecting a user, add to mentor */}

      <AdminSubSectionHeader title="Curriculums" />
      <StyledButtonContainer>
        <Button onClick={onOpen}>Add New Curriculum</Button>
      </StyledButtonContainer>

      {isLoading ? <Spinner /> : <CurriculumTable data={curriculums} />}

      <AddNewCurriculum isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default CurriculumsScreen;
