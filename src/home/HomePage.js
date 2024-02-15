import Navbar from "../components/MenuBar"

import styled from 'styled-components';
import RoundedBox from "./RoundedBox";
import Footer from "../components/Footer";
import ProjectGallery from "./ProjectGallery";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import AboutUs from "./AboutUs";
import Works from "./Works"
import PagesButton from "../components/PagesButton";




const BackgroundImage = styled.img`
      width: 100%;
      height: 1500px;
      top: 0;
      left: 0;
      z-index: 1; 
      opacity: 0.5; 
      display: flex;
      `;

const VideoWrapper = styled.div`
      top: 0;
      left: 0;
      height: auto;
      opacity: 1; 
      flex: 1; 
      padding-right: -90px;
      padding-left: -40px;
     
      `

const Video = styled.video`

      object-fit: fill;
      height: 1400px;  
      width: 100vw;
      margin-left: -12px;
      @media (max-width: 768px) {
            height: 1570px;
            object-fit: fill;
            background-repeat: repeat;
            display:none;
            autoplay: false;
              }
      `

const Image = styled.img`
      display: none;
      object-fit: fill;
      margin-left: -12px;
      width: 100vw;
      @media (max-width: 768px) {
            height: 1570px;
            object-fit: fill;
            background-repeat: repeat;
            display: flex;    
                  }
      `

const HeadingContainer = styled.div`
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      width: 100%;
      
      `

const Header = styled.p
      `
      color: #fff; 
      font-size: 60px;
      font-weight: bold;
      text-shadow: 3px 3px 5px #000000;
      @media (max-width: 968px) {
            font-size: 45px;
          }
      `;

const ImageWrapper = styled.div`
   
      top: 0;
      left: 0;
      z-index: 1; 
      opacity: 0.9; 
      display: flex;
      width: 100%;
      height: 500px;
      `

const RoundedBoxWrapper1 = styled.div`
      position: absolute;
      top: 80vh;
      left: 1%;
      z-index: 2; 
      width: auto;
      @media (max-width: 968px) {
            display: none;
          }
        `;


const RoundedBoxWrapper2 = styled.div`
      position: absolute;
      width: auto;
      top: 80vh;
      left: 81%;
      z-index: 2; 
      @media (max-width: 968px) {
            display: none;
          }
`;

const RoundedBoxWrapper3 = styled.div`
      position: absolute;
      width: auto;
      top: 80vh;
      left: 41%;
      z-index: 2; 
      @media (max-width: 968px) {
            display: none;
          }
`;

const RoundedBoxWrapper4 = styled.div`
      position: absolute;
      width: auto;
      top: 100vh;
      left: 61%;
      z-index: 2; 
      @media (max-width: 968px) {
            display: none;
          }
`;

const RoundedBoxWrapper5 = styled.div`
      position: absolute;
      width: auto;
      top: 100vh;
      left: 21%;
      z-index: 2; 
      @media (max-width: 968px) {
            display: none;
          }
`;


const BackgroundImagee = styled.div`
  
      content: "";
      position: relative;
      width: 100%;
      height: 700px;
      background-image: url(${process.env.PUBLIC_URL + '/background.jpg'});
      background-size: cover;
      background-position: center;
      opacity: 0.2; /* Adjust the opacity (0.0 to 1.0) for transparency */
      background-repeat: repeat;
      @media (max-width: 768px) {
            height: 1000px;
            
              }
      `;

const InfoBox1 = styled.div`
      display: none;
      position: absolute;
      top: 650px;
      left: 0;
      background-color: rgba(100, 100, 100, 0.5);
      z-index: 2;
      width: 80%;
      @media (max-width: 968px) {
            display: flex;
            flex-direction: column;
              }
      `
const InfoBox2 = styled.div`
      display: none;
      position: absolute;
      right: 0;
      top: 820px;
      background-color: rgba(100, 100, 100, 0.5);
      z-index: 2;
      width: 80%;
      @media (max-width: 968px) {
            display: flex;
            flex-direction: column;
                  }
      `
const InfoBox3 = styled.div`
      display: none;
      position: absolute;
      top: 990px;
      background-color: rgba(100, 100, 100, 0.5);
      z-index: 2;
      width: 80%;
      @media (max-width: 968px) {
            display: flex;
            flex-direction: column;
 }
      `

