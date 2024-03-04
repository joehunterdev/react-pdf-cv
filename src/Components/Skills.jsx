import React from "react";
import { Text, View, Image, StyleSheet, Font } from "@react-pdf/renderer";
import { cleanText } from "../util/utils";
import SoftwareIcon from "../assets/image/monitor.png";
import LanguagesIcon from "../assets/image/quill-pen.png";
import LibrariesIcon from "../assets/image/books.png";
import WorkflowIcon from "../assets/image/sync-settings.png";

import { useTranslation } from "react-i18next";

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
  // fontWeight: 600,
});

const styles = StyleSheet.create({
  body: {
    marginBottom: 5,
    fontFamily: "TitilliumWeb-SemiBold",
    fontWeight: 600,
  },
  containerSkills: {
    margin: 20,


    backgroundColor: "rgba(0, 0, 0, 0.4)",
    fontSize: 12,
    color: "#fff",
  },
  containerCols: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  col: {
    flexGrow: 4,
  },
  containerListHeading: {
    fontSize: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "TitilliumWeb-SemiBold",
    fontWeight: 145,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign:"left"
  },
  icon: {
    width: 18,
    fontWeight: 400,
  },
  listColumnInner: {
    fontSize: 8,
    fontWeight: 400,
    flexDirection: "row",
    alignContent: "flex-start",
    flexWrap: "wrap", 
  },
  containerPositionHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(3, 248, 189, 0.9)",
    fontFamily: "TitilliumWeb-Black",
  },

  button: {
    display: "inline-block",
    // border: "1px solid #fff",
    // borderRadius: 5,
    borderRadius: "0px",
    border: "1px solid #999",
    padding: 2,
    margin: 2,
  },
});

const Skills = ({ skills }) => {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.containerSkills}>
      <View style={styles.containerCols}>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Text>{t("software")}:</Text>
            <Image src={SoftwareIcon} style={styles.icon} />
          </View>
          {skills.software && (
            <View style={styles.listColumnInner}>
              {skills.software.map((item, index) => (
                <Text key={index} style={styles.button}>
                  {item}
                </Text>
              ))}
            </View>
          )}
        </View>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Text>{t("languages")}:</Text>
            <Image src={LanguagesIcon} style={styles.icon} />
          </View>
          {skills.languages && (
            <View style={styles.listColumnInner}>
              {skills.languages.map((item, index) => (
                <Text key={index} style={styles.button}>
                  {item}
                </Text>
              ))}
            </View>
          )}
        </View>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Text>{t("librariesAndFrameworks")}:</Text>
            <Image src={LibrariesIcon} style={styles.icon} />
          </View>
          {skills.librariesAndFrameworks && (
            <View style={styles.listColumnInner}>
              {skills.librariesAndFrameworks.map((item, index) => (
                <Text key={index} style={styles.button}>
                  {item}
                </Text>
              ))}
            </View>
          )}
        </View>
        <View style={styles.col}>
          <View style={styles.containerListHeading}>
            <Text>{t("workflow")}:</Text>
            <Image src={WorkflowIcon} style={styles.icon} />
          </View>
          {skills.workflow && (
            <View style={styles.listColumnInner}>
              {skills.workflow.map((item, index) => (
                <Text key={index} style={styles.button}>
                  {item}
                </Text>
              ))}
            </View>
          )}
        </View>{" "}
        *
      </View>
    </View>
  );
};

export default Skills;
