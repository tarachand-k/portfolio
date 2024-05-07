import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <Wrapper id="about">
      <HeroContainer>
        <LeftBox>
          <Title>
            <span>Hi, this is</span> <br />
            {/* {Bio.name} */}
            Tarachand
          </Title>
          <SubTitle>
            I am a{" "}
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </SubTitle>
          <Description>{Bio.description}</Description>
          <ResumeButton href={Bio.resume} target="_blank">
            Download CV
          </ResumeButton>
        </LeftBox>
        <RightBox>
          <HeroImage src="/profile-photo1.jpg" alt="Profile Picture" />
        </RightBox>
      </HeroContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 80px 30px 96px;
  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }
  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
`;

const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 46px;
  gap: 42px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

const LeftBox = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const RightBox = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;

  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 60px;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 32px;
  }
`;

const Title = styled.h1`
  font-size: ${50 / 16}rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 60px;
  margin-bottom: 12px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: ${40 / 16}rem;
    line-height: 48px;
    margin-bottom: 8px;
  }

  & span {
    font-size: 28px;
    line-height: 30px;
    font-weight: 500;

    @media screen and (max-width: 640px) {
      font-size: ${22 / 16}rem;
      line-height: 24px;
    }
  }
`;

const SubTitle = styled.h2`
  font-size: ${32 / 16}rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: ${26 / 16}rem;
    line-height: 48px;
  }

  @media screen and (max-width: 640px) {
    font-size: ${22 / 16}rem;
    flex-direction: column;
    gap: 0;
    margin-bottom: 18px;
  }

  & .Typewriter {
    color: ${({ theme }) => theme.primary};
    cursor: pointer;

    @media screen and (max-width: 640px) {
      margin-top: -12px;
    }
  }
`;

const Description = styled.p`
  font-size: ${20 / 16}rem;
  line-height: 32px;
  margin-bottom: 42px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 95};

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    line-height: 24px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: ${20 / 16}rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  /* background: linear-gradient(
    224deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  ); */

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  /* border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px; */
  border-radius: 40px;
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  object-position: center;
  border: 2px solid ${({ theme }) => theme.primary};
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    filter: drop-shadow(0 4px ${({ theme }) => theme.primary});
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export default Hero;
