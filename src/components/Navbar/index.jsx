import React from "react";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  function toggleMobileNav() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  return (
    <Wrapper>
      <DesktopMenuNav>
        <Logo href="/#">
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </Logo>
        <MobileMenuIcon>
          <FaBars onClick={toggleMobileNav} />
        </MobileMenuIcon>
        <DesktopNavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </DesktopNavItems>
        <ButtonWrapper>
          <a href="https://github.com/tarachand-k" target="_blank">
            <GitHubButton>GitHub Profile</GitHubButton>
          </a>
        </ButtonWrapper>
      </DesktopMenuNav>
      {isMobileNavOpen && (
        <MobileMenuNav open={isMobileNavOpen}>
          <MobileNavItems>
            <NavLink href="#about" onClick={toggleMobileNav}>
              About
            </NavLink>
            <NavLink href="#education" onClick={toggleMobileNav}>
              Education
            </NavLink>
            <NavLink href="#skills" onClick={toggleMobileNav}>
              Skills
            </NavLink>
            <NavLink href="#projects" onClick={toggleMobileNav}>
              Projects
            </NavLink>
            <a href="https://github.com/tarachand-k">
              <GitHubButton>GitHub Profile</GitHubButton>
            </a>
          </MobileNavItems>
        </MobileMenuNav>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    trastion: 0.8s all ease;
  }
`;

const DesktopMenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const Logo = styled.a`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  @media (max-width: 640px) {
    padding: 0;
  }
`;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: ${20 / 16}rem;
`;

const MobileMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileMenuNav = styled.nav`
  position: absolute;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  top: 80px;
  background: ${({ theme }) => theme.card_light};
  transition: all 0.8s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const DesktopNavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileNavItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  list-style: none;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.button`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px 16px;
    width: max-content;
  }
`;

export default Navbar;
