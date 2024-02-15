import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Navbar from "../components/MenuBar";

import styled from "styled-components";
import Footer from "../components/Footer";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTranslation } from "react-i18next";
import Heading from "../components/Heading";
import { Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { Input } from "@mui/material";
import { Skeleton } from "@mui/material";
import Alert from "@mui/material/Alert";

const libraries = ["places"];
//api key ---> AIzaSyDMMGxFC1S6GI5LB7VYL1r3vhE2j_TM1tw

const BackgroundOverlay = styled.div`
  content: "";
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${process.env.PUBLIC_URL + "/images/background.jpg"});
  background-repeat: repeat;
`;

const Line = styled.div`
  border-bottom: 5px solid #38659a;
  width: 25%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: -10%;
`;

const Line2 = styled.div`
  border-bottom: 5px solid #38659a;
  width: 25%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10%;
`;

const Line3 = styled.div`
  border-bottom: 4px solid #fff;
  width: 25%;
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: -5%;
  opacity: 0.5;
`;
const Line4 = styled.div`
  border-bottom: 4px solid #38659a;
  width: 25%;
  margin-bottom: 10px;
  margin-left: -5%;
  margin-top: -10px;
`;

const ContactDiv = styled.div`
justifyContent: center, 
display: flex, 
backgroundColor: #fff, 
opacity: 0.99, 
height: 100%, 
paddingTop: 70px, 
paddingBottom: 70px, 
flexDirection: row
@media (min-width: 769px) {
flex-direction: column;
justify-content: space-between;
}
`;

const InfoTitle = styled.p`
  font-size: 17px;
  font-weight: 600;
  @media (max-width: 968px) {
    font-size: 1.1rem;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  font-weight: 400;
  @media (max-width: 968px) {
    font-size: 1rem;
  }
`;

const InfoDiv = styled.div` 
padding-left: 50px; 
padding-right: 50px;s
align-content: center;
align-items: center;
display: flex;
flex-direction: column;
margin-top: -50px;
@media (max-width: 968px) {
margin-left: 20px;
align-content: left;
align-items: left;
padding-left: 0px; 
}
`;

const ContactUsHeader = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: #fff;
  @media (max-width: 968px) {
    font-size: 30px;
  }
`;

const ContactUsText = styled.p`
  font-size: 20px;
  color: #fff;
  @media (max-width: 968px) {
    font-size: 18px;
  }
`;

const iconStyle = {
  marginLeft: "1vw",
  marginRight: "10px",
  marginTop: "-5px",
  fontSize: "22px",
  alignSelf: "center",
  "@media (maxWidth: 968px)": {
    fontSize: "1.5rem",
    marginTop: "-15px",
  },
};

const inputStyle = {
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "column",
  width: "70%",
  height: "50px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  fontSize: "1.2rem",
  backgroundColor: "rgba(245, 245, 245, 0.9)",
  padding: "10px",
  "@media (maxWidth: 968px)": {
    width: "100%",
    fontSize: "1rem",
  },
};

const contactUsStyle = {
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  opacity: "0.99",
  marginTop: "150px",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
  "@media (maxWidth: 968px)": {
    paddingTop: "20px",
    marginTop: "50px",
  },
};

const buttonStyle = {
  marginTop: "30px",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "row",
  width: "200px",
  height: "70px",
  fontSize: "18px",
  backgroundColor: "rgba(149, 176, 207, 0.8)",
  color: "#fff",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  //hover
  ":hover": {
    backgroundColor: "rgba(129, 166, 197, 0.8)",
  },
  "@media (maxWidth: 968px)": {
    width: "100%",
    fontSize: "1rem",
  },
};

const ContactTextArea = styled.textarea`
  margin-bottom: 10px;
  display: flex;
  flexdirection: column;
  width: 90%;
  height: 200px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 1.2rem;
  background-color: rgba(245, 245, 245, 0.9);
  padding: 10px;
  border-radius: 5px;
  @media (max-width: 968px) {
    width: 100%;
    fontsize: 1rem;
  }
`;

const ContactFormRow = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 80%;
  padding: 50px;
  opacity: 0.99;
  @media (max-width: 968px) {
    width: 90%;
    padding: 10px;
  }
`;

const MapDiv = styled.div`
  width: 100%;
  height: 550px;
  @media (max-width: 968px) {
    height: 300px;
  }
`;

const ContactPage = () => {

  const [succeded, setSucceded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [error, setError] = useState("");

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 39.909422946468055,
    lng: 32.76418714232775,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDMMGxFC1S6GI5LB7VYL1r3vhE2j_TM1tw",
    libraries,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded(isLoaded);
    }, 300);
  }, [isLoaded]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const form = useRef();
  const [loaded, setLoaded] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const phone = form.current.phone.value;
    const email = form.current.email.value;
    const message = form.current.message.value;

    if (!name || !phone || !email) {
      // If any required field is empty, display an error message
      setFailed(true);
      setError(t("error1"));
      return;
    }

    emailjs
      .sendForm(
        "service_6lc0b5s",
        "template_88koyee",
        form.current,
        "bRmfi2NOXBHVLj1oY"
      )
      .then(
        (result) => {
           setSucceded(true);
           setTimeout(() => {
            setSucceded(false);
            }
            , 2000);
        },
        (error) => {
          setFailed(true);
          setError(t("error2"));
          setTimeout(() => {
            setFailed(false);
            }
            , 2000);
        }
      );


  };

  const submit = () => {
   
  }


  return (
    <div className="contact-page">
      <div className="container-fluid no-padding">
        <div className="row no-gutters">
          <Navbar />
        </div>
        <BackgroundOverlay>
          <div
            className="row"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div className="col-1" />
            <div className="col-10">
              <div className="row" style={contactUsStyle}>
                <div
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5"
                  style={{ paddingTop: "50px", paddingBottom: "20px" }}
                >
                  <Heading text={t("contact")} />
                  <InfoDiv>
                    <div
                      style={{
                        marginBottom: "0px",
                        display: "flex",
                        flexDirection: "column",
                        width: "90%",
                      }}
                    >
                      <InfoTitle>{t("phone")}</InfoTitle>
                      <Line4 />
                      <div
                        style={{
                          marginBottom: "10px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <InfoText style={{ marginTop: "10px" }}>
                          <CallIcon
                            sx={iconStyle}
                            style={{ marginTop: "-0px" }}
                          />
                          +90 544 274 06 52
                        </InfoText>
                        <InfoText
                          style={{ marginLeft: "47px", marginTop: "-10px" }}
                        >
                          +90 312 544 77 57
                        </InfoText>
                      </div>
                    </div>
                    <div
                      style={{
                        marginBottom: "0px",
                        display: "flex",
                        flexDirection: "column",
                        width: "90%",
                      }}
                    >
                      <InfoTitle>{t("email")}</InfoTitle>
                      <Line4 />
                      <div
                        style={{
                          marginBottom: "10px",
                          display: "flex",
                          flexDirection: "row",
                          textAlign: "center",
                        }}
                      >
                        <InfoText>
                          <EmailIcon sx={iconStyle} />
                          reberka@reberka.net
                        </InfoText>
                      </div>
                    </div>
                    <div
                      style={{
                        marginBottom: "0px",
                        display: "flex",
                        flexDirection: "column",
                        width: "90%",
                      }}
                    >
                      <InfoTitle>{t("address")}</InfoTitle>
                      <Line4 />
                      <div
                        style={{
                          marginBottom: "10px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <LocationOnIcon
                          sx={iconStyle}
                          style={{ marginTop: "-20px" }}
                        />
                        <InfoText>{t("addressLine1")}</InfoText>
                      </div>
                    </div>
                  </InfoDiv>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7">
                  <MapDiv>
                    {loaded ? (
                      <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={15}
                        center={center}
                      >
                        <Marker
                          icon="http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                          key="1"
                          position={center}
                        />
                      </GoogleMap>
                    ) : (
                      <Skeleton
                        variant="rectangular"
                        width="90%"
                        height="80%"
                        style={{ marginTop: "10%", marginLeft: "5%" }}
                      />
                    )}
                  </MapDiv>
                </div>
              </div>
            </div>
            <div className="col-1" />
          </div>
          <div className="row no-gutters">
            <div
              style={{
                height: "100%",
                paddingTop: "0px",
                paddingBottom: "0px",
                marginTop: "100px",
                marginBottom: "200px",
                backgroundColor: "rgba(29, 56, 87, 0.6)",
              }}
            >
              <Fade
                triggerOnce
                cascade
                fraction={0.2}
                duration={700}
                direction="down"
              >
                <div
                  className="col-12"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <form
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <ContactFormRow className="row">
                      <div
                        style={{
                          marginBottom: "3%",
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                          marginLeft: "10%",
                        }}
                      >
                        <ContactUsHeader>{t("contactUs")}</ContactUsHeader>
                      </div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <ContactUsText>{t("name")}</ContactUsText>
                        <Line3 />
                        <Input
                          type="text"
                          id="fname"
                          name="name"
                          placeholder={""}
                          sx={inputStyle}
                        />
                        <ContactUsText>{t("phone")}</ContactUsText>
                        <Line3 />
                        <Input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder=""
                          sx={inputStyle}
                        />
                        <ContactUsText>{t("email")}</ContactUsText>
                        <Line3 />
                        <Input
                          type="text"
                          id="email"
                          name="email"
                          placeholder=""
                          sx={inputStyle}
                        />
                      </div>
                      <div
                        className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <ContactUsText>{t("yourMessage")}</ContactUsText>
                        <Line3 />

                        <ContactTextArea
                          id="subject"
                          name="message"
                          placeholder=""
                        />
                        <Input
                          type="submit"
                          value={t("send")}
                          sx={buttonStyle}
                          
                          onClick={() => form.current.reset()}
                        />
                        {
                          succeded &&
                        <Alert severity="success">
                          {t("success")}
                        </Alert>
                        }
                        {
                          failed &&
                        <Alert severity="error">
                          {error}
                        </Alert>
                        }

                      </div>
                    </ContactFormRow>
                  </form>
                </div>
              </Fade>
            </div>
          </div>
        </BackgroundOverlay>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
