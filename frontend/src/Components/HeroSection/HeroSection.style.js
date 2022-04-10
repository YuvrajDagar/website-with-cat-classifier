import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroText = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
`;

export const HeroLabel = styled.label`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 8px 22px;
  color: #010606;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const HeroBtn = styled.button`
  margin: 5px 10px;
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 8px 22px;
  color: #010606;
  font-size: 18px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
