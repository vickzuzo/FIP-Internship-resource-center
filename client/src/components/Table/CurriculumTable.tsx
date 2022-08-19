import React from "react";
import moment from "moment";
import { Curriculum } from "../../interfaces";
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
  data: Curriculum[];
  withMain?: boolean;
  withDelete?: boolean;
  onMainClick?: (id: string) => void;
  onDeleteClick?: (id?: string) => void;
}

const CurriculumTable = ({
  data,
  withMain,
  withDelete,
  onMainClick,
  onDeleteClick,
}: IProps) => {
  return (
    <STable>
      <STHead>
        <STHeadTR>
          <STH>#</STH>
          <STH>Title</STH>
          <STH>Description</STH>
          <STH>Duration</STH>
          <STH>Learning Path</STH>
          <STH>Learning Level</STH>
          <STH>Type</STH>
          <STH>Total Topics</STH>
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
              <STD>{item.title}</STD>
              <STD>{item.description}</STD>
              <STD>{item.duration}</STD>
              <STD>{item.learningPath}</STD>
              <STD>{item.learningLevel}</STD>
              <STD>{item.type}</STD>
              <STD>{item.topics.length}</STD>
              <STD>{moment(item.createdAt).format("D of MMM, YYYY")}</STD>
              {(withMain || withDelete) && (
                <STD>
                  <StyledBtnFlex>
                    {withMain && (
                      <StyledButton>
                        <Button onClick={() => onMainClick!(item._id)}>
                          Assign Mentor
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

export default CurriculumTable;
