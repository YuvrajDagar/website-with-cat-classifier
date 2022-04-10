import React from "react";
import Video from "../../video/video1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroText,
} from "./HeroSection.style";
import UploadAndDisplayImage from "../UploadImage/UploadImage";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroText>Hello Guys,</HeroText>
        <HeroText style={{ fontSize: "20px" }}>
          Upload an image to check if it is a image of a cat or not{" "}
        </HeroText>
        <UploadAndDisplayImage />
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
