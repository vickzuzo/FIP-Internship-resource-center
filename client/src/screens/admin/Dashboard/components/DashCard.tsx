import {
  StyledContainer,
  StyledCount,
  StyledIcon,
  StyledRightContainer,
  StyledTitle,
} from "./styles";

interface IProps {
  item: {
    icon: JSX.Element;
    title: string;
    count: number;
  };
}

const DashCard = ({ item }: IProps) => {
  return (
    <StyledContainer>
      <StyledIcon>{item.icon}</StyledIcon>
      <StyledRightContainer>
        <StyledTitle>{item.title}</StyledTitle>
        <StyledCount>{item.count}</StyledCount>
      </StyledRightContainer>
    </StyledContainer>
  );
};

export default DashCard;