const InfoBox4 = styled.div`
      display: none;
      position: absolute;
      right: 0;
      top: 1170px;
      background-color: rgba(100, 100, 100, 0.5);
      z-index: 2;
      width: 80%;
      @media (max-width: 968px) {
            display: flex;
            flex-direction: column;
      }
      `
const InfoBox5 = styled.div`
      display: none;
      position: absolute;
      top: 1370px;
      background-color: rgba(100, 100, 100, 0.5);
      z-index: 2;
      width: 80%;
      @media (max-width: 968px) {
            display: flex;
            flex-direction: column;
      }
      `

const InfoBoxTitle = styled.p`
      color: #fff;
      font-size: 20px;
      margin-left: 50px;
      margin-top: 20px;
      font-weight: bold;
      @media (max-width: 968px) {
            font-size: 14px;  
      }
      `

const InfoBoxText = styled.p`
      color: #fff;
      font-size: 20px;
      margin-left: 50px;
      margin-top: 10px;
      @media (max-width: 968px) {
            font-size: 12px;  
      }
      `

const AboutDiv = styled.div`
      margin-top: -10px;
      height: auto;
      background-color: rgba(30, 54, 83, 0.9);
      //background-color: #f2f2f2;
      align-content: center;
      justify-content: center;
      align-items: center;

      `
const videoStyle = {
      display: "block",
      "@media not screen and (maxWidth: 768px)": {
            display: "none",
      },
};

const rowStyle = {
      height: "350px", 
      backgrounfColor: "fff", 
      opacity: "0.99" ,
      "@media (maxWidth: 768px)": {
            height: "400px",
      },
};

