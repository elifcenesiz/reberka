import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import styled from 'styled-components';
import LocationOn from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { margin } from '@mui/system';
import { useTranslation } from 'react-i18next';


const FooterWrapper = styled.div`
      background-color: #1E3653;
      //background-color: #f4f4f4;
      height: 100%;
`;

const SocialMedia = styled.span`
      color: #fff;
      //color: #1E3653;
      font-size: 16px;
      margin-top: -10px;
      @media (max-width: 968px) {
            display: none;
      }
      opacity: 0.8;
`;

const FooterText = styled.a`
      color: #fff;
      //color: #1E3653;
      font-size: 16px;
      @media (max-width: 968px) {
        font-size: 1rem;
      }


`;

const FooterText2 = styled.p`
      color: #fff;
      //color: #1E3653;
      font-size: 14px;
      @media (max-width: 968px) {
        font-size: 1rem;
      }

`;

const iconStyle = {
  color: "#fff",
  //color: "#1E3653",
  fontSize: "2rem",
  marginLeft: "30px",
  marginTop: "-10px",
  '@media (maxWidth: 968px)': {
    fontSize: "1rem",
  }
}


const Logo = styled.img`
      width: 75%;
      height: 70%;
      object-fit: fill;


      @media (max-width: 968px) {
        width: 40%;
        margin-left: 0px;

      }
`;




const Footer = () => {

  const { t } = useTranslation();

  return (
    <FooterWrapper>
      <MDBFooter styles="background-color: #1E3653; " className='text-center text-lg-start text-muted bottom'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ height: '60px'}} >
          <div className='me-5 d-none d-lg-block'>

          </div>
          <div>
            <SocialMedia>
              {t('getConnected')}
            </SocialMedia>
            <a href='https://www.instagram.com/reberkainsaat?igsh=MzRlODBiNWFlZA==' className='me-4 text-reset'>
              <InstagramIcon style={iconStyle} />
            </a>
            <a href='' className='me-4 text-reset'>
              <LinkedInIcon style={iconStyle} />
            </a>
          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='4' className='mx-auto mb-4'>
                <Logo src={process.env.PUBLIC_URL + '/logo_dark.jpeg'} alt='logo' />
                <p style={{ color: '#fff' }}>

                </p>
              </MDBCol>

              <MDBCol md='3' lg='2' xl='4' className='mx-auto mb-4' style={{ color: '#fff', fontSize: '1.2rem', textDecoration: 'none', paddingTop:"10px" }}>
                <p>
                  <FooterText href='/about' className='text-reset'>
                    {t('about')}
                  </FooterText>
                </p>
                <p>
                  <FooterText href='/projects' className='text-reset'>
                    {t('projects')}
                  </FooterText>
                </p>
                <p>
                  <FooterText href='/references' className='text-reset'>
                    {t('references')}
                  </FooterText>
                </p>
                <p>
                  <FooterText href='/contact' className='text-reset'>
                    {t('contact')}
                  </FooterText>
                </p>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='4' className='mx-auto mb-md-0 mb-4' style={{ color: '#fff', fontSize: '1rem' }}>
                <h6 className='text-uppercase fw-bold mb-4' style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '3rem' }}>
                  {t('contactCapital')}
                </h6>
                <FooterText2 >
                  <LocationOn className='me-3' />
                  Mustafa Kemal, 2118. Cd. Maidan Plaza A Blok Kat: 10, No: 109, 06510 Çankaya/Ankara
                </FooterText2>
                <FooterText2 >
                  <EmailIcon className='me-3' />
                  reberka@reberka.net
                </FooterText2>
                <FooterText2 >
                  <CallIcon className='me-3' />
                  + 90 544 274 06 52
                </FooterText2>
                <FooterText2 style={{ marginLeft: '40px' }}>
                  + 90 312 544 77 57
                </FooterText2>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: '30px' }}>

          <p >
            © 2024 Copyright:  REBERKA
          </p>
        </div>
      </MDBFooter>
    </FooterWrapper>
  );
}

export default Footer;