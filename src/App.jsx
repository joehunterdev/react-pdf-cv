import "./App.css";
import "./index.css";
import { useState, useEffect } from "react";
import useHttp from "./hooks/use-http";
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
import { useTranslation } from "react-i18next";
import i18n from "./util/il8next";
import BackgroundPageOne from "./assets/image/background-large.jpg";
import BackgroundPageTwo from "./assets/image/background-large-p2.jpg";
import ProfileImage from "./assets/image/cv-square_300x300.jpg";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Certificates from "./Components/Certificates";
import TitilliumWebBlack from "./assets/fonts/TitilliumWeb-Black.ttf";
Font.register({
  family: "TitilliumWeb-Black",
  src: TitilliumWebBlack,
});

//Define your styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    width: "100%",
  },
  pageBackgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  pdfViewer: {
    width: "100%",
    height: "100vh",
  },
  page: {
    top: "0px",
    position: "absolute",
    height: "841px",
    weight: "100%",
    backgroundColor: "#606060",
  },
  headingPrimary: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "TitilliumWeb-Black",
  },
  whiteText: {
    color: "#fff",
  },
});

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    fetchData(lng);
  };

  const { isLoading, error, sendRequest: fetchData } = useHttp();
  const [experiences, setExperiences] = useState([]);
  const [aboutDescription, setAboutDescription] = useState("");
  const [contactInfo, setContactInfo] = useState([]);
  const [education, setEducation] = useState([]);
  const [certification, setCertification] = useState([]);

  useEffect(() => {
    const assignData = (data) => {
      setExperiences(data.experiences);
      setAboutDescription(data.about);
      setContactInfo(data.contactDetails);
      setEducation(data.education);
      setCertification(data.certificates[0]);
    };

    const language = i18n.language || "en"; // get the current language
    const url = `${process.env.REACT_APP_API_URL}?lang=${language}`; // construct the URL using environment variable
    fetchData({ url }, assignData);
  }, [fetchData, i18n.language]);

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
      <PDFViewer style={styles.pdfViewer}>
        <Document>
          <Page size="A4" style={{ ...styles.page, ...styles.whiteText }}>
            <View style={styles.pageBackgroundContainer}>
              <Image src={BackgroundPageOne} style={styles.imageBackground} />
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
            {experiences.length > 0 && (
              <Experience
                period={experiences[0].period}
                title={experiences[0].title}
                company={experiences[0].company}
                description={experiences[0].description}
                summary={experiences[0].summary}
              />
            )}
          </Page>
          <Page size="A4" style={{ ...styles.page, ...styles.whiteText }}>
            <View style={styles.pageBackgroundContainer}>
              <Image src={BackgroundPageTwo} style={styles.imageBackground} />
            </View>
            {experiences.slice(1, 4).map((experience, index) => (
              <Experience
                key={index}
                period={experience.period}
                title={experience.title}
                company={experience.company}
                description={experience.description}
                summary={experience.summary}
              />
            ))}
          </Page>
          <Page size="A4" style={{ ...styles.page, ...styles.whiteText, paddingTop:20 }}>
            <View style={styles.pageBackgroundContainer}>
              <Image src={BackgroundPageOne} style={styles.imageBackground} />
            </View>
            {experiences.slice(4, 5).map((experience, index) => (
              <Experience
                key={index}
                period={experience.period}
                title={experience.title}
                company={experience.company}
                description={experience.description}
                summary={experience.summary}
              />
            ))}
            <Text style={styles.headingPrimary}>{t("education")}</Text>
            <Education education={education} certification={certification} />
            <Certificates certification={certification} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};
export default App;
