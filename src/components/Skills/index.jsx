import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some my skills on which I have been working on for the past 2
          yars.
        </Description>

        <SkillsWrapper>
          {skills.map((item, idx) => (
            <SkillType key={idx} item={item} />
          ))}
        </SkillsWrapper>
      </Wrapper>
    </Container>
  );
};

function SkillType({ item }) {
  return (
    <SkillTypeWrapper>
      <SkillTitle>{item.title}</SkillTitle>
      <SkillList>
        {item.skills.map((skill, idx) => (
          <SkillItem key={idx}>
            <SkillImg src={skill.image} />
            <SkillName>{skill.name}</SkillName>
          </SkillItem>
        ))}
      </SkillList>
    </SkillTypeWrapper>
  );
}

const Container = styled.section`
  padding: 96px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: ${42 / 16}rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768) {
    margin-top: 12px;
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: ${18 / 16}rem;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const SkillTypeWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  /* display: flex */

  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.primary};
  filter: drop-shadow(0 4px ${({ theme }) => theme.primary});
  border-radius: 16px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h3`
  font-size: ${28 / 16}rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  padding: 12px 16px;
  font-weight: 400;

  @media (max-width: 768) {
    font-size: ${14 / 16}rem;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    padding: 6px 12px;
  }
`;

const SkillImg = styled.img`
  width: 24px;
  height: 24px;
  /* background-color: ${({ theme }) => theme.card}; */
  border-radius: 50%;
`;

const SkillName = styled.p``;

export default Skills;
