import ReferenceCard from "./ReferenceCard";
import { Grid } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const ReferenceGrid = () => {
  var referenceList = [
    {
      text: "Akın Halı Pazarlama ve Ticaret A.Ş.",
      image: "../logo/akin-hali-pazarlama-logo.png",
    },
    {
      text: "Aselsan",
      image: "../logo/aselsan-logo.png",
    },
    {
      text: "Asfalt To Go",
      image: "../logo/asfalt-to-go-logo.png",
    },
    {
      text: "ASYA Furniture",
      image: "../logo/asya-furniture-logo.jpeg",
    },
    {
      text: "Baytimur Holding",
      image: "../logo/baytimur-holding-logo.jpeg",
    },
    {
      text: "BGS İnşaat",
      image: "../logo/bgs-insaat-logo.jpeg",
    },
    {
      text: "Bülent Turan Sigorta",
      image: "../logo/bulent-turan-sigorta-logo.png",
    },
    {
      text: "CCN Holding",
      image: "../logo/ccn-holding-logo.jpeg",
    },
    {
      text: "Çelikler Holding A.Ş.",
      image: "../logo/celikler-holding-logo.jpeg",
    },
    {
      text: "D'interiors İç Mimarlık",
      image: "../logo/dinteriors-logo.png",
    },
    {
      text: "DKA Group",
      image: "../logo/dka-group-logo.png",
    },
    {
      text: "Devlet Su İşleri",
      image: "../logo/dsi-logo.jpeg",
    },
    {
      text: "Ekoval",
      image: "../logo/ekoval-logo.jpeg",
    },
    {
      text: "ESAS Tarım",
      image: "../logo/esas-tarim-logo.jpeg",
    },
    {
      text: "Gürbağ",
      image: "../logo/gurbag-logo.png",
    },
    {
      text: "Halkbank",
      image: "../logo/halkbank-logo.png",
    },
    {
      text: "Hasanoğlu Şirketler Grubu",
      image: "../logo/hasanoglu-sirketler-grubu-logo.jpeg",
    },
    {
      text: "Kidszone Park Kent Mobilyaları",
      image: "../logo/kidszone-logo.jpeg",
    },
    {
      text: "Kocalar grup",
      image: "../logo/kocalar-grup-logo.png",
    },
    {
      text: "KOSGEB",
      image: "../logo/kosgeb-logo.jpeg",
    },
    {
      text: "Kuseyri Sigorta",
      image: "../logo/kuseyri-sigorta-logo.png",
    },
    {
      text: "LİMAK Holding",
      image: "../logo/limak-logo.jpeg",
    },
    {
      text: "MAN Türkiye",
      image: "../logo/man-logo.jpeg",
    },
    {
      text: "Milli Savunma Bakanlığı",
      image: "../logo/milli-savunma-logo.png",
    },
    {
      text: " Network Gayrimenkul ",
      image: "../logo/network-gayrimenkul-logo.jpeg",
    },
    {
      text: " Nurol Holding A.Ş. ",
      image: "../logo/nurol-holding-logo.png",
    },
    {
      text: " Özkul Beton Elemanları İnşaat San. ve Tic. A.Ş. ",
      image: "../logo/ozkul-logo.jpeg",
    },
    {
      text: " Özyurt Şelale ",
      image: "../logo/ozyurt-selale-logo.jpeg",
    },
    {
      text: " Polis Akademisi Başkanlığı - Anıttepe Yerleşkesi ",
      image: "../logo/polis-akademisi-logo.png",
    },
    {
      text: " Prefi Prefabrik Yapı ",
      image: "../logo/prefi-prefabrik-yapi-logo.jpeg",
    },
    {
      text: " REB Interior & Furnish ",
      image: "../logo/reb-interior-furnish-logo.jpeg",
    },
    {
      text: " Rönesans Holding ",
      image: "../logo/ronesans-logo.jpeg",
    },
    {
      text: " Şen Aydınlatma ",
      image: "../logo/sen-aydinlatma-logo.png",
    },
    {
      text: "Serdaroğlu A.Ş.",
      image: "../logo/serdaroglu-logo.png",
    },
    {
      text: " Silah Savunma Sanayi ",
      image: "../logo/silahli-savunma-logo.jpeg",
    },
    {
      text: " TOKİ ",
      image: "../logo/toki-logo.png",
    },
    {
      text: " TEİAŞ ",
      image: "../logo/teias-logo.png",
    },
    {
      text: " TİKA ",
      image: "../logo/tika-logo.png",
    },
    {
      text: " TUSAŞ Motor Sanayii A.Ş. ",
      image: "../logo/tusas-logo.png",
    },
    {
      text: " T.C. Çevre ve Şehircilik Bakanlığı ",
      image: "../logo/tc-cevre-ve-sehircilik-bakanligi-logo.png",
    },
    {
      text: " T.C. Cumhurbaşkanlığı ",
      image: "../logo/tc-cumhurbaskanligi-logo.png",
    },
    {
      text: " Türkerler Holding ",
      image: "../logo/turkerler-holding-logo.jpeg",
    },
    {
      text: " Ünsal Şirketler Grubu ",
      image: "../logo/unsal-sirketler-grubu-logo.png",
    },
    {
      text: " VARDAR Grup ",
      image: "../logo/vardar-group-logo.jpeg",
    },
    {
      text: "Cengiz Kose Ekoval",
    },

    {
      text: "MK Panel Ltd. Şti.",
      image: "../logo/mk-panel-logo.jpg",
    },
    {
      text: "Asiyad",
      image: "../logo/asiyad-logo.jpeg",
    },
    {
      text: "Anadolu Birleştirici Sanayi ve İş Adamları Derneği",
      image: "../logo/anadolu-is-adamlari-dernegi-logo.jpeg",
    },
    {
      text: "ASIAD",
      image: "../logo/asiad-logo.jpeg",
    },
    {
      text: "Modül Ofis",
      image: "../logo/modul-ofis-logo.jpeg",
    },
    {
      text: "FAF Döküm Sanayi",
      image: "../logo/faf-logo.jpeg",
    },
    {
      text: "Ozkan",
      image: "../logo/ozkan-logo.jpeg",
    },
    {
      text: "Enerji ve Tabii Kaynaklar Bakanlığı",
      image: "../logo/enerji-ve-tabii-kaynaklar-bakanligi-logo.jpeg",
    },
    {
      text: "Agro Park Tohum",
      image: "../logo/agro-park-logo.jpeg",
    },
    {
      text: "Bükem Grup",
      image: "../logo/bukem-grup-logo.jpeg",
    },
    {
      text: "Diva Paslanmaz",
      image: "../logo/diva-logo.jpeg",
    },
    {
      text: "Yenigün",
      image: "../logo/yenigun-logo.jpeg",
    },
    {
      text: "Kolin",
      image: "../logo/kolin-logo.jpeg",
    },
    {
      text: "TC Adalet Bakanlığı",
      image: "../logo/tc-adliye-bakanligi-logo.jpeg",
    },
    {
      text: "LEDSIS",
      image: "../logo/ledsis-logo.jpeg",
    },
    {
      text: "MNG Group",
      image: "../logo/mng-group-logo.jpeg",
    },
    {
      text: "Çakır İnşaat",
      image: "../logo/cakir-insaat-logo.jpeg",
    },
    {
      text: "Bilkent Holding",
      image: "../logo/bilkent-holding-logo.jpeg",
    },
    {
      text: "Emek İnşaat",
      image: "../logo/emek-insaat-logo.jpeg",
    },
    {
      text: "BCC Catering",
      image: "../logo/bcc-catering-logo.jpeg",
    },
    {
      text: "Erap Mühendislik",
      image: "../logo/erap-muhendislik-logo.jpeg",
    },
    {
      text: "VakıfBank",
      image: "../logo/vakifbank-logo.jpeg",
    },
    {
      text: "Lacivert Gayrimenkul",
      image: "../logo/lacivert-gayrimenkul-logo.jpeg",
    },
    {
      text: "Radyo Bilkent",
      image: "../logo/radyo-bilkent-logo.jpeg",
    },
    {
      text: "TAV",
      image: "../logo/tav-logo.jpeg",
    },
    {
      text: "Akfen",
      image: "../logo/akfen-logo.jpeg",
    },
    {
      text: "Artem Enerji",
      image: "../logo/artem-enerji-logo.jpeg",
    },
    {
      text: "Fırat Lifestyle",
      image: "../logo/firat-lifestyle-logo.jpeg",
    },
    {
      text: "Ekon Grup",
      image: "../logo/ekon-grup-logo.jpeg",
    },
  ];

  // rewrite the referenceList to be in alphabetical order
  var referenceListAlphabetical = [
      {
            text: "Agro Park Tohum",
            image: "../logo/agro-park-logo.jpeg",
          },
    {
      text: "Akfen",
      image: "../logo/akfen-logo.jpeg",
    },
    {
      text: "Akın Halı Pazarlama ve Tİcaret A.Ş.",
      image: "../logo/akin-hali-pazarlama-logo.png",
    },
    {
      text: "Anadolu Birleştirici Sanayi ve İş Adamları Derneği",
      image: "../logo/anadolu-is-adamlari-dernegi-logo.jpeg",
    },
    {
      text: "Artem Enerji",
      image: "../logo/artem-enerji-logo.jpeg",
    },
    {
      text: "ASIAD",
      image: "../logo/asiad-logo.jpeg",
    },
    {
      text: "Asiyad",
      image: "../logo/asiyad-logo.jpeg",
    },
    {
      text: "Aselsan",
      image: "../logo/aselsan-logo.png",
    },
    {
      text: "Asfalt To Go",
      image: "../logo/asfalt-to-go-logo.png",
    },
    {
      text: "ASYA Furniture",
      image: "../logo/asya-furniture-logo.jpeg",
    },
    {
      text: "BCC Catering",
      image: "../logo/bcc-catering-logo.jpeg",
    },
    {
      text: "Baytimur Holding",
      image: "../logo/baytimur-holding-logo.jpeg",
    },
    {
      text: "BGS İnşaat",
      image: "../logo/bgs-insaat-logo.jpeg",
    },
    {
      text: "Bilkent Holding",
      image: "../logo/bilkent-holding-logo.jpeg",
    },
    {
      text: "Bülent Turan Sigorta",
      image: "../logo/bulent-turan-sigorta-logo.png",
    },
    
    {
      text: "Bükem Grup",
      image: "../logo/bukem-grup-logo.jpeg",
    },
    {
      text: "CCN Holding",
      image: "../logo/ccn-holding-logo.jpeg",
    },
    {
      text: "Çakır İnşaat",
      image: "../logo/cakir-insaat-logo.jpeg",
    },
    {
      text: "Çelikler Holding A.Ş.",
      image: "../logo/celikler-holding-logo.jpeg",
    },
    {
      text: "D'interiors İç Mimarlık",
      image: "../logo/dinteriors-logo.png",
    },
    {
      text: "Devlet Su İşleri",
      image: "../logo/dsi-logo.jpeg",
    },
    {
      text: "Diva Paslanmaz",
      image: "../logo/diva-logo.jpeg",
    },
    {
      text: "DKA Group",
      image: "../logo/dka-group-logo.png",
    },
    {
      text: "Ekoval",
      image: "../logo/ekoval-logo.jpeg",
    },
    {
      text: "Ekon Grup",
      image: "../logo/ekon-grup-logo.jpeg",
    },
    {
      text: "Emek İnşaat",
      image: "../logo/emek-insaat-logo.jpeg",
    },
    {
      text: "Enerji ve Tabii Kaynaklar Bakanlığı",
      image: "../logo/enerji-ve-tabii-kaynaklar-bakanligi-logo.jpeg",
    },
    {
      text: "Erap Mühendislik",
      image: "../logo/erap-muhendislik-logo.jpeg",
    },
    {
      text: "ESAS Tarım",
      image: "../logo/esas-tarim-logo.jpeg",
    },
    {
      text: "FAF Döküm Sanayi",
      image: "../logo/faf-logo.jpeg",
    },
    {
      text: "Fırat Lifestyle",
      image: "../logo/firat-lifestyle-logo.jpeg",
    },
    {
      text: "Gürbağ",
      image: "../logo/gurbag-logo.png",
    },
    {
      text: "Halkbank",
      image: "../logo/halkbank-logo.png",
    },
    {
      text: "Hasanoğlu Şirketler Grubu",
      image: "../logo/hasanoglu-sirketler-grubu-logo.jpeg",
    },
    {
      text: "KIDSZONE Park Kent Mobilyaları",
      image: "../logo/kidszone-logo.jpeg",
    },
    {
      text: "Kocalar grup",
      image: "../logo/kocalar-grup-logo.png",
    },
    {
      text: "Kolin",
      image: "../logo/kolin-logo.jpeg",
    },
    {
      text: "KOSGEB",
      image: "../logo/kosgeb-logo.jpeg",
    },
    {
      text: "Kuseyri Sigorta",
      image: "../logo/kuseyri-sigorta-logo.png",
    },
    {
      text: "Lacivert Gayrimenkul",
      image: "../logo/lacivert-gayrimenkul-logo.jpeg",
    },
    {
      text: "LEDSIS",
      image: "../logo/ledsis-logo.jpeg",
    },
    {
      text: "LİMAK Holding",
      image: "../logo/limak-logo.jpeg",
    },
    {
      text: "MAN Türkiye",
      image: "../logo/man-logo.jpeg",
    },
    {
      text: "MNG Group",
      image: "../logo/mng-group-logo.jpeg",
    },
    {
      text: "MK Panel Ltd. Şti.",
      image: "../logo/mk-panel-logo.jpg",
    },
    {
      text: "Modül Ofis",
      image: "../logo/modul-ofis-logo.jpeg",
    },
    {
      text: "Milli Savunma Bakanlığı",
      image: "../logo/milli-savunma-logo.png",
    },
    {
      text: "Network Gayrimenkul",
      image: "../logo/network-gayrimenkul-logo.jpeg",
    },
    {
      text: "Nurol Holding A.Ş.",
      image: "../logo/nurol-holding-logo.png",
    },
    {
      text: "Özkul Beton Elemanları İnşaat San. ve Tic. A.Ş.",
      image: "../logo/ozkul-logo.jpeg",
    },
    {
      text: "Özyurt Şelale",
      image: "../logo/ozyurt-selale-logo.jpeg",
    },
    {
      text: "Ozkan",
      image: "../logo/ozkan-logo.jpeg",
    },
    {
      text: "Polis Akademisi Başkanlığı - Anıttepe Yerleşkesi",
      image: "../logo/polis-akademisi-logo.png",
    },
    {
      text: "PREFI Prefabrik Yapı",
      image: "../logo/prefi-prefabrik-yapi-logo.jpeg",
    },
    {
      text: "Radyo Bilkent",
      image: "../logo/radyo-bilkent-logo.jpeg",
    },
    {
      text: "REB Interior & Furnish",
      image: "../logo/reb-interior-furnish-logo.jpeg",
    },
    {
      text: "Rönesans Holding",
      image: "../logo/ronesans-logo.jpeg",
    },
    {
      text: "Serdaroğlu A.Ş.",
      image: "../logo/serdaroglu-logo.png",
    },
    {
      text: "Silah Savunma Sanayi",
      image: "../logo/silahli-savunma-logo.jpeg",
    },
    {
      text: " Şen Aydınlatma ",
      image: "../logo/sen-aydinlatma-logo.png",
    },
    {
      text: "T.C. Çevre ve Şehircilik Bakanlığı",
      image: "../logo/tc-cevre-ve-sehircilik-bakanligi-logo.png",
    },
    {
      text: " T.C. Cumhurbaşkanlığı ",
      image: "../logo/tc-cumhurbaskanligi-logo.png",
    },
    {
      text: "T.C. Adliye Bakanlığı",
      image: "../logo/tc-adliye-bakanligi-logo.jpeg",
    },
    {
      text: "TİKA",
      image: "../logo/tika-logo.png",
    },
    {
      text: "TOKİ",
      image: "../logo/toki-logo.png",
    },
    {
      text: "TUSAŞ Motor Sanayii A.Ş.",
      image: "../logo/tusas-logo.png",
    },
    {
      text: "TAV",
      image: "../logo/tav-logo.jpeg",
    },
    {
      text: "TEİAŞ",
      image: "../logo/teias-logo.png",
    },
    {
      text: " Türkerler Holding ",
      image: "../logo/turkerler-holding-logo.jpeg",
    },
    {
      text: "Ünsal Şirketler Grubu",
      image: "../logo/unsal-sirketler-grubu-logo.png",
    },
    {
      text: "VARDAR Grup",
      image: "../logo/vardar-group-logo.jpeg",
    },
    {
      text: "VakıfBank",
      image: "../logo/vakifbank-logo.jpeg",
    },
    {
      text: "Yenigün",
      image: "../logo/yenigun-logo.jpeg",
    },
  ];


  return (
    <div className="reference-grid">
      <Grid container spacing={4}>
        {referenceListAlphabetical.map((reference, index) => (
          // make a responsive grid

          <Grid item xs={6} sm={6} md={4} lg={2} xl={2} key={index}>
            <Fade triggerOnce direction="up" cascade damping={0.1}>
              <ReferenceCard text={reference.text} image={reference.image} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ReferenceGrid;
