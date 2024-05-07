import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const [projectModal, setProjectModal] = React.useState({
    isOpen: false,
    project: null,
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar />
      <Wrapper>
        <Hero />
        <Education />
        <Skills />
        <Projects setProjectModal={setProjectModal} />
        <Contact />
        <Footer />
      </Wrapper>
      <ProjectDetails
        projectModal={projectModal}
        setProjectModal={setProjectModal}
      />
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

export default App;
