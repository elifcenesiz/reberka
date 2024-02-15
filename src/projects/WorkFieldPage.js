import Work from "./Work";
import React from "react";
import Navbar from "../components/MenuBar";
import styled from "styled-components";
import Footer from "../components/Footer";
import workFields from "./workFieldsInformation";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import Heading from "../components/Heading";



const BackgroundOverlay = styled.div`

position: relative;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-size: cover; 
background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.9)), url(${process.env.PUBLIC_URL + "/background.jpg"});
display: flex;
flex-direction: column;
`;


const WorkFieldPage = () => {

    const { t } = useTranslation();

    return (
        <div className="projects-page">

              <div className="container-fluid no-padding" >
                    <div className="row no-gutters" >
                          <Navbar />
                          
                          <BackgroundOverlay >
                                <div className="row" style={{ marginTop: "150px", height: "150px", justifyContent: "center", alignItems: "center", textAlign: "center", zIndex: "1", pointerEvents: "auto" }}>

                                      <Heading text={t('workingAreas')} />

                                </div >
                                <div className="row" style={{ marginTop: "70px", zIndex: "1", pointerEvents: "auto" }}>
                                      <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1 col-xl-1" />
                                      <div className="col-xs-12 col-sm-12 col-sm-11 col-md-10 col-lg-10 col-xl-10" 
                                      style={{ justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "-10px", marginBottom: "100px" }}>
                                            <div className="col-xs-11 col-sm-11 col-md-10 col-lg-10 col-xl-10"
                                            style={{ marginTop: "0px", alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", pointerEvents: "auto" }}>
                                                  {workFields.map((project, index) => {

                                                        return (
                                        
                                                              <div key={project.id} >
                                                                    <Fade triggerOnce>
                                                                          <div style={{ backgroundColor: "rgba(171, 208, 217, 0.9)", position: "absolute", height: "300px", width: "500px", zIndex: "-1", marginLeft: "-50px", marginTop: "-50px" }} />
                                                                          <Work id={project.id} style={{ zIndex: "1", pointerEvents: "auto" }} />
                                                                    </Fade>
                                                              </div>

                                                        )
                                                  }
                                            )}
                                            </div>
                                      </div>
                                      <div className="col-1" />
                                </div>
                          </BackgroundOverlay>
                    </div>

              </div>
              <Footer />
        </div>
  );
}

export default WorkFieldPage;