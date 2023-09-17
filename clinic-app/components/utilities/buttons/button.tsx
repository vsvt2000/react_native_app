import React, { useEffect } from "react";
import { Button, StyleProp, Text, View, ViewStyle } from "react-native";
import { ClinicButtonProps } from "./button_store";

function ClinicButton(
  props: {
    title: string;
    color?: string;
  } & Partial<ClinicButtonProps>
) {
  const { title, color, onPress, style, disabled } = props;
  return (
    <View style={style}>
      <Button
        title={title}
        onPress={onPress}
        disabled={disabled}
        color={color}
      />
    </View>
  );
}

export default ClinicButton;
