import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { allProjects, constructionProjects, designProjects, renovationProjects } from "../projects/projectInformation";
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from "react-country-flag"
import { useLanguage } from "../LanguageContext";
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import workFields from '../projects/workFieldsInformation';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(30, 54, 83, 0.7);
  //background-color: #fff;
  color: #fff;
  height: 80px;
  z-index: 99; 
  position: fixed;
  padding-top: 10px;
  
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  &:hover {
    font-color: #fff
  }
`;

const NavLinkBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100%;
&:hover {
      font-color: #38659A
    }
@media (max-width: 768px) {
  display: none;
}
`;

const DropdownNavLinkBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100%;

&:hover {
      font-color: #38659A
      background-color: rgba(30, 54, 83, 0.5);
    }
@media (max-width: 768px) {
  display: none;
}
`;

const LanguageNavLinkBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100%;

&:hover {
      font-color: #38659A
      background-color: rgba(30, 54, 83, 0.5);
    }
`;

const IconWrapper = styled.div`
display: none;
font-size: 1.5rem;
@media (max-width: 768px) {
  display: flex;
}
`;



const SideBarNavLinkBox = styled.div`
display: flex;
justify-content: left;
align-items: center;
text-align: left;
width: 100%;
height: 100%;
&:hover {
      font-color: #38659A
      background-color: rgba(30, 54, 83, 0.5);
    }
@media (min-width: 968px) {
  display: none;
`;


const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  //color: rgba(30, 54, 83, 1);
  font-size: 1.1rem;
  ${NavLinkBox}:hover & {
    color: rgba(171, 190, 212, 1)
  }
  ${DropdownNavLinkBox}:hover & {
    color: rgba(171, 190, 212, 1)
  }
  ${LogoDiv}:hover & {
    color: #fff
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 80px; 
  left: -35%;
  background-color: rgba(255, 255, 255, 0.99);
  padding: 0.5rem;
  width: 100%;
  display: none;
  opacity: 0.1;
  -webkit-transform-origin: top;
  transform-origin: top;
  -webkit-animation-fill-mode: forwards;  
  animation-fill-mode: forwards; 
  -webkit-transform: scale(1, 0);
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  display: block;
  padding-bottom: 5rem;
  padding-right: 2rem;
  padding-left: 3rem;
  padding-top: 1rem;
  margin-left : 35%;
  text-align: left;
  
  
  ${DropdownNavLinkBox}:hover & {
    
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1); 
    opacity:1;
  
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%; /* Position the dropdown below the NavLinkBox */
  background-color: rgba(30, 54, 83, 0.6);
  width: 200px;
  display: none;
  -webkit-transform-origin: top;
  transform-origin: top;
  -webkit-animation-fill-mode: forwards;  
  animation-fill-mode: forwards; 
  -webkit-transform: scale(1, 0);
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  display: block;
  padding-bottom: 1rem;
  padding-right: 1.5rem;
  margin-left : -3%;
  text-align: center;
  @media (max-width: 968px) {
    right: 0px;
  }


  
  
  ${LanguageNavLinkBox}:hover & {
    
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1); 
    opacity:1;
  
  }
`;

const DropdownItem = styled.a`
  display: block;
  color: #1E3653;
  text-decoration: none;
  font-size: 14px;
  align-items: center;
  align-content: center;
  padding-top: 10px;
  &:hover {
    color: rgba(171, 190, 212, 1)
  }
  
