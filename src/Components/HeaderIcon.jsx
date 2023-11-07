import { Link, Image, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  iconBackgroundCircle: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #03f8bd",
    borderRadius: "75%",
    height: "30px",
    width: "30px",
    zIndex: 9999,
  },
  linkSocial: {
    color: "white",
    textDecoration: "none",
    fontSize: 10,
    marginRight: 3,
    zIndex: 9999,
  },
  iconSocial: { color: "#fff", width: 20, height: 20 },
});
const HeaderIcon = ({ url, imageUrl, platformName, icon }) => {
  return (
    <Link src={url} style={styles.linkSocial}>
      <View style={styles.iconBackgroundCircle}>
        <Image style={styles.iconSocial} src={icon} />
      </View>
    </Link>
  );
};

export default HeaderIcon;
