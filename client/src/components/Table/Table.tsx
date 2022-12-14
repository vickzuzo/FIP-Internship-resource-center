import moment from "moment";
import React from "react";
import { User } from "../../interfaces";
import { Button } from "../Button";
import {
  STable,
  STBody,
  STBodyTR,
  STD,
  STH,
  STHead,
  STHeadTR,
  StyledBtnFlex,
  StyledButton,
} from "./styles";

interface IProps {
  data: User[];
  withMain?: boolean;
  withDelete?: boolean;
  onMainClick?: (id: string) => void;
  onDeleteClick?: (id?: string) => void;
  onEditClick?: (id: string) => void;
  withEdit?: boolean;
  isIntern?: boolean;
}

const Table = ({
  data,
  withMain,
  withDelete,
  onMainClick,
  withEdit,
  onDeleteClick,
  onEditClick,
  isIntern,
}: IProps) => {
  return (
    <STable>
      <STHead>
        <STHeadTR>
          <STH>#</STH>
          <STH>Full Name</STH>
          <STH>Email</STH>
          {isIntern && <STH>Learning Level</STH>}
          {isIntern && <STH>Learning Path</STH>}
          {isIntern && <STH>Mentor</STH>}
          <STH>created At</STH>
          {(withMain || withDelete) && <STH>Actions</STH>}
        </STHeadTR>
      </STHead>
      <STBody>
        {data === undefined || data.length < 1 ? (
          <p>NO data</p>
        ) : (
          data.map((item, index) => (
            <STBodyTR key={item._id}>
              <STD>{index + 1}</STD>
              <STD>{item.fullName}</STD>
              <STD>{item.email}</STD>
              {isIntern && <STD>{item.learningLevel}</STD>}
              {isIntern && <STD>{item.learningPath}</STD>}
              {isIntern && (
                <STD>
                  {item.mentors.map((item, _idx) => (
                    <p key={item._id}>{item.fullName}</p>
                  ))}
                </STD>
              )}
              <STD>{moment(item.createdAt).format("D of MMM, YYYY")}</STD>
              {(withMain || withDelete) && (
                <STD>
                  <StyledBtnFlex>
                    {withMain && item.mentors.length < 1 && (
                      <StyledButton>
                        <Button onClick={() => onMainClick!(item._id)}>
                          Assign Mentor
                        </Button>
                      </StyledButton>
                    )}
                    {withEdit && item.learningLevel !== "" && (
                      <StyledButton className="edit">
                        <Button onClick={() => onEditClick!(item._id)}>
                          Edit User
                        </Button>
                      </StyledButton>
                    )}
                    {withDelete && (
                      <StyledButton
                        className="delete"
                        onClick={() => onDeleteClick!(item._id)}
                      >
                        <Button>delete</Button>
                      </StyledButton>
                    )}
                  </StyledBtnFlex>
                </STD>
              )}
            </STBodyTR>
          ))
        )}
      </STBody>
    </STable>
  );
};

export default Table;
