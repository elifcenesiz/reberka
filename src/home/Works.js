import styled from "styled-components"
import Heading from "../components/Heading"
import WorksCard from "./WorksCard"
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import i18n from "../i18n";
import { useEffect, useState } from "react";



const WorksGrid = styled.div`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); 
      gap: 10px; 
      padding-left: 100px;
      padding-right: 100px;
      padding-bottom: 100px;

      @media (max-width: 968px) {
            padding-left: 10px;
            padding-right: 10px;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1.2fr)); 

      }

`
const ContactUsText = styled.p`
      font-size: 24px;
      color: #000;
      font-weight: 300;
      text-align: center;

      @media (max-width: 968px) {
            font-size: 14px;
      }


`

const ContactUsDiv = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      margin-top: -50px;
      justify-content: center;
      align-items: center;

      :hover {
            color: #38659A;
      }
`


const Works = () => {

      const [workList, setWorkList] = useState([])
      const [title, setTitle] = useState("")
      const [contactUs, setContactUs] = useState("")

      const works = [
            "Mağaza & Oteller & Çok Katlı Konutlar",
            "Restorasyon ve Dekorasyon Projeleri",
            "Peyzaj Rezidans & Ofis & AVM",
            "Konut-Daire-Villa-Turizm Tesisleri",
            "Restorantlar ve Kafeler",
            "Tadilat ve Bakım Onarım",
            "İç Mimari Danışmanlık ve Taahhüt",
            "Proje Tasarım Uygulama",
            "Alışveriş ve Ticaret Merkezleri",
            "Cadde & Dükkan",
            "Ofis ve İş Merkezleri & Home Ofisler",
            "Sağlık Tesisleri & Huzur Evleri",
            "Eğitim ve Yurt Binaları",
            "Dini Yapılar",
            "Çok Amaçlı Projeler",
            "Mimari ve İç Mimari Projeler",
            "Hizmet Binaları & Otoparklar",
            "Kültürel ve Spor Yapıları",
           
      ]

      const works_en = [
            "Hotels & Multi-Storey Residences",
            "Restoration and Decoration Projects",
            "Residence & Office & Shopping Mall",
            "Housing-Villa-Tourism Facilities",
            "Restaurants and Cafes",
            "Renovation and Maintenance Repair",
            "Interior Architecture and Contracting",
            "Project Design Application",
            "Shopping and Trade Centers",
            "Street & Shop",
            "Offices and Business Centers",
            "Health Facilities & Nursing Homes",
            "Educational and Dormitory Buildings",
            "Religious Buildings",
            "Multipurpose Projects",
            "Architectural Architectural Projects",
            "Service Buildings & Parking Lots",
            "Cultural and Sports Facilities",
            
      ]

      const works_rs = [
            "Хотели и вишекатни станови",
            "Пројекти рестаурације и декорације",
            "Резиденција и канцеларија",
            "Станови-вила-туристички објекти",
            "Ресторани и кафићи",
            "Реновирање и одржавање поправке",
            "Интериорна архитектура и уговор",
            "Пројекат дизајн примена",
            "Шопинг и трговачки центри",
            "Улица и продавница",
            "Канцеларије и пословни центри",
            "Здравствени објекти и домови за негу",
            "Образовне и студентске зграде",
            "Религиозни објекти",
            "Вишенаменски пројекти",
            "Архитектонски архитектонски пројекти",
            "Зграде за услуге и паркинг места",
            "Културни и спортски објекти",

      ]

      useEffect(() => {
            if (i18n.language === "en") {
                  setWorkList(works_en)
                  setTitle("SERVICES")
                  setContactUs("Contact Us")
            }
            else if (i18n.language === "tr") {
                  setWorkList(works)
                  setTitle("HİZMETLERİMİZ")
                  setContactUs("Bizimle İletişime Geçin")
            }
            else if (i18n.language === "rs") {
                  setWorkList(works_rs)
                  setTitle("Услуге")
                  setContactUs("Контактирајте не")

            }
      }, [i18n.language])


      return (
            <div className="works" style={{ paddingTop: "100px", paddingBottom: "50px", backgroundColor: "#fff", height: "100%" }}>
                  <Heading text={title} />
                  <WorksGrid>
                        {workList.map((work, index) => (
                              <Fade triggerOnce direction="up" delay={100} duration="1000" key={index} cascade damping={0.1} >
                              <WorksCard key={index} text={work} id={index+1} />
                              </Fade>
                        ))}
                  </WorksGrid>
                  <ContactUsDiv>
                        <PhoneIcon style={{ fontSize: "30px", color: "#000", marginRight: "10px", marginTop: "-15px", color : "#38659A" }} />
                        <Link to="/contact" style={{ textDecoration: "none" }}>
                        <ContactUsText> {contactUs} </ContactUsText>
                        </Link>
                  </ContactUsDiv>
            </div>
      )
}

export default Works
