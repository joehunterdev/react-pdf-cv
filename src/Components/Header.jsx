import React from "react";
import { View, StyleSheet, Image, Text, Font } from "@react-pdf/renderer";
import ProfileImage from "../assets/image/cv-square_300x300.jpg";
import headerBackground from "../assets/image/code-bkg.jpg";
import HeaderIcon from "./HeaderIcon";
import { useTranslation } from "react-i18next";
import FacebookIcon from "../assets/image/facebook.png";
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
const Header = () => {
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
            <Text style={styles.headingPrimary}>Joe Hunter</Text>
          </View>
          <View>
            <Text style={styles.headingSecondary}>{t("myProfession")}</Text>
          </View>
          <View style={styles.containerIcons}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <HeaderIcon
                platformName="GitHub"
                url="https://github.com/joehunterdev"
                icon={GitHubIcon}
                imageUrl="https://img.icons8.com/material/200/03f8bd/facebook.png"
              />
              <HeaderIcon
                platformName="Facebook"
                url="https://www.facebook.com/joe.hunter.dev"
                icon={FacebookIcon}
                imageUrl="https://img.icons8.com/material/96/03f8bd/facebook.png"
              />
              <HeaderIcon
                platformName="LinkedIn"
                url="https://www.linkedin.com/in/joseph-hunter-594832220/"
                icon={LinkedInIcon}
                imageUrl="https://img.icons8.com/material/96/03f8bd/linkedin.png"
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Header;
