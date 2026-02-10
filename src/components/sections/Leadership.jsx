import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { leadership } from "../../data/constants";
import LeadershipCard from "../cards/LeadershipCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Leadership = () => {
  return (
    <Container id="Leadership">
      <Wrapper>
        <Title>Leadership & Activities</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Roles, volunteering, and community contributions.
        </Desc>

        <VerticalTimeline>
          {leadership.map((item, index) => (
            <LeadershipCard key={`leadership-${index}`} item={item} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Leadership;
