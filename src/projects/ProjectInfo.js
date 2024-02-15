import Navbar from "../components/MenuBar";
import styled from "styled-components";
import ImageGallery from "../components/ImageGallery";
import { useEffect, useState } from "react";
import { allProjects } from "./projectInformation";
import { useTranslation } from "react-i18next";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const ProjectText = styled.p`
  font-size: 50px;
  color: #000;
  font-weight: 300;
  text-align: left;
`;
const ProjectTextDiv = styled.div`
  width: 80%;
  height: 100%;
  text-align: left;
  justify-content: center;
  display: flex;
  margin-left: 10%;
  flex-direction: column;
`;

const ProjectInfoText = styled.p`
  font-size: 22px;
  color: #000;
  font-weight: 300;
  text-align: left;
  @media (max-width: 968px) {
    font-size: 14px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
`;

const ProjectTitleDiv = styled.div`
  position: relative;
  margin-top: -100px;
  width: 500px;
  height: 120px;
  background-color: rgba(165, 179, 195, 0.4);
  align-items: center;
  justify-content: center;
  display: flex;
  text-align: left;
  font-size: 36px;
  color: #000;
  font-weight: 700;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 50px;
  padding-top: 20px;
  opacity: 0.8;
  @media (max-width: 968px) {
    width: 300px;
    height: 100px;
    font-size: 20px;
    margin-left: 10px;
  }
`;

const ProjectDiv = styled.div`
      width: 90%;
      height 2000px;
      background-color: #fff;
      margin-top: 200px;
      display: flex;
      box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);
      @media (max-width: 968px) {
            width: 100%;
      }

`;

const ProjectInfoDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  height: 100%;
`;

const Highlight1 = styled.div`
  width: 40%;
  height: 100%;
  margin-left: 5%;
  margin-top: 8%;
`;
const Highlight2 = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 2%;
`;

const Highlight3 = styled.div`
  width: 40%;
  height: 100%;
  margin-top: 1%;
  margin-left: 10%;
`;

const Highlight4 = styled.div`
  width: 40%;
  height: 100%;
`;

const HighlightDiv = styled.div`
  margin-top: 150px;
  margin-left: 20%;
  width: 60%;
  height: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: #38659a;
`;

const PdfButton = styled.button`
  width: 250px;
  height: 70px;
  background-color: #38659a;
  border: none;
  color: #fff;
  font-size: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  padding: 10px;
  margin-top: 20px;
  margin-bottom: -20px;
  opacity: 0.8;
`;

const ProjectInfo = ({ id, images }) => {
  const [project, setProject] = useState({});
  const [image, setImage] = useState(false);
  const { t } = useTranslation();

  const [file, setFile] = useState();

  useEffect(() => {
    // if there exists a file named project + id + .pdf in the public/images/projectDocuments folder, set the file to that file
    /*
            const path = require.context('../images/projectDocuments', true);
            const file = path.keys().find((item) => item === './project' + id + '.pdf');
            if (file)
                  import ('../images/projectDocuments' + file.substring(1)).then((file) => setFile(file.default));
*/
  }, []);

  useEffect(() => {
    const selectedProject = allProjects.find((project) => project.id == id);

    if (selectedProject) setProject(selectedProject);
  }, [id]);

  useEffect(() => {
    if (images.length > 0) setImage(true);
    else setImage(false);
  }, [images]);

  return (
    <ProjectDiv>
      <div
        className="container-fluid"
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          opacity: 0.99,
          marginBottom: "100px",
          paddingTop: "5%",
        }}
      >
        <ProjectTitleDiv>
          <p>{t(project.name)}</p>
        </ProjectTitleDiv>

        <ProjectInfoDiv>
          <ProjectTextDiv>
            <ProjectInfoText>
              {t("projectText" + project.id) != "projectText" + project.id
                ? t("projectText" + project.id)
                : ""}
            </ProjectInfoText>
            {file && (
              <PdfButton>
                <a
                  href={file}
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  {t("viewCatalog")}
                  <PictureAsPdfIcon
                    style={{
                      fontSize: "30px",
                      marginLeft: "15px",
                      marginTop: "-5px",
                    }}
                  />
                </a>
              </PdfButton>
            )}
          </ProjectTextDiv>
        </ProjectInfoDiv>
        <div className="row">
          {image && (
            <div
              className="col-12"
              style={{
                marginTop: "100px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <ImageGallery images={images} />
            </div>
          )}

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            {/*
                                    <HighlightDiv>
                                          <Highlight1>
                                                <p style={{  fontSize: '2.4rem', opacity: 0.8, fontWeight: "bold" }}>
                                                      {project.highlights && project.highlights[0]}
                                                </p>
                                          </Highlight1>
                                          <Highlight2>
                                                <p style={{ fontSize: '2.8rem', opacity: 1, fontWeight: "bold" }}>
                                                      {project.highlights && project.highlights[1]}
                                                </p>
                                          </Highlight2>
                                          <Highlight3>
                                                <p style={{ fontSize: '2rem', opacity: 0.4, fontWeight: "bold" }}>
                                                      {project.highlights && project.highlights[2]}
                                                </p>
                                          </Highlight3>
                                          <Highlight4>
                                                <p style={{ fontSize: '2.4rem', opacity: 0.55, fontWeight: "bold" }}>
                                                      {project.highlights && project.highlights[3]}
                                                </p>
                                          </Highlight4>
                                    </HighlightDiv>
                                    */}
            {/*
                                    <div style={{ width: "600px", height: "350px", marginTop: "150px", maxWidth: "100%", maxHeight: "100%" }}>
                                          <img src={images[0]} style={{ width: "100%", height: "100%" }} />
                                    </div>

                                    */}
          </div>
          <div className="col-12">
            {/*
                                    <div style={{ width: "550px", height: "300px", marginTop: "150px", marginRight: "50px", marginLeft: "130px", maxWidth: "100%", maxHeight: "100%" }}>
                                          <img src={images[1]} style={{ width: "100%", height: "100%" }} />
                                    </div>

                                    <div style={{ width: "500px", height: "300px", marginTop: "150px", marginLeft: "100px", marginRight: "50px", maxWidth: "100%", maxHeight: "100%" }}>
                                          <img src={images[2]} style={{ width: "100%", height: "100%" }} />
                                    </div>
                                    */}
          </div>
        </div>
      </div>
    </ProjectDiv>
  );
};

export default ProjectInfo;
