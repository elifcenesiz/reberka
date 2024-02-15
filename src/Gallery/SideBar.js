import React from "react";
import styled from "styled-components";
import { allProjects } from "../projects/projectInformation";
import { useTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

const Sidebar = styled.div`
  position: absolute;
  z-index: 10;
  top: ${props => props.type === "margin1" ? "80px" : "30px"};
  left: 15px;
  height: ${props => props.type === "margin1" ? "1350px" : "100%"};
  width: 200px;
  background-color: rgba(30, 54, 83, 0.4);
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding-top: 200px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  opacity: 0.8;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow-y: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarItem = styled.a`
  position: relative;
  display: block;
  color: #fff;
  color: rgba(30, 54, 83, 0.8);
  text-decoration: none;
  font-size: 1.1rem;
  padding-top: 40px;
  &:hover {
    color: rgba(30, 54, 83, 0.5);
    //when hover, change color of line
    

  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
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

const Line1 = styled.div`
  width: 49%;
  border-top: 2px solid rgba(30, 54, 83, 0.8);

  ${SidebarItem}:hover & {
    border-top: 2px solid rgba(30, 54, 83, 0.3);
  }
`;

const Line2 = styled.div`
  width: 49%;
  border-top: 2px solid rgba(30, 54, 83, 0.8);
  margin-right: 0px;
  ${SidebarItem}:hover & {
    border-top: 2px solid rgba(30, 54, 83, 0.3);
  }
`;

const Dot = styled.div`
  width: 7px;
  height: 7px;
  display: inline-block;
  border-radius: 50%;
  background-color: rgba(30, 54, 83, 0.8);
  margin-left: 5px;
  margin-right: 5px;
  margin-top: -2px;
  ${SidebarItem}:hover & {
    background-color: rgba(30, 54, 83, 0.3);
  }
`;

const LineDiv = styled.div`
  margin-top: 10px;
  width: 90%;
  display: ${(props) => (props.type === "hover" ? "none" : "flex")};
  flex-direction: row;
  margin-left: 5%;
`;

const SideBar = ({ selected, type }) => {

    const { t } = useTranslation();

  return (
   
    <Sidebar type={type}>
         <Fade direction="bottom" cascade damping={0.2} triggerOnce>
      {allProjects.map(
        (project) =>
          project.id < 6 && (
            <SidebarItem href={`/projects/${project.id}`} key={project.id}>
              {t(project.name)}
              <Fade>
                {project.id == selected ? (
                  <LineDiv>
                    <Line1 />
                    <Dot />
                    <Line2 />
                  </LineDiv>
                ) : (
                  <LineDiv type="hover">
                    <Line1 type="hover" />
                    <Dot type="hover" />
                    <Line2 type="hover" />
                  </LineDiv>
                )}
              </Fade>
            </SidebarItem>
          )
      )}
      </Fade>
    </Sidebar>
    
  );
};

export default SideBar;
