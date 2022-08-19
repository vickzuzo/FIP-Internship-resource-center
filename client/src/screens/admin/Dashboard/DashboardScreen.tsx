import { AiOutlineUser } from "react-icons/ai";
import { AdminSubSectionHeader, Spinner, Table } from "../../../components";
import { useAdmin } from "../helpers/useAdmin";
import DashCard from "./components/DashCard";
import { StyledDashboardCardFlex } from "./styles";

const DashboardScreen = () => {
  const { mentors, interns, isLoading, admins } = useAdmin();

  const data = [
    {
      icon: <AiOutlineUser />,
      title: "Interns",
      count: interns.length ?? 0,
    },
    {
      icon: <AiOutlineUser />,
      title: "Mentors",
      count: mentors.length ?? 0,
    },
    {
      icon: <AiOutlineUser />,
      title: "Curriculums",
      count: 0,
    },
    {
      icon: <AiOutlineUser />,
      title: "Challenges",
      count: 0,
    },
  ];

  // const slicedArray = array.slice(0, 10);

  return (
    <StyledDashboardCardFlex>
      {data.map((item, index) => (
        <DashCard item={item} />
      ))}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <AdminSubSectionHeader title="Interns" />
          <Table data={interns} />
          <AdminSubSectionHeader title="Mentors" />
          <Table data={mentors} />
          <AdminSubSectionHeader title="Admins" />
          <Table data={interns} />
        </>
      )}
    </StyledDashboardCardFlex>
  );
};

export default DashboardScreen;
