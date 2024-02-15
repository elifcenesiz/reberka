import Navbar from "../components/MenuBar";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { allProjects } from "./projectInformation";
import { useTranslation } from "react-i18next";
import GalleryModal from "../components/GalleryModal";
import Grid from "@mui/material/Grid";
import GalleryGrid from "../Gallery/GalleryGrid";

import { Fade } from "react-awesome-reveal";
import SideBar from "../Gallery/SideBar";
import Tabss from "../Gallery/Tabs";

const ProjectTitleDiv = styled.div`
  position: relative;
  height: 100px;
  background-color: rgba(165, 179, 195, 0.4);
  align-items: center;
  display: flex;
  font-size: 26px;
  color: #000;
  text-align: left;
  padding-left: 100px;
  padding-right: 0px;
  padding-top: 20px;
  opacity: 0.8;
  margin-left: 190px;
  margin-top: 50px;
  @media (max-width: 968px) {
    width: 300px;
    height: 100px;
    font-size: 20px;
    margin-left: -30px;
    padding-left: 15%;
  }
`;

const ProjectDiv = styled.div`
      width: 80%;
      height 2000px;
      background-color: #fff;
      margin-top: 200px;
      display: flex;
      box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
      @media (max-width: 968px) {
            width: 100%;
      }

`;

const tabsStyle = {
  display: "none",
  "@media (max-width: 968px)": {
    display: "block",
  },
};


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



const ProjectImages = ({ id, images }) => {
  const [project, setProject] = useState({});
  const [image, setImage] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
  const { t } = useTranslation();

  function handleImageClick(index) {
    setIndex(index);
    setModal(true);
  }

  useEffect(() => {
    const selectedProject = allProjects.find((project) => project.id == id);

    if (selectedProject) setProject(selectedProject);
  }, [id]);

  useEffect(() => {
    if (images.length > 0) setImage(true);
    else setImage(false);
  }, [images]);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < images.length; i++) {
      const photo = {
        src: images[i],
      };
      arr.push(photo);
      setPhotos(arr);
    }
  }, [images]);

  return (
    <div
      className="container-fluid no-padding"
      style={{
        marginBottom: "150px",
        paddingTop: "5%",
      }}
    >
       
      <SideBar selected={id} />

      <Tabss selected={id} style={tabsStyle} />
    
      <ProjectTitleDiv>
        <Fade direction="left" triggerOnce>
          <a href="/gallery" style={{ textDecoration: "none", color: "#000" }}>
            {t('photos') + ' /  '}
          </a>
        <p style={{ color: "#000" , marginTop: "18px"}}>
          {"   " + t(project.name)}</p>
        </Fade>
      </ProjectTitleDiv>
      
      
      {modal && <GalleryModal images={images} close={() => setModal(false)} index = {index} />}

      <div
        className="row no-gutters"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div className="col-xs-0 col-sm-0 col-md-2 col-lg-2 col-xl-2" />
        {image && (
          <div
            className="col-xs-11 col-sm-11 col-md-8 col-lg-8 col-xl-8"
            style={{
              marginTop: "100px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <GalleryGrid images={images} />
          </div>
          
        )}
      </div>
    </div>
  );
};

export default ProjectImages;
