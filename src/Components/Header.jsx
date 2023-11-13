import React from "react";
import { View, StyleSheet, Image, Text, Font } from "@react-pdf/renderer";
import ProfileImage from "../assets/image/cv-square_300x300.jpg";
import headerBackground from "../assets/image/code-bkg.jpg";
import HeaderIcon from "./HeaderIcon";
import { useTranslation } from "react-i18next";
import InternetIcon from "../assets/image/internet.png";
import GitHubIcon from "../assets/image/github.png";
import LinkedInIcon from "../assets/image/linkedin.png";

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

// Define your styles
const styles = StyleSheet.create({
  container: {
    display: "flex",
    position: "absolute",
    width: "100%",
    color: "#fff",
  },
  headerBackgroundContainer: {
    overflow: "hidden",
    height: "200px",
  },
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
  borderCircle: {
    borderRadius: "75%",
  },
  containerHeader: {
    height: "60vh",
    maxHeight: "1050px",
    padding: 0,
    color: "#fff",
    backgroundPosition: "center center",
    marginBottom: "5%",
  },
  profileImageContainer: {
    alignSelf: "center",
    backgroundColor: "#999",
    width: "100px",
    border: "4px solid #999",
    borderRadius: "75%",
    marginTop: "5%",
  },
  profileImage: {
    borderRadius: "75",
  },
  containerIcons: {
    marginTop: 10,
    zIndex: 2,
  },
});

// Define your component
const Header = ({fullName,primaryPosition}) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <View style={styles.headerBackgroundContainer}>
        <Image src={headerBackground} style={{ height: "100%" }} />
      </View>
      <View style={{ top: "0px", ...styles.container }}>
        <View style={styles.profileImageContainer}>
          <Image style={styles.borderCircle} src={ProfileImage} />
        </View>
        <View>
          <View>
            <Text style={styles.headingPrimary}>{fullName}</Text>
          </View>
          <View>
            <Text style={styles.headingSecondary}>{primaryPosition}</Text>
          </View>
          <View style={styles.containerIcons}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <HeaderIcon
                platformName="GitHub"
                url="https://github.com/joehunterdev"
                icon={GitHubIcon}
              />
              <HeaderIcon
                platformName="Website"
                url="https://joehunter.es"
                icon={InternetIcon}
                src="https://img.icons8.com/material/200/03f8bd/internet.png"
              />
              <HeaderIcon
                platformName="LinkedIn"
                url="https://www.linkedin.com/in/joseph-hunter-594832220/"
                icon={LinkedInIcon}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
