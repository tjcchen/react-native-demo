import {
  StyleSheet
} from "react-native";
import {
  SIZES
} from "../../../constants";

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1001,
    width: "100%",
    height: "100%",
    fontFamily: "DMRegular",
  },
  inner: {
    marginTop: "20%",
    marginBottom: "20%",
    marginLeft: "10%",
    marginRight: "10%",
    width: "80%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: "9px",
    display: "flex"
  },
  header: {
    height: "10%",
    lineHeight: "10%",
    width: "100%",
    textAlign: "center",
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: SIZES.large,
  },
  scrollView: {
    flex: 1
  },
  btnGroup: {
    height: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  btnCancel: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 119, 84)",
    borderBottomLeftRadius: "9px"
  },
  btnConfirm: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(144, 238, 144)",
    borderBottomRightRadius: "9px"
  }
});

export default styles;