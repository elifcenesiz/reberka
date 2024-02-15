import React from 'react';
import Navbar from '../components/MenuBar';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Project from '../projects/Project';
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useParams } from "react-router-dom";
import { allProjects, constructionProjects, designProjects, renovationProjects } from "./projectInformation";
import { useTranslation } from 'react-i18next';

import Heading from '../components/Heading';
import ProjectsTable from './ProjectsTable';


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

const BackgroundDiv = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
position: absolute;
top: 0;
left: 0;
z-index: -1;
`;


const ProjectsPage = () => {

      const category = useParams()

      const [projects, setProjects] = useState([])
      const [title, setTitle] = useState("")
      const [background, setBackground] = useState(20)
      const parallaxRef = useRef(null);
      const { t } = useTranslation();

      useEffect(() => {

            const importProjects = () => {
                  switch (category.category) {
                        case "all":
                              setProjects(allProjects)
                              setTitle(t('projects'))
                              break;
                        case "design":
                              setProjects(designProjects)
                              setTitle(t('rennovationProjects'))
                              break;
                        case "construction":
                              setProjects(constructionProjects)
                              setTitle(t('constructionProjects'))
                              break;
                        case "rennovation":
                              setProjects(renovationProjects)
                              setTitle(t('rennovationProjects'))
                              break;
                        default:
                              setProjects(allProjects)
                              setTitle(t('projects'))
                              break;
                  }
            }
            importProjects()
      }, [category])

      useEffect(() => {
            window.scrollTo(0, 0)
            
            let ctx = gsap.context(() => {
                  gsap.registerPlugin(ScrollTrigger);
                  var tl = gsap.timeline({
                        defaults: { duration: 1 },
                        scrollTrigger: {
                              trigger: parallaxRef.current,
                              start: "top top",
                              end: "2000 bottom",
                              scrub: true,
                              pin: true,
                              onUpdate: (self) => {
                                    setBackground(Math.ceil(self.progress * 100 + 20))
                              },
                        },
                  });
            });
            return () => ctx.revert();
      }, []);


      return (
            <div className="projects-page">

                  <div className="container-fluid no-padding" >
                        <div className="row no-gutters" >
                              <Navbar />
                              
                              <BackgroundOverlay >
                                    <div className="row" style={{ marginTop: "150px", height: "150px", justifyContent: "center", alignItems: "center", textAlign: "center", zIndex: "1", pointerEvents: "auto" }}>

                                          <Heading text={t('projects')} />

                                    </div >
                                    <div className="row" style={{ marginTop: "70px", zIndex: "1", pointerEvents: "auto" }}>
                                          <div className="col-xs-0 col-sm-0 col-md-1 col-lg-1 col-xl-1" />
                                          <div className="col-xs-12 col-sm-12 col-sm-11 col-md-10 col-lg-10 col-xl-10" 
                                          style={{ justifyContent: "center", alignItems: "center", display: "flex", marginLeft: "-10px", marginBottom: "100px" }}>
                                                <div className="col-xs-11 col-sm-11 col-md-10 col-lg-10 col-xl-10"
                                                style={{ marginTop: "0px", alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", pointerEvents: "auto" }}>
                                                <p style={{ fontSize: "20px", fontWeight: "bold", color: "rgba(0,0,0,0.6)", marginBottom: "10px" }}>
                                                            REBERKA {t('constructionFirm')}
                                                      </p>
                                                      <p style={{ fontSize: "20px", fontWeight: "bold", color: "rgba(0,0,0,0.6)", marginBottom: "50px" }}>
                                                            {t('tableName')}
                                                      </p>
                                                      <ProjectsTable />
                                                      {/*projects.map((project, index) => {

                                                            return (
                                                                  project.id < 6 &&
                                                                  <div key={project.id} >
                                                                        <Fade triggerOnce>
                                                                              <div style={{ backgroundColor: "rgba(255, 107, 0, 0.9)", position: "absolute", height: "300px", width: "500px", zIndex: "-1", marginLeft: "-50px", marginTop: "-50px" }} />
                                                                              <Project id={project.id} style={{ zIndex: "1", pointerEvents: "auto" }} />
                                                                        </Fade>
                                                                  </div>

                                                            )
                                                      }
                                                )*/}
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

export default ProjectsPage;

