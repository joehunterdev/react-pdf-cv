import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import {
  PDFViewer,
  Page,
  Document,
  View,
  Font,
  StyleSheet,
  Text,
  Image,
} from "@react-pdf/renderer";
import Header from "../src/Components/Header";
import AboutMe from "../src/Components/AboutMe";
import Experience from "../src/Components/Experience";
// import Content from "../Content";
import TitilliumWebBlack from "./assets/fonts/TitilliumWeb-Black.ttf";
import useHttp from "../src/hooks/use-http";
import DownloadButton from "../src/Components/DownloadButton";
import { useTranslation } from "react-i18next";
import i18n from "../src/util/il8next";
import Education from "../src/Components/Education";
import BackgroundImage from "./assets/image/background.png";
import ProfileImage from "./assets/image/cv-square_300x300.jpg";

import Certificates from "../src/Components/Certificates";
Font.register({
  family: "TitilliumWeb-Black",
  src: TitilliumWebBlack,
});

// Define your styles
const styles = StyleSheet.create({
  // page: {
  //   backgroundColor: "#606060",
  // },
  headingPrimary: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "TitilliumWeb-Black",
  },
  headingSecondary: {
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "TitilliumWeb-SemiBold",
  },

  container: {
    display: "flex",
    position: "absolute",
    width: "100%",
    color: "#fff",
  },
  pageBackgroundContainer: {
    overflow: "hidden",
    position: "absolute",
    height: "850px",
  },
});

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    fetchData(lng); // call fetchData with the new language
  };

  const [experiences, setExperiences] = useState([]);
  const [aboutDescription, setAboutDescription] = useState("");
  const [contactInfo, setContactInfo] = useState([]);
  const [education, setEducation] = useState([]);
  const [certification, setCertification] = useState([]);

  const { isLoading, error, sendRequest: fetchData } = useHttp();

  useEffect(() => {
    const assignData = (data) => {
      console.log(data);
      
      setExperiences(data.experiences);
      setAboutDescription(data.about);
      setContactInfo(data.contactInfo);
      setEducation(data.education);
      setCertification(data.certification[0]);
    };

    const language = i18n.language || "en"; // get the current language
    const url = `https://joehunter.es/api/?lang=${language}`; // construct the URL
    fetchData({ url }, assignData);
  }, [fetchData, i18n.language]); // depend on fetchData and the current language
  
  return (
    <div className="App">
      <div className="container content-center">
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        <button
          className="btn btn-primary"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className="btn btn-primary"
          onClick={() => changeLanguage("es")}
        >
          Español
        </button>
      </div>
      {experiences.length > 0 && (
        <PDFViewer style={{ width: "100%", height: "100vh"}}>
          <Document>
            <Page size="A4" style={{ top: "0px", ...styles.container }} >
              <View style={styles.pageBackgroundContainer}>
                <Image
                  src={BackgroundImage}
                 />
              </View>
              <Header />
              <AboutMe
                aboutDescription={aboutDescription}
                contactInfo={contactInfo}
              />
              <View>
                <Text style={styles.headingPrimary}>
                  {t("professionalExperience")}
                </Text>
              </View>
              <Experience
                period={experiences[0].period}
                title={experiences[0].title}
                company={experiences[0].company}
                description={experiences[0].description}
                summary={experiences[0].summary}
              />
            </Page>
            <Page >
              <View style={styles.pageBackgroundContainer}>
                <Image
                  src={BackgroundImage}
                 />
              </View>
              <Text style={{ color: "black" }}> Page 2 </Text>
              <Experience
                period={experiences[1].period}
                title={experiences[1].title}
                company={experiences[1].company}
                description={experiences[1].description}
                summary={experiences[1].summary}
              />
              <Experience
                period={experiences[2].period}
                title={experiences[2].title}
                company={experiences[2].company}
                description={experiences[2].description}
                summary={experiences[2].summary}
              />
              <Experience
                period={experiences[3].period}
                title={experiences[3].title}
                company={experiences[3].company}
                description={experiences[3].description}
                summary={experiences[3].summary}
              />
              </Page>
              <Page size="A4" style={{ ...styles.container }}>
              <View style={styles.pageBackgroundContainer}>
                <Image
                src={BackgroundImage}
                />
              </View>
              <Experience
                period={experiences[4].period}
                title={experiences[4].title}
                company={experiences[4].company}
                description={experiences[4].description}
                summary={experiences[4].summary}
              />
              <Text style={styles.headingPrimary}>{t("education")}</Text>
              <Education education={education} certification={certification} />
              <Certificates certification={certification} />
            </Page>
          </Document>
        </PDFViewer>
      )}
    </div>
  );
};
export default App;
