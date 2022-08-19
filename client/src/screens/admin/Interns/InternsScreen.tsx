import React from "react";
import { AdminSubSectionHeader, Table } from "../../../components";
import { useDisclosure } from "../../../hooks";
import { useAdmin } from "../helpers/useAdmin";
import { AssignMentorModal } from "./components";

const InternsScreen = () => {
  const { interns } = useAdmin();

  const [selectedInternId, setSelectedInternId] = React.useState("");

  const handleSelectIntern = (id: string) => {
    setSelectedInternId(id);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <AdminSubSectionHeader title="Interns" />
      <Table
        data={interns}
        withDelete
        withMain
        onMainClick={(id: string) => {
          handleSelectIntern(id);
          onOpen();
        }}
        onDeleteClick={(id?: string) => console.log("delete", id)}

      />
      <AssignMentorModal
        isOpen={isOpen}
        onClose={onClose}
        id={selectedInternId}
      />
    </div>
  );
};

export default InternsScreen;
