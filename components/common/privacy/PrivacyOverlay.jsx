import { useState } from "react";
import styles from "./privacyoverlay.style";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const privacy = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {isShown && (
        <View style={styles.container}>
          <View style={styles.inner}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Privacy Terms</Text>
            </View>
            <ScrollView style={styles.scrollView}>
              <Text>djdjsjsj sksksk</Text>
            </ScrollView>
            <View style={styles.btnGroup}>
              <TouchableOpacity style={styles.btnCancel} onPress={() => {}}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnConfirm}
                onPress={() => setIsShown(false)}
              >
                <Text>Agree</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default privacy;
