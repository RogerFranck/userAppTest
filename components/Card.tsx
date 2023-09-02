import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserInterface } from "../redux/context/userSlice";

interface CardInterface extends UserInterface {
  onPress?: () => void;
}

export default function Card({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onPress,
}: CardInterface) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: avatar,
          }}
        />
        <View style={styles.bodyCard}>
          <Text style={styles.primaryText}>
            {first_name} {last_name}
          </Text>
          <Text style={styles.secondaryText}> {email} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#f9fafb",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  bodyCard: {
    gap: 5,
  },
  primaryText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  secondaryText: {
    color: "gray",
  },
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});