const HomePage = () => {

      const [background, setBackground] = useState(10)
      const parallaxRef = useRef(null);
      const roundedBox1 = useRef(null);
      const roundedBox2 = useRef(null);
      const roundedBox3 = useRef(null);
      const roundedBox4 = useRef(null);
      const roundedBox5 = useRef(null);
      const videoHeader = useRef(null);
      const infoBox = useRef(null);

      const videoRef = useRef(null);
      const { t } = useTranslation();

      useEffect(() => {
            // Set the playback rate to 1.5 (you can adjust this value)
            videoRef.current.playbackRate = 1;
      }, []);


      useEffect(() => {
            window.scrollTo(0, 0);
            }, []);

      useEffect(() => {
            let ctx = gsap.context(() => {
                  gsap.registerPlugin(ScrollTrigger);
                  var tl = gsap.timeline({
                        defaults: { duration: 5 },
                        scrollTrigger: {
                              trigger: parallaxRef.current,
                              start: "top top",
                              end: "bottom bottom",
                              scrub: true,
                              pin: true,
                              onUpdate: (self) => {
                                    setBackground(Math.ceil(self.progress * 100 + 1))
                              },
                        },
                  });
                  tl.to(
                        roundedBox1.current,
                        {
                              y: "+=300",
                              //x: "+=200",
                        },
                        0
                  );
                  tl.to(
                        roundedBox3.current,
                        {
                              y: "+=300",
                        },
                        0
                  );
                  tl.to(
                        roundedBox2.current,
                        {
                              y: "+=300",
                              //x: "-=300",
                        },
                        0
                  );
                  tl.to(
                        roundedBox4.current,
                        {
                              y: "-=100",

                        },
                        0
                  );
                  tl.to(
                        roundedBox5.current,
                        {
                              y: "-=100",
                              //x: "-=300",
                        },
                        0
                  );
                  tl.to(
                        videoHeader.current,
                        {
                              y: "-=200",
                              opacity: 0,
                              //scale: 1.8,
                        },
                        0
                  );
            });
            return () => ctx.revert();
      }, []);


      return (
            <div className="about-page">
                  <div className="container-fluid no-padding" flex-direction="column" display="flex">

                        <div className="row no-gutters">
                              <Navbar />
                        </div>

                        <div className="" ref={parallaxRef}>

                     
                              <div style={videoStyle}>
                              <Video autoPlay loop muted ref={videoRef} >
                                    <source src={process.env.PUBLIC_URL + '/back.mp4'} type="video/mp4" />
                              </Video>
                              
                              </div>
                              <Image src={process.env.PUBLIC_URL + '/background.jpg'} alt="background" />
                              
                              <HeadingContainer ref={videoHeader}>
                                    <Header>
                                          {t('greeting1')}
                                    </Header>
                                    <Header>
                                          {t('greeting2')}
                                    </Header>
                              </HeadingContainer>


                              <RoundedBoxWrapper2 ref={roundedBox1} >
                                    <Link  style={{ textDecoration: "none" }}>
                                          <RoundedBox title={t('projectManagementConsultancy')} text={t('projectManagementDescription')} id="parallax5" ref={roundedBox5} />
                                    </Link>
                              </RoundedBoxWrapper2>

                              <RoundedBoxWrapper1 ref={roundedBox2}>
                                    <Link  style={{ textDecoration: "none" }}>
                                          <RoundedBox title={t('construction')} text={t('constructionDescription')} id="parallax2" ref={roundedBox2} />
                                    </Link>
                              </RoundedBoxWrapper1>

                              <RoundedBoxWrapper3 ref={roundedBox3}>
                                    <Link  style={{ textDecoration: "none" }}>
                                          <RoundedBox title={t('landscape')} text={t('landscapeDescription')} id="parallax3" ref={roundedBox3} />
                                    </Link>
                              </RoundedBoxWrapper3>
                              <RoundedBoxWrapper4 ref={roundedBox4}>
                                    <Link  style={{ textDecoration: "none" }}>
                                          <RoundedBox title={t('realEstateInvestments')} text={t('investmentDescription')} id="parallax4" ref={roundedBox4} />
                                    </Link>
                              </RoundedBoxWrapper4>
                              <RoundedBoxWrapper5 ref={roundedBox5}>
                                    <Link  style={{ textDecoration: "none" }}>
                                          <RoundedBox title={t('interiorDesign')} text={t('interiorDesignDescription')} id="parallax1" ref={roundedBox1} />
                                    </Link>
                              </RoundedBoxWrapper5>


                              <InfoBox1 ref={infoBox}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                          <InfoBoxTitle>
                                                {t('interiorDesign')}
                                          </InfoBoxTitle>
                                          <InfoBoxText>
                                                {t('interiorDesignDescription')}
                                          </InfoBoxText>
                                    </Link>
                              </InfoBox1>

                              <InfoBox2 ref={infoBox}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                          <InfoBoxTitle>
                                                {t('construction')}
                                          </InfoBoxTitle>
                                          <InfoBoxText>
                                                {t('constructionDescription')}
                                          </InfoBoxText>
                                    </Link>
                              </InfoBox2>

                              <InfoBox3 ref={infoBox}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                          <InfoBoxTitle>
                                                {t('investment')}
                                          </InfoBoxTitle>
                                          <InfoBoxText>
                                                {t('investmentDescription')}
                                          </InfoBoxText>
                                    </Link>
                              </InfoBox3>

                              <InfoBox4 ref={infoBox}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                          <InfoBoxTitle>
                                                {t('projectManagementConsultancy')}
                                          </InfoBoxTitle>
                                          <InfoBoxText>
                                                {t('projectManagementDescription')}
                                          </InfoBoxText>
                                    </Link>
                              </InfoBox4>

                              <InfoBox5 ref={infoBox}>
                                    <Link to="/" style={{ textDecoration: "none" }}>
                                          <InfoBoxTitle>
                                                {t('landscape')}
                                          </InfoBoxTitle>
                                          <InfoBoxText>
                                                {t('landscapeDescription')}
                                          </InfoBoxText>
                                    </Link>
                              </InfoBox5>

                        </div>

                        <AboutDiv className="row no-gutters" >
                              <div className="col-xs-10 col-sm-10 col-md-9 col-lg-8 col-xl-8">
                                    <AboutUs />
                              </div>
                        </AboutDiv>
                        <div className="row" style={{ width: '100%', height: "100%", backgrounfColor: "fff", opacity: "1" }}>
                              <Works />
                        </div>

                        <div className="row no-gutters" style={{ height: "900px", backgroundSize: "cover", backgroundPosition: "center", opacity: "1", backgroundRepeat: "repeat", backgroundImage: { BackgroundImage } }}>
                              <BackgroundImagee />
                              <div className="col-2" />
                              <div className="col-8" style={{ textAlign: "center" }}>
                                    <PagesButton text={t('projects')} icon="info" path="/projects" />
                                    <p style={{ color: "#1E3653", fontSize: "55px", marginTop: "-400px" }}>
                                          {t('projects')}
                                    </p>
                                    <div style={{ marginTop: "50px" }}>
                                          <ProjectGallery />
                                    </div>

                              </div>
                              <div className="col-2" />
                        </div>
                        </div>
                        <div className="row" style={rowStyle}/>
                  <Footer />
            </div>

      )
}

export default HomePage;