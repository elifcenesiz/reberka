import Navbar from "../components/MenuBar"
import styled from "styled-components"
import { useEffect, useState } from "react"
import workFields from "./workFieldsInformation";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom";
import { allProjects, constructionProjects, designProjects, renovationProjects } from "./projectInformation";
import Project from "./Project";

const ProjectText = styled.p`
      font-size: 50px;
      color: #000;
      font-weight: 300;
      text-align: left;
      `
const ProjectTextDiv = styled.div`
      width: 80%;
      height: 100%;
      text-align: left;
      justify-content: center;
      display: flex;
      margin-left: 10%;
      flex-direction: column;

      `

const ProjectInfoText = styled.p`
      font-size: 22px;
      color: #000;
      font-weight: 300;
      text-align: left;
      @media (max-width: 968px) {
            font-size: 14px;
      }
      `


const ProjectImage = styled.div`
      width: 100%;
      height: 100%;

`

const ProjectTitleDiv = styled.div`
      position: relative;
      margin-top: -100px;
      width: 500px;
      height: 90px;
      background-color:rgba(165, 179, 195, 0.4) ;
      align-items: center;
      justify-content: center;
      display: flex;
      text-align: left;
      font-size: 26px;
      color: #000;
      font-weight: 700;
      text-align: center;
      padding-left: 20px;
      padding-right: 20px;
      margin-left: 0px;
      padding-top: 20px;
      opacity: 0.8;
      @media (max-width: 768px) {
            width: 300px;
            height: 100px;
            font-size: 20px;
            margin-left: 10px;
            display: none;
      }
      `


const ProjectDiv = styled.div`
      width: 90%;
      height 2000px;
      background-color: #fff;
      margin-top: 200px;
      display: flex;
      padding: 100px;
      box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
      @media (max-width: 768px) {
            width: 100%;
            padding: 0px;
      }

`

const ProjectInfoDiv = styled.div`
      width: 100%;
      margin-top: 50px;
      height: 100%;
      
      `


const OrangeBackground = styled.div`
      background-color: rgba(255, 107, 0, 0.9);
      position: absolute;
      height: 300px;
      width: 500px;
      z-index: -1;
      margin-left: -50px;
      margin-top: -50px;
      
      @media (max-width: 768px) {
            width: 400px;

      }
      `


const WorkInfo = ({ id }) => {


      const [project, setProject] = useState({});
      const [projects, setProjects] = useState([]);

      useEffect(() => {
            const selectedProject = workFields.find((project) => project.id == id);

            if (selectedProject)
                  setProject(selectedProject);

            setProjects(allProjects.filter((project) => project.category == selectedProject.category));

      }, [id]);

      const { t } = useTranslation();



      return (
            <ProjectDiv>
                  <div className="container-fluid" style={{ height: '100%', width: '100%', backgroundColor: "#fff", opacity: 0.99}}>
                        <ProjectTitleDiv>
                              <p>
                                    {t(project.title)}
                              </p>
                        </ProjectTitleDiv>
                        <ProjectInfoDiv>
                              <ProjectTextDiv>
                                    <ProjectInfoText>
                                          {''}

                                    </ProjectInfoText>
                              </ProjectTextDiv>
                              <div className="col-12" style={{ marginTop: "70px" }}>

                                    {projects.map((project, index) => {
                                          return (
                                                <div>
                                                      <Fade triggerOnce>
                                                            <OrangeBackground/>
                                                            <Project key={index} id={project.id} />
                                                      </Fade>
                                                </div>

                                          )
                                    }
                                    )}

                              </div>

                        </ProjectInfoDiv>

                  </div>
            </ProjectDiv>
      )
}

export default WorkInfo