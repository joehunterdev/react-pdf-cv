import React from "react";
import { View, Image, StyleSheet } from "@react-pdf/renderer";
import { getFilenameFromUrl } from "../util/utils";
import Trophy from "../assets/image/trophy.png";
const styles = StyleSheet.create({
  containerCertificates: {
    margin: 10,
    textAlign: "left",
    flexDirection: "row",
  },
  certImageContainer: {
    position: "relative", // set position to relative
    width: "100%",
    padding: 4,
    margin:4,
  },
  certImage: {
    padding:"4px",
    borderStyle:"outset",
    border: "2px solid #03f8bd",
    width: "100%",
  },
  icon: {
    position: "absolute", // set position to absolute
    top: "100%", // center the icon vertically
    left: "100%", // center the icon horizontally
    transform: "translate(-50%, -50%)", // center the icon perfectly
    width: 50, // set the width of the icon
    height: 50, // set the height of the icon
  },
});

const Certificates = ({ certification }) => {
  if (!certification || certification.length === 0) {
    return null;
  }
  return (
    <View style={styles.containerCertificates} wrap={false}>
      {certification.urls.map((cert, index) => (
        <View key={index} style={styles.certImageContainer}>
          {/* <Image
            src={`../src/assets/image/certs/${getFilenameFromUrl(cert)}`}
            style={styles.certImage}
          /> */}
           <Image
            src={cert}
            style={styles.certImage}
          />
          <Image
            // src="https://img.icons8.com/material/200/D8D8D8/trophy.png"
            src={Trophy}
            style={styles.icon}
          />
        </View>
      ))}
    </View>
  );
};

export default Certificates;
