import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const RectangleDivWrapper = styled.div`
  width: 15vw;
  height: 150px;
  background-color: rgba(94, 102, 112, 0.8);
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.4rem;
  z-index: 2; /* Set z-index to be in front of the image */
  padding: 20px;
  padding-top: 40px;
  @media (max-width: 768px) {
    width: 40vw;
    height: 100px;
    margin-bottom: 20px;
  }
`;

const Pages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-around;
  margin-top: -600px;
  margin-bottom: 500px;
  width: 130%;
  margin-left: -15%;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 15%;
    margin-top: -950px;
  }
`;



const TextWrapper = styled.div`
  max-height: 300px;
  width: 90%;
  position: absolute;
  color: #fff;
  font-size: 18px;
  ${RectangleDivWrapper}:hover & {
    color: rgba(171, 190, 212, 0.7);
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Line = styled.div`
  width: 49%;
  border-top: 2px solid #fff;
  ${RectangleDivWrapper}:hover & {
    border-top: 2px solid rgba(171, 190, 212, 0.7);
  }

`;

const Line2 = styled.div`
  width: 49%;
  border-top: 2px solid #fff;
  margin-right: 0px;
  ${RectangleDivWrapper}:hover & {
    border-top: 2px solid rgba(171, 190, 212, 0.7);
  }
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -5px;
  ${RectangleDivWrapper}:hover & {
    background-color: rgba(171, 190, 212, 0.7);
  }
`;

const LineDiv = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const iconStyle = {
  fontSize: 50,
  '@media (max-width: 768px)': {
    fontSize: 30,
  },

};

const PagesButton = ({ text, icon, path }) => {
  return (
    <Fade triggerOnce direction="up" delay={100} duration="1000"  cascade damping={0.1} >
      <Link to={path} style={{ textDecoration: "none" }}>
    <RectangleDivWrapper>
      <TextWrapper>
        {icon === "info" && <InfoOutlinedIcon sx={iconStyle} />}
        {icon === "photos" && (
          <PhotoLibraryOutlinedIcon sx= {iconStyle} />
        )}
        {icon === "contact" && <CallOutlinedIcon sx={iconStyle} />}
        {icon === "references" && (
          <HandshakeOutlinedIcon sx={iconStyle} />
        )}
        {icon === "projects" && (
          <HomeWorkOutlinedIcon sx={iconStyle} />
        )}
        <p style={{ marginTop: "10px" }}>
          {text}
          </p>
        <LineDiv>
          <Line />
          <Dot />
          <Line2 />
        </LineDiv>
      </TextWrapper>
    </RectangleDivWrapper>
    </Link>
    </Fade>
  );
};

const PagesDiv = (props) => {
  const { t } = useTranslation();

  return (
    <Pages>

      <PagesButton text={t("about")} path="/about" icon={"info"} />
      <PagesButton text={t("projects")} path="/projects" icon={"projects"} />
      <PagesButton text={t("photos")} path="/gallery" icon={"photos"} />
      <PagesButton
        text={t("references")}
        path="/references"
        icon={"references"}
      />
      <PagesButton text={t("contact")} path="/contact" icon={"contact"} />
    </Pages>
  );
};

export default PagesDiv;
