import Navbar from "../components/MenuBar";
import styled from "styled-components";

import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import Works from "../home/Works";
import { useEffect, useState } from "react";
import i18n from "../i18n";
import Heading from "../components/Heading";
import { Fade } from "react-awesome-reveal";

const BackgroundOverlay = styled.div`
  content: "";
  position: relative;
  top: -200px;
  padding-top: 200px;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.4)
    ),
    url(${process.env.PUBLIC_URL + "/background.jpg"});
  background-repeat: repeat;
  padding-bottom: 100px;
`;

const HeadingDiv = styled.div`
  margin-bottom: 100px;
  align-content: center;
  align-items: center;
  width: 100%;
  margin-left: -40%;
  //font-family: 'Roboto condensed', sans-serif;
  //font-weight: 800;
  @media (max-width: 968px) {
    margin-left: 15%;
    width: 70%;
  }
`;

const Video = styled.video`
  position: relative;
  width: 50%;
  height: auto;
  object-fit: cover;
  z-index: 1;
  @media (max-width: 968px) {
    width: 90%;
  }
`;
const AboutText = styled.p`
  font-size: 18px;
  //font-family: 'Roboto condensed', sans-serif;
  @media (max-width: 968px) {
    font-size: 0.8rem;
    margin-top: -70px;
  }
`;

const AboutTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  //font-family: 'Roboto condensed', sans-serif;
  @media (max-width: 968px) {
    font-size: 1.3rem;
  }
