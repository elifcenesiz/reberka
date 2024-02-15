import Navbar from "../components/MenuBar"
import ReferenceGrid from "./ReferenceGrid";

import styled from 'styled-components';
import Footer from "../components/Footer";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "../components/Heading";
import { t } from "i18next";


const BackgroundImage = styled.div`
  
      content: "";
      position: relative;
      height: 100%;
      background: linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,.5)), url(${process.env.PUBLIC_URL + "/background.jpg"});
      background-size: cover;
      background-position: center;
      background-repeat: repeat
      z-index: 0;
      margin-top: -200px;
      padding-top: 200px;
      
      `;

      const BackgroundFilter = styled.div`
      //background-color: rgba(30, 54, 83, 0.1);
      position: relative;
      top: 0;
      left: 0;
      height: 110%;
      margin-top: -200px;
      padding-top: 200px;
      
      
      `;


const ReferencesPage = () => {

      const [background, setBackground] = useState(10)
      const parallaxRef = useRef(null);
      const contentRef = useRef(null);

      useEffect (() => {
            window.scrollTo(0, 0);
      }
      , [])

      useEffect(() => {
            
            let ctx = gsap.context(() => {
                  gsap.registerPlugin(ScrollTrigger);
                  var tl = gsap.timeline({
                        defaults: { duration: 1 },
                        scrollTrigger: {
                              trigger: parallaxRef.current,
                              start: "top top",
                              end: "top bottom",
                              scrub: true,
                              pin: true,
                              onUpdate: (self) => {
                                    setBackground(Math.ceil(self.progress * 100 + 25))
                              },
                        },
                  });
                  tl.to(
                        contentRef.current,
                        {
                              y: "-=250",
                        },
                        0

                  );
            });
            return () => ctx.revert();
      }, []);

      return (

            <div className="references-page">
                  <div className=" container-fluid no-padding " >

                        <div className="row no-gutters">
                              <Navbar />
                              <BackgroundImage ref={parallaxRef} >
                                    <BackgroundFilter>
                                    <div className="row" style={{ marginTop: "16vh", marginBottom: "10vh" }}>

                                          <div className="col-2" />
                                          <div className="col-8" style={{ zIndex: "5", position: "relative " }}>
                                                <Heading text={t("references")} />
                                                <ReferenceGrid ref={contentRef} />
                                          </div>
                                          <div className="col-2" />
                                    </div>
                                    </BackgroundFilter>
                              </BackgroundImage>
                              <Footer />
                        </div>


                  </div>
            </div>

      );

}

export default ReferencesPage;
