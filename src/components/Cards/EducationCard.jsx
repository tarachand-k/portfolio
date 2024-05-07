import React from "react";
import styled from "styled-components";

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Grade = styled.p`
  font-size: ${14 / 16}rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: ${12 / 16}rem;
  }
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  overflow: hidden;
  border: 0.1px solid ${({ theme }) => theme.primary};
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    /* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); */
    box-shadow: 0 4px ${({ theme }) => theme.primary};
    transform: translateY(-5px);
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  @media only screen and (max-width: 768px) {
    padding: 10px 12px 10px 16px;
    gap: 8px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Duration = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const EducationCard = ({ education }) => {
  const { img, school, degree, date, desc, grade } = education;
  return (
    <Card>
      <Top>
        <Image src={img} />
        <Body>
          <Name>{school}</Name>
          <Degree>{degree}</Degree>
          <Duration>{date}</Duration>
        </Body>
      </Top>
      <Grade>Grade: {grade}</Grade>
      <Description>
        <Span>{desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
