import { useState } from "react";
import { Accordion, Button, Spinner } from "../../../components";
import { useDisclosure } from "../../../hooks";
import { ScheduleMeetingModal } from "./components";
import { useDashboard } from "./helpers/useDashboard";
import {
  StyledAccordionTitle,
  StyledContent,
  StyledDashboardCard,
  StyledDashboardCards,
  StyledDashboardContainer,
  StyledFlexContainer,
  StyledMentorTable,
  StyledType,
  StyledUserWelcomeContainer,
} from "./styles";

const DashboardScreen = () => {
  const [selectedMentorId, setSelectedMentorId] = useState<string>("");

  const [currentlyOpen, setCurrentlyOpen] = useState("");

  const handleChange = (id: string) => {
    if (currentlyOpen === id) {
      setCurrentlyOpen("");
    } else {
      setCurrentlyOpen(id);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    user,
    isLoading,
    isLoadingUser,
    curriculums,
    isLoadingChallenges,
    challenges,
  } = useDashboard();
  return (
    <StyledDashboardContainer>
      <StyledUserWelcomeContainer>
        <h1>Welcome Back,</h1>
        {isLoadingUser ? <Spinner /> : <h3>{user.fullName}</h3>}
      </StyledUserWelcomeContainer>
      {/* list resources and curriculum available to selected learning path */}
      {/* list mentors assigned to user below with button to schedule a meeting (button click opens a modal)  */}
      <StyledDashboardCards>
        <StyledDashboardCard>
          <p className="title">Learning Path</p>
          <p>{user.learningPath}</p>
        </StyledDashboardCard>
        <StyledDashboardCard>
          <p className="title">Learning Level</p>
          <p>
            {user.learningLevel !== ""
              ? user.learningLevel
              : "Not yet available"}
          </p>
        </StyledDashboardCard>
      </StyledDashboardCards>
      <StyledFlexContainer>
        <div className="left">
          <p className="section-title">My Curriculum</p>
          {isLoading ? (
            <Spinner />
          ) : (
            curriculums.map((item) => (
              <Accordion
                key={item._id}
                id={item._id}
                handleChange={handleChange}
                isOpen={item._id === currentlyOpen}
                title={
                  <StyledAccordionTitle>
                    <StyledType type={item.type}>{item.type}</StyledType>
                    <p>{item.title}</p>
                  </StyledAccordionTitle>
                }
                content={
                  <StyledContent>
                    <p className="description">{item.description}</p>
                    {item.topics.length > 0 && <p className="topic">TOPICS</p>}
                    {item.topics.map((top, idx) => (
                      <p key={idx} className="item">
                        {top}
                      </p>
                    ))}
                    {item.externalLinks.length > 0 && (
                      <p className="topic">USEFUL LINKS</p>
                    )}
                    {item.externalLinks.map((link, idx) => (
                      <a
                        href={link.url}
                        target="_blank"
                        key={idx}
                        rel="noreferrer"
                        className="item"
                      >
                        <span>{link.title}</span>: {link.url}
                      </a>
                    ))}
                  </StyledContent>
                }
                type={item.type}
              />
            ))
          )}
          {/** useful incase the length is too long then
           * we reduce items show to 6 and uncomment line below and only
           * show al items when the user clicks on show all
           */}
          {/* {curriculums.length > 6 && (
            <StyledCoursesBottomContainer>
              <StyledButtonContainer>
                <Button>Show All</Button>
              </StyledButtonContainer>
            </StyledCoursesBottomContainer>
          )} */}
        </div>
        <div className="right">
          <div>
            <p className="section-title">Frontend Challenges</p>
            {isLoadingChallenges ? (
              <Spinner />
            ) : challenges.length > 0 ? (
              <StyledMentorTable>
                <div className="container">
                  <p className="title">Challenge Title</p>
                  <p className="level">Challenge level</p>
                </div>
                <div className="btn_container">
                  <Button>Start</Button>
                </div>
              </StyledMentorTable>
            ) : (
              <p>No challenges available</p>
            )}
            {/* <StyledMentorBottomContainer>
              <StyledButtonContainer>
                <Button>Show All</Button>
              </StyledButtonContainer>
            </StyledMentorBottomContainer> */}
          </div>
          <div>
            <p className="section-title">My Mentors</p>
            {isLoadingUser ? (
              <Spinner />
            ) : user?.mentors?.length > 0 ? (
              user?.mentors.map((mentor) => (
                <StyledMentorTable key={mentor._id}>
                  <div className="container">
                    <p className="mentor-name">{mentor.fullName}</p>
                  </div>
                  <div className="btn_container">
                    <Button
                      onClick={() => {
                        setSelectedMentorId(mentor._id);
                        onOpen();
                      }}
                    >
                      Schedule meeting
                    </Button>
                  </div>
                </StyledMentorTable>
              ))
            ) : (
              <p>
                No mentor has been assigned to you. You will be notified when a
                mentor is assigned to you.
              </p>
            )}
          </div>
        </div>
      </StyledFlexContainer>
      <ScheduleMeetingModal
        isOpen={isOpen}
        onClose={onClose}
        mentorId={selectedMentorId}
      />
    </StyledDashboardContainer>
  );
};

export default DashboardScreen;
