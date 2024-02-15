import styled from "styled-components"
import ImageGallery from "../components/ImageGallery"
import { useEffect, useState } from "react"
import { allProjects } from "./projectInformation"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import i18n from "../i18n";
import workFields from "./workFieldsInformation"


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
      margin-left: 0%;

      @media (max-width: 968px) {
            font-size: 14px;
      }
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
      font-size: 22px;
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


const Work = ({ id }) => {

      const [project, setProject] = useState({});
      const { t } = useTranslation();
        const [description, setDescription] = useState([]);


      useEffect(() => {

        const selectedField = workFields.find((project) => project.id == id);

            if (selectedField)
                  setProject(selectedField);
        
        var path =  "/reberka makale/" + selectedField.id;
        if (i18n.language == "tr") path = path + "_tr.txt";
        else if (i18n.language == "en") path = path + "_eng.txt";
        else path = path + "_rs.txt";
    
        fetch(path)
          .then((response) => response.text())
          .then((data) => {  
            const linesArray = data.split("\n");
            setDescription(linesArray);
          })
          .catch((error) => {

            setDescription([""]);
            }
            );

      }, [project, i18n.language]);

      return (

            <div className="container-fluid no-padding" style={{ width: '100%', backgroundColor: "#fff", opacity: 1, marginBottom: "150px", position: "relative",boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)" }}>

                  <div className="row" style={{ height: "100%" }}>


                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"  style={{paddingBottom:"100px"}} >
                              <Link to={`/workfield/${project.id}`} style={{ textDecoration: "none", color: "#000" }}>

                                    <ProjectTitleDiv>
                                          <p style={{ textDecoration: "none", color: "#000" }}>
                                                {t(project.title)}
                                          </p>
                                    </ProjectTitleDiv>

                                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}>

                                          <ProjectTextDiv>
                                                <p>
                                                      {
                                                            description[0]
                                                      }
                                                </p>
                                          </ProjectTextDiv>
                                    </div>
                              </Link>
                        </div>
                  </div>

            </div>

      )

}

export default Work;