import { useTranslation } from 'react-i18next';
import { Fade,Slide,Reveal } from "react-awesome-reveal";
import styled from "styled-components";

const AboutTitle = styled.p`
      font-size: 60px;
      color: #fff;
      //color: #000;
      font-weight: bold;
      margin-bottom: 50px;
      @media (max-width: 968px){
            font-size: 54px;
            margin-left: 20px;
      }

      `

const AboutText = styled.p`
      font-size: 20px;
      color: #fff;
      //color: #000;
      //font-family: 'Roboto condensed', sans-serif;
      @media (max-width: 968px){
            font-size: 18px;
            margin-left: 20px;
      }

      `

const AboutUs = () => {

      const { t } = useTranslation();

      return (
            <div style={{ marginTop: "100px", marginBottom: "100px", color: "white", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                  <Fade triggerOnce direction="down">
                  <AboutTitle>
                        {t('aboutUs')}
                  </AboutTitle>
                  <AboutText>
                        {t('homeAboutText')}
                        <br />
                        <br />
                        {t('homeAboutText2')}

                  </AboutText>
                  </Fade>
            </div>
      )
}

export default AboutUs;