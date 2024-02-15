import { Card, Typography, Stack, Skeleton, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
      IconButton,
      CardContent,
      CardMedia,
      CardActionArea,
      Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import { allProjects } from "../projects/projectInformation";
//import DefaultPhoto from "../images/default-project-photo.jpg";
import { useLanguage } from "../LanguageContext";
import { useTranslation } from "react-i18next";

const eventCardStyle = {
      width: "250px",
      margin: "15px",
      height: "320px",
      background: "#F5F5F5",
      boxShadow: "rgb(19, 39, 32)",
      ":hover": {
            
            transition: "0.1s",
            boxShadow: "rgba(19, 39, 32, 0.3) 0px 10px 10px",
          },
          '@media (max-width: 968px)': {
            maxWidth: "100%",
            width: "200px",
            height: "300px",

      }
};

const cardStyleGallery = {
      width: "180px",
      margin: "15px",
      height: "200px",
      background: "#F5F5F5",
      boxShadow: "rgb(19, 39, 32)",
      ":hover": {
            
            transition: "0.1s",
            boxShadow: "rgba(19, 39, 32, 0.3) 0px 10px 10px",
          },
          '@media (max-width: 968px)': {
            maxWidth: "100%",
            width: "180px",
            height: "220px",

      }
};

const imageStyle ={
      objectFit: "cover", 
      height: "250px",
      '@media (max-width: 968px)': {
            height: "200px",

      }
      
}

const galleryImageStyle ={
      objectFit: "cover",
      height: "150px",
      '@media (max-width: 968px)': {
            height: "150px",
      
      }

}
const typographyStyle = {
      color: "black",
      fontSize: "16px",
      '@media (max-width: 968px)': {
            fontSize: "18px",
      }
}


const ProjectCard = ({ id, type }) => {

      const [images, setImages] = useState([]);
      const [project, setProject] = useState({});
      const { t } = useTranslation();

      useEffect(() => {
            const selectedProject = allProjects.find((project) => project.id == id);

            if (selectedProject) 
                  setProject(selectedProject);

            }, [id]);




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
                  }
                };

                importProjectImages();
      }, [id]);


      return (
                  images.length > 0 && (
                  <div>
                        <Card sx={type == "gallery" ? cardStyleGallery : eventCardStyle}>
                              <CardActionArea>
                                    {images ? (
                                          <CardMedia
                                          src={images[0] || "DefaultPhoto"}
                                          component="img"
                                          height="350"
                                          onError={(e) => {
                                            e.target.src = ''
                                          }}
                                          alt= ''
                                          sx = {type == "gallery" ? galleryImageStyle : imageStyle}
                                        />

                                    ) : (
                                          <Skeleton variant="rectangular" width="100%" height="250px" />
                                    )}
                                    <CardContent>
                                          <div className="container" style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                                                {!images ? (
                                                      <Stack spacing={2}>
                                                            <Skeleton
                                                                  sx={{ bgcolor: "#eaeaea" }}
                                                                  variant="rounded"
                                                                  width="100%"
                                                                  height="40px"
                                                            />
                                                            <Skeleton
                                                                  sx={{ bgcolor: "#eaeaea" }}
                                                                  variant="rounded"
                                                                  width="85%"
                                                                  height="30px"
                                                            />
                                                            <Skeleton
                                                                  sx={{ bgcolor: "#eaeaea" }}
                                                                  variant="rounded"
                                                                  width="85%"
                                                                  height="30"
                                                            />
                                                      </Stack>
                                                ) : (

                                                      <div className="row" style={{   width: "140%", marginLeft: "-20%",  alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                                                            <Typography gutterBottom  component="div" sx={typographyStyle}>
                                                                 {t(project.name)}
                                                            </Typography>
                                                      </div>
                                                )}

  
                                          </div>
                                    </CardContent>
                              </CardActionArea>
                        </Card>
                  </div>)
      );

}

export default ProjectCard;