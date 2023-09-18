import { ClinicButtonProps } from "@stores/schema_stores/button/button_store";
import React, { useEffect } from "react";
import { Button, View } from "react-native";

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
