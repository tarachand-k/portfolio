import React from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

function Projects({ setProjectModal }) {
  // const [currentTab, setCurrentTab] = React.useState("all");

  // const currentTabProjects =
  //   currentTab === "all"
  //     ? projects
  //     : projects.filter((project) => project.category === currentTab);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Description>
        {/* <CategoryTabs>
          <Tab
            active={currentTab === "all"}
            onClick={() => setCurrentTab("all")}
          >
            All
          </Tab>
          <Divider />
          <Tab
            active={currentTab === "next"}
            onClick={() => setCurrentTab("next")}
          >
            Next Apps
          </Tab>
          <Divider />
          <Tab
            active={currentTab === "mern"}
            onClick={() => setCurrentTab("mern")}
          >
            Mern Apps
          </Tab>
          <Divider />
          <Tab active={currentTab === "ml"} onClick={() => setCurrentTab("ml")}>
            ML Apps
          </Tab>
        </CategoryTabs> */}
        <ProjectCards>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setProjectModal={setProjectModal}
            />
          ))}
        </ProjectCards>
      </Wrapper>
    </Container>
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
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
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
  margin-top: 12px;
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

const CategoryTabs = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Tab = styled.div`
  padding: 8px 18px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 6px;

  /* ${({ active, theme }) =>
    active && `background-color: ${theme.primary + 30};`} */

  &:hover {
    background-color: ${({ theme }) => theme.primary + 20};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  width: 1.5px;
  background-color: ${({ theme }) => theme.primary};
`;

const ProjectCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 30px;
`;

export default Projects;
