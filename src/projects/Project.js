import styled from "styled-components"
import ImageGallery from "../components/ImageGallery"
import { useEffect, useState } from "react"
import { allProjects } from "./projectInformation"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';


const ProjectText = styled.p`
      font-size: 50px;
      color: #000;
      font-weight: 300;
      text-align: left;
      `
const ProjectTextDiv = styled.div`

      width: 80%;
      height: 100%;
      justify-content: center;
      display: flex;
      margin-top: 80px;
      font-size: 20px;

      @media (max-width: 968px) {
            font-size: 14px;
      }
      `

const ProjectImage = styled.div`
      
      width: 80%;
      align-items: center;
      justify-content: center;
      align-content: center;
      display: flex;
      flex-direction: column;


`

const ProjectTitleDiv = styled.div`
      position: relative;
      margin-top: 0px;
      width: 300px;
      height: auto;
      background-color:rgba(165, 179, 195, 0.4) ;
      align-items: center;
      justify-content: center;
      display: flex;
      text-align: left;
      font-size: 32px;
      color: #38659A;
      font-weight: 700;
      text-align: center;
      padding-left: 20px;
      padding-right: 20px;
      margin-left: 50px;
      padding-top: 20px;
      opacity: 0.8;
      @media (max-width: 968px) {
            width: 300px;
            font-size: 20px;
            margin-left: 7%;
      }
      `


const Project = ({ id }) => {


      const [images, setImages] = useState('no images');
      const [project, setProject] = useState({});
      const [image, setImage] = useState(false);
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
                        if (projectImages.length > 0)
                              setImage(true)
                        else
                              setImage(false)

                  } catch (error) {
                        console.error('Error importing project images:', error);

                  }


            };

            importProjectImages();
      }, [id]);

      return (

            <div className="container-fluid no-padding" style={{ width: '100%', backgroundColor: "#fff", opacity: 1, marginBottom: "150px", position: "relative",boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}>

                  <div className="row" style={{ height: "100%" }}>


                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5"  style={{paddingBottom:"100px"}} >
                              <Link to={`/projects/${project.id}`} style={{ textDecoration: "none", color: "#000" }}>

                                    <ProjectTitleDiv>
                                          <p style={{ textDecoration: "none", color: "#000" }}>
                                                {t(project.name)}
                                          </p>
                                    </ProjectTitleDiv>

                                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>

                                          <ProjectTextDiv>
                                                <p>
                                                      {
                                                            t('projectText' + project.id) != 'projectText' + project.id ?
                                                                  t('projectText' + project.id)
                                                                  :
                                                                  ''
                                                      }
                                                </p>
                                          </ProjectTextDiv>
                                    </div>
                              </Link>
                        </div>
                        {image &&
                              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" style={{ alignContent: "center", alignItems: "center", justifyContent: "center", display: "flex" }}>
                                    <ProjectImage>
                                          <ImageGallery images={images} />
                                    </ProjectImage>
                              </div>
                        }
                  </div>

            </div>

      )

}

export default Project;