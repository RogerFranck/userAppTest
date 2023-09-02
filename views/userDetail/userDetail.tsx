import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import useUserDetail from "./hooks/useUserDetail";
import { OpenURLButton } from "../../components/LinkWeb";
import LoaderContainer from "../../components/LoaderContainer";

export default function UserDetail({ route }: any) {
  const { id } = route.params;
  const { data, isLoading } = useUserDetail({
    id,
  });
  console.log(data);
  return (
    <LoaderContainer loading={isLoading && data === null}>
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: data.data.avatar,
          }}
        />
        <Text style={styles.primaryText}>
          {data.data.first_name} {data.data.last_name}
        </Text>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae et
          repudiandae quae dolorum similique natus! Accusantium corporis neque
          natus perferendis fugiat numquam odit voluptatum nam, ipsam laborum,
          eligendi quos porro.
        </Text>
        <OpenURLButton
          style={[styles.button, styles.textButton]}
          url={`mailto:${data.data.email}`}
        >
          Contactar
        </OpenURLButton>
      </View>
    </LoaderContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  tinyLogo: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  primaryText: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 20,
  },
  button: {
    width: "90%",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "white",
  },
});
