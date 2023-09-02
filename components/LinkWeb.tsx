import React, { useCallback } from "react";
import { Alert, Button, Linking, Text, TouchableOpacity } from "react-native";

type OpenURLButtonProps = {
  url: string;
  children: string;
  style: any;
};

export const OpenURLButton = ({ url, children, style }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Invalid URl: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity style={style[0]} onPress={handlePress}>
      <Text style={style[1]}> {children} </Text>
    </TouchableOpacity>
  );
};