`;

const DropdownItem2 = styled.a`
  position: relative;
  display: block;
  color: #fff;
  text-decoration: none;
  font-size: 1.3rem;
  padding-top: 1rem;
  &:hover {
    color: rgba(171, 190, 212, 1)
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
`;



const DropdownHeader = styled.a`
  display: block;
  color: #1E3653;
  text-decoration: line-bottom;
  font-size: 18px;
  padding-bottom: 3rem;
  padding-top: 1.2rem;
  &:hover {
    color: rgba(171, 190, 212, 1)
  }
`;

const DropdownLine = styled.div`
  border-left: 2px solid #1E3653;
  height: 80%;
  margin-right : 100px; 
  margin-left : 20px;
  margin-top: 50%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
`;

const DropdownGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust minmax values as needed */
gap: 10px; 

`;

const DropdownGridRow = styled.div`
display: grid;
grid-template-rows: repeat(5, 1fr); /* 5 rows with equal height */
gap: 16px;

`;


const SideBar = styled.div`
  position: absolute;
  z-index: 10;
  top: 80px;
  left: -20%;
  height: 100vh;
  width: 300px;
  background-color: rgba(80, 104, 133, 0.7);
  padding-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  display: none;
  opacity: 0.1;
  -webkit-transform-origin: left;
  transform-origin: left;
  -webkit-animation-fill-mode: forwards;  
  animation-fill-mode: forwards; 
  -webkit-transform: scale(0, 1);
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  padding-bottom: 5rem;
  padding-right: 2rem;
  padding-left: 3rem;
  padding-top: 1rem;
  margin-left : 20%;
  text-align: left;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow-y: auto;
  
  
  @media (max-width: 768px) {
  ${SideBarNavLinkBox}:hover & {
    display: block;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1); 
    opacity:1;
  
  }
}
`;

const Logo = styled.img`
  height: 70px;
  width: 120%;
  margin-left: -10%;
  margin-top: -15px;
  object-fit: fill;
  @media (max-width: 968px) {
    height: 50px;

`;



const Navbar = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSideDropOpen, setSideDropOpen] = useState(false);
  const [isSideDropOpen2, setSideDropOpen2] = useState(false);


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };


  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const { changeLanguage } = useLanguage();

  const switchLanguage = (newLanguage) => {
    changeLanguage(newLanguage);
  };


  const handleChildElementClick = (e) => {
    e.stopPropagation()
    setSideDropOpen(!isSideDropOpen)
  }

  const handleChildElementClick2 = (e) => {
    e.stopPropagation()
    setSideDropOpen2(!isSideDropOpen2)
  }

  const handleSidebarClick = (e) => {
    console.log(e)
    e.preventDefault()
    setSidebarOpen(!isSidebarOpen)
  }


  return (
    <NavbarWrapper>
      <SideBarNavLinkBox>
        <IconWrapper onClick={handleSidebarClick}>
          <MenuIcon  style={{ height: "30px", width: "30px", marginLeft: "10px" }} />
        </IconWrapper>
        {
          
          isSidebarOpen && 
            <SideBar>

           <DropdownItem2 href="/home">{t('home')}</DropdownItem2>   
          <DropdownItem2 href="/about">{t('corporate')}</DropdownItem2>
          <DropdownItem2 href="/projects">{t('projects')}</DropdownItem2>
          <DropdownItem2 >
            <KeyboardArrowDownIcon style={{ height: "40px", width: "40px" }} onClick={handleChildElementClick} />
            <a href='/gallery' style={{ textDecoration: "none", color: "#fff" }}>
              {t('photos')}
              </a>
              
            
          </DropdownItem2>
          {
            isSideDropOpen &&
              allProjects.map((project) => {
                return (
                  <DropdownItem2 href={`/projects/${project.id}`} style={{ paddingLeft: "50px" }}>
                    {t(project.name)}
                  </DropdownItem2>
                )
              }
              )

          }
          <DropdownItem2 >
            <KeyboardArrowDownIcon style={{ height: "40px", width: "40px" }} onClick={handleChildElementClick2} />
            {t('workingAreas')}
          </DropdownItem2>
          {
            isSideDropOpen2 &&
              workFields.map((project) => {
                return (
                  <DropdownItem2 href={`/workfield/${project.id}`} style={{ paddingLeft: "50px" }}>
                    {t(project.title)}
                  </DropdownItem2>
                )
              }
              )

             
          }
          <Link to="/contact" style={{ textDecoration: "none" }}>
          <DropdownItem2 >
            
              {t('contact')}
            
          </DropdownItem2>
          </Link>
          <DropdownItem2 href="/references">{t('references')}</DropdownItem2>

        </SideBar>
        }
      </SideBarNavLinkBox>
      <NavLinkBox>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <NavLink >{t('home')}</NavLink>
        </Link>
      </NavLinkBox>
      <NavLinkBox>
        <NavLink href="/about">{t('corporate')}</NavLink>
      </NavLinkBox>
      <DropdownNavLinkBox>
        <NavLink onClick={toggleDropdown} >{t('workingAreas')}</NavLink>
        <Dropdown isopen={isDropdownOpen.toString()}>
          < div className='container-fluid' >
            <div className='row'>
          
              <div className='col-1' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
                
              </div>
              <div className='col-10'>
                <DropdownHeader>
                  {t('workingAreas')}
                </DropdownHeader>
                
                <DropdownGrid>
                  {
                    workFields.map((project) => {
                      return (
                        <DropdownItem href={`/workfield/${project.id}`} key={project.id}>
                          {t(project.title)}
                        </DropdownItem>
                      )
                    }
                    )
                  }
                </DropdownGrid>

              </div>
            </div>
          </div>
        </Dropdown>
      </DropdownNavLinkBox>
      <NavLinkBox>
        <NavLink href="/projects">{t('projects')}</NavLink>
      </NavLinkBox>
      <LogoDiv style={{ marginLeft: "5vw", marginRight: "5vw" }}>
        <NavLink href="/home" style={{ fontSize: "3rem" }}>
          <Logo src= {process.env.PUBLIC_URL + '/logo.jpeg' }/>
        </NavLink>
      </LogoDiv>
      <NavLinkBox>
        <NavLink href="/gallery">{t('photos')}</NavLink>
      </NavLinkBox>
      <NavLinkBox>
        <NavLink href="/references">{t('references')}</NavLink>
      </NavLinkBox>
      <NavLinkBox>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <NavLink >{t('contact')}</NavLink>
        </Link>
      </NavLinkBox>
      <LanguageNavLinkBox >
        <NavLink onClick={toggleDropdown2} >
          {i18n.language}
          <ReactCountryFlag countryCode={i18n.language === 'tr' ? 'TR' : i18n.language === 'en' ? 'GB' : 'RU'} svg style={{ width: '1em', height: '1em', margin: '1rem' }} />

        </NavLink>
        <LanguageDropdown isopen={isDropdownOpen2.toString()}>
          <DropdownItem2 onClick={() => { switchLanguage('tr') }}>
            <ReactCountryFlag countryCode="TR" svg style={{ width: '1em', height: '1em', margin: '1rem' }} />
            Türkçe
          </DropdownItem2>
          <DropdownItem2 onClick={() => switchLanguage('en')} >
            <ReactCountryFlag countryCode="GB" svg style={{ width: '1em', height: '1em', margin: '1rem' }} />
            English
          </DropdownItem2  >
          <DropdownItem2 onClick={() => { switchLanguage('rs') }}>
            <ReactCountryFlag countryCode="RU" svg style={{ width: '1em', height: '1em', margin: '1rem' }} />
            Russian
          </DropdownItem2>
        </LanguageDropdown>
      </LanguageNavLinkBox>




    </NavbarWrapper>
  );
};

export default Navbar;