`;

const AboutPage = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState();
  const [path, setPath] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    
  useEffect(() => {
    if (i18n.language == "tr") {
      setPath(process.env.PUBLIC_URL + "/chart.mp4");
    } else {
      setPath(process.env.PUBLIC_URL + "/chart2.mp4");
    }
  }, [i18n.language]);

  return (
    <div className="about-page">
      <div
        className="container-fluid no-padding"
        style={{
          overflow: "auto",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div className="row no-gutters">
          <Navbar />
        </div>
        <BackgroundOverlay>
          <div
            className="row no-gutters"
            style={{
              marginTop: "200px",
              height: "100%",
              backgroundColor: "white",
              zIndex: "1",
              position: "relative",
              width: "80%",
              marginLeft: "10%",
              padding: "5%",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
            }}
          >
            <div className="col-1" />
            <div className="col-10">
              <div className="row" style={{ height: "100%" }}>
                <div className="col-12">
                  <HeadingDiv>
                    <Heading text={t("corporate").toUpperCase()} />
                  </HeadingDiv>

                  <AboutText>{t("corporateText")}</AboutText>
                </div>
              </div>
            </div>
            <div className="col-1" />
          </div>
          <div
            className="row"
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "1",
              height: "100%",
              marginTop: "200px",
              position: "relative",
            }}
          >
         
            <Video key={path} autoPlay loop muted>
              <source src={path} type="video/mp4" />
            </Video>
          </div>
          <div
            className="row"
            style={{
              marginTop: "200px",
              height: "100%",
              backgroundColor: "white",
              zIndex: "1",
              position: "relative",
              width: "80%",
              marginLeft: "10%",
              padding: "5%",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
            }}
          >
            <div className="col-1" />
            <div className="col-10">
              <div className="row" style={{ height: "100%" }}>
                <div className="col-12">
                  <HeadingDiv>
                    <Heading text={t("qualityCertificates")} />
                  </HeadingDiv>

                  <AboutText>{t("qualityCertificatesText")}</AboutText>
                </div>
              </div>
            </div>
            <div className="col-1" />
          </div>
          <Fade cascade damping={0.1} fraction={0.2}>
            <div
              className="row"
              style={{
                marginTop: "200px",
                height: "100%",
                backgroundColor: "white",
                zIndex: "1",
                position: "relative",
                width: "80%",
                padding: "5%",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              }}
            >
              <div className="col-1" />
              <div className="col-10">
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-12">
                    <div
                      style={{
                        marginBottom: "100px",
                        alignContent: "center",
                        alignItems: "center",
                        width: "80%",
                      }}
                    >
                      <Fade direction="left" cascade damping={0.1}>
                        <AboutTitle>{t("aboutTitle2")}</AboutTitle>
                      </Fade>
                    </div>

                    <AboutText>{t("aboutText2")}</AboutText>
                  </div>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </Fade>
          <Fade>
            <div
              className="row"
              style={{
                marginTop: "100px",
                height: "100%",
                backgroundColor: "white",
                zIndex: "1",
                position: "relative",
                width: "80%",
                marginLeft: "20%",
                padding: "5%",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              }}
            >
              <div className="col-1" />
              <div className="col-10">
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-12">
                    <div
                      style={{
                        marginBottom: "100px",
                        alignContent: "center",
                        alignItems: "center",
                        width: "80%",
                      }}
                    >
                      <Fade direction="right" cascade damping={0.1}>
                        <AboutTitle>{t("aboutTitle3")}</AboutTitle>
                      </Fade>
                    </div>

                    <AboutText>{t("aboutText3")}</AboutText>
                  </div>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </Fade>
          <Fade>
            <div
              className="row"
              style={{
                marginTop: "100px",
                height: "100%",
                backgroundColor: "white",
                zIndex: "1",
                position: "relative",
                width: "80%",
                padding: "5%",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              }}
            >
              <div className="col-1" />
              <div className="col-10">
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-12">
                    <div
                      style={{
                        marginBottom: "100px",
                        alignContent: "center",
                        alignItems: "center",
                        width: "80%",
                      }}
                    >
                      <Fade direction="left" cascade damping={0.1}>
                        <AboutTitle>{t("aboutTitle4")}</AboutTitle>
                      </Fade>
                    </div>

                    <AboutText>{t("aboutText4")}</AboutText>
                  </div>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </Fade>
          <Fade>
            <div
              className="row"
              style={{
                marginTop: "100px",
                height: "100%",
                backgroundColor: "white",
                zIndex: "1",
                position: "relative",
                width: "80%",
                marginLeft: "20%",
                padding: "5%",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              }}
            >
              <div className="col-1" />
              <div className="col-10">
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-12">
                    <div
                      style={{
                        marginBottom: "100px",
                        alignContent: "center",
                        alignItems: "center",
                        width: "80%",
                      }}
                    >
                      <Fade direction="right" cascade damping={0.1}>
                        <AboutTitle>{t("aboutTitle5")}</AboutTitle>
                      </Fade>
                    </div>

                    <AboutText>{t("aboutText5")}</AboutText>
                  </div>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </Fade>
          <Fade>
            <div
              className="row"
              style={{
                marginTop: "100px",
                height: "100%",
                backgroundColor: "white",
                zIndex: "1",
                position: "relative",
                width: "80%",
                padding: "5%",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
              }}
            >
              <div className="col-1" />
              <div className="col-10">
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-12">
                    <div
                      style={{
                        marginBottom: "100px",
                        alignContent: "center",
                        alignItems: "center",
                        width: "80%",
                      }}
                    >
                      <Fade direction="left" cascade damping={0.1}>
                        <AboutTitle>{t("aboutTitle6")}</AboutTitle>
                      </Fade>
                    </div>

                    <AboutText>{t("aboutText6")}</AboutText>
                  </div>
                </div>
              </div>
              <div className="col-1" />
            </div>
          </Fade>
        </BackgroundOverlay>
        <div
          className="row"
          style={{
            width: "100%",
            height: "100%",
            backgrounfColor: "fff",
            opacity: "1",
            marginTop: "-200px",
          }}
        >
          <Works />
        </div>
      </div>
      <Footer style={{ zIndex: "5", position: "relative" }} />
    </div>
  );
};

export default AboutPage;
