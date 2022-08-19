import React from "react";
import { AdminSubSectionHeader, Button, Table } from "../../../components";
import { useDisclosure } from "../../../hooks";
import { useAdmin } from "../helpers/useAdmin";
import { AddNewMentorModal } from "./components";
import { StyledButtonContainer } from "./styles";

const MentorsScreen = () => {
  const { mentors } = useAdmin();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {/* opens a modal with all users in a select dropdown and after selecting a user, add to mentor */}
      <AdminSubSectionHeader title="Mentors" />
      <StyledButtonContainer>
        <Button onClick={onOpen}>Add New Mentor</Button>
      </StyledButtonContainer>
      <Table
        data={mentors}
        withDelete
        onDeleteClick={(id?: string) => console.log("delete", id)}
      />
      <AddNewMentorModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default MentorsScreen;
