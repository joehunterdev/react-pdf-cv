import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

// import ProfileImage from "../assets/image/cv-square.jpg";
import TitilliumFont from "../assets/fonts/TitilliumWeb-Regular.ttf";
// import BackgroundImage from "../assets/image/background.png";
// import Experience from "./Experience";
import Header from "./Header";
Font.register({
  family: "TitilliumFamily",
  src: TitilliumFont,
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "TitilliumFamily",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "TitilliumFamily",
  },
  page: {
    backgroundColor: "green",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
    fontFamily: "TitilliumFamily",
  },
  pageNumber: {
    position: "TitilliumFamily",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
    fontFamily: "TitilliumFamily",
  },
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
  },
});

// Create Document Component
const PdfDocument = () => (
  <Document>
    {/* <Image src={BackgroundImage} style={styles.pageBackground} /> */}
    <Page size="A4" >
      <Header></Header>

      {/* <About></About>
        <Experience></Experience>
        <Education></Education>
        <Skills></Skills> */}
    </Page>
  </Document>
);

export default PdfDocument;

/*
<Text style={styles.title}>Work Experience</Text>
        <Text style={styles.text}>JUNE 2015 - NOVEMBER 2021</Text>
        <Text style={styles.text}>Web Developer</Text>
        <Text style={styles.text}>CLC World Resorts & Hotels</Text>
        <Text style={styles.text}>
          It was my responsibility to develop online infrastructure within CLC
          World. My projects have included Booking engines; data driven
          dashboards for Reporting, Social media and Email and involvement in
          the creative department’s Media Library. In 2018, I was privileged to
          be the creator of critical business solutions, like REST apis for lead
          actioning the company’s vital data services. At the same time, I
          continued to maintain the large fleet of company marketing sites.
        </Text>
        <Text style={styles.title}>Design:</Text>
        <View style={styles.section}>
          <Text style={styles.title}>Skills:</Text>
          <Text style={styles.text}>- Media Library</Text>
          <Text style={styles.text}>- WP Theming</Text>
          <Text style={styles.text}>- Email Templates</Text>
          <Text style={styles.text}>- UX</Text>
        </View>
        <Text style={styles.title}>Solutions:</Text>
        <Text style={styles.title}>Skills:</Text>
        <Text style={styles.text}>
          <ul>
            <li>Data Dashboards</li>
            <li>Lead capture</li>
            <li>Payment Gateways</li>
            <li>Signups Strategies</li>
            <li>Booking Engines</li>
            <li>WP Plugins</li>
            <li>Transactional email API</li>
          </ul>
        </Text>
        <Text style={styles.title}>Management:</Text>
        <Text style={styles.text}>
          <ul>
            <li>Cloud Deployment</li>
            <li>Git Repo</li>
            <li>Google Analytics (Tag Manager)</li>
            <li>Digital Marketing</li>
            <li>Emarsys (Email Suite)</li>
          </ul>
        </Text>
        <Image style={styles.image} src={ProfileImage} />
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
*/
