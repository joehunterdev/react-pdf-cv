import React from "react";
import { Text, View, Link, StyleSheet, Font } from "@react-pdf/renderer";
import { cleanText } from "../util/utils";
import ContactInfo from "./ContactInfo";
import { useTranslation } from "react-i18next";
 //Primary Bold Font
import TitilliumWebBlack from "../assets/fonts/TitilliumWeb-Black.ttf";

Font.register({
  family: "TitilliumWeb-Black",
  src: TitilliumWebBlack,
});

//Secondary title font
import TitilliumWebSemiBold from "../assets/fonts/TitilliumWeb-SemiBold.ttf";

Font.register({
  family: "TitilliumWeb-SemiBold",
  src: TitilliumWebSemiBold,
});

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    fontSize: 12,
    zIndex: 0
  },

  containerAbout: {
    flex: 2.7, // This will take up 1/3 of the space
    textAlign: "left",
  },

  containerAboutDescription: {
     marginRight: 4,
    padding:4,
  },

  textBody: {
    fontFamily: "TitilliumWeb-SemiBold",
    fontSize: 12,
    fontWeight: "400",
  },
  headingPrimary: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "TitilliumWeb-Black",
  },
  
});

const AboutMe = ({ aboutDescription, contactInfo }) => {

  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.containerAbout}>
        <Text style={styles.headingPrimary}>{t("aboutMe")}</Text>
        <View style={styles.containerAboutDescription}>
          <Text style={styles.textBody}>{cleanText(aboutDescription)}</Text>
        </View>
      </View>
      <ContactInfo contactInfo={contactInfo} />
    </View>
  );
};

export default AboutMe;
