import { useState } from "react";
import Navbar from "../components/MenuBar";
import Grid from "@mui/material/Grid";
import ProjectGallery from "../home/ProjectGallery";
import { allProjects } from "../projects/projectInformation";
import ProjectCard from "../home/ProjectCard";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import styled from "styled-components";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Footer from "../components/Footer";
import GalleryGrid from "./GalleryGrid";
import SideBar from "./SideBar";
import { Divider } from "@mui/material";
import Tabs from "./Tabs";

const Banner = styled.div`
      
      height: 100px;
      align-content: center;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.4)), url(${process.env.PUBLIC_URL + "/banner.jpg"});
      background-size: cover;
      background-repeat: repeat;
      font-size: 35px;
      text-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        margin-top: 80px;
        //box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
      
      @media (max-width: 768px) {
            height: 100px;
            font-size: 20px;
            font-weight: bold;
      }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.08);
    transition: transform 0.2s ease-in-out;
  }
`;

const tabsStyle = {
  display: "none",
  "@media (max-width: 968px)": {
    display: "block",
  },
};


const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const { t } = useTranslation();
  

  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    
  useEffect(() => {
    const importProjectImages = async () => {
      try {
        // Use require.context to dynamically import images
        const context = require.context("../images/projects", true, /\.(jpg)$/);

        // Get all images from the specific project folder
        const projectImages = context
          .keys()
          .filter((key) => key.includes(`project`))
          .map(context);

        setImages(projectImages);
      } catch (error) {
        console.error("Error importing project images:", error);
        setImages([]);
      }
    };

    importProjectImages();
  }, []);

  return (
    <div>
    
      <div className="container-fluid no-padding">
        <div className="row no-gutters" style={{ position: "fixed", top: "0", width: "100%", zIndex: "100" }}>
          <Navbar />
        </div>
        <SideBar selected={-1} type={"margin1"}/>
        <Banner className="row no-gutters">
                        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-6" style={{ textAlign: "center", marginTop: "50px" }}>
                              <p style={{ color: "rgba(0,0,0,0.6)" }}>{t('photos')}</p>

                        </div>
        </Banner>
        <div
          className="row no-gutters"
            style={{
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
                }}
        >
          
          <Tabs selected={0} style={tabsStyle} />
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10 col-xl-10" style={{ marginTop: "0px", marginLeft:"30%" }}>
            {/*<ProjectGallery type="gallery"/>*/}
            <Grid container spacing={1} sx={{ marginTop: "50px", '@media (max-width: 768px)': {display:"none"} }}>
              {allProjects.map(
                (project) =>
                  project.id < 6 && (
                    <Grid item xs={6} sm={6} md={6} lg={2} xl={2} key={project.id}>
                      <Link
                        to={`/projects/${project.id}`}
                        style={{ textDecoration: "none" }}
                        key={project.id}
                      >
                        <ProjectCard  id={project.id} type={"gallery"} />
                      </Link>
                    </Grid>
                  )
              )}
            </Grid>
           
          </div>
           
        </div>
        <div
          className="row"
          style={{
            paddingTop: "70px",
            paddingBottom: "50px",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
            <div className="col-xs-0 col-sm-0 col-md-2 col-lg-2 col-xl-2"/>
          <div
            className="col-xs-11 col-sm-10 col-md-8 col-lg-8 col-xl-8"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            
            <GalleryGrid images={images} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
