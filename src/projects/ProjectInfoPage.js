import Footer from "../components/Footer"
import Navbar from "../components/MenuBar"
import ProjectInfo from "../projects/ProjectInfo"

import styled from 'styled-components';
import ImageGallery from "../components/ImageGallery";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ProjectImages from "./ProjectImages";



const BackgroundOverlay = styled.div`
content: "";
position: relative;
width: 100%;
height: 100%;
background-size: cover;
background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${process.env.PUBLIC_URL + "/background.jpg"});
background-repeat: repeat;

`;

const ProjectInfoDiv = styled.div`
      marginBottom: "150px", 
      justifyContent: "center", 
      alignItems: "center" , 
      alignContent: "center", 
      display: "flex", 
      flexDirection: "column"
      @media (max-width: 768px) {
            width: 100%;
      `;


const ProjectInfoPage = () => {

      const { id } = useParams();
      const [images, setImages] = useState([]);



      useEffect(() => {
            const importProjectImages = async () => {
                  try {
                        // Use require.context to dynamically import images
                        const context = require.context('../images/projects', true, /\.(jpg)$/);

                        // Get all images from the specific project folder
                        const projectImages = context.keys()
                              .filter(key => key.includes(`project${id}`))
                              .map(context);

                        setImages(projectImages);
                  } catch (error) {
                        console.error('Error importing project images:', error);
                        setImages([]);
                  }
            };

            importProjectImages();
      }, [id]);

      return (
            <div className="project-info-page">
            <div className="container-fluid no-padding" style={{ overflow: "auto" }}>

                  <div className="row">
                        <Navbar />
                  </div>
                  <div className="row no-gutters" style={{ height: "100%", alignContent: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginBottom: "0px", marginTop: "50px" }}>
                  <BackgroundOverlay >
                 
                              <ProjectImages id={id} images={images} />
                        
                  </BackgroundOverlay>
                  </div>
                  </div>
                  < Footer />
            </div>
      )
}

export default ProjectInfoPage



