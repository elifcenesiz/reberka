import Footer from "../components/Footer"
import Navbar from "../components/MenuBar"
import ProjectInfo from "../projects/ProjectInfo"
import styled from 'styled-components';
import ImageGallery from "../components/ImageGallery";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import WorkInfo from "./WorkInfo";
import workFields from "./workFieldsInformation";
import { useTranslation } from "react-i18next";



const BackgroundOverlay = styled.div`
position: relative;
height: 100%;
background-size: cover;
//background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${process.env.PUBLIC_URL + "/background.jpg"});
background-repeat: repeat;
padding-bottom: 100px;
`;



const Banner = styled.div`
      height: 120px;
      align-content: center;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.4)), url(${process.env.PUBLIC_URL + "/banner.jpg"});
      background-size: cover;
      margin-top: 80px;
      font-size: 28px;
      text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
      
      @media (max-width: 768px) {
            height: 100px;
            font-size: 20px;
            font-weight: bold;
      }
`;


const WorkInfoPage = () => {

      const { id } = useParams();
      const {t} = useTranslation();

      const [project, setProject] = useState({});

      useEffect(() => {
            const selectedProject = workFields.find((project) => project.id == id);

            if (selectedProject)
                  setProject(selectedProject);

      }, [id]);


      return (
            <div className="work-info-page">
            <div className="container-fluid no-padding" display="flex" >
                  
                  <div className="row" style={{ position:"fixed",  top: "0", width: "100%", zIndex: "100" }}>
                        <Navbar />
                  </div>
                  <Banner className="row" >
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-6" style={{ textAlign: "center", marginTop: "50px" }}>
                              <p style={{ color: "rgba(0,0,0,0.6)" }}>{t(project.title)}</p>

                        </div>
                  </Banner>
                  <BackgroundOverlay>
                  <div className="row" style={{ height: "100%", alignContent: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginBottom: "150px", marginTop: "-200px" }}>
                        <WorkInfo id={id} />
                  </div>
                  </BackgroundOverlay>
            </div>
                  < Footer />
            </div>
      )
}

export default WorkInfoPage



